'use client';

import { useState, useEffect, useCallback } from 'react';
import api from '@/app/lib/fetch-api';

export interface ChatbotSettings {
  _id?: string;
  siteId: string;
  isEnabled: boolean;
  primaryColor: string;
  secondaryColor: string;
  iconUrl?: string;
  apiKey?: string;
  apiProvider: 'openai' | 'anthropic' | 'gemini' | 'custom';
  customApiEndpoint?: string;
  welcomeMessage: string;
  placeholderText: string;
  botName: string;
  position: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
}

interface UseChatbotReturn {
  settings: ChatbotSettings | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useChatbot(siteId: string | undefined): UseChatbotReturn {
  const [settings, setSettings] = useState<ChatbotSettings | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchSettings = useCallback(async () => {
    if (!siteId) {
      setSettings(null);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      console.log('[useChatbot] Fetching settings for siteId:', siteId);
      const response = await api.get(`/chatbot/public/${siteId}`);
      console.log('[useChatbot] Response:', response);
      const data = response.data?.data ?? response.data;
      console.log('[useChatbot] Parsed data:', data);
      console.log('[useChatbot] API Key present:', !!data?.apiKey);
      console.log('[useChatbot] API Key value:', data?.apiKey ? '***' + data.apiKey.slice(-4) : 'undefined');
      // Inject siteId into settings for proxy API calls
      setSettings(data ? { ...data, siteId } : null);
    } catch (err) {
      console.warn('[useChatbot] Failed to load chatbot settings:', err);
      setSettings(null);
      setError(err instanceof Error ? err.message : 'Failed to load chatbot settings');
    } finally {
      setLoading(false);
    }
  }, [siteId]);

  useEffect(() => {
    fetchSettings();
  }, [fetchSettings]);

  return { settings, loading, error, refetch: fetchSettings };
}
