"use client"
import { ArrowRight, GraduationCap,Users,School, Stethoscope,ShieldCheck,LifeBuoy,Home, Heart, CheckCircle, Lightbulb, Handshake } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"
import Image from "next/image"
import RecentNews from "@/components/recent-news"

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
                <div className="typing-animation-container">
                  <p className="text-xl text-gray leading-relaxed typing-text">
                    {language === "ur"
                      ? "غریبوں کی مدد، تعلیم اور صحت کے شعبوں میں خدمات"
                      : "Dedicated to providing education and healthcare services."}
                  </p>
                </div>
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
                <div className="hero-circle-lift group absolute left-0 bottom-15 w-72 h-72 rounded-full bg-white border-2 border-darkblue flex items-center justify-center animate-float cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-2 hover:scale-102 hover:shadow-2xl" style={{ marginLeft: '-32px', marginBottom: '-32px' }}>
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
          
          /* Typing animation */
          .typing-animation-container {
            width: 100%;
            overflow: hidden;
          }
          
          .typing-text {
            overflow: hidden;
            border-right: 2px solid #0D6DB7;
            white-space: nowrap;
            display: inline-block;
            width: 0;
            animation: typing 4s steps(50) infinite alternate-reverse;
          }
          
          @keyframes typing {
            0% {
              width: 0;
            }
            100% {
              width: 100%;
            }
          }
        `}</style>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-12">
      {language === "ur" ? "اعداد و شمار" : "Key Statistics"}
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Card 1: Beneficiaries */}
      <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
        <Users className="text-[#00b8e6] w-10 h-10 mb-3" />
        <h3 className="text-3xl font-bold text-gray-800">50,000+</h3>
        <p className="text-gray-600 mt-2 text-center">
          {language === "ur" ? "مستفید افراد" : "Beneficiaries Helped"}
        </p>
      </div>

      {/* Card 2: Schools */}
      <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
        <School className="text-[#00b8e6] w-10 h-10 mb-3" />
        <h3 className="text-3xl font-bold text-gray-800">12</h3>
        <p className="text-gray-600 mt-2 text-center">
          {language === "ur" ? "اسکولز قائم کیے گئے" : "Schools Established"}
        </p>
      </div>

      {/* Card 3: Medical Camps */}
      <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
        <Stethoscope className="text-[#00b8e6] w-10 h-10 mb-3" />
        <h3 className="text-3xl font-bold text-gray-800">75+</h3>
        <p className="text-gray-600 mt-2 text-center">
          {language === "ur" ? "طبی کیمپس" : "Medical Camps Held"}
        </p>
      </div>

      {/* Card 4: Emergency Aid */}
      <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
        <ShieldCheck className="text-[#00b8e6] w-10 h-10 mb-3" />
        <h3 className="text-3xl font-bold text-gray-800">30+</h3>
        <p className="text-gray-600 mt-2 text-center">
          {language === "ur" ? "ایمرجنسی ریلیف" : "Emergency Relief Ops"}
        </p>
      </div>
    </div>
  </div>
</section>





      <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
  <div className="container mx-auto px-8 flex flex-col lg:flex-row items-center gap-12">
    
    {/* Left Side: 6 Images (3 Mission + 3 Vision) */}
    <div className="lg:w-1/2 grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-left-4 duration-1000">
      {/* Mission Images */}
      <img src="/mission-1.jpg" alt="Mission 1" className="w-full h-44 object-cover rounded-xl shadow-md" />
      <img src="/mission-2.jpg" alt="Mission 2" className="w-full h-44 object-cover rounded-xl shadow-md" />
      <img src="/mission-3.jpg" alt="Mission 3" className="w-full h-44 object-cover rounded-xl shadow-md" />
      
      {/* Vision Images */}
      <img src="/vision-1.jpg" alt="Vision 1" className="w-full h-44 object-cover rounded-xl shadow-md" />
      <img src="/vision-2.jpg" alt="Vision 2" className="w-full h-44 object-cover rounded-xl shadow-md" />
      <img src="/vision-3.jpg" alt="Vision 3" className="w-full h-44 object-cover rounded-xl shadow-md" />
    </div>

    {/* Right Side: Mission and Vision Text */}
    <div className={`lg:w-1/2 animate-in fade-in slide-in-from-right-4 duration-1000 ${language === "ur" ? "text-right" : "text-left"}`}>
      
      {/* Mission */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">{language === "ur" ? "ہمارا مشن" : "Our Mission"}</h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-2">
        {language === "ur"
          ? "ہم ایک ایسے معاشرے کے لیے کوشاں ہیں جہاں ہر فرد کو معیاری تعلیم، صحت کی سہولیات اور بنیادی ضروریات حاصل ہوں۔"
          : "We strive for a society where every individual has access to quality education, healthcare, and basic necessities."}
      </p>
      <p className="text-lg text-gray-700 leading-relaxed mb-2">
        {language === "ur"
          ? "ہم محروم طبقات کو بااختیار بنانا چاہتے ہیں تاکہ وہ باعزت زندگی گزار سکیں۔"
          : "We aim to empower the underprivileged so they can live with dignity and self-respect."}
      </p>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        {language === "ur"
          ? "ہماری کاوشیں دیرپا تبدیلی اور معاشرتی بہتری کے لیے وقف ہیں۔"
          : "Our efforts are focused on creating lasting change and community development."}
      </p>

      {/* Mission Icons */}
      <div className="flex flex-wrap gap-5 mb-10 mt-3">
        <div className="flex items-center gap-3">
          <Heart className="text-[#00b8e6]" />
          <span className="text-gray-800 text-base">{language === "ur" ? "فلاحی خدمات" : "Welfare Services"}</span>
        </div>
        <div className="flex items-center gap-3">
          <GraduationCap className="text-[#00b8e6]" />
          <span className="text-gray-800 text-base">{language === "ur" ? "تعلیم" : "Education"}</span>
        </div>
        <div className="flex items-center gap-3">
          <Stethoscope className="text-[#00b8e6]" />
          <span className="text-gray-800 text-base">{language === "ur" ? "صحت" : "Healthcare"}</span>
        </div>
        <div className="flex items-center gap-3">
          <Home className="text-[#00b8e6]" />
          <span className="text-gray-800 text-base">{language === "ur" ? "رہائش" : "Shelter"}</span>
        </div>
        <div className="flex items-center gap-3">
          <LifeBuoy className="text-[#00b8e6]" />
          <span className="text-gray-800 text-base">{language === "ur" ? "ایمرجنسی امداد" : "Emergency Help"}</span>
        </div>
      </div>

      {/* Vision */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">{language === "ur" ? "ہمارا وژن" : "Our Vision"}</h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-2">
        {language === "ur"
          ? "ہم ایک ایسے معاشرے کی تشکیل چاہتے ہیں جہاں ہر شخص ترقی کے مساوی مواقع حاصل کرے۔"
          : "We envision a society where everyone has equal opportunities to grow and thrive."}
      </p>
      <p className="text-lg text-gray-700 leading-relaxed mb-2">
        {language === "ur"
          ? "ہمارا مقصد پائیدار ترقی اور خود انحصاری کو فروغ دینا ہے۔"
          : "Our goal is to promote sustainability and self-reliance."}
      </p>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        {language === "ur"
          ? "ہم جدت، شفافیت اور اجتماعی تعاون کے اصولوں پر عمل کرتے ہوئے معاشرتی بہتری کے لیے کوشاں ہیں۔"
          : "We believe in innovation, transparency, and collective collaboration for social betterment."}
      </p>

      {/* Vision Icons */}
      <div className="flex flex-wrap gap-5 mt-3">
        <div className="flex items-center gap-3">
          <CheckCircle className="text-[#00b8e6]" />
          <span className="text-gray-800 text-base">{language === "ur" ? "شفافیت" : "Transparency"}</span>
        </div>
        <div className="flex items-center gap-3">
          <Lightbulb className="text-[#00b8e6]" />
          <span className="text-gray-800 text-base">{language === "ur" ? "جدت" : "Innovation"}</span>
        </div>
        <div className="flex items-center gap-3">
          <Handshake className="text-[#00b8e6]" />
          <span className="text-gray-800 text-base">{language === "ur" ? "تعاون" : "Collaboration"}</span>
        </div>
        <div className="flex items-center gap-3">
          <Heart className="text-[#00b8e6]" />
          <span className="text-gray-800 text-base">{language === "ur" ? "ہمدردی" : "Compassion"}</span>
        </div>
      </div>
    </div>
  </div>
</section>



      <RecentNews />

      {/* What We Do Section - Saylani Style */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray mb-4">
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
                      fill
                      className="transition-transform duration-500 hover:scale-110 object-cover"
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
            <h2 className="text-3xl md:text-5xl font-bold text-gray mb-4">
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
            <h2 className="text-3xl md:text-5xl font-bold text-gray">
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
            <h2 className="text-3xl md:text-5xl font-bold text-gray mb-6">{t("joinUsToday")}</h2>
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
