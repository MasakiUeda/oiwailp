import { Inter } from "next/font/google"
import Header from "@/components/header"
import Footer from "@/components/footer"
import "./globals.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "フレフレ！",
  description: "移転・開業をサポートする協賛ギフトプラットフォーム",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${inter.className} bg-[#fff]`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

