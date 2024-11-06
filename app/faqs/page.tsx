

// app/faqs/page.tsx
import { getFaqData } from '@/lib/faq/service';
import FAQ from './FAQ';

// Force dynamic rendering
export const dynamic = 'force-dynamic';
// Set revalidation to 0 to check for updates on every request
export const revalidate = 0;

export default async function FaqPage() {
  const { faqs } = await getFaqData();
  return <FAQ faqData={faqs} />;
}



////////////////////////////////////////
// 2nd working version
////////////////////////////////////////
// import { client } from "@/tina/__generated__/client";
// import FAQ from './FAQ';

// async function getFaqData() {
//   try {
//     const faqResponse = await client.queries.faq({
//       relativePath: "faqs.md",
//     });
//     return faqResponse.data.faq;
//   } catch (error) {
//     console.error('Error fetching FAQ data:', error);
//     return { faqs: [] };
//   }
// }

// export const dynamic = 'force-dynamic';
// export const revalidate = 0;

// export default async function FaqPage() {
//   const faqData = await getFaqData();

//   return <FAQ faqData={faqData?.faqs || []} />;
// }


////////////////////////////////////////
// 1st static version
////////////////////////////////////////
// import { client } from "@/tina/__generated__/client";

// async function getFaqData() {
//   try {
//     const faqResponse = await client.queries.faq({
//       relativePath: "faqs.md",
//     });
//     return faqResponse.data.faq;
//   } catch (error) {
//     console.error('Error fetching FAQ data:', error);
//     return { faqs: [] };
//   }
// }

// export const dynamic = 'force-dynamic';
// export const revalidate = 0;

// export default async function FaqPage() {
//   const faqData = await getFaqData();

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
//       <div className="space-y-6">
//         {faqData?.faqs?.map((faq, index) => (
//           <div key={index} className="bg-white p-6 rounded-lg shadow">
//             <h2 className="text-xl font-semibold mb-2">{faq.question}</h2>
//             <p className="text-gray-600">{faq.answer}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

