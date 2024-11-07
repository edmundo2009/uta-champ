// SERVER SIDE
// app/page.tsx
import Navbar from '../components/Navigation';
import { Footer } from '../components/Footer';
import { getFaqData } from '@/lib/faq/service';
import FAQ from './faqs/FAQ';
import HeroComponent from '@/components/Hero';
import FestivalInfo from '@/components/festival-info';
import LineFeed from '@/components/LineFeed';
import QRCodeSection from '@/components/qr-code-section';
import InquirySection from '@/components/inquiry-section';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function HomePage() {
  const { faqs } = await getFaqData({ limit: 100 });

  return (

    <main className="min-h-screen">
    <div className="">
      <Navbar />
    </div>
    
    <section><HeroComponent /></section>
    <section><FestivalInfo /></section>

    <section className="overflow-hidden pb-20 bg-gradient-to-b 
      from-transparent 
      via-blue-100 
      via-purple-200 
      via-blue-100 
      to-transparent 
      bg-[length:100%_1600px] 
      bg-repeat-y
      ">

      <div><QRCodeSection /></div>



        <InquirySection />
      {/* </div> */}
      
      
      {/* <div><InquirySection /></div> */}


      {/* Section よくある質問 */}
      <div className="pb-6 opacity-0 translate-y-10 transition-all duration-700 ease-out">
        {/* 10 units down / applies transition effects to all changing properties. / slow-to-fast transition */}
        <h1 className="gradient-text font-zen-antique">
          よくある質問
        </h1>
      </div>

      {/* FAQ data from tinacms */}
      <FAQ faqData={faqs} />
    </section>


    <div className="hidden md:block">
      <Footer />
    </div>
    </main>
  );
}

