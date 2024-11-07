'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function InquirySection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [inquiry, setInquiry] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission logic
    console.log({ name, email, mobile, inquiry })
  }

  return (
    <section id="inquiry" className="relative pb-10 overflow-hidden">
      
      {/* Lined background with fade effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent"></div>
      </div>

      {/* Section お問い合わせ */}
      <div className="pb-6 opacity-0 translate-y-10 transition-all duration-700 ease-out">
        {/* 10 units down / applies transition effects to all changing properties. / slow-to-fast transition */}
        <h2 className="gradient-text font-zen-antique">
          お問い合わせ
        </h2>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            {/* <CardTitle className="text-2xl font-bold text-center">Send us an Inquiry</CardTitle> */}
            <CardTitle className="text-2xl font-bold text-center">よくある質問もご覧ください</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">名前</Label>
                <Input
                  id="name"
                  placeholder="お名前を入力してください"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">メールアドレス</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="メールアドレスを入力してください"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mobile">携帯電話</Label>
                <Input
                  id="mobile"
                  type="tel"
                  placeholder="携帯番号もしくは固定電話を入力してください"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="inquiry">問い合わせ</Label>
                <Textarea
                  id="inquiry"
                  placeholder="お問い合わせ内容の詳細を入力してください"
                  value={inquiry}
                  onChange={(e) => setInquiry(e.target.value)}
                  required
                  className="min-h-[150px]"
                />
              </div>
              <Button type="submit" className="w-full">上記の内容を送信</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}