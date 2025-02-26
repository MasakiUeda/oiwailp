import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, CreditCard, Layout, HeadphonesIcon } from "lucide-react"

export default function FeatureSection() {
  const features = [
    {
      icon: <BookOpen className="w-16 h-16 text-[#FF4B14]" />,
      title: "豊富なアイテムカタログ",
      subtitle: "ITEM",
      description: "花から設備まで多彩な選択肢",
    },
    {
      icon: <CreditCard className="w-16 h-16 text-[#FF4B14]" />,
      title: "安心の決済システム",
      subtitle: "PAYMENY",
      description: "セキュリティ対策も万全",
    },
    {
      icon: <Layout className="w-16 h-16 text-[#FF4B14]" />,
      title: "簡単操作",
      subtitle: "OPERATION",
      description: "初めても迷わないユーザビリティ",
    },
    {
      icon: <HeadphonesIcon className="w-16 h-16 text-[#FF4B14]" />,
      title: "充実のサポート体制",
      subtitle: "SUPPORT",
      description: "専任スタッフがサポート",
    },
  ]

  return (
    <section className="bg-white px-4 py-16">
      <div className="max-w-[520px] mx-auto">
        {/* Section Header */}
        <h2 className="text-[#FF4B14] text-4xl font-bold mb-4">FEATURE</h2>
        <h3 className="text-gray-800 text-4xl font-bold mb-12">
          お祝いマッチが
          <br />
          選ばれる理由
        </h3>

        {/* Feature Cards */}
        <div className="space-y-4 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="bg-[#FFF5F2]">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="flex-shrink-0">{feature.icon}</div>
                <div>
                  <h4 className="font-bold text-xl mb-1">{feature.title}</h4>
                  <p className="text-[#FF4B14] font-bold mb-2">{feature.subtitle}</p>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 w-4/5 mx-auto">
          <Button className="w-full min-h-[60px] bg-[#FF4B14] hover:bg-[#FF4B14]/90 rounded-full">
            <div className="text-center">
              <div className="text-xl font-bold">無料で始める</div>
              <div className="text-sm">企業・店舗向け</div>
            </div>
          </Button>
          <Button
            variant="outline"
            className="w-full min-h-[60px] text-[#FF4B14] border-[#FF4B14] hover:bg-[#FF4B14]/10 rounded-full"
          >
            <div className="text-center">
              <div className="text-xl font-bold">エールを贈る！</div>
              <div className="text-sm">協賛者向け</div>
            </div>
          </Button>
        </div>
      </div>
    </section>
  )
}

