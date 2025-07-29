"use client"

import { ArrowRight, Heart, CheckCircle, Lightbulb, Handshake, Newspaper } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"
import Image from "next/image"

const testimonials = [
  {
    text: "I am grateful for the training I received. It has opened up new opportunities for me.",
    name: "John Doe",
    location: "Karachi",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    text: "The food assistance was timely and much needed. Thank you!",
    name: "Jane Smith",
    location: "Lahore",
    rating: 4,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    text: "Your support has been instrumental in my education journey.",
    name: "Ali Khan",
    location: "Islamabad",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
]

export default function HomePage() {
  const { language, t } = useLanguage()

  const stats = [
    { value: "10,000+", label: t("beneficiaries") },
    { value: "120+", label: t("citiesServed") },
    { value: "15,000+", label: t("donors") },
    { value: "8,000+", label: t("womenTrained") },
  ]

  const programs = [
    {
      title: t("rozgarSupport"),
      description: t("rozgarDesc"),
      href: "/rozgar",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: t("vocationalTraining"),
      description: t("vocationalDesc"),
      href: "/training",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: t("microfinance"),
      description: t("microfinanceDesc"),
      href: "/microfinance",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: t("foodAssistance"),
      description: t("foodAssistanceDesc"),
      href: "/apply",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: t("medicalAid"),
      description: t("medicalAidDesc"),
      href: "/apply",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: t("educationalSupport"),
      description: t("educationalSupportDesc"),
      href: "/apply",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: t("womenEmpowerment"),
      description: t("womenEmpowermentDesc"),
      href: "/training",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: t("zakatDistribution"),
      description: t("zakatDistributionDesc"),
      href: "/donate",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  const latestNews = [
    {
      id: 1,
      title: language === "ur" ? "نئی روزگار سکیم کا آغاز" : "New Employment Scheme Launched",
      date: "2024-07-25",
      link: "#",
    },
    {
      id: 2,
      title: language === "ur" ? "ووکیشنل ٹریننگ کے نئے کورسز" : "New Vocational Training Courses",
      date: "2024-07-20",
      link: "#",
    },
    {
      id: 3,
      title: language === "ur" ? "مائیکرو فنانس قرضوں میں اضافہ" : "Increase in Microfinance Loans",
      date: "2024-07-15",
      link: "#",
    },
    {
      id: 4,
      title: language === "ur" ? "رمضان راشن تقسیم مہم" : "Ramadan Ration Distribution Drive",
      date: "2024-07-10",
      link: "#",
    },
  ]

  return (
    <div className="min-h-screen overflow-hidden">
      {/* New Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center text-center">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            {language === "ur"
              ? "اپنے کاروبار کو نئی بلندیوں تک لے جائیں"
              : "Take Your Business to New Heights"}
          </h1>
          <p className="text-xl text-slate-700 dark:text-slate-300 max-w-2xl mb-8">
            {language === "ur"
              ? "ہمایت کے ساتھ آسان قرض، تیز منظوری اور بہترین سپورٹ حاصل کریں"
              : "Get easy loans, fast approval, and top support with Himayat"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/loan-application">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                {language === "ur" ? "اب درخواست دیں" : "Apply Now"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                {language === "ur" ? "مزید معلومات" : "More Information"}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Us / Mission Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              {t("missionTitle")}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">{t("missionText")}</p>
          </div>
          {/* About Us Feature Cards */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 animate-in fade-in slide-in-from-bottom-4">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <img src="/placeholder-user.jpg" alt="Founder" className="h-16 w-16 rounded-full object-cover border-4 border-[#00b8e6] mb-2" />
                <h3 className="text-xl font-bold text-slate-900">{language === "ur" ? "بانی" : "Founder"}</h3>
                <p className="text-slate-600 text-sm">{language === "ur" ? "ہمارے بانی نے معاشرتی بہتری کے لیے بنیاد رکھی" : "Our founder laid the foundation for social betterment."}</p>
              </CardContent>
            </Card>
            <Card className="bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 animate-in fade-in slide-in-from-bottom-4 delay-100">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <img src="/placeholder-logo.png" alt="Vision" className="h-16 w-16 rounded-full object-cover border-4 border-[#00b8e6] mb-2" />
                <h3 className="text-xl font-bold text-slate-900">{language === "ur" ? "ہمارا وژن" : "Our Vision"}</h3>
                <p className="text-slate-600 text-sm">{language === "ur" ? "ایک خوددار اور خوشحال پاکستان کا خواب" : "A vision for a self-reliant and prosperous Pakistan."}</p>
              </CardContent>
            </Card>
            <Card className="bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 animate-in fade-in slide-in-from-bottom-4 delay-200">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <img src="/placeholder.jpg" alt="Team" className="h-16 w-16 rounded-full object-cover border-4 border-[#00b8e6] mb-2" />
                <h3 className="text-xl font-bold text-slate-900">{language === "ur" ? "ہماری ٹیم" : "Our Team"}</h3>
                <p className="text-slate-600 text-sm">{language === "ur" ? "پیشہ ور اور پرعزم افراد کی ٹیم" : "A team of dedicated and professional individuals."}</p>
              </CardContent>
            </Card>
            <Card className="bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 animate-in fade-in slide-in-from-bottom-4 delay-300">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <img src="/placeholder-logo.svg" alt="Impact" className="h-16 w-16 rounded-full object-cover border-4 border-[#00b8e6] mb-2" />
                <h3 className="text-xl font-bold text-slate-900">{language === "ur" ? "ہمارا اثر" : "Our Impact"}</h3>
                <p className="text-slate-600 text-sm">{language === "ur" ? "ہزاروں مستفید افراد اور مثبت تبدیلیاں" : "Thousands of beneficiaries and positive change."}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Vision Section - New Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-1000">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                {language === "ur" ? "ہمارا وژن" : "Our Vision"}
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                {language === "ur"
                  ? "ہم ایک ایسے معاشرے کی تشکیل کے لیے پرعزم ہیں جہاں ہر فرد کو ترقی کے مساوی مواقع میسر ہوں۔ ہمارا مقصد پائیدار ترقی اور خود انحصاری کو فروغ دینا ہے۔"
                  : "We are committed to building a society where every individual has equal opportunities for growth. Our aim is to foster sustainable development and self-reliance."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about">
                  <Button
                    size="lg"
                    className="bg-[#00a3cc] text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                  >
                    {t("learnMoreAboutUs")}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-in fade-in slide-in-from-right-4 duration-1000 delay-200">
              <Card className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 space-y-4 text-center">
                  <CheckCircle className="h-12 w-12 text-[#00a3cc] mx-auto" />
                  <h3 className="text-xl font-bold text-slate-900">{language === "ur" ? "شفافیت" : "Transparency"}</h3>
                  <p className="text-slate-600 text-sm">
                    {language === "ur"
                      ? "ہر قدم پر مکمل شفافیت کو یقینی بنانا"
                      : "Ensuring complete transparency at every step."}
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 space-y-4 text-center">
                  <Lightbulb className="h-12 w-12 text-[#00a3cc] mx-auto" />
                  <h3 className="text-xl font-bold text-slate-900">{language === "ur" ? "جدت" : "Innovation"}</h3>
                  <p className="text-slate-600 text-sm">
                    {language === "ur" ? "نئے اور مؤثر حل تلاش کرنا" : "Seeking new and effective solutions."}
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 space-y-4 text-center">
                  <Handshake className="h-12 w-12 text-[#00a3cc] mx-auto" />
                  <h3 className="text-xl font-bold text-slate-900">{language === "ur" ? "تعاون" : "Collaboration"}</h3>
                  <p className="text-slate-600 text-sm">
                    {language === "ur" ? "مضبوط شراکت داری کے ذریعے کام کرنا" : "Working through strong partnerships."}
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 space-y-4 text-center">
                  <Heart className="h-12 w-12 text-[#00a3cc] mx-auto" />
                  <h3 className="text-xl font-bold text-slate-900">{language === "ur" ? "ہمدردی" : "Compassion"}</h3>
                  <p className="text-slate-600 text-sm">
                    {language === "ur" ? "ضرورت مندوں کے لیے گہری ہمدردی" : "Deep empathy for those in need."}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work / Programs Section (Redesigned) */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              {t("ourWorkTitle")}
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              {language === "ur"
                ? "ہم مختلف شعبوں میں جامع خدمات فراہم کرتے ہیں"
                : "We provide comprehensive services across various sectors"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Link href={program.href} className="block">
                  <div className="relative w-full h-60 overflow-hidden">
                    <Image
                      src={program.image || "/placeholder.svg"}
                      alt={program.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300 flex items-end p-6">
                      <h3 className="text-2xl font-bold text-white relative z-10">{program.title}</h3>
                    </div>
                  </div>
                  <div className="p-6 bg-white">
                    <p className="text-slate-600 mb-4 line-clamp-3">{program.description}</p>
                    <Button variant="link" className="p-0 h-auto text-[#00a3cc] hover:text-[#00a3cc]">
                      {t("learnMore")} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact / Statistics Section with Background Image */}
      <section className="relative py-20 bg-white overflow-hidden">
        <Image
          src="/images/stats-background.png"
          alt="Statistics Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0 z-0 opacity-10"
        />
        {/* Removed gradient background */}
        <div className="container mx-auto px-4 relative z-20">
          <div className="text-center space-y-4 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              {t("ourImpact")}
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              {language === "ur" ? "ہماری کوششوں کے نتائج اعداد و شمار میں" : "The results of our efforts in numbers"}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center space-y-3 group animate-in fade-in slide-in-from-bottom-4 duration-1000"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="space-y-1">
                  <div className="text-4xl md:text-5xl font-bold text-slate-900">
                    {stat.value}
                  </div>
                  <div className="text-lg text-slate-700">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Events / Marquee Section */}
      <section className="py-8 bg-slate-100 border-t border-b border-slate-200 relative overflow-hidden">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-4 flex-shrink-0">
            <Newspaper className="h-6 w-6 text-emerald-600" />
            <span className="font-bold text-lg text-slate-800">{t("latestNews")}</span>
          </div>
          <div className="flex-1 min-w-0 ml-8 marquee-container">
            <div className="marquee-content">
              {latestNews.map((news, index) => (
                <Link
                  key={news.id}
                  href={news.link}
                  className="inline-block mx-8 text-slate-700 hover:text-emerald-600 transition-colors duration-300"
                >
                  <span className="font-medium">{news.title}</span> -{" "}
                  <span className="text-sm text-slate-500">{news.date}</span>
                </Link>
              ))}
              {/* Duplicate content to ensure continuous scroll */}
              {latestNews.map((news, index) => (
                <Link
                  key={`dup-${news.id}`}
                  href={news.link}
                  className="inline-block mx-8 text-slate-700 hover:text-emerald-600 transition-colors duration-300"
                >
                  <span className="font-medium">{news.title}</span> -{" "}
                  <span className="text-sm text-slate-500">{news.date}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex-shrink-0 ml-8">
            <Link href="/media/news">
              <Button
                variant="outline"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors duration-300 bg-transparent"
              >
                {t("viewAllNews")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          {/* Removed decorative gradients */}
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-4 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              {t("successStories")}
            </h2>
            <p className="text-lg text-slate-600">
              {language === "ur"
                ? "ہمارے مستفید افراد کی کامیابی کی کہانیاں"
                : "Success stories from our beneficiaries"}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-1000 hover:scale-105 bg-white/80 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Heart key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-600 italic leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center space-x-3 pt-4 border-t border-slate-100">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-[#00a3cc]">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{testimonial.name}</div>
                      <div className="text-sm text-slate-500">{testimonial.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#00a3cc] text-white relative overflow-hidden">
        {/* Removed all gradient overlays and decorative elements */}
        <div className="container mx-auto px-4 text-center space-y-8 relative z-10">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t("joinUsToday")}</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
              {language === "ur"
                ? "ہمارے ساتھ مل کر پاکستان کو خوددار بنانے میں اپنا کردار ادا کریں"
                : "Play your part in making Pakistan self-reliant by joining our mission"}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Link href="/apply">
              <Button
                size="lg"
                variant="secondary"
                className="px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                {t("applyForHelp")}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            <Link href="/donate">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg bg-transparent shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                {t("donate")}
                <Heart className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
