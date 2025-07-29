"use client"

import { Target, Eye, Award, Calendar } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"

export default function AboutPage() {
  const { language, t } = useLanguage()

  const teamMembers = [
    {
      name: language === "ur" ? "ڈاکٹر محمد احمد" : "Dr. Muhammad Ahmad",
      title: language === "ur" ? "بانی اور صدر" : "Founder & President",
      image: "/placeholder.svg?height=200&width=200",
      description: language === "ur" ? "۲۰ سال کا تجربہ سماجی کام میں" : "20 years of experience in social work",
    },
    {
      name: language === "ur" ? "فاطمہ خان" : "Fatima Khan",
      title: language === "ur" ? "پروگرام ڈائریکٹر" : "Program Director",
      image: "/placeholder.svg?height=200&width=200",
      description: language === "ur" ? "خواتین کی بااختیاری کی ماہر" : "Expert in women empowerment",
    },
    {
      name: language === "ur" ? "علی حسن" : "Ali Hassan",
      title: language === "ur" ? "مالی ڈائریکٹر" : "Finance Director",
      image: "/placeholder.svg?height=200&width=200",
      description: language === "ur" ? "مائیکرو فنانس کا ماہر" : "Microfinance specialist",
    },
    {
      name: language === "ur" ? "عائشہ علی" : "Ayesha Ali",
      title: language === "ur" ? "تربیتی منیجر" : "Training Manager",
      image: "/placeholder.svg?height=200&width=200",
      description: language === "ur" ? "ہنر مندی تربیت کی ماہر" : "Skills training expert",
    },
  ]

  const timeline = [
    {
      year: "2018",
      title: language === "ur" ? "حمایت کا آغاز" : "Himāyat Founded",
      description: language === "ur" ? "لاہور میں پہلا دفتر کھولا گیا" : "First office opened in Lahore",
    },
    {
      year: "2019",
      title: language === "ur" ? "پہلا تربیتی مرکز" : "First Training Center",
      description: language === "ur" ? "۵۰۰ خواتین کو تربیت فراہم کی گئی" : "500 women provided with training",
    },
    {
      year: "2020",
      title: language === "ur" ? "مائیکرو فنانس شروع" : "Microfinance Launch",
      description: language === "ur" ? "۱۰۰۰ چھوٹے قرضے تقسیم کیے گئے" : "1000 small loans distributed",
    },
    {
      year: "2021",
      title: language === "ur" ? "ملک گیر توسیع" : "National Expansion",
      description: language === "ur" ? "۵۰ شہروں میں خدمات شروع" : "Services started in 50 cities",
    },
    {
      year: "2022",
      title: language === "ur" ? "ڈیجیٹل پلیٹ فارم" : "Digital Platform",
      description: language === "ur" ? "آن لائن درخواست کا نظام شروع" : "Online application system launched",
    },
    {
      year: "2024",
      title: language === "ur" ? "۱۰،۰۰۰ مستفید" : "10,000 Beneficiaries",
      description: language === "ur" ? "۱۲۰ شہروں میں خدمات" : "Services in 120 cities",
    },
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">{t("about")}</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {language === "ur"
              ? "حمایت ایک غیر منافع بخش تنظیم ہے جو پاکستان بھر میں پسماندہ کمیونٹیز کی مدد کرتی ہے"
              : "Himāyat is a non-profit organization dedicated to helping underprivileged communities across Pakistan"}
          </p>
        </div>

        {/* Vision, Mission, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <Eye className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle className="text-2xl">{language === "ur" ? "ہماری رؤیت" : "Our Vision"}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {language === "ur"
                  ? "ایک خوددار پاکستان جہاں ہر فرد کو بنیادی ضروریات اور روزگار کے مواقع میسر ہوں"
                  : "A self-reliant Pakistan where every individual has access to basic necessities and employment opportunities"}
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mb-4">
                <Target className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <CardTitle className="text-2xl">{language === "ur" ? "ہمارا مشن" : "Our Mission"}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {language === "ur"
                  ? "ہنر مندی، مائیکرو فنانس، اور امدادی خدمات کے ذریعے پائیدار آمدنی کے مواقع فراہم کرنا"
                  : "Providing sustainable income opportunities through skills development, microfinance, and aid services"}
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <CardTitle className="text-2xl">{language === "ur" ? "ہماری اقدار" : "Our Values"}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {language === "ur"
                  ? "شفافیت، احتساب، انصاف، اور تمام افراد کے ساتھ عزت و احترام"
                  : "Transparency, accountability, justice, and respect for all individuals"}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              {language === "ur" ? "ہماری ٹیم" : "Our Team"}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              {language === "ur"
                ? "تجربہ کار اور محنتی افراد جو تبدیلی لانے کے لیے کام کر رہے ہیں"
                : "Experienced and dedicated individuals working to bring change"}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto w-32 h-32 rounded-full overflow-hidden mb-4">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-emerald-600 dark:text-emerald-400 font-medium">
                    {member.title}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              {language === "ur" ? "ہمارا سفر" : "Our Journey"}
            </h2>
          </div>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-2">
                    <span className="text-2xl font-bold text-emerald-600">{item.year}</span>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
