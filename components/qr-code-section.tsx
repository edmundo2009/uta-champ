import { Card, CardContent } from "@/components/ui/card"
import { Twitter, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function QRCodeSection() {
  return (
    <section className="relative pb-16 overflow-hidden">
      {/* Lined background with fade effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4">
        {/* <h2 className="text-3xl font-bold text-center mb-8">Connect With Us</h2> */}
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {/* Twitter (X) QR Code */}
          <Card className="overflow-hidden transition-all hover:shadow-lg">
            <Link href="#twitter-link" className="block">
              <CardContent className="p-6">
                <div className="aspect-square bg-gray-200 mb-4 flex items-center justify-center relative overflow-hidden group">
                  {/* QR Code Placeholder */}
                  <div className="w-3/4 h-3/4 border-2 border-gray-400 flex items-center justify-center">
                    <span className="text-gray-500 text-lg">QR Code</span>
                  </div>
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Twitter className="w-6 h-6 text-gray-700" />
                  <span className="font-semibold text-gray-700">Follow us on X</span>
                </div>
              </CardContent>
            </Link>
          </Card>

          {/* LINE QR Code */}
          <Card className="overflow-hidden transition-all hover:shadow-lg">
            <Link href="#line-link" className="block">
              <CardContent className="p-6">
                <div className="aspect-square bg-gray-200 mb-4 flex items-center justify-center relative overflow-hidden group">
                  {/* QR Code Placeholder */}
                  <div className="w-3/4 h-3/4 border-2 border-green-400 flex items-center justify-center">
                    <span className="text-green-500 text-lg">QR Code</span>
                  </div>
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                  <span className="font-semibold text-green-600">Add us on LINE</span>
                </div>
              </CardContent>
            </Link>
          </Card>
        </div>
      </div>
    </section>
  )
}