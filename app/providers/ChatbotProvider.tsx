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

      const userMessage: ChatMessage = {
        id: Date.now().toString(),
        role: 'user',
        content: content.trim(),
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setIsLoading(true);

      try {
        // Use backend proxy for secure API calls (API keys stay on backend)
        const response = await api.post(`/chatbot/public/${settings.siteId}/chat`, {
          message: content,
        });
        const responseText = response.data?.data?.response || 'Sorry, I could not generate a response.';

        const assistantMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: responseText,
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, assistantMessage]);
      } catch (error) {
        console.error('Chatbot API error:', error);
        const errorMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: 'Sorry, I encountered an error. Please try again later.',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, errorMessage]);
      } finally {
        setIsLoading(false);
      }
    },
    [settings]
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

