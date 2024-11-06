// app/faqs/page.tsx
import { getFaqData } from '@/lib/faq/service';
import FAQ from './FAQ';

// Force dynamic rendering
export const dynamic = 'force-dynamic';
// Set revalidation to 0 to check for updates on every request
export const revalidate = 0;

export default async function FaqPage() {
  const { faqs } = await getFaqData();
  return <FAQ faqData={faqs.filter(faq => faq !== null)} />;
}