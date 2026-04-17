'use client';

import React from 'react';
import { useWebBuilder } from './WebBuilderProvider';
import { ChatbotProvider } from './ChatbotProvider';
import { useChatbot } from '@/app/hooks/useChatbot';
import ChatbotWidget from '@/app/components/chatbot/ChatbotWidget';

interface ChatbotProviderWrapperProps {
  children: React.ReactNode;
}

export const ChatbotProviderWrapper: React.FC<ChatbotProviderWrapperProps> = ({ children }) => {
  const { site } = useWebBuilder();
  const { settings } = useChatbot(site?._id);

  // Only render ChatbotWidget if chatbot is enabled in database
  const shouldRenderChatbot = settings?.isEnabled === true;

  return (
    <ChatbotProvider settings={settings}>
      {children}
      {shouldRenderChatbot && <ChatbotWidget />}
    </ChatbotProvider>
  );
};
