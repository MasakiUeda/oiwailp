import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-[520px]">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">プライバシーポリシー</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <section>
            <h2 className="text-xl font-semibold mb-2">1. 個人情報の収集について</h2>
            <p>当社は、お客様から以下の個人情報を収集する場合があります：</p>
            <ul className="list-disc list-inside">
              <li>氏名</li>
              <li>メールアドレス</li>
              <li>電話番号</li>
              <li>住所</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">2. 個人情報の利用目的</h2>
            <p>収集した個人情報は、以下の目的で利用いたします：</p>
            <ul className="list-disc list-inside">
              <li>サービス提供のため</li>
              <li>お問い合わせ対応のため</li>
              <li>サービス改善のため</li>
              <li>新サービスの開発のため</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">3. 個人情報の第三者提供</h2>
            <p>当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供いたしません。</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">4. 個人情報の管理</h2>
            <p>
              当社は、お客様の個人情報を適切に管理し、不正アクセス、紛失、破壊、改ざん、漏洩などを防ぐため、必要な安全対策を講じます。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">5. お問い合わせ</h2>
            <p>本プライバシーポリシーに関するお問い合わせは、以下の連絡先までお願いいたします。</p>
            <p>メールアドレス：k_shimizu@ti-am.jp</p>
          </section>
        </CardContent>
      </Card>
    </div>
  )
}

