"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Menu,
  X,
  Globe,
  ChevronDown,
  Sparkles,
  BarChart3,
  Users,
  Heart,
  ImageIcon,
  Video,
  Newspaper,
  BookOpen,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const navItems = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/apply", label: t("applyForHelp") },
    { href: "/rozgar", label: t("rozgarPrograms") },
    { href: "/training", label: t("vocationalTraining") },
    { href: "/microfinance", label: t("microfinance") },
    { href: "/donate", label: t("donate") },
    { href: "/contact", label: t("contact") },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo with Animation */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                <span className="text-white font-bold text-lg animate-pulse">ح</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce">
                <Sparkles className="w-3 h-3 text-white p-0.5" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-2xl bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                {language === "ur" ? "حمایت" : "Himāyat"}
              </span>
              <span className="text-xs text-slate-500 -mt-1">
                {language === "ur" ? "خوددار پاکستان" : "Self-Reliant Pakistan"}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation with Hover Effects */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="relative text-sm font-medium transition-all duration-300 hover:text-emerald-600 group"
            >
              {t("home")}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/about"
              className="relative text-sm font-medium transition-all duration-300 hover:text-emerald-600 group"
            >
              {t("about")}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* Services Dropdown with Animation */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-sm font-medium hover:text-emerald-600 transition-all duration-300 group"
                >
                  {t("services")}
                  <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="animate-in slide-in-from-top-2 duration-300">
                <DropdownMenuItem asChild className="hover:bg-emerald-50 transition-colors">
                  <Link href="/rozgar">{t("rozgarPrograms")}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-emerald-50 transition-colors">
                  <Link href="/training">{t("vocationalTraining")}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-emerald-50 transition-colors">
                  <Link href="/microfinance">{t("microfinance")}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-emerald-50 transition-colors">
                  <Link href="/apply">{t("foodAssistanceService")}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-emerald-50 transition-colors">
                  <Link href="/apply">{t("medicalAidService")}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-emerald-50 transition-colors">
                  <Link href="/apply">{t("educationalSupportService")}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-emerald-50 transition-colors">
                  <Link href="/training">{t("womenEmpowermentService")}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-emerald-50 transition-colors">
                  <Link href="/donate">{t("zakatDistributionService")}</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Apply Dropdown with Animation */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-sm font-medium hover:text-emerald-600 transition-all duration-300 group"
                >
                  {t("apply")}
                  <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="animate-in slide-in-from-top-2 duration-300">
                <DropdownMenuItem asChild className="hover:bg-emerald-50 transition-colors">
                  <Link href="/apply">{t("applyForHelp")}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-emerald-50 transition-colors">
                  <Link href="/apply-loan">{t("applyForLoan")}</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Media Dropdown with Animation */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-sm font-medium hover:text-emerald-600 transition-all duration-300 group"
                >
                  {t("media")}
                  <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="animate-in slide-in-from-top-2 duration-300">
                <DropdownMenuItem asChild className="hover:bg-emerald-50 transition-colors">
                  <Link href="/media/images" className="flex items-center">
                    <ImageIcon className="h-4 w-4 mr-2" />
                    {t("images")}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-emerald-50 transition-colors">
                  <Link href="/media/videos" className="flex items-center">
                    <Video className="h-4 w-4 mr-2" />
                    {t("videos")}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-emerald-50 transition-colors">
                  <Link href="/media/blog" className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-2" />
                    {t("blog")}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-emerald-50 transition-colors">
                  <Link href="/media/news" className="flex items-center">
                    <Newspaper className="h-4 w-4 mr-2" />
                    {t("news")}
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* User Dashboard */}
            <Link
              href="/user-dashboard"
              className="relative text-sm font-medium transition-all duration-300 hover:text-emerald-600 group flex items-center"
            >
              <BarChart3 className="h-4 w-4 mr-1" />
              {t("dashboard")}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link
              href="/donate"
              className="relative text-sm font-medium transition-all duration-300 hover:text-emerald-600 group"
            >
              {t("donate")}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/contact"
              className="relative text-sm font-medium transition-all duration-300 hover:text-emerald-600 group"
            >
              {t("contact")}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-3">
            {/* Language Toggle with Animation */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-emerald-50 hover:text-emerald-600 transition-all duration-300 hover:scale-110"
                >
                  <Globe className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="animate-in slide-in-from-top-2 duration-300">
                <DropdownMenuItem onClick={() => setLanguage("en")} className="hover:bg-emerald-50">
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("ur")} className="hover:bg-emerald-50">
                  اردو
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* VIPs Dashboard Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <Users className="h-4 w-4 mr-2" />
                  {t("vips")}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="animate-in slide-in-from-top-2 duration-300">
                <DropdownMenuItem asChild className="hover:bg-emerald-50 transition-colors">
                  <Link href="/admin" className="flex items-center">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    {t("adminDashboard")}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-emerald-50 transition-colors">
                  <Link href="/donors-dashboard" className="flex items-center">
                    <Heart className="h-4 w-4 mr-2" />
                    {t("donorsDashboard")}
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-emerald-50 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation with Animation */}
        {isOpen && (
          <div className="md:hidden border-t py-4 animate-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col space-y-3">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium transition-all duration-300 hover:text-emerald-600 hover:bg-emerald-50 px-3 py-2 rounded-lg"
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/user-dashboard"
                className="text-sm font-medium transition-all duration-300 hover:text-emerald-600 hover:bg-emerald-50 px-3 py-2 rounded-lg flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <BarChart3 className="h-4 w-4 mr-2" />
                {t("dashboard")}
              </Link>
              <div className="flex flex-col space-y-2 pl-4">
                <Link
                  href="/media/images"
                  className="text-sm font-medium transition-all duration-300 hover:text-emerald-600 hover:bg-emerald-50 px-3 py-2 rounded-lg flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  <ImageIcon className="h-4 w-4 mr-2" />
                  {t("images")}
                </Link>
                <Link
                  href="/media/videos"
                  className="text-sm font-medium transition-all duration-300 hover:text-emerald-600 hover:bg-emerald-50 px-3 py-2 rounded-lg flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  <Video className="h-4 w-4 mr-2" />
                  {t("videos")}
                </Link>
                <Link
                  href="/media/blog"
                  className="text-sm font-medium transition-all duration-300 hover:text-emerald-600 hover:bg-emerald-50 px-3 py-2 rounded-lg flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  {t("blog")}
                </Link>
                <Link
                  href="/media/news"
                  className="text-sm font-medium transition-all duration-300 hover:text-emerald-600 hover:bg-emerald-50 px-3 py-2 rounded-lg flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  <Newspaper className="h-4 w-4 mr-2" />
                  {t("news")}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
