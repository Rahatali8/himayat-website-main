"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useLanguage } from "@/components/language-provider"

export default function ContactPage() {
  const { language, t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: t("officeAddress"),
      details: ["123 Main Street, Gulberg III", "Lahore, Punjab 54000", "Pakistan"],
    },
    {
      icon: Phone,
      title: t("phoneNumbers"),
      details: ["+92 42 1234 5678", "+92 300 1234567", "+92 321 9876543"],
    },
    {
      icon: Mail,
      title: t("emailContact"),
      details: ["info@himayat.org.pk", "support@himayat.org.pk", "donations@himayat.org.pk"],
    },
    {
      icon: Clock,
      title: t("officeHours"),
      details: [
        language === "ur" ? "پیر سے جمعہ: 9:00 - 17:00" : "Mon - Fri: 9:00 AM - 5:00 PM",
        language === "ur" ? "ہفتہ: 9:00 - 13:00" : "Saturday: 9:00 AM - 1:00 PM",
        language === "ur" ? "اتوار: بند" : "Sunday: Closed",
      ],
    },
  ]

  const subjects = [
    { value: "general", label: t("generalInquiry") },
    { value: "donation", label: t("aboutDonations") },
    { value: "programs", label: t("programInformation") },
    { value: "loan", label: t("aboutLoans") },
    { value: "training", label: t("aboutTraining") },
    { value: "complaint", label: t("complaint") },
    { value: "partnership", label: t("partnership") },
    { value: "other", label: t("other") },
  ]

  const faqs = [
    {
      question: t("whatIsHimayat"),
      answer:
        language === "ur"
          ? "حمایت ایک غیر منافع بخش تنظیم ہے جو پاکستان بھر میں پسماندہ کمیونٹیز کی مدد کرتی ہے۔ ہم روزگار، تربیت، مائیکرو فنانس، اور امدادی خدمات فراہم کرتے ہیں۔"
          : "Himāyat is a non-profit organization that helps underprivileged communities across Pakistan. We provide employment, training, microfinance, and aid services.",
    },
    {
      question: t("howToApplyForHelp"),
      answer:
        language === "ur"
          ? "آپ ہماری ویب سائٹ پر 'مدد کے لیے درخواست دیں' کے سیکشن میں جا کر آن لائن درخواست دے سکتے ہیں یا ہمارے دفتر میں آ کر درخواست دے سکتے ہیں۔"
          : "You can apply online through our 'Apply for Help' section on the website or visit our office to submit an application.",
    },
    {
      question: t("whatAreTheLoanTerms"),
      answer:
        language === "ur"
          ? "ہمارے قرض کی شرائط آسان ہیں۔ سود کی شرح 8% سے 15% سالانہ ہے، واپسی کی مدت 6 سے 36 ماہ تک ہے۔ تفصیلات کے لیے ہمارے مائیکرو فنانس سیکشن دیکھیں۔"
          : "Our loan terms are easy. Interest rates range from 8% to 15% annually, repayment period is 6 to 36 months. See our microfinance section for details.",
    },
    {
      question: t("isTrainingFree"),
      answer:
        language === "ur"
          ? "جی ہاں، ہماری تمام تربیتی پروگرام مکمل طور پر مفت ہیں۔ ہم مواد، ٹولز، اور کچھ کورسز میں وظیفہ بھی فراہم کرتے ہیں۔"
          : "Yes, all our training programs are completely free. We also provide materials, tools, and stipends in some courses.",
    },
    {
      question: t("howToDonate"),
      answer:
        language === "ur"
          ? "آپ ہماری ویب سائٹ کے 'عطیہ کریں' سیکشن سے آن لائن عطیہ کر سکتے ہیں یا ہمارے بینک اکاؤنٹ میں براہ راست رقم جمع کر سکتے ہیں۔"
          : "You can donate online through our 'Donate' section on the website or directly deposit money into our bank account.",
    },
    {
      question: t("doYouAcceptZakat"),
      answer:
        language === "ur"
          ? "جی ہاں، ہم زکوٰۃ قبول کرتے ہیں اور اسے مستحق افراد میں تقسیم کرتے ہیں۔ زکوٰۃ کی رقم الگ سے محفوظ رکھی جاتی ہے۔"
          : "Yes, we accept Zakat and distribute it among deserving individuals. Zakat funds are kept separately.",
    },
    {
      question: t("doYouHaveJobPlacement"),
      answer:
        language === "ur"
          ? "جی ہاں، ہمارے پاس جاب پلیسمنٹ سروس ہے۔ تربیت مکمل کرنے کے بعد ہم طلباء کو مناسب ملازمت دلانے میں مدد کرتے ہیں۔"
          : "Yes, we have job placement services. After completing training, we help students find suitable employment.",
    },
    {
      question: t("areThereSeparateProgramsForWomen"),
      answer:
        language === "ur"
          ? "جی ہاں، ہمارے پاس خواتین کے لیے خصوصی پروگرام ہیں جن میں سلائی، کڑھائی، بیوٹی پارلر، اور گھریلو کاروبار کی تربیت شامل ہے۔"
          : "Yes, we have special programs for women including stitching, embroidery, beauty parlor, and home-based business training.",
    },
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">{t("contact")}</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {language === "ur"
              ? "ہم سے رابطہ کریں - ہم آپ کی مدد کے لیے موجود ہیں"
              : "Get in touch with us - We are here to help you"}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <MessageCircle className="h-6 w-6 text-emerald-600 mr-2" />
                  {t("sendMessage")}
                </CardTitle>
                <CardDescription>
                  {language === "ur" ? "ہم 24 گھنٹوں میں آپ کو جواب دیں گے" : "We will respond to you within 24 hours"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-emerald-600 mb-2">{t("messageSent")}</h3>
                    <p className="text-slate-600 dark:text-slate-300">{t("yourMessageHasBeenSentSuccessfully")}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">{t("name")} *</Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder={t("yourName")}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">{t("email")} *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">{t("phoneNumber")}</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="+92 300 0000000"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">{t("subject")} *</Label>
                        <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder={t("selectSubject")} />
                          </SelectTrigger>
                          <SelectContent>
                            {subjects.map((subject) => (
                              <SelectItem key={subject.value} value={subject.value}>
                                {subject.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">{t("message")} *</Label>
                      <Textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder={t("writeYourMessageHere")}
                        rows={5}
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-emerald-600 hover:bg-emerald-700">
                      <Send className="h-5 w-5 mr-2" />
                      {t("sendMessage")}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mr-3">
                      <info.icon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    {info.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-slate-600 dark:text-slate-300 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* WhatsApp */}
            <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-800 dark:text-green-200">WhatsApp</h3>
                    <p className="text-sm text-green-600 dark:text-green-300">+92 300 1234567</p>
                  </div>
                </div>
                <Button
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                  onClick={() => window.open("https://wa.me/923001234567", "_blank")}
                >
                  {t("chatOnWhatsApp")}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center">
              <MapPin className="h-6 w-6 text-emerald-600 mr-2" />
              {t("ourLocation")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full h-96 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-500">{t("googleMapsWillLoadHere")}</p>
                <p className="text-sm text-slate-400 mt-2">123 Main Street, Gulberg III, Lahore</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <div>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              {t("frequentlyAskedQuestions")}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">{t("findAnswersToCommonQuestionsHere")}</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">{t("haveMoreQuestions")}</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6">{t("dontHesitateToContactUs")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700"
              onClick={() => window.open("tel:+924212345678")}
            >
              <Phone className="h-5 w-5 mr-2" />
              {t("callNow")}
            </Button>
            <Button size="lg" variant="outline" onClick={() => window.open("mailto:info@himayat.org.pk")}>
              <Mail className="h-5 w-5 mr-2" />
              {t("sendEmail")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
