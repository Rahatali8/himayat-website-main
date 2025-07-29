"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"

export default function ImagesPage() {
  const { language, t } = useLanguage()

  const images = [
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Food Distribution Drive",
      title: language === "ur" ? "راشن تقسیم مہم" : "Food Distribution Drive",
      description:
        language === "ur"
          ? "ضرورت مند خاندانوں میں ماہانہ راشن کی تقسیم"
          : "Monthly ration distribution to needy families",
      date: "2024-01-20",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Skills Training Graduation",
      title: language === "ur" ? "ہنر مندی تربیت کی گریجویشن" : "Skills Training Graduation",
      description:
        language === "ur"
          ? "ہنر مندی تربیت مکمل کرنے والے طلباء کی تقریب"
          : "Ceremony for students completing skills training",
      date: "2023-12-15",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Microfinance Loan Disbursement",
      title: language === "ur" ? "مائیکرو فنانس قرض کی تقسیم" : "Microfinance Loan Disbursement",
      description:
        language === "ur" ? "چھوٹے کاروباروں کے لیے قرضوں کی تقسیم" : "Disbursement of loans for small businesses",
      date: "2023-11-10",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Medical Camp",
      title: language === "ur" ? "طبی کیمپ" : "Medical Camp",
      description:
        language === "ur" ? "مفت طبی چیک اپ اور ادویات کی فراہمی" : "Free medical check-ups and medicine provision",
      date: "2023-10-05",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Educational Support Program",
      title: language === "ur" ? "تعلیمی امدادی پروگرام" : "Educational Support Program",
      description:
        language === "ur"
          ? "بچوں کو کتابیں اور تعلیمی سامان فراہم کرنا"
          : "Providing books and educational supplies to children",
      date: "2023-09-22",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Women Empowerment Workshop",
      title: language === "ur" ? "خواتین کی بااختیاری ورکشاپ" : "Women Empowerment Workshop",
      description: language === "ur" ? "خواتین کے لیے خود انحصاری کی تربیت" : "Self-reliance training for women",
      date: "2023-08-18",
    },
  ]

  return (
    <div className="py-8">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">{t("ourGallery")}</h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">{t("exploreOurVisualJourney")}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative w-full h-48">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardContent className="p-4 space-y-2">
              <CardTitle className="text-lg font-semibold">{image.title}</CardTitle>
              <CardDescription className="text-sm text-slate-600 dark:text-slate-300">
                {image.description}
              </CardDescription>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {t("date")}: {image.date}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
