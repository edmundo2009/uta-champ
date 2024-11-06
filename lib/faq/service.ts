// lib/faq/service.ts
import { client } from "@/tina/__generated__/client";
import { revalidatePath } from 'next/cache';
import { cache } from 'react';

export interface FAQ {
  __typename?: "FaqFaqs";
  question: string;
  answer: string;
  category?: string | null;
}

export interface FAQResponse {
  faqs: (FAQ | null)[];
  categories?: string[];
}

// Using React cache() for server-side data caching
export const getFaqData = cache(async (options: {
  category?: string;
  limit?: number;
} = {}): Promise<FAQResponse> => {
  const { category, limit } = options;

  try {
    const response = await client.queries.faq({
      relativePath: "faqs.md",
    });

    let faqs = response.data.faq?.faqs || [];

    // Apply category filter if specified
    if (category) {
      faqs = faqs.filter(faq => faq?.category === category);
    }

    // Apply limit if specified
    if (limit && limit > 0) {
      faqs = faqs.slice(0, limit);
    }

    // Extract unique categories
    const categories = Array.from(new Set(faqs.map(faq => faq?.category).filter((category): category is string => typeof category === 'string')));

    return { faqs, categories };
  } catch (error) {
    console.error('Error fetching FAQ data:', error);
    throw new Error('Failed to fetch FAQ data');
  }
});

// Utility function to force revalidation
export async function revalidateFAQs() {
  revalidatePath('/faqs');
  revalidatePath('/'); // Also revalidate homepage if FAQs are shown there
}