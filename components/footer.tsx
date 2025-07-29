"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/components/language-provider"

export function Footer() {
  const { language, t } = useLanguage()

  const quickLinks = [
    { href: "/about", label: t("about") },
    { href: "/apply", label: t("applyForHelp") },
    { href: "/rozgar", label: t("rozgarPrograms") },
    { href: "/training", label: t("vocationalTraining") },
    { href: "/microfinance", label: t("microfinance") },
    { href: "/contact", label: t("contact") },
  ]

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">ح</span>
              </div>
              <span className="font-bold text-xl text-emerald-400">{language === "ur" ? "حمایت" : "Himāyat"}</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">{t("missionText")}</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{t("quickLinks")}</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-slate-300 hover:text-emerald-400 transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{t("followUs")}</h3>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-slate-300 hover:text-emerald-400">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-300 hover:text-emerald-400">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-300 hover:text-emerald-400">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-300 hover:text-emerald-400">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{t("newsletter")}</h3>
            <p className="text-slate-300 text-sm">{t("newsletterText")}</p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Email"
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
              />
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">{t("copyright")}</p>
        </div>
      </div>
    </footer>
  )
}
