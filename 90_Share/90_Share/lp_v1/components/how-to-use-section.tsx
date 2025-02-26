import { Button } from "@/components/ui/button"

export default function HowToUseSection() {
  const steps = [
    {
      number: 1,
      title: "プロジェクト作成",
      description: "店舗の協賛募集ページを作成",
    },
    {
      number: 2,
      title: "協賛を呼びかけ",
      description: "LINEやSNS、メールでお知らせ",
    },
    {
      number: 3,
      title: "アイテム選択",
      description: "集まった協賛金で必要な商品を購入",
    },
    {
      number: 4,
      title: "感謝を伝える",
      description: "協賛者へお礼や特典を提供",
    },
  ]

  return (
    <section className="bg-white px-4 py-16">
      <div className="max-w-[520px] mx-auto">
        {/* Section Header */}
        <h2 className="text-[#FF4B14] text-4xl font-bold mb-4">HOW TO USE</h2>
        <h3 className="text-gray-800 text-4xl font-bold mb-16">
          簡単4ステップで
          <br />
          始めよう！
        </h3>

        {/* Steps */}
        <div className="space-y-8 mb-6">
          {steps.map((step) => (
            <div key={step.number} className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-[#FF4B14] rounded-2xl flex items-center justify-center">
                <span className="text-white text-3xl font-bold">{step.number}</span>
              </div>
              <div className="pt-3">
                <h4 className="text-gray-800 text-2xl font-bold mb-2">{step.title}</h4>
                {step.description && <p className="text-gray-600">{step.description}</p>}
              </div>
            </div>
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

