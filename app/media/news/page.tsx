"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { ArrowRight } from "lucide-react"

export default function NewsPage() {
  const { language, t } = useLanguage()

  const newsArticles = [
    {
      id: 1,
      title: language === "ur" ? "حمایت نے نئے روزگار پروگرام کا آغاز کیا" : "Himāyat Launches New Employment Program",
      image: "/placeholder.svg?height=150&width=250",
      date: "2024-01-28",
      source: "Dawn News",
      summary:
        language === "ur"
          ? "حمایت نے آج ایک نئے روزگار پروگرام کا اعلان کیا جس کا مقصد ہزاروں نوجوانوں کو ہنر مند بنانا ہے۔"
          : "Himāyat today announced a new employment program aimed at empowering thousands of youth with skills.",
    },
    {
      id: 2,
      title: language === "ur" ? "اس سہ ماہی میں ریکارڈ عطیات موصول ہوئے" : "Record Donations Received This Quarter",
      image: "/placeholder.svg?height=150&width=250",
      date: "2024-01-20",
      source: "The News International",
      summary:
        language === "ur"
          ? "حمایت کو اس سہ ماہی میں ریکارڈ عطیات موصول ہوئے، جو ہمارے کام پر عوام کے اعتماد کی عکاسی کرتا ہے۔"
          : "Himāyat received record donations this quarter, reflecting the public's trust in our work.",
    },
    {
      id: 3,
      title: language === "ur" ? "خواتین کی بااختیاری کے لیے نئے مراکز" : "New Centers for Women Empowerment",
      image: "/placeholder.svg?height=150&width=250",
      date: "2024-01-15",
      source: "Express Tribune",
      summary:
        language === "ur"
          ? "حمایت نے ملک بھر میں خواتین کی بااختیاری کے لیے پانچ نئے مراکز کھولے۔"
          : "Himāyat opened five new centers across the country for women's empowerment.",
    },
  ]

  return (
    <div className="py-8">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">{t("latestNews")}</h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">{t("stayUpdatedWithOurWork")}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsArticles.map((article) => (
          <Card key={article.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative w-full h-40">
              <Image
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardContent className="p-4 space-y-3">
              <CardTitle className="text-lg font-semibold">{article.title}</CardTitle>
              <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                <span className="mr-2">
                  {t("date")}: {article.date}
                </span>{" "}
                |{" "}
                <span className="ml-2">
                  {t("source")}: {article.source}
                </span>
              </div>
              <CardDescription className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {article.summary}
              </CardDescription>
              <Link href={`/media/news/${article.id}`}>
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
