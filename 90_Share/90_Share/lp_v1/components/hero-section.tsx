import Image from "next/image"
import { Button } from "@/components/ui/button"
import Slider from "react-slick"

export default function HeroSection() {
  const heroImages = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%20375-2-1b7PRRAKGfmk36RBlMJyP7Opy5lzO3.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%20375-1-XFPupHx5norUHKflH39xUYDF4eVPPS.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%20375-W1nrmiZKCPDPcgTsgxp234ZOhwLHpN.png",
  ]

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
  }

  return (
    <section className="relative min-h-screen bg-white px-4 pt-8 pb-16 overflow-hidden">
      {/* Star pattern background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%20373-tucvLydhoTDrYMwwe41I2FcPEh1UsX.svg)`,
          backgroundRepeat: "repeat",
          backgroundSize: "490px 820px",
          opacity: 0.35,
        }}
      />

      <div className="container max-w-[520px] mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main content area */}
          <div className="relative mb-2">
            <div className="relative">
              {/* Wreath image */}
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Layer_1-ZQKR1wUt9D8bfl3ZzIZbrY89igmMWt.png"
                alt="フレフレ！の花輪"
                width={500}
                height={500}
                className="w-full h-auto"
                priority
              />

              {/* Center image slider */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square">
                <Slider {...sliderSettings}>
                  {heroImages.map((image, index) => (
                    <div key={index} className="relative aspect-square">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`ヒーロー画像 ${index + 1}`}
                        fill
                        className="object-cover rounded-full"
                        priority
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>

          {/* Main heading */}
          <div className="mb-6">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%201124-UBdyNchBqYuKG9mO36nKK6siuMJMvW.png"
              alt="開店祝いに特別なエールを"
              width={400}
              height={100}
              className="mx-auto"
              priority
            />
          </div>

          {/* Description text */}
          <p className="text-gray-800 text-center text-lg mb-12 leading-relaxed">
            『フレフレ！』は開業をサポートする
            <br />
            協賛ギフトプラットフォームです。
          </p>

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
      </div>
    </section>
  )
}

