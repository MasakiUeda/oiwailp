import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  const navLinks = [
    { href: "/contact", label: "お問い合わせ" },
    { href: "/privacy", label: "プライバシーポリシー" },
  ]

  const socialLinks = [
    {
      href: "https://instagram.com",
      icon: <Instagram className="w-6 h-6" />,
      label: "Instagram",
    },
    {
      href: "https://facebook.com",
      icon: <Facebook className="w-6 h-6" />,
      label: "Facebook",
    },
    {
      href: "https://x.com",
      icon: <Twitter className="w-6 h-6" />,
      label: "X (Twitter)",
    },
  ]

  return (
    <footer className="bg-[#333333] text-white px-4 py-12">
      <div className="max-w-[520px] mx-auto">
        {/* Logo and Brand */}
        <div className="mb-12">
          <Link href="/" className="inline-block">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo2-TJejHYTYuQqGmeCo7oZOHNUjBOoCNU.png"
              alt="フレフレ！"
              width={180}
              height={66}
              className="w-[180px] h-[66px]"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="mb-12">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-gray-300 transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Media Section */}
        <div className="mb-12">
          <h2 className="text-xl mb-4">SNS</h2>
          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="hover:text-gray-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-400">© フレフレ！</div>
      </div>
    </footer>
  )
}

