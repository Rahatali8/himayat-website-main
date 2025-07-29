"use client"

import { useState } from "react"
import { GraduationCap, Clock, Users, Award, Star, ChevronRight, BookOpen } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "@/components/language-provider"

export default function TrainingPage() {
  const { language, t } = useLanguage()

  const categories = [
    {
      id: "it",
      name: language === "ur" ? "انفارمیشن ٹیکنالوجی" : "Information Technology",
      icon: "💻",
      courses: [
        {
          title: language === "ur" ? "ویب ڈیولپمنٹ" : "Web Development",
          duration: language === "ur" ? "6 ماہ" : "6 months",
          level: language === "ur" ? "ابتدائی" : "Beginner",
          students: 150,
          rating: 4.8,
          price: "Free",
          description:
            language === "ur"
              ? "HTML, CSS, JavaScript اور React کی مکمل تربیت"
              : "Complete training in HTML, CSS, JavaScript and React",
          instructor: language === "ur" ? "احمد علی" : "Ahmad Ali",
          features: [
            language === "ur" ? "لائیو پروجیکٹس" : "Live Projects",
            language === "ur" ? "جاب پلیسمنٹ" : "Job Placement",
            language === "ur" ? "سرٹیفکیٹ" : "Certificate",
          ],
        },
        {
          title: language === "ur" ? "گرافک ڈیزائن" : "Graphic Design",
          duration: language === "ur" ? "4 ماہ" : "4 months",
          level: language === "ur" ? "ابتدائی" : "Beginner",
          students: 120,
          rating: 4.7,
          price: "Free",
          description:
            language === "ur"
              ? "Photoshop, Illustrator اور CorelDraw کی تربیت"
              : "Training in Photoshop, Illustrator and CorelDraw",
          instructor: language === "ur" ? "فاطمہ خان" : "Fatima Khan",
          features: [
            language === "ur" ? "پورٹ فولیو بنانا" : "Portfolio Building",
            language === "ur" ? "فری لانسنگ گائیڈ" : "Freelancing Guide",
            language === "ur" ? "سرٹیفکیٹ" : "Certificate",
          ],
        },
      ],
    },
    {
      id: "handicrafts",
      name: language === "ur" ? "دستکاری" : "Handicrafts",
      icon: "🧵",
      courses: [
        {
          title: language === "ur" ? "سلائی کڑھائی" : "Stitching & Embroidery",
          duration: language === "ur" ? "3 ماہ" : "3 months",
          level: language === "ur" ? "ابتدائی" : "Beginner",
          students: 200,
          rating: 4.9,
          price: "Free",
          description:
            language === "ur"
              ? "کپڑوں کی سلائی اور روایتی کڑھائی کی تربیت"
              : "Training in clothing stitching and traditional embroidery",
          instructor: language === "ur" ? "عائشہ بیگم" : "Ayesha Begum",
          features: [
            language === "ur" ? "مشین فراہم" : "Machine Provided",
            language === "ur" ? "مارکیٹ لنکیج" : "Market Linkage",
            language === "ur" ? "سرٹیفکیٹ" : "Certificate",
          ],
        },
        {
          title: language === "ur" ? "ہینڈ بیگ میکنگ" : "Handbag Making",
          duration: language === "ur" ? "2 ماہ" : "2 months",
          level: language === "ur" ? "ابتدائی" : "Beginner",
          students: 80,
          rating: 4.6,
          price: "Free",
          description:
            language === "ur"
              ? "مختلف قسم کے ہینڈ بیگ بنانے کی تربیت"
              : "Training in making different types of handbags",
          instructor: language === "ur" ? "زینب علی" : "Zainab Ali",
          features: [
            language === "ur" ? "مواد فراہم" : "Materials Provided",
            language === "ur" ? "آن لائن سیلنگ" : "Online Selling",
            language === "ur" ? "سرٹیفکیٹ" : "Certificate",
          ],
        },
      ],
    },
    {
      id: "technical",
      name: language === "ur" ? "تکنیکی" : "Technical",
      icon: "🔧",
      courses: [
        {
          title: language === "ur" ? "الیکٹریشن کورس" : "Electrician Course",
          duration: language === "ur" ? "4 ماہ" : "4 months",
          level: language === "ur" ? "ابتدائی" : "Beginner",
          students: 100,
          rating: 4.8,
          price: "Free",
          description:
            language === "ur"
              ? "گھریلو اور تجارتی الیکٹریکل ورک کی تربیت"
              : "Training in domestic and commercial electrical work",
          instructor: language === "ur" ? "محمد حسن" : "Muhammad Hassan",
          features: [
            language === "ur" ? "ٹولز فراہم" : "Tools Provided",
            language === "ur" ? "سیفٹی ٹریننگ" : "Safety Training",
            language === "ur" ? "سرٹیفکیٹ" : "Certificate",
          ],
        },
        {
          title: language === "ur" ? "پلمبنگ کورس" : "Plumbing Course",
          duration: language === "ur" ? "3 ماہ" : "3 months",
          level: language === "ur" ? "ابتدائی" : "Beginner",
          students: 75,
          rating: 4.7,
          price: "Free",
          description:
            language === "ur"
              ? "پانی کی فٹنگ اور پائپ لائن کی مرمت کی تربیت"
              : "Training in water fitting and pipeline repair",
          instructor: language === "ur" ? "علی احمد" : "Ali Ahmad",
          features: [
            language === "ur" ? "پریکٹیکل ٹریننگ" : "Practical Training",
            language === "ur" ? "جاب گارنٹی" : "Job Guarantee",
            language === "ur" ? "سرٹیفکیٹ" : "Certificate",
          ],
        },
      ],
    },
    {
      id: "culinary",
      name: language === "ur" ? "کھانا پکانا" : "Culinary Arts",
      icon: "👨‍🍳",
      courses: [
        {
          title: language === "ur" ? "پیشہ ورانہ کھانا پکانا" : "Professional Cooking",
          duration: language === "ur" ? "3 ماہ" : "3 months",
          level: language === "ur" ? "ابتدائی" : "Beginner",
          students: 90,
          rating: 4.9,
          price: "Free",
          description:
            language === "ur"
              ? "پاکستانی اور بین الاقوامی کھانوں کی تربیت"
              : "Training in Pakistani and international cuisines",
          instructor: language === "ur" ? "شیف فرحان" : "Chef Farhan",
          features: [
            language === "ur" ? "کچن فراہم" : "Kitchen Provided",
            language === "ur" ? "ریسٹورنٹ پلیسمنٹ" : "Restaurant Placement",
            language === "ur" ? "سرٹیفکیٹ" : "Certificate",
          ],
        },
        {
          title: language === "ur" ? "بیکری اینڈ کنفیکشنری" : "Bakery & Confectionery",
          duration: language === "ur" ? "2 ماہ" : "2 months",
          level: language === "ur" ? "ابتدائی" : "Beginner",
          students: 60,
          rating: 4.8,
          price: "Free",
          description:
            language === "ur"
              ? "کیک، پیسٹری اور مٹھائی بنانے کی تربیت"
              : "Training in making cakes, pastries and sweets",
          instructor: language === "ur" ? "عائشہ خان" : "Ayesha Khan",
          features: [
            language === "ur" ? "اوون فراہم" : "Oven Provided",
            language === "ur" ? "بزنس سیٹ اپ" : "Business Setup",
            language === "ur" ? "سرٹیفکیٹ" : "Certificate",
          ],
        },
      ],
    },
  ]

  const [activeCategory, setActiveCategory] = useState("it")

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">{t("vocationalTraining")}</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {language === "ur"
              ? "مختلف شعبوں میں مہارت حاصل کریں اور اپنا کیریئر بنائیں"
              : "Gain expertise in various fields and build your career"}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            {
              number: "50+",
              label: language === "ur" ? "کورسز" : "Courses",
              icon: BookOpen,
            },
            {
              number: "2000+",
              label: language === "ur" ? "فارغ التحصیل" : "Graduates",
              icon: GraduationCap,
            },
            {
              number: "85%",
              label: language === "ur" ? "جاب پلیسمنٹ" : "Job Placement",
              icon: Award,
            },
            {
              number: "4.8",
              label: language === "ur" ? "اوسط ریٹنگ" : "Average Rating",
              icon: Star,
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

        {/* Course Categories */}
        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="text-sm">
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.courses.map((course, index) => (
                  <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
                          {course.price}
                        </Badge>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 mr-1" />
                          <span className="text-sm font-medium">{course.rating}</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl">{course.title}</CardTitle>
                      <CardDescription>{course.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-slate-500" />
                          {course.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2 text-slate-500" />
                          {course.students} {language === "ur" ? "طلباء" : "students"}
                        </div>
                        <div className="flex items-center">
                          <GraduationCap className="h-4 w-4 mr-2 text-slate-500" />
                          {course.level}
                        </div>
                        <div className="flex items-center">
                          <Award className="h-4 w-4 mr-2 text-slate-500" />
                          {course.instructor}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm">{language === "ur" ? "خصوصیات:" : "Features:"}</h4>
                        <div className="flex flex-wrap gap-2">
                          {course.features.map((feature, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Link href="/apply">
                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                          {language === "ur" ? "رجسٹر کریں" : "Register Now"}
                          <ChevronRight className="h-4 w-4 ml-2" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Success Stories */}
        <div className="mt-16">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              {language === "ur" ? "کامیابی کی کہانیاں" : "Success Stories"}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: language === "ur" ? "سارہ احمد" : "Sarah Ahmad",
                course: language === "ur" ? "ویب ڈیولپمنٹ" : "Web Development",
                achievement:
                  language === "ur"
                    ? "اب ایک IT کمپنی میں ڈیولپر کے طور پر کام کر رہی ہے"
                    : "Now working as a developer in an IT company",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                name: language === "ur" ? "فاطمہ خان" : "Fatima Khan",
                course: language === "ur" ? "سلائی کڑھائی" : "Stitching & Embroidery",
                achievement:
                  language === "ur"
                    ? "اپنا کپڑوں کا کاروبار شروع کیا اور ماہانہ 50,000 کما رہی ہے"
                    : "Started her own clothing business earning 50,000 monthly",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                name: language === "ur" ? "علی حسن" : "Ali Hassan",
                course: language === "ur" ? "الیکٹریشن" : "Electrician",
                achievement:
                  language === "ur"
                    ? "اپنی الیکٹریکل شاپ کھولی اور 5 لوگوں کو ملازمت دی"
                    : "Opened his electrical shop and employed 5 people",
                image: "/placeholder.svg?height=100&width=100",
              },
            ].map((story, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
                    <img
                      src={story.image || "/placeholder.svg"}
                      alt={story.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{story.name}</h3>
                  <Badge variant="outline" className="mb-3">
                    {story.course}
                  </Badge>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{story.achievement}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">
            {language === "ur" ? "آج ہی اپنا کیریئر شروع کریں" : "Start Your Career Today"}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            {language === "ur"
              ? "مفت تربیت حاصل کریں اور اپنا مستقبل بنائیں"
              : "Get free training and build your future"}
          </p>
          <Link href="/apply">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              {language === "ur" ? "ابھی رجسٹر کریں" : "Register Now"}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
