"use client";
import { useEffect } from 'react';
import useScrollAnimation from '@/app/scrollAnimJS';
// import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Calendar, MapPin } from 'lucide-react'

export default function FestivalInfo() {
  useScrollAnimation();
  return (
    <section className="
      pt-12 
      bg-gradient-to-b from-blue-100
      to-white-100
      "
      /* via-indigo-200 */ 
      // data-aos="fade-up"
    >


      
      {/* Section Title: app\scrollAnimJS.tsx with tailwind keyframes and animation class */}
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
          大会情報
        </h2>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Calendar className="w-6 h-6 mr-2 text-purple-600" />
                <h3 className="text-xl font-semibold">開催日時</h3>
              </div>
              <p className="text-lg mb-2">2025年7月19日(土)、20日(日)</p>
              <p className="text-sm text-muted-foreground bg-yellow-100 p-2 rounded">
                次の日が海の日で祝日なので遠方の方も参加しやすい！
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 mr-2 text-blue-600" />
                <h3 className="text-xl font-semibold">開催場所</h3>
              </div>
              <p className="text-lg mb-2">「朝日生命ホール」</p>
              <p className="text-sm text-muted-foreground mb-4">
                新大阪駅から地下鉄で4駅「淀屋橋」駅12番出口に直結
              </p>
              {/* <div className="flex space-x-2">
                <Input placeholder="目的地を入力" className="flex-grow" />
                <Button>経路を検索</Button>
              </div> */}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}