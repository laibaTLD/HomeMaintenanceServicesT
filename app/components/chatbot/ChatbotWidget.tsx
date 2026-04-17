'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useChatbotContext, ChatMessage } from '@/app/providers/ChatbotProvider';
import { MessageCircle, X, Send, Loader2, Sparkles } from 'lucide-react';

export default function ChatbotWidget() {
  const {
    isOpen,
    messages,
    isLoading,
    settings,
    toggleChat,
    closeChat,
    sendMessage,
  } = useChatbotContext();

  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Don't render if chatbot is disabled or no settings
  if (!settings?.isEnabled) {
    return null;
  }

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;
    const message = inputValue;
    setInputValue('');
    await sendMessage(message);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Get position styles based on settings
  const getPositionStyles = () => {
    switch (settings.position) {
      case 'bottom-left':
        return { bottom: '24px', left: '24px' };
      case 'top-right':
        return { top: '24px', right: '24px' };
      case 'top-left':
        return { top: '24px', left: '24px' };
      case 'bottom-right':
      default:
        return { bottom: '24px', right: '80px' };
    }
  };

  const positionStyles = getPositionStyles();
  const isTopPosition = settings.position?.includes('top');

  return (

    <>
     <button
        type="button"
        onClick={toggleChat}
        className="w-14 h-14 fixed bottom-[24px] right-[24px] rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-95 group z-[50]"
        style={{ 
          background: `linear-gradient(135deg, ${settings.primaryColor} 0%, ${settings.secondaryColor} 100%)`,
          boxShadow: `0 8px 32px ${settings.primaryColor}50, 0 4px 8px ${settings.primaryColor}30`,
        }}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {settings.iconUrl ? (
          <img
            src={settings.iconUrl}
            alt={settings.botName}
            className="w-10 h-10 rounded-full object-cover ring-2 ring-white/20"
          />
        ) : (
          <div className="relative">
            <MessageCircle className="w-7 h-7 text-white" />
            <div 
              className="absolute inset-0 w-7 h-7 rounded-full animate-ping opacity-20"
              style={{ backgroundColor: settings.secondaryColor }}
            />
          </div>
        )}
      </button>
    <div
      className={`fixed z-[50] flex flex-col items-end`}
      style={positionStyles}
    >
      {/* Chat Window - Modern Mobile Design */}
      {isOpen && (
        <div
          className="mb-4 w-[300px] rounded-[32px] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300"
          style={{
            background: `linear-gradient(180deg, ${settings.secondaryColor}15 0%, #ffffff 100%)`,
            backdropFilter: 'blur(20px)',
            border: `1px solid ${settings.secondaryColor}40`,
            boxShadow: `0 25px 50px -12px ${settings.primaryColor}30, 0 0 0 1px ${settings.secondaryColor}20`,
          }}
        >
          {/* Header - Glassmorphism Style */}
          <div
            className="px-5 py-4 flex items-center justify-between"
            style={{ 
              background: `linear-gradient(135deg, ${settings.primaryColor} 0%, ${settings.secondaryColor} 100%)`,
            }}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                {settings.iconUrl ? (
                  <img
                    src={settings.iconUrl}
                    alt={settings.botName}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-white/30"
                  />
                ) : (
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center ring-2 ring-white/30"
                    style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
                  >
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                )}
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full ring-2 ring-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-semibold text-sm leading-tight">
                  {settings.botName}
                </span>
                <span className="text-white/70 text-xs">Online</span>
              </div>
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                closeChat();
              }}
              className="p-2 rounded-full hover:bg-white/20 transition-all active:scale-95"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Messages - Modern Bubble Design */}
          <div className="h-[280px] overflow-y-auto px-4 py-4 space-y-4 bg-gradient-to-b from-transparent to-white/50">
            {/* Welcome Message */}
            {messages.length === 0 && (
              <div 
                className="rounded-2xl px-4 py-3 text-sm"
                style={{ 
                  backgroundColor: `${settings.primaryColor}15`,
                  color: settings.primaryColor,
                  border: `1px solid ${settings.primaryColor}20`
                }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span className="font-medium">{settings.botName}</span>
                </div>
                {settings.welcomeMessage}
              </div>
            )}
            {messages.map((msg) => (
              <MessageBubble
                key={msg.id}
                message={msg}
                primaryColor={settings.primaryColor}
                secondaryColor={settings.secondaryColor}
                isUser={msg.role === 'user'}
              />
            ))}
            {isLoading && (
              <div className="flex items-center gap-3 text-gray-500 text-sm pl-2">
                <div 
                  className="flex items-center justify-center w-8 h-8 rounded-full"
                  style={{ backgroundColor: `${settings.primaryColor}15` }}
                >
                  <Loader2 className="w-4 h-4 animate-spin" style={{ color: settings.primaryColor }} />
                </div>
                <span className="text-gray-400">{settings.botName} is typing...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input - Modern Pill Design */}
          <div className="p-4 bg-white border-t border-gray-100/50">
            <div 
              className="flex items-center gap-3 px-4 py-3 rounded-full border-2 transition-all focus-within:shadow-lg"
              style={{ 
                borderColor: `${settings.secondaryColor}40`,
                backgroundColor: '#f8f9fa',
              }}
            >
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={settings.placeholderText}
                className="flex-1 text-sm bg-transparent border-none outline-none placeholder:text-gray-400 text-gray-800"
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim() || isLoading}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
                style={{ 
                  background: `linear-gradient(135deg, ${settings.primaryColor} 0%, ${settings.secondaryColor} 100%)`,
                  boxShadow: `0 4px 14px ${settings.primaryColor}40`,
                }}
              >
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button - Modern Floating Action - Always Bottom Right */}
     
    </div></>
  );
}

// Message Bubble Component
interface MessageBubbleProps {
  message: ChatMessage;
  primaryColor: string;
  secondaryColor: string;
  isUser: boolean;
}

function MessageBubble({ message, primaryColor, secondaryColor, isUser }: MessageBubbleProps) {
  const formatTime = (date: Date) => {
    return new Date(date).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[85%] rounded-[20px] px-4 py-3 ${
          isUser
            ? 'rounded-br-[8px] text-white'
            : 'rounded-bl-[8px] text-gray-800'
        }`}
        style={
          isUser
            ? { 
                background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
                boxShadow: `0 4px 15px ${primaryColor}30`
              }
            : { 
                backgroundColor: '#ffffff',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                border: '1px solid rgba(0,0,0,0.04)'
              }
        }
      >
        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
        <span
          className={`text-[11px] mt-2 block font-medium ${
            isUser ? 'text-white/60' : 'text-gray-400'
          }`}
        >
          {formatTime(message.timestamp)}
        </span>
      </div>
    </div>
  );
}
