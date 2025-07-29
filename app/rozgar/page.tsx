"use client"

import { useState } from "react"
import { Search, Filter, MapPin, Users, Calendar, Clock, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"

export default function RozgarPage() {
  const { language, t } = useLanguage()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCity, setSelectedCity] = useState("all")
  const [selectedSkill, setSelectedSkill] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")

  const programs = [
    {
      id: 1,
      title: language === "ur" ? "IT سپورٹ ٹیکنیشن پروگرام" : "IT Support Technician Program",
      description:
        language === "ur"
          ? "کمپیوٹر ہارڈ ویئر اور سافٹ ویئر کی مرمت اور دیکھ بھال کی تربیت"
          : "Training in computer hardware and software repair and maintenance",
      city: "Lahore",
      duration: language === "ur" ? "3 ماہ" : "3 months",
      participants: 25,
      startDate: "2024-02-15",
      status: "open",
      skill: "IT",
      requirements: language === "ur" ? "میٹرک پاس، بنیادی کمپیوٹر نالج" : "Matric pass, basic computer knowledge",
      stipend: "PKR 5,000/month",
    },
    {
      id: 2,
      title: language === "ur" ? "ٹیلرنگ اینڈ فیشن ڈیزائن" : "Tailoring and Fashion Design",
      description:
        language === "ur"
          ? "کپڑوں کی سلائی اور فیشن ڈیزائن کی مکمل تربیت"
          : "Complete training in clothing stitching and fashion design",
      city: "Karachi",
      duration: language === "ur" ? "4 ماہ" : "4 months",
      participants: 30,
      startDate: "2024-03-01",
      status: "open",
      skill: "Handicrafts",
      requirements: language === "ur" ? "کوئی خاص تعلیمی قابلیت نہیں" : "No specific educational requirement",
      stipend: "PKR 4,000/month",
    },
    {
      id: 3,
      title: language === "ur" ? "موٹر سائیکل مکینک" : "Motorcycle Mechanic",
      description:
        language === "ur"
          ? "موٹر سائیکل کی مرمت اور دیکھ بھال کی تربیت"
          : "Training in motorcycle repair and maintenance",
      city: "Faisalabad",
      duration: language === "ur" ? "2 ماہ" : "2 months",
      participants: 20,
      startDate: "2024-01-20",
      status: "closed",
      skill: "Technical",
      requirements: language === "ur" ? "میٹرک پاس، 18-35 سال عمر" : "Matric pass, age 18-35 years",
      stipend: "PKR 6,000/month",
    },
    {
      id: 4,
      title: language === "ur" ? "کھانا پکانے کی تربیت" : "Culinary Arts Training",
      description:
        language === "ur" ? "پیشہ ورانہ کھانا پکانے اور کیٹرنگ کی تربیت" : "Professional cooking and catering training",
      city: "Islamabad",
      duration: language === "ur" ? "3 ماہ" : "3 months",
      participants: 15,
      startDate: "2024-02-10",
      status: "open",
      skill: "Culinary",
      requirements: language === "ur" ? "کوئی خاص تعلیمی قابلیت نہیں" : "No specific educational requirement",
      stipend: "PKR 4,500/month",
    },
    {
      id: 5,
      title: language === "ur" ? "موبائل فون ریپیئر" : "Mobile Phone Repair",
      description:
        language === "ur"
          ? "موبائل فون کی مرمت اور دیکھ بھال کی تربیت"
          : "Training in mobile phone repair and maintenance",
      city: "Multan",
      duration: language === "ur" ? "2 ماہ" : "2 months",
      participants: 18,
      startDate: "2024-03-15",
      status: "open",
      skill: "Technical",
      requirements:
        language === "ur" ? "میٹرک پاس، بنیادی الیکٹرانکس نالج" : "Matric pass, basic electronics knowledge",
      stipend: "PKR 5,500/month",
    },
    {
      id: 6,
      title: language === "ur" ? "بیوٹی پارلر کورس" : "Beauty Parlor Course",
      description:
        language === "ur"
          ? "بیوٹی ٹریٹمنٹ اور ہیئر اسٹائلنگ کی تربیت"
          : "Training in beauty treatments and hair styling",
      city: "Peshawar",
      duration: language === "ur" ? "3 ماہ" : "3 months",
      participants: 22,
      startDate: "2024-02-25",
      status: "open",
      skill: "Beauty",
      requirements:
        language === "ur"
          ? "صرف خواتین، کوئی خاص تعلیمی قابلیت نہیں"
          : "Women only, no specific educational requirement",
      stipend: "PKR 4,000/month",
    },
  ]

  const cities = ["Lahore", "Karachi", "Islamabad", "Faisalabad", "Multan", "Peshawar", "Quetta", "Rawalpindi"]
  const skills = ["IT", "Technical", "Handicrafts", "Culinary", "Beauty", "Agriculture"]
  const statuses = [
    { value: "open", label: language === "ur" ? "کھلا" : "Open" },
    { value: "closed", label: language === "ur" ? "بند" : "Closed" },
    { value: "upcoming", label: language === "ur" ? "آنے والا" : "Upcoming" },
  ]

  const filteredPrograms = programs.filter((program) => {
    return (
      program.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCity === "all" || program.city === selectedCity) &&
      (selectedSkill === "all" || program.skill === selectedSkill) &&
      (selectedStatus === "all" || program.status === selectedStatus)
    )
  })

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">{t("rozgarPrograms")}</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {language === "ur"
              ? "مختلف شعبوں میں ہنر مندی کی تربیت حاصل کریں اور بہتر روزگار کے مواقع پائیں"
              : "Get skills training in various fields and find better employment opportunities"}
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Filter className="h-5 w-5 mr-2" />
              {language === "ur" ? "پروگرام تلاش کریں" : "Search Programs"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input
                  placeholder={language === "ur" ? "پروگرام تلاش کریں..." : "Search programs..."}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedCity} onValueChange={setSelectedCity}>
                <SelectTrigger>
                  <SelectValue placeholder={language === "ur" ? "شہر منتخب کریں" : "Select City"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{language === "ur" ? "تمام شہر" : "All Cities"}</SelectItem>
                  {cities.map((city) => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedSkill} onValueChange={setSelectedSkill}>
                <SelectTrigger>
                  <SelectValue placeholder={language === "ur" ? "ہنر منتخب کریں" : "Select Skill"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{language === "ur" ? "تمام ہنر" : "All Skills"}</SelectItem>
                  {skills.map((skill) => (
                    <SelectItem key={skill} value={skill}>
                      {skill}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger>
                  <SelectValue placeholder={language === "ur" ? "حالت منتخب کریں" : "Select Status"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{language === "ur" ? "تمام حالات" : "All Status"}</SelectItem>
                  {statuses.map((status) => (
                    <SelectItem key={status.value} value={status.value}>
                      {status.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCity("all")
                  setSelectedSkill("all")
                  setSelectedStatus("all")
                }}
                variant="outline"
              >
                {language === "ur" ? "صاف کریں" : "Clear"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((program) => (
            <Card key={program.id} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge
                    variant={program.status === "open" ? "default" : "secondary"}
                    className={program.status === "open" ? "bg-green-500" : "bg-gray-500"}
                  >
                    {program.status === "open"
                      ? language === "ur"
                        ? "کھلا"
                        : "Open"
                      : language === "ur"
                        ? "بند"
                        : "Closed"}
                  </Badge>
                  <Badge variant="outline">{program.skill}</Badge>
                </div>
                <CardTitle className="text-xl leading-tight">{program.title}</CardTitle>
                <CardDescription className="leading-relaxed">{program.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-slate-500" />
                    {program.city}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-slate-500" />
                    {program.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-slate-500" />
                    {program.participants} {language === "ur" ? "شرکاء" : "participants"}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-slate-500" />
                    {new Date(program.startDate).toLocaleDateString()}
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-semibold">{language === "ur" ? "ضروریات:" : "Requirements:"}</span>
                    <p className="text-slate-600 dark:text-slate-300">{program.requirements}</p>
                  </div>
                  <div>
                    <span className="font-semibold">{language === "ur" ? "وظیفہ:" : "Stipend:"}</span>
                    <span className="text-emerald-600 font-medium ml-1">{program.stipend}</span>
                  </div>
                </div>

                <Link href={`/rozgar/${program.id}`}>
                  <Button className="w-full" disabled={program.status === "closed"}>
                    {language === "ur" ? "تفصیلات دیکھیں" : "View Details"}
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPrograms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg">
              {language === "ur" ? "کوئی پروگرام نہیں ملا" : "No programs found"}
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">
            {language === "ur" ? "کوئی مناسب پروگرام نہیں ملا؟" : "Didn't find a suitable program?"}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            {language === "ur"
              ? "ہم مسلسل نئے پروگرام شروع کر رہے ہیں۔ اپنی ضرورت بتائیں۔"
              : "We are constantly starting new programs. Let us know your needs."}
          </p>
          <Link href="/apply">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              {language === "ur" ? "درخواست دیں" : "Apply Now"}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
