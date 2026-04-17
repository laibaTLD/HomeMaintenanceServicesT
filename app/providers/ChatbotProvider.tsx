'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { ChatbotSettings } from '@/app/hooks/useChatbot';
import api from '@/app/lib/fetch-api';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ChatbotContextType {
  isOpen: boolean;
  messages: ChatMessage[];
  isLoading: boolean;
  settings: ChatbotSettings | null;
  toggleChat: () => void;
  openChat: () => void;
  closeChat: () => void;
  sendMessage: (content: string) => Promise<void>;
  clearMessages: () => void;
}

const ChatbotContext = createContext<ChatbotContextType | undefined>(undefined);

export const useChatbotContext = () => {
  const context = useContext(ChatbotContext);
  if (context === undefined) {
    throw new Error('useChatbotContext must be used within a ChatbotProvider');
  }
  return context;
};

interface ChatbotProviderProps {
  children: ReactNode;
  settings: ChatbotSettings | null;
}

export const ChatbotProvider: React.FC<ChatbotProviderProps> = ({ children, settings }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Initialize with welcome message when settings load
  React.useEffect(() => {
    if (settings?.isEnabled && messages.length === 0) {
      setMessages([
        {
          id: 'welcome',
          role: 'assistant',
          content: settings.welcomeMessage,
          timestamp: new Date(),
        },
      ]);
    }
  }, [settings]);

  const toggleChat = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const openChat = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeChat = useCallback(() => {
    setIsOpen(false);
  }, []);

  const clearMessages = useCallback(() => {
    setMessages([]);
  }, []);

  const sendMessage = useCallback(
    async (content: string) => {
      if (!settings || !content.trim()) return;

      console.log('[ChatbotProvider] Settings:', settings);
      console.log('[ChatbotProvider] API Key present:', !!settings.apiKey);
      console.log('[ChatbotProvider] API Key value:', settings.apiKey ? '***' + settings.apiKey.slice(-4) : 'undefined');

      const userMessage: ChatMessage = {
        id: Date.now().toString(),
        role: 'user',
        content: content.trim(),
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setIsLoading(true);

      try {
        // Prepare conversation history for LangGraph
        const conversationHistory = messages.map(msg => ({
          role: msg.role,
          content: msg.content,
        }));

        // Use local LangGraph API
        const requestBody = {
          message: content,
          conversationHistory,
          apiKey: settings.apiKey,
          model: 'gemini-1.5-flash',
          temperature: 0.7,
          systemPrompt: settings.welcomeMessage,
        };
        
        console.log('[ChatbotProvider] Request body (without sensitive data):', {
          ...requestBody,
          apiKey: requestBody.apiKey ? '***' + requestBody.apiKey.slice(-4) : 'undefined',
        });

        const response = await fetch('/api/chatbot/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody),
        });

        const data = await response.json();
        console.log('[ChatbotProvider] API response:', data);

        if (!response.ok) {
          throw new Error(data.error || 'Failed to get response');
        }

        const responseText = data.data?.response || 'Sorry, I could not generate a response.';

        const assistantMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: responseText,
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, assistantMessage]);
      } catch (error) {
        console.error('[ChatbotProvider] Chatbot API error:', error);
        let errorMessage = 'Sorry, I encountered an error. Please try again later.';
        
        if (error instanceof Error) {
          if (error.message.includes('API key')) {
            errorMessage = 'API key is missing or invalid. Please check your chatbot settings.';
          } else if (error.message.includes('rate limit') || error.message.includes('429')) {
            errorMessage = 'You are sending messages too quickly. Please wait a moment.';
          } else if (error.message.includes('network')) {
            errorMessage = 'Network error. Please check your connection and try again.';
          }
        }
        
        const errorChatMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: errorMessage,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, errorChatMessage]);
      } finally {
        setIsLoading(false);
      }
    },
    [settings, messages]
  );

  const contextValue: ChatbotContextType = {
    isOpen,
    messages,
    isLoading,
    settings,
    toggleChat,
    openChat,
    closeChat,
    sendMessage,
    clearMessages,
  };

  return (
    <ChatbotContext.Provider value={contextValue}>
      {children}
    </ChatbotContext.Provider>
  );
};

