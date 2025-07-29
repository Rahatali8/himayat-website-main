"use client"

import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function MediaHomePage() {
  const { language, t } = useLanguage()

  return (
    <div className="text-center py-16">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">{t("welcomeToOurMediaCenter")}</h2>
      <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
        {language === "ur"
          ? "ہماری تصاویر، ویڈیوز، بلاگز اور خبروں کے ذریعے ہمارے کام کو دریافت کریں"
          : "Explore our work through our images, videos, blogs, and news."}
      </p>
      <Link href="/media/images">
        <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
          {t("viewDetails")}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
    </div>
  )
}
