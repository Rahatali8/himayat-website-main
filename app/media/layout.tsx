"use client"

import type React from "react"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import { ImageIcon, Video, BookOpen, Newspaper } from "lucide-react"

export default function MediaLayout({ children }: { children: React.ReactNode }) {
  const { t } = useLanguage()

  const mediaLinks = [
    { href: "/media/images", label: t("images"), icon: ImageIcon },
    { href: "/media/videos", label: t("videos"), icon: Video },
    { href: "/media/blog", label: t("blog"), icon: BookOpen },
    { href: "/media/news", label: t("news"), icon: Newspaper },
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">{t("media")}</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {t("exploreOurVisualJourney")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          {mediaLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 flex flex-col items-center justify-center">
                  <link.icon className="h-8 w-8 text-emerald-600 mb-2" />
                  <CardTitle className="text-lg">{link.label}</CardTitle>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {children}
      </div>
    </div>
  )
}
