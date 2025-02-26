import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Gift, HandshakeIcon, Cake } from "lucide-react"

export default function ServiceSection() {
  return (
    <section className="bg-gradient-to-br from-[#FF4B14] to-[#FF8514] px-4 py-16">
      <div className="max-w-[520px] mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-white text-2xl font-bold mb-4">SERVICE</h2>
          <h3 className="text-white text-4xl font-bold mb-6">フレフレ！とは？</h3>
          <p className="text-white text-xl">これまでの「お祝い＝お花」という文化をアップデートします。</p>
        </div>

        {/* Connection Diagram */}
        <div className="bg-white rounded-3xl p-8 mb-12">
          <div className="relative max-w-md mx-auto">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%201138-iOXYkoX7Ae7uMvvjjn4ZC9D22oT94f.png"
              alt="フレフレ！の仕組み"
              width={400}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Feature Cards */}
        <div className="space-y-4">
          <Card className="bg-white/95">
            <CardContent className="flex items-start gap-4 p-6">
              <Gift className="w-16 h-16 text-[#FF4B14] flex-shrink-0" />
              <div>
                <h4 className="font-bold text-xl mb-1">必要なものを選べる自由</h4>
                <p className="text-[#FF4B14] font-bold mb-2">CHOICE</p>
                <p className="text-gray-600">企業や店舗が本当に必要なアイテムを選択可能</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/95">
            <CardContent className="flex items-start gap-4 p-6">
              <HandshakeIcon className="w-16 h-16 text-[#FF4B14] flex-shrink-0" />
              <div>
                <h4 className="font-bold text-xl mb-1">協賛者とのつながり</h4>
                <p className="text-[#FF4B14] font-bold mb-2">COMMUNITY</p>
                <p className="text-gray-600">協賛者との絆を深めるコミュニケーション機能</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/95">
            <CardContent className="flex items-start gap-4 p-6">
              <Cake className="w-16 h-16 text-[#FF4B14] flex-shrink-0" />
              <div>
                <h4 className="font-bold text-xl mb-1">新しいお祝い文化の創造</h4>
                <p className="text-[#FF4B14] font-bold mb-2">CULTURE</p>
                <p className="text-gray-600">実用的で心のこもったお祝いの提案</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

