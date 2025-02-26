import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="w-full bg-white">
      <div className="max-w-[520px] mx-auto px-4 h-20">
        <div className="flex items-center justify-center h-full">
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-JdQScat6raPeEY7bskSg5yuyW15SBF.png"
              alt="フレフレ！"
              width={180}
              height={66}
              className="w-[180px] h-[66px]"
            />
          </Link>
        </div>
      </div>
    </header>
  )
}

