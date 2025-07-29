"use client"

import { DollarSign, TrendingUp, Shield, Users, CheckCircle, ArrowRight, Calculator } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"

export default function MicrofinancePage() {
  const { language, t } = useLanguage()

  const loanTypes = [
    {
      title: language === "ur" ? "کاروباری قرض" : "Business Loan",
      amount: "PKR 10,000 - 100,000",
      duration: language === "ur" ? "6-24 ماہ" : "6-24 months",
      interest: "12% " + (language === "ur" ? "سالانہ" : "annually"),
      description:
        language === "ur" ? "چھوٹے کاروبار شروع کرنے یا بڑھانے کے لیے" : "For starting or expanding small businesses",
      features: [
        language === "ur" ? "آسان اقساط" : "Easy installments",
        language === "ur" ? "کم سود" : "Low interest",
        language === "ur" ? "تیز منظوری" : "Quick approval",
      ],
      icon: "🏪",
    },
    {
      title: language === "ur" ? "زرعی قرض" : "Agriculture Loan",
      amount: "PKR 15,000 - 150,000",
      duration: language === "ur" ? "12-36 ماہ" : "12-36 months",
      interest: "10% " + (language === "ur" ? "سالانہ" : "annually"),
      description: language === "ur" ? "کھیتی باڑی اور مویشی پالنے کے لیے" : "For farming and livestock",
      features: [
        language === "ur" ? "موسمی اقساط" : "Seasonal installments",
        language === "ur" ? "کم سود" : "Low interest",
        language === "ur" ? "لچکدار شرائط" : "Flexible terms",
      ],
      icon: "🌾",
    },
    {
      title: language === "ur" ? "خواتین کا قرض" : "Women's Loan",
      amount: "PKR 5,000 - 75,000",
      duration: language === "ur" ? "6-18 ماہ" : "6-18 months",
      interest: "8% " + (language === "ur" ? "سالانہ" : "annually"),
      description: language === "ur" ? "خواتین کے لیے خصوصی قرض" : "Special loan for women",
      features: [
        language === "ur" ? "کم سود" : "Low interest",
        language === "ur" ? "آسان شرائط" : "Easy terms",
        language === "ur" ? "مفت تربیت" : "Free training",
      ],
      icon: "👩‍💼",
    },
    {
      title: language === "ur" ? "ایمرجنسی قرض" : "Emergency Loan",
      amount: "PKR 3,000 - 25,000",
      duration: language === "ur" ? "3-12 ماہ" : "3-12 months",
      interest: "15% " + (language === "ur" ? "سالانہ" : "annually"),
      description: language === "ur" ? "فوری ضروریات کے لیے" : "For immediate needs",
      features: [
        language === "ur" ? "24 گھنٹے منظوری" : "24-hour approval",
        language === "ur" ? "کم کاغذات" : "Minimal documentation",
        language === "ur" ? "فوری رقم" : "Instant disbursement",
      ],
      icon: "🚨",
    },
  ]

  const process = [
    {
      step: 1,
      title: language === "ur" ? "درخواست دیں" : "Apply",
      description: language === "ur" ? "آن لائن یا دفتر میں جا کر درخواست دیں" : "Apply online or visit our office",
      icon: "📝",
    },
    {
      step: 2,
      title: language === "ur" ? "دستاویزات جمع کریں" : "Submit Documents",
      description:
        language === "ur" ? "ضروری کاغذات اور دستاویزات فراہم کریں" : "Provide required papers and documents",
      icon: "📄",
    },
    {
      step: 3,
      title: language === "ur" ? "تشخیص" : "Assessment",
      description:
        language === "ur" ? "ہماری ٹیم آپ کی درخواست کا جائزہ لے گی" : "Our team will review your application",
      icon: "🔍",
    },
    {
      step: 4,
      title: language === "ur" ? "منظوری" : "Approval",
      description:
        language === "ur"
          ? "منظوری کے بعد رقم آپ کے اکاؤنٹ میں بھیج دی جائے گی"
          : "After approval, amount will be transferred to your account",
      icon: "✅",
    },
  ]

  const successStories = [
    {
      name: language === "ur" ? "محمد علی" : "Muhammad Ali",
      business: language === "ur" ? "کرانہ کی دکان" : "Grocery Store",
      loan: "PKR 50,000",
      result: language === "ur" ? "6 ماہ میں کاروبار دوگنا ہو گیا" : "Business doubled in 6 months",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: language === "ur" ? "فاطمہ بیگم" : "Fatima Begum",
      business: language === "ur" ? "سلائی کا کام" : "Tailoring Work",
      loan: "PKR 25,000",
      result: language === "ur" ? "اب 10 خواتین کو کام دے رہی ہے" : "Now employing 10 women",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: language === "ur" ? "احمد حسن" : "Ahmad Hassan",
      business: language === "ur" ? "مویشی پالنا" : "Livestock",
      loan: "PKR 75,000",
      result: language === "ur" ? "ماہانہ آمدنی 3 گنا بڑھ گئی" : "Monthly income increased 3 times",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const requirements = [
    language === "ur" ? "پاکستانی شہری ہونا" : "Pakistani citizen",
    language === "ur" ? "عمر 18-65 سال" : "Age 18-65 years",
    language === "ur" ? "شناختی کارڈ" : "CNIC",
    language === "ur" ? "بینک اکاؤنٹ" : "Bank account",
    language === "ur" ? "کاروبار کا منصوبہ" : "Business plan",
    language === "ur" ? "ضامن (اختیاری)" : "Guarantor (optional)",
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">{t("microfinance")}</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {language === "ur"
              ? "چھوٹے کاروبار اور ذاتی ضروریات کے لیے آسان قرض"
              : "Easy loans for small businesses and personal needs"}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            {
              number: "5,000+",
              label: language === "ur" ? "قرض دار" : "Borrowers",
              icon: Users,
            },
            {
              number: "PKR 50M+",
              label: language === "ur" ? "تقسیم شدہ رقم" : "Disbursed Amount",
              icon: DollarSign,
            },
            {
              number: "98%",
              label: language === "ur" ? "واپسی کی شرح" : "Repayment Rate",
              icon: TrendingUp,
            },
            {
              number: "24hrs",
              label: language === "ur" ? "منظوری کا وقت" : "Approval Time",
              icon: Shield,
            },
          ].map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white">{stat.number}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Loan Types */}
        <div className="mb-16">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              {language === "ur" ? "قرض کی اقسام" : "Loan Types"}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {loanTypes.map((loan, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-3xl">{loan.icon}</span>
                    <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
                      {loan.interest}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{loan.title}</CardTitle>
                  <CardDescription>{loan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold">{language === "ur" ? "رقم:" : "Amount:"}</span>
                      <p className="text-emerald-600 font-medium">{loan.amount}</p>
                    </div>
                    <div>
                      <span className="font-semibold">{language === "ur" ? "مدت:" : "Duration:"}</span>
                      <p className="text-slate-600 dark:text-slate-300">{loan.duration}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">{language === "ur" ? "خصوصیات:" : "Features:"}</h4>
                    <div className="space-y-1">
                      {loan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link href="/loan-application">
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                      {language === "ur" ? "درخواست دیں" : "Apply Now"}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How it Works */}
        <div className="mb-16">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              {language === "ur" ? "یہ کیسے کام کرتا ہے" : "How It Works"}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <Card key={index} className="text-center relative">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{step.description}</p>
                </CardContent>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-emerald-600" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Requirements */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <CheckCircle className="h-6 w-6 text-emerald-600 mr-2" />
                  {language === "ur" ? "ضروری شرائط" : "Requirements"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {requirements.map((req, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                      <span className="text-slate-700 dark:text-slate-300">{req}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Calculator className="h-6 w-6 text-emerald-600 mr-2" />
                  {language === "ur" ? "قرض کیلکولیٹر" : "Loan Calculator"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-emerald-600">PKR 50,000</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">
                        {language === "ur" ? "قرض کی رقم" : "Loan Amount"}
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center">
                      <div className="font-semibold">PKR 4,500</div>
                      <div className="text-slate-600 dark:text-slate-300">
                        {language === "ur" ? "ماہانہ قسط" : "Monthly Payment"}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold">12 {language === "ur" ? "ماہ" : "months"}</div>
                      <div className="text-slate-600 dark:text-slate-300">{language === "ur" ? "مدت" : "Duration"}</div>
                    </div>
                  </div>
                  <Link href="/loan-application">
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                      {language === "ur" ? "اب درخواست دیں" : "Apply Now"}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              {language === "ur" ? "کامیابی کی کہانیاں" : "Success Stories"}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
                    <img
                      src={story.image || "/placeholder.svg"}
                      alt={story.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{story.name}</h3>
                  <Badge variant="outline" className="mb-2">
                    {story.business}
                  </Badge>
                  <div className="text-emerald-600 font-semibold mb-2">{story.loan}</div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{story.result}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">
            {language === "ur" ? "آج ہی اپنا کاروبار شروع کریں" : "Start Your Business Today"}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            {language === "ur"
              ? "آسان شرائط پر قرض حاصل کریں اور اپنے خوابوں کو حقیقت بنائیں"
              : "Get a loan on easy terms and turn your dreams into reality"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/loan-application">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                {language === "ur" ? "قرض کے لیے درخواست دیں" : "Apply for Loan"}
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                {language === "ur" ? "مزید معلومات" : "More Information"}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
