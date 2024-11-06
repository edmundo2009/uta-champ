// lib/faq/hooks.ts
'use client';

import { useState, useEffect } from 'react';
import { FAQ, FAQResponse, getFaqData } from './service';

interface UseFAQsOptions {
  category?: string;
  limit?: number;
  useCaching?: boolean;
}

interface UseFAQsResult {
  faqs: (FAQ | null)[];
  categories: string[];
  isLoading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

export function useFAQs(options?: UseFAQsOptions): UseFAQsResult {
  const [data, setData] = useState<FAQResponse>({ faqs: [], categories: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const result = await getFaqData(options);
      setData(result);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch FAQs'));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [options?.category, options?.limit]);

  return {
    faqs: data.faqs,
    categories: data.categories || [],
    isLoading,
    error,
    refetch: fetchData,
  };
}