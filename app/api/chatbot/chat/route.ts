import { NextRequest, NextResponse } from 'next/server';
import { LangGraphChatbot, ChatbotError } from '@/app/lib/langgraph-chatbot';
import { BaseMessage, HumanMessage, AIMessage } from '@langchain/core/messages';

// Rate limiting - simple in-memory store
const rateLimiter = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 10; // requests per minute
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute in milliseconds

function checkRateLimit(identifier: string): boolean {
  const now = Date.now();
  const record = rateLimiter.get(identifier);

  if (!record || now > record.resetTime) {
    rateLimiter.set(identifier, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT) {
    return false;
  }

  record.count++;
  return true;
}

function getClientIdentifier(request: NextRequest): string {
  // Try to get a unique identifier from the request
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded?.split(',')[0] || request.headers.get('x-real-ip') || 'unknown';
  return ip;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, conversationHistory, apiKey, model, temperature, systemPrompt } = body;

    console.log('[API Route] Received request body:', {
      message,
      apiKey: apiKey ? '***' + apiKey.slice(-4) : 'undefined',
      model,
      temperature,
      hasConversationHistory: !!conversationHistory,
    });

    // Validate required fields
    if (!message) {
      return NextResponse.json(
        { success: false, error: 'Message is required' },
        { status: 400 }
      );
    }

    if (!apiKey) {
      console.error('[API Route] API key is missing');
      return NextResponse.json(
        { success: false, error: 'API key is required' },
        { status: 400 }
      );
    }

    // Rate limiting
    const clientId = getClientIdentifier(request);
    if (!checkRateLimit(clientId)) {
      return NextResponse.json(
        { success: false, error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Validate message
    if (typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: 'Invalid message format' },
        { status: 400 }
      );
    }

    if (message.length > 10000) {
      return NextResponse.json(
        { success: false, error: 'Message is too long (max 10000 characters)' },
        { status: 400 }
      );
    }

    // Parse conversation history if provided
    let history: BaseMessage[] = [];
    if (Array.isArray(conversationHistory)) {
      history = conversationHistory.map((msg: any) => {
        if (msg.role === 'user') {
          return new HumanMessage(msg.content);
        } else if (msg.role === 'assistant') {
          return new AIMessage(msg.content);
        }
        throw new Error('Invalid message role in conversation history');
      });
    }

    // Initialize chatbot
    const chatbot = new LangGraphChatbot({
      apiKey,
      model: model || 'gemini-1.5-flash',
      temperature: temperature || 0.7,
      systemPrompt: systemPrompt,
    });

    // Get response
    const result = await chatbot.chat(message, history);

    if (result.error) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data: {
        response: result.response,
      },
    });

  } catch (error) {
    console.error('Chatbot API error:', error);

    // Handle specific errors
    if (error instanceof ChatbotError) {
      return NextResponse.json(
        { success: false, error: error.message, code: error.code },
        { status: 400 }
      );
    }

    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { success: false, error: 'Invalid JSON in request body' },
        { status: 400 }
      );
    }

    // Generic error
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}

// Handle OPTIONS for CORS preflight
export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    }
  );
}
