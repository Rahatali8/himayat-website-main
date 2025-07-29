"use client"

import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { PlayCircle } from "lucide-react"

export default function VideosPage() {
  const { language, t } = useLanguage()

  const videos = [
    {
      id: "video1",
      title: language === "ur" ? "حمایت کی اثرات کی کہانی" : "Himāyat's Impact Story",
      description: language === "ur" ? "دیکھیں کہ ہم کیسے زندگیوں کو بدل رہے ہیں" : "See how we are changing lives",
      thumbnail: "/placeholder.svg?height=200&width=350",
      youtubeId: "dQw4w9WgXcQ", // Placeholder YouTube ID
    },
    {
      id: "video2",
      title: language === "ur" ? "ہنر مندی تربیت کی جھلکیاں" : "Skills Training Highlights",
      description: language === "ur" ? "ہمارے تربیتی پروگراموں کی ایک جھلک" : "A glimpse into our training programs",
      thumbnail: "/placeholder.svg?height=200&width=350",
      youtubeId: "dQw4w9WgXcQ", // Placeholder YouTube ID
    },
    {
      id: "video3",
      title: language === "ur" ? "مائیکرو فنانس کی کامیابی" : "Microfinance Success",
      description:
        language === "ur" ? "چھوٹے کاروباروں کو کیسے فروغ دیا جا رہا ہے" : "How small businesses are being promoted",
      thumbnail: "/placeholder.svg?height=200&width=350",
      youtubeId: "dQw4w9WgXcQ", // Placeholder YouTube ID
    },
    {
      id: "video4",
      title: language === "ur" ? "راشن تقسیم کی مہم" : "Ration Distribution Campaign",
      description: language === "ur" ? "ہماری راشن تقسیم کی کوششیں" : "Our efforts in ration distribution",
      thumbnail: "/placeholder.svg?height=200&width=350",
      youtubeId: "dQw4w9WgXcQ", // Placeholder YouTube ID
    },
  ]

  return (
    <div className="py-8">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">{t("ourVideos")}</h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">{t("watchOurImpactStories")}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative w-full h-48 bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
              {/* Placeholder for video thumbnail/embed */}
              <img
                src={video.thumbnail || "/placeholder.svg"}
                alt={video.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <Button
                variant="ghost"
                size="icon"
                className="relative z-10 w-16 h-16 rounded-full bg-white/80 backdrop-blur-sm text-emerald-600 hover:bg-white transition-colors duration-300"
                onClick={() => window.open(`https://www.youtube.com/watch?v=${video.youtubeId}`, "_blank")}
              >
                <PlayCircle className="h-10 w-10 fill-current" />
              </Button>
            </div>
            <CardContent className="p-4 space-y-2">
              <CardTitle className="text-lg font-semibold">{video.title}</CardTitle>
              <CardDescription className="text-sm text-slate-600 dark:text-slate-300">
                {video.description}
              </CardDescription>
              <Button variant="outline" className="w-full mt-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-600">
                {t("watchNow")}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
