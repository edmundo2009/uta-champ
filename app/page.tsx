
// // app/page.tsx
// import { client } from "@/tina/__generated__/client";
// import FAQ from './faqs/FAQ';

// // Reuse the getFaqData function
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

// export default async function HomePage() {
//   const faqData = await getFaqData();

//   return (
//     <main className="min-h-screen">
//       <Navigation />
//       <div className='bg-gradient-to-r from-blue-300 to-purple-100
//       overflow-hidden
//       '>
//       {/* Your existing homepage content */}
//       <section className="mb-8 pt-20">
//         <h1 className="text-4xl font-bold mb-4">Welcome to Our Site</h1>
//         {/* Add your other homepage components here */}
//       </section>

//       {/* FAQ Section */}
//       <section className="max-w-4xl mx-auto">
//         <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
//         <FAQ faqData={faqData?.faqs || []} />
//       </section>
//       </div>
//       <Footer />
//     </main>
//   );
// }


//////////////////////////////////////

{/* <Navigation /> */ }
{/* <div>
      <FloatingTwitterFeed
        username="defenceU"
        height={200}
        theme="light"
        component={<Component />}
      />
      </div> */}

{/* <div className="p-4 flex 
          justify-center">
        <TwitterFeed
          username="defenceU" 
          height={400}
          theme="dark"
        />
      </div> */}
/////////////////////////



// SERVER SIDE
// app/page.tsx
import Navbar from '../components/Navigation';
import { Footer } from '../components/Footer';
import { getFaqData } from '@/lib/faq/service';
import FAQ from './faqs/FAQ';
import HeroComponent from '@/components/Hero copy 2';
import FestivalInfo from '@/components/festival-info';
// import TwitterFeed from '@/components/TwitterFeed';
// import FloatingTwitterFeed from '@/components/FloatingTwitterFeed';
import LineFeed from '@/components/LineFeed';
import LandingPage, { useGlobalVisibility, GlobalVisibilityContext, TriggerSection } from '@/components/unused/pulsating-cta';


export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function HomePage() {
  const { faqs } = await getFaqData({ limit: 100 });

  // const globalVisibility = useGlobalVisibility()

  return (

    <main className="min-h-screen">

    {/* <GlobalVisibilityContext.Provider value={globalVisibility}> */}
      <Navbar />

      
      <div><HeroComponent /></div>
      {/* <AosWrapper> */}
      <div><FestivalInfo /></div>

      {/* <NavbarButton>Call to Action</NavbarButton> */}


      <TriggerSection title="Welcome to Our Amazing Product">
        <p className="mb-4">
        </p>
      </TriggerSection>

      <section className="
        bg-gradient-to-b 
        from-transparent 
        via-blue-100 
        via-purple-200 
        via-blue-100 
        to-transparent 
        bg-[length:100%_1600px] 
        bg-repeat-y
        overflow-hidden
        py-20
        ">

      <div>
        <div className="flex 
          justify-center pb-16
          ">
          <LineFeed key={Date.now()} // Force re-render this also did not help
            accountUrl="https://page.line.me/073debcd?oat_referrer=PROFILE&openQrModal=true"
            // accountUrl="https://page.line.me/?accountId=uta_champ"
            height={500}
          />
        </div>
      </div>





        {/* Section Title ご挨拶*/}
        <div className="opacity-0 translate-y-10 transition-all duration-700 ease-out">
          {/* 10 units down / applies transition effects to all changing properties. / slow-to-fast transition */}
          <div className="pb-6">

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
          {/* <Link href="/faqs" className="text-blue-600 hover:text-blue-800 transition-colors" > View All FAQs → </Link> */}
        </div>
        <FAQ faqData={faqs} />
      </section>


      {/* </GlobalVisibilityContext.Provider> */}

      <Footer />
    </main>
  );
}

