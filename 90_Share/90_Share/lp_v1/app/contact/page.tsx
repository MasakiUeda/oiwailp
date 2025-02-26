"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("フォーム送信:", { name, email, message })
    // ここで実際の送信処理を行う
    alert("お問い合わせありがとうございます。メッセージを受け付けました。")
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-[520px]">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">お問い合わせ</CardTitle>
          <CardDescription className="text-center">
            ご質問やご意見がございましたら、以下のフォームよりお問い合わせください。
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                お名前
              </label>
              <Input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                メールアドレス
              </label>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                メッセージ
              </label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="mt-1"
                rows={4}
              />
            </div>
            <Button type="submit" className="w-full bg-[#FF4B14] hover:bg-[#FF4B14]/90">
              送信
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

