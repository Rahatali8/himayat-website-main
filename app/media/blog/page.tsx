"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { ArrowRight } from "lucide-react"

export default function BlogPage() {
  const { language, t } = useLanguage()

  const blogPosts = [
    {
      id: 1,
      title:
        language === "ur" ? "مائیکرو فنانس کے ذریعے خواتین کو بااختیار بنانا" : "Empowering Women Through Microfinance",
      image: "/placeholder.svg?height=200&width=300",
      date: "2024-01-25",
      author: language === "ur" ? "حمایت ٹیم" : "Himāyat Team",
      summary:
        language === "ur"
          ? "دیکھیں کہ کیسے چھوٹے قرضے خواتین کو اپنے کاروبار شروع کرنے اور خود انحصاری حاصل کرنے میں مدد کر رہے ہیں۔"
          : "Discover how small loans are helping women start their own businesses and achieve self-reliance.",
    },
    {
      id: 2,
      title: language === "ur" ? "پاکستان میں ہنر مندی تربیت کا مستقبل" : "The Future of Skills Training in Pakistan",
      image: "/placeholder.svg?height=200&width=300",
      date: "2024-01-18",
      author: language === "ur" ? "ڈاکٹر محمد احمد" : "Dr. Muhammad Ahmad",
      summary:
        language === "ur"
          ? "ہنر مندی کی ترقی کے ذریعے نوجوانوں کے لیے روزگار کے مواقع پیدا کرنے کی ہماری حکمت عملی۔"
          : "Our strategy for creating employment opportunities for youth through skills development.",
    },
    {
      id: 3,
      title: language === "ur" ? "رمضان میں راشن کی تقسیم: ایک اثر" : "Ration Distribution in Ramadan: An Impact",
      image: "/placeholder.svg?height=200&width=300",
      date: "2024-01-10",
      author: language === "ur" ? "فاطمہ خان" : "Fatima Khan",
      summary:
        language === "ur"
          ? "رمضان کے مقدس مہینے میں ہزاروں خاندانوں کو خوراک کی امداد فراہم کرنے کی ہماری کہانی۔"
          : "Our story of providing food assistance to thousands of families during the holy month of Ramadan.",
    },
  ]

  return (
    <div className="py-8">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">{t("ourBlog")}</h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">{t("insightsStoriesUpdates")}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative w-full h-48">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardContent className="p-4 space-y-3">
              <CardTitle className="text-lg font-semibold">{post.title}</CardTitle>
              <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                <span className="mr-2">
                  {t("date")}: {post.date}
                </span>{" "}
                |{" "}
                <span className="ml-2">
                  {t("by")}: {post.author}
                </span>
              </div>
              <CardDescription className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {post.summary}
              </CardDescription>
              <Link href={`/media/blog/${post.id}`}>
                <Button variant="outline" className="w-full mt-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-600">
                  {t("readMore")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
