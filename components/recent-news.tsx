"use client"

import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const newsData = [
    {
        date: "12 Jul 2025",
        categoryEn: "Disaster Relief",
        categoryUr: "آفات میں امداد",
        titleEn: "Flood Relief Program Reaches Over 10,000 Families",
        titleUr: "سیلاب زدگان کے لیے امدادی پروگرام سے 10,000 خاندان مستفید",
        img: "/recent.back.jpg",
    },
    {
        date: "5 Jul 2025",
        categoryEn: "Inclusive Education",
        categoryUr: "شاملاتی تعلیم",
        titleEn: "Launch of Special Education Initiative in Urban Areas",
        titleUr: "شہری علاقوں میں خصوصی تعلیم کے منصوبے کا آغاز",
        img: "/recent.back.jpg",
    },
    {
        date: "28 Jun 2025",
        categoryEn: "Women Empowerment",
        categoryUr: "خواتین کو بااختیار بنانا",
        titleEn: "Skill Training for 500 Women Completed Successfully",
        titleUr: "500 خواتین کی مہارت کی تربیت مکمل ہو گئی",
        img: "/recent.back.jpg",
    },
    {
        date: "22 Jun 2025",
        categoryEn: "Healthcare",
        categoryUr: "صحت کی دیکھ بھال",
        titleEn: "Mobile Health Units Launched in Remote Villages",
        titleUr: "دور دراز دیہات میں موبائل ہیلتھ یونٹس کا آغاز",
        img: "/recent.back.jpg",
    },
    {
        date: "18 Jun 2025",
        categoryEn: "Child Welfare",
        categoryUr: "بچوں کی فلاح و بہبود",
        titleEn: "Nutrition Awareness Sessions Held in 20 Schools",
        titleUr: "20 اسکولوں میں غذائیت سے متعلق آگاہی سیشنز کا انعقاد",
        img: "/recent.back.jpg",
    },
    {
        date: "29 Jul 2025",
        categoryEn: "Education",
        categoryUr: "تعلیم",
        titleEn: "New Educational Scheme Launched - Thousands of Children to Benefit",
        titleUr: "نئی تعلیمی سکیم کا آغاز - ہزاروں بچوں کو فائدہ",
        img: "/recent.back.jpg",
    },
    {
        date: "20 Jul 2025",
        categoryEn: "Health",
        categoryUr: "صحت",
        titleEn: "Free Medical Camps Setup Across Rural Areas",
        titleUr: "مفت طبی کیمپ کا کامیاب انعقاد",
        img: "/recent.back.jpg",
    },
    {
        date: "15 Jul 2025",
        categoryEn: "Employment",
        categoryUr: "روزگار",
        titleEn: "New Employment Opportunities for Youth",
        titleUr: "نوجوانوں کے لیے روزگار کے نئے مواقع",
        img: "/recent.back.jpg",
    },
    {
        date: "10 Jul 2025",
        categoryEn: "Environment",
        categoryUr: "ماحولیاتی تحفظ",
        titleEn: "Tree Plantation Drive Completed in 100 Schools",
        titleUr: "100 اسکولوں میں شجرکاری مہم مکمل",
        img: "/recent.back.jpg",
    },
    {
        date: "8 Jul 2025",
        categoryEn: "Technology",
        categoryUr: "ٹیکنالوجی",
        titleEn: "Digital Literacy Program Launched for Rural Youth",
        titleUr: "دیہی نوجوانوں کے لیے ڈیجیٹل خواندگی کا پروگرام شروع",
        img: "/recent.back.jpg",
    }
    // ... same newsData array (no changes needed here)
]

export default function RecentNews() {
    const { language } = useLanguage()
    const scrollRef = useRef<HTMLDivElement>(null)

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === "left" ? -350 : 350,
                behavior: "smooth",
            })
        }
    }

    return (
        <section className="relative pb-16 overflow-hidden">
            <div className="relative w-full h-[400px] px-4 md:px-16">
                <div className="w-full h-full overflow-hidden relative">
                    <Image
                        src="/recent.back.jpg"
                        alt="Background"
                        fill
                        className="object-cover custom-blur"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="absolute top-8 left-8 z-10">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-2">
                            {language === "ur" ? "تازہ ترین خبریں" : "Recent News"}
                        </h2>
                        <div className="h-1 w-32 bg-yellow-400"></div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 relative z-10 -mt-54">
                <div className="flex justify-start ml-15 mb-6 gap-4 pl-6">
                    <button
                        onClick={() => scroll("left")}
                        className="flex items-center justify-center bg-yellow-400 shadow-md w-10 h-10 rounded-full hover:bg-yellow-300"
                        aria-label="Previous"
                    >
                        <ChevronLeft className="text-white" />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="flex items-center justify-center bg-yellow-400 shadow-md w-10 h-10 rounded-full hover:bg-yellow-300"
                        aria-label="Next"
                    >
                        <ChevronRight className="text-white" />
                    </button>
                </div>

                <div
                    ref={scrollRef}
                    className="flex gap-6 md:gap-8 overflow-x-auto px-1 scrollbar-hide scroll-smooth"
                >
                    {newsData.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-500 mb-10 max-w-xs w-full flex-shrink-0 group rounded-lg"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <Image
                                    src={item.img}
                                    alt={language === "ur" ? item.titleUr : item.titleEn}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center text-sm text-gray-500 mb-3">
                                    <span>{item.date}</span>
                                    <span className="mx-2">•</span>
                                    <span>
                                        {language === "ur" ? item.categoryUr : item.categoryEn}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                                    {language === "ur" ? item.titleUr : item.titleEn}
                                </h3>
                                <a
                                    href="/media/news"
                                    className="text-[#0D6DB7] font-semibold hover:underline"
                                >
                                    {language === "ur" ? "مزید پڑھیں" : "Read more"}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}









