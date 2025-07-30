"use client"
import { ArrowRight, Heart, CheckCircle, Lightbulb, Handshake} from "lucide-react"
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
      {/* Hero Section - Saylani Style with Animation and Circles */}
      <section className="relative w-full min-h-[85vh] bg-white overflow-hidden flex items-center">
        <div className="container mx-auto px-4 h-full py-12">
          <div className="grid md:grid-cols-2 gap-12 items-center h-full">
            {/* Left Content with Animation */}
            <div className="space-y-8 animate-in fade-in slide-in-from-left-6 duration-1000 ml-10 mb-10">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray">
                  {language === "ur" ? (
                    <span className="word-animation">
                      <span className="word">پاکستان</span>{" "}
                      <span className="word">کی</span>{" "}
                      <span className="word">بہتری</span>{" "}
                      <span className="word">کے</span>{" "}
                      <span className="word">لیے</span>{" "}
                      <span className="word">ہماری</span>{" "}
                      <span className="word">خدمات</span>
                    </span>
                  ) : (
                    <span className="word-animation">
                      <span className="word text-darkblue">Empowering</span>{" "}
                      <span className="word text-lightblue">Lives</span>{" "}
                      <span className="word text-darkblue">Through</span>{" "}
                      <span className="word text-lightblue">Service</span>
                    </span>
                  )}
                </h1>
                <p className="text-xl text-gray leading-relaxed">
                  {language === "ur"
                    ? "غریبوں کی مدد، تعلیم، صحت اور روزگار کے شعبوں میں خدمات"
                    : "Dedicated to providing education, healthcare, and sustainable livelihood opportunities to those in need."}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/donate">
                    <Button size="lg" 
                      className="bg-[#0D6DB7] text-white hover:bg-[#0D6DB7]/90 
                        px-8 py-6 text-lg font-semibold min-w-[200px]
                        shadow-lg hover:shadow-xl transition-all duration-300">
                      {language === "ur" ? "عطیہ دیں" : "Donate Now"}
                      <Heart className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/apply">
                    <Button size="lg" 
                      className="border-2 text-lightblue border-lightblue text-lightblue bg-white hover:bg-blue-200 hover:text-white px-8 py-6 text-lg font-semibold min-w-[200px] shadow-lg hover:shadow-xl transition-all duration-300">
                      {language === "ur" ? "مدد حاصل کریں" : "Get Help"}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            {/* Right Side: Hero Image in Circle + Animated Circles */}
            <div className="relative flex justify-center items-center h-full">
              {/* Animated Background Circles - Distributed across hero section */}
              <div className="absolute inset-0 pointer-events-none z-0">
                {/* Top left */}
                <span className="block rounded-full bg-[#0D6DB7]/10 w-17 h-17 animate-circle-move absolute top-2 left-0"></span>
                {/* Top Center */}
                <span className="block rounded-full bg-[#0D6DB7]/10 w-12 h-12 animate-circle-move2 absolute bottom-120 left-72"></span>
                {/* Top right */}
                <span className="block rounded-full bg-[#8DC63F]/10 w-20 h-20 animate-circle-move3 absolute top-1 right-0"></span>
                {/* Center left */}
                <span className="block rounded-full bg-[#0D6DB7]/20 w-16 h-16 animate-circle-move4 absolute top-1/2 left-10"></span>
                {/* Center right */}
                <span className="block rounded-full bg-[#8DC63F]/20 w-16 h-16 animate-circle-move5 absolute top-1/2 right-16"></span>
                {/* Bottom left */}
                <span className="block rounded-full bg-[#0D6DB7]/10 w-20 h-20 animate-circle-move6 absolute bottom-5 left-16"></span>
                {/* Bottom right */}
                <span className="block rounded-full bg-[#8DC63F]/10 w-24 h-24 animate-circle-move7 absolute bottom-2 right-2"></span>
                {/* Additional floating circles */}
                <span className="block rounded-full bg-[#0D6DB7]/15 w-14 h-14 animate-circle-float absolute top-1/4 left-1/4"></span>
                <span className="block rounded-full bg-[#8DC63F]/15 w-18 h-18 animate-circle-float2 absolute top-3/4 right-1/4"></span>
                <span className="block rounded-full bg-[#0D6DB7]/10 w-10 h-10 animate-circle-float3 absolute top-1/2 left-1/2"></span>
              </div>
              {/* Multiple Hero Images in Circles */}
              <div className="relative z-10 w-[400px] h-[400px] md:w-[480px] md:h-[480px]">
                {/* Large bottom left image */}
                <div className="hero-circle-lift group absolute left-0 bottom-15 w-72 h-72 rounded-full bg-white border-2 border-darkblue flex items-center justify-center animate-float cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-2 hover:scale-102 hover:shadow-2xl" style={{marginLeft: '-32px', marginBottom: '-32px'}}>
                  <Image
                    src="/hero-back.png"
                    alt="Hero Main"
                    fill
                    sizes="(max-width: 480px) 100vw, 220px"
                    className="rounded-full object-cover object-center w-full h-full"
                  />
                </div>
                {/* Top left image */}
                <div className="hero-circle-lift group absolute left-[85px] top-[2px] w-36 h-36 rounded-full bg-white border-2 border-lightblue flex items-center justify-center animate-float delay-200 cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg">
                  <Image
                    src="/hero-back.png"
                    alt="Hero 2"
                    fill
                    sizes="(max-width: 480px) 100vw, 140px"
                    className="rounded-full object-cover object-center w-full h-full"
                  />
                </div>
                {/* Top right image */}
                <div className="hero-circle-lift group absolute right-[10px] top-[40px] w-55 h-55 rounded-full bg-white border-2 border-darkblue shadow-xl flex items-center justify-center animate-float delay-400 cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg">
                  <Image
                    src="/hero-back.png"
                    alt="Hero 3"
                    fill
                    sizes="(max-width: 480px) 100vw, 160px"
                    className="rounded-full object-cover object-center w-full h-full"
                  />
                </div>
                {/* Bottom right small image */}
                <div className="hero-circle-lift group absolute right-[60px] bottom-[50px] w-36 h-36 rounded-full bg-white border-2 border-lightblue flex items-center justify-center animate-float delay-600 cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1 hover:scale-105 hover:shadow-md">
                  <Image
                    src="/hero-back.png"
                    alt="Hero 4"
                    fill
                    sizes="(max-width: 480px) 100vw, 100px"
                    className="rounded-full object-cover object-center w-full h-full"
                  />
                </div>
              </div>
            </div>
        {/* Animated circle keyframes for hero section - moved outside image container */}
        <style jsx>{`
          @keyframes circleMove {
            0% { transform: translateY(0) scale(1); opacity: 0.7; }
            50% { transform: translateY(-20px) scale(1.08); opacity: 1; }
            100% { transform: translateY(0) scale(1); opacity: 0.7; }
          }
          .animate-circle-move {
            animation: circleMove 4s ease-in-out infinite;
          }
          @keyframes circleMove2 {
            0% { transform: translateX(0) scale(1); opacity: 0.6; }
            50% { transform: translateX(20px) scale(1.08); opacity: 1; }
            100% { transform: translateX(0) scale(1); opacity: 0.6; }
          }
          .animate-circle-move2 {
            animation: circleMove2 5s ease-in-out infinite;
          }
          @keyframes circleMove3 {
            0% { transform: translateY(0) scale(1); opacity: 0.8; }
            50% { transform: translateY(15px) scale(1.05); opacity: 1; }
            100% { transform: translateY(0) scale(1); opacity: 0.8; }
          }
          .animate-circle-move3 {
            animation: circleMove3 6s ease-in-out infinite;
          }
          @keyframes circleMove4 {
            0% { transform: translateX(0) scale(1); opacity: 0.5; }
            50% { transform: translateX(-15px) scale(1.05); opacity: 1; }
            100% { transform: translateX(0) scale(1); opacity: 0.5; }
          }
          .animate-circle-move4 {
            animation: circleMove4 7s ease-in-out infinite;
          }
          @keyframes circleMove5 {
            0% { transform: translateY(0) scale(1); opacity: 0.6; }
            50% { transform: translateY(-10px) scale(1.03); opacity: 1; }
            100% { transform: translateY(0) scale(1); opacity: 0.6; }
          }
          .animate-circle-move5 {
            animation: circleMove5 4.5s ease-in-out infinite;
          }
          @keyframes circleMove6 {
            0% { transform: translateX(0) scale(1); opacity: 0.7; }
            50% { transform: translateX(10px) scale(1.03); opacity: 1; }
            100% { transform: translateX(0) scale(1); opacity: 0.7; }
          }
          .animate-circle-move6 {
            animation: circleMove6 5.5s ease-in-out infinite;
          }
          @keyframes circleMove7 {
            0% { transform: translateY(0) scale(1); opacity: 0.8; }
            50% { transform: translateY(10px) scale(1.03); opacity: 1; }
            100% { transform: translateY(0) scale(1); opacity: 0.8; }
          }
          .animate-circle-move7 {
            animation: circleMove7 6.5s ease-in-out infinite;
          }
          
          /* New floating animations */
          @keyframes circleFloat {
            0% { transform: translateY(0) translateX(0) scale(1); opacity: 0.6; }
            25% { transform: translateY(-15px) translateX(10px) scale(1.1); opacity: 1; }
            50% { transform: translateY(-25px) translateX(-5px) scale(1.05); opacity: 0.8; }
            75% { transform: translateY(-10px) translateX(-15px) scale(1.15); opacity: 1; }
            100% { transform: translateY(0) translateX(0) scale(1); opacity: 0.6; }
          }
          .animate-circle-float {
            animation: circleFloat 8s ease-in-out infinite;
          }
          
          @keyframes circleFloat2 {
            0% { transform: translateY(0) translateX(0) scale(1); opacity: 0.5; }
            33% { transform: translateY(-20px) translateX(15px) scale(1.12); opacity: 1; }
            66% { transform: translateY(-30px) translateX(-10px) scale(1.08); opacity: 0.7; }
            100% { transform: translateY(0) translateX(0) scale(1); opacity: 0.5; }
          }
          .animate-circle-float2 {
            animation: circleFloat2 10s ease-in-out infinite;
          }
          
          @keyframes circleFloat3 {
            0% { transform: translateY(0) translateX(0) scale(1); opacity: 0.7; }
            50% { transform: translateY(-12px) translateX(8px) scale(1.06); opacity: 1; }
            100% { transform: translateY(0) translateX(0) scale(1); opacity: 0.7; }
          }
          .animate-circle-float3 {
            animation: circleFloat3 6s ease-in-out infinite;
          }
          
          /* Custom shadow classes for hover effects */
          .hover\\:shadow-3xl:hover {
            box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
          }
          .hover\\:shadow-2xl:hover {
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          }
          .hover\\:shadow-xl:hover {
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          }
          .hover\\:scale-102:hover {
            transform: scale(1.02);
          }
          
          /* Word by word animation */
          .word-animation .word {
            display: inline-block;
            opacity: 0;
            transform: translateY(20px);
            animation: wordFadeIn 0.8s ease-out forwards;
          }
          
          .word-animation .word:nth-child(1) { animation-delay: 0.1s; }
          .word-animation .word:nth-child(3) { animation-delay: 0.2s; }
          .word-animation .word:nth-child(5) { animation-delay: 0.3s; }
          .word-animation .word:nth-child(7) { animation-delay: 0.4s; }
          .word-animation .word:nth-child(9) { animation-delay: 0.5s; }
          .word-animation .word:nth-child(11) { animation-delay: 0.6s; }
          .word-animation .word:nth-child(13) { animation-delay: 0.7s; }
          
          @keyframes wordFadeIn {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
          </div>
        </div>
      </section>

      {/* About Us / Mission Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-3xl md:text-4xl font-bold text-gray">
              {t("missionTitle")}
            </h2>
            <p className="text-lg text-gray leading-relaxed">{t("missionText")}</p>
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
                  <h3 className="text-xl font-bold text-gray">{language === "ur" ? "شفافیت" : "Transparency"}</h3>
                  <p className="text-gray text-sm">
                    {language === "ur"
                      ? "ہر قدم پر مکمل شفافیت کو یقینی بنانا"
                      : "Ensuring complete transparency at every step."}
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 space-y-4 text-center">
                  <Lightbulb className="h-12 w-12 text-[#00a3cc] mx-auto" />
                  <h3 className="text-xl font-bold text-gray">{language === "ur" ? "جدت" : "Innovation"}</h3>
                  <p className="text-gray text-sm">
                    {language === "ur" ? "نئے اور مؤثر حل تلاش کرنا" : "Seeking new and effective solutions."}
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 space-y-4 text-center">
                  <Handshake className="h-12 w-12 text-[#00a3cc] mx-auto" />
                  <h3 className="text-xl font-bold text-gray">{language === "ur" ? "تعاون" : "Collaboration"}</h3>
                  <p className="text-gray text-sm">
                    {language === "ur" ? "مضبوط شراکت داری کے ذریعے کام کرنا" : "Working through strong partnerships."}
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 space-y-4 text-center">
                  <Heart className="h-12 w-12 text-[#00a3cc] mx-auto" />
                  <h3 className="text-xl font-bold text-gray">{language === "ur" ? "ہمدردی" : "Compassion"}</h3>
                  <p className="text-gray text-sm">
                    {language === "ur" ? "ضرورت مندوں کے لیے گہری ہمدردی" : "Deep empathy for those in need."}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section - Saylani Style */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray mb-4">
              {language === "ur" ? "ہم کیا کرتے ہیں" : "What We Do"}
            </h2>
            <div className="w-24 h-1 bg-[#8DC63F] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <Link href={program.href} key={index}>
                <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={program.image || "/placeholder.svg"}
                      alt={program.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-[#0D6DB7] mb-2">{program.title}</h3>
                    <p className="text-sm text-gray line-clamp-2">{program.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section - Saylani Style */}
      <section className="py-16 bg-[#0D6DB7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray mb-4">
              {language === "ur" ? "ہماری کارکردگی" : "Our Impact"}
            </h2>
            <div className="w-24 h-1 bg-[#8DC63F] mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-lg text-gray">{stat.label}</div>
              </div>
            ))}
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray">
              {t("successStories")}
            </h2>
            <p className="text-lg text-gray">
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
                    <div className="font-semibold text-gray">{testimonial.name}</div>
                    <div className="text-sm text-gray">{testimonial.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0D6DB7] text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray mb-6">{t("joinUsToday")}</h2>
            <p className="text-lg text-gray mb-8">
              {language === "ur"
                ? "ہمارے ساتھ مل کر پاکستان کو خوددار بنانے میں اپنا کردار ادا کریں"
                : "Join us in making Pakistan self-reliant"}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/apply">
                <Button
                  size="lg"
                  className="bg-[#8DC63F] hover:bg-[#7AB62F] text-white px-8 py-6 text-lg font-semibold"
                >
                  {t("applyForHelp")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/donate">
                <Button
                  size="lg"
                  className="bg-white text-[#0D6DB7] hover:bg-white/90 px-8 py-6 text-lg font-semibold"
                >
                  {t("donate")}
                  <Heart className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
