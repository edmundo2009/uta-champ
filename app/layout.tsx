import './globals.css'  // or '@/app/globals.css' depending on your setup
import { Dela_Gothic_One, Zen_Antique, Cinzel_Decorative } from 'next/font/google'
import type { Metadata } from 'next'
import Script from 'next/script'

const delaGothic = Dela_Gothic_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-dela-gothic',
})

const zenAntique = Zen_Antique({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-zen-antique',
})

const cinzel = Cinzel_Decorative({
  weight: '400', // Use the weights you need
  subsets: ['latin'],
  // weight: ['400', '700'], // Use the weights you need
  variable: '--font-cinzel', // This custom property can be used in CSS
});


export const metadata = {
  title: '全国歌のチャンピオン選手権大会',
  description: 'UTA CHAMP 全国歌のチャンピオン選手権大会',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" 
      className={`
        ${delaGothic.variable} ${zenAntique.variable} ${cinzel.variable}
      `}>
      {/* <body className="flex min-h-screen flex-col overflow-hidden 
        supports-[overflow:clip]:overflow-clip
        "> */}
      <head>
      </head>
      <body>
        <div id="fb-root"></div>
        {children}
      </body>
    </html>
  )
}

