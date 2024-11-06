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

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function HomePage() {
  const { faqs } = await getFaqData({ limit: 100 });

  return (

    <main className="min-h-screen">

      <Navbar />
      
      <section><HeroComponent /></section>
      <section><FestivalInfo /></section>

      <section className="overflow-hidden py-20 bg-gradient-to-b 
        from-transparent 
        via-blue-100 
        via-purple-200 
        via-blue-100 
        to-transparent 
        bg-[length:100%_1600px] 
        bg-repeat-y
        ">

        {/* <div className="flex justify-center pb-16 ">
          <LineFeed key={Date.now()} // Force re-render
            accountUrl="https://page.line.me/073debcd?oat_referrer=PROFILE&openQrModal=true"
            // accountUrl="https://page.line.me/?accountId=uta_champ"
            height={500}
          />
        </div> */}
        <div><QRCodeSection /></div>


        {/* Section よくある質問 */}
        <div className="pb-6 opacity-0 translate-y-10 transition-all duration-700 ease-out">
          {/* 10 units down / applies transition effects to all changing properties. / slow-to-fast transition */}

          <h2 className="
            text-center 
            text-4xl 
            md:text-5xl
            pb-5 
            animate-[gradient_6s_linear_infinite] 
            bg-[linear-gradient(to_right,theme(colors.gray.900),theme(colors.indigo.400),theme(colors.gray.900),theme(colors.indigo.600),theme(colors.gray.900))] 
            bg-[length:200%_auto] 
            bg-clip-text text-transparent
            font-zen-antique
          ">
            {/* <CTAArrow title="よくある質問" navButtonId="cta-button" /> */}
            よくある質問
          </h2>
        </div>

        {/* FAQ data from tinacms */}
        <FAQ faqData={faqs} />
      </section>


      {/* </GlobalVisibilityContext.Provider> */}

      <Footer />
    </main>
  );
}

