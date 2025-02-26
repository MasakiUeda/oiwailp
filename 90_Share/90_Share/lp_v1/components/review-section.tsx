import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import Slider from "react-slick"

export default function ReviewSection() {
  const companyReviews = [
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mask%20group-2.jpg-ov7KcDnf1Z5lAWmkQkGVdtcd89BBKd.jpeg",
      company: "コトリの森 coffee 様",
      comment:
        "たくさんのお花を置ける場所がなかったので、備品や消耗品を選べたのが嬉しかった！お礼の連絡も簡単に出来ました。",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mask%20group.jpg-RIvv4jBpW1p6MZUNv96SKhvtvGjIYi.jpeg",
      company: "レストラン - ソレイユ 様",
      comment:
        "お花をたくさん頂くので、お返しやお礼の管理に困っていました。「フレフレ」は自分で好きな物が選べるし、お礼リストの管理がしやすく助かりました。",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mask%20group-1.jpg-jhFKxPCHfLZQXq5ZXfLY2CVYc9gBgw.jpeg",
      company: "和の灯 様",
      comment:
        "多様なアイテムから選べる自由度が高く、本当に必要なものを揃えることができました。サポート体制も充実していて安心でした。",
    },
  ]

  const sponsorReviews = [
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mask%20group.jpg-LGkzR4SNYBMZkwkZELqnykfYUoPfc0.jpeg",
      name: "コバヤシ 様",
      comment:
        "新しいビジネスの立ち上げを応援できて嬉しかったです。お店のオープン後も関係が続いていて、素晴らしい繋がりができました。",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mask%20group-2.jpg-HwFkXZ2fD0MuenzDWrba0GAIg29fos.jpeg",
      name: "イシダ 様",
      comment:
        "簡単な操作で協賛ができ、自分の支援がどのように役立ったのかも分かりやすかったです。また参加したいと思います。",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mask%20group-1.jpg-O7D9GZFapjTBv0ocv4J3Jp9jchBp3d.jpeg",
      name: "ヤマモト 様",
      comment: "地域の新しいお店を応援する良い機会になりました。お礼のメッセージも嬉しかったです。",
    },
  ]

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000,
    padding: "0 20px 0 0",
  }

  return (
    <section className="bg-[#FFF5F2] px-4 py-16">
      <div className="max-w-[520px] mx-auto">
        {/* Company Reviews */}
        <div className="mb-16">
          <h2 className="text-[#FF4B14] text-4xl font-bold mb-4">REVIEW</h2>
          <h3 className="text-3xl font-bold mb-8">導入企業の声</h3>
          <div className="px-[-0px]">
            <Slider {...sliderSettings}>
              {companyReviews.map((review, index) => (
                <div key={index} className="px-2">
                  <Card className="overflow-hidden h-full">
                    <CardContent className="p-0 h-full">
                      <div className="flex flex-col h-full">
                        <div className="aspect-[4/3] relative">
                          <Image
                            src={review.image || "/placeholder.svg"}
                            alt={`${review.company}の開店祝いのお花`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-6 flex-grow">
                          <h4 className="font-bold text-xl mb-3">{review.company}</h4>
                          <p className="text-gray-600">{review.comment}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Sponsor Reviews */}
        <div>
          <h3 className="text-3xl font-bold mb-8">協賛者の声</h3>
          <div className="px-[-20px]">
            <Slider {...sliderSettings}>
              {sponsorReviews.map((review, index) => (
                <div key={index} className="px-2">
                  <Card className="h-full">
                    <CardContent className="flex items-start gap-4 p-6 h-full">
                      <div className="relative w-20 h-20 flex-shrink-0">
                        <Image
                          src={review.image || "/placeholder.svg"}
                          alt={`${review.name}のプロフィール写真`}
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-bold text-xl mb-3">{review.name}</h4>
                        <p className="text-gray-600">{review.comment}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}

