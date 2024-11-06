import './globals.css'  // or '@/app/globals.css' 
import {  Zen_Antique, Cinzel_Decorative } from 'next/font/google'

const zenAntique = Zen_Antique({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-zen-antique',
  preload: true,
})

const cinzel = Cinzel_Decorative({
  weight: '400', // weight: ['400', '700'], // Use the weights you need
  subsets: ['latin'],
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
        ${zenAntique.variable} ${cinzel.variable}
      `}>
      <head></head>
      <body>
        {children}
      </body>
    </html>
  )
}

