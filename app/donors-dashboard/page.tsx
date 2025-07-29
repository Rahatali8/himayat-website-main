"use client"
import {
  Heart,
  DollarSign,
  Users,
  TrendingUp,
  Calendar,
  MapPin,
  Gift,
  Award,
  Target,
  CreditCard,
  PieChart,
  BarChart3,
  Star,
  CheckCircle,
  Eye,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "@/components/language-provider"

export default function DonorsDashboard() {
  const { language, t } = useLanguage()

  // Donation Statistics
  const donationStats = [
    {
      title: t("totalDonations"),
      value: "PKR 2.8M",
      change: "+18%",
      icon: DollarSign,
      color: "bg-green-500",
    },
    {
      title: t("activeDonors"),
      value: "347",
      change: "+12%",
      icon: Users,
      color: "bg-blue-500",
    },
    {
      title: t("familiesHelped"),
      value: "1,892",
      change: "+25%",
      icon: Heart,
      color: "bg-purple-500",
    },
    {
      title: t("thisMonth"),
      value: "PKR 485K",
      change: "+15%",
      icon: TrendingUp,
      color: "bg-orange-500",
    },
  ]

  // Top Donors
  const topDonors = [
    {
      name: language === "ur" ? "محمد احمد خان" : "Muhammad Ahmad Khan",
      amount: "PKR 150,000",
      donations: 12,
      city: "Karachi",
      type: "Regular",
      badge: "Gold",
    },
    {
      name: language === "ur" ? "فاطمہ علی" : "Fatima Ali",
      amount: "PKR 125,000",
      donations: 8,
      city: "Lahore",
      type: "Monthly",
      badge: "Gold",
    },
    {
      name: language === "ur" ? "علی حسن" : "Ali Hassan",
      amount: "PKR 95,000",
      donations: 15,
      city: "Islamabad",
      type: "Regular",
      badge: "Silver",
    },
    {
      name: language === "ur" ? "عائشہ خان" : "Ayesha Khan",
      amount: "PKR 75,000",
      donations: 6,
      city: "Multan",
      type: "One-time",
      badge: "Silver",
    },
  ]

  // Recent Donations
  const recentDonations = [
    {
      id: "DON-2024-089",
      donor: language === "ur" ? "احمد علی شاہ" : "Ahmad Ali Shah",
      amount: "PKR 25,000",
      purpose: "Medical Aid",
      date: "2024-01-28",
      city: "Peshawar",
      status: "completed",
      method: "Bank Transfer",
    },
    {
      id: "DON-2024-088",
      donor: language === "ur" ? "زینب فاطمہ" : "Zainab Fatima",
      amount: "PKR 15,000",
      purpose: "Education Support",
      date: "2024-01-28",
      city: "Faisalabad",
      status: "completed",
      method: "Online",
    },
    {
      id: "DON-2024-087",
      donor: language === "ur" ? "محمد حسین" : "Muhammad Hussain",
      amount: "PKR 50,000",
      purpose: "Emergency Relief",
      date: "2024-01-27",
      city: "Sialkot",
      status: "processing",
      method: "Cash",
    },
    {
      id: "DON-2024-086",
      donor: language === "ur" ? "سارہ خان" : "Sarah Khan",
      amount: "PKR 10,000",
      purpose: "Skills Training",
      date: "2024-01-27",
      city: "Rawalpindi",
      status: "completed",
      method: "Credit Card",
    },
  ]

  // Impact Stories
  const impactStories = [
    {
      title: language === "ur" ? "احمد کی کامیابی کی کہانی" : "Ahmad's Success Story",
      description:
        language === "ur"
          ? "IT ٹریننگ کے بعد اب ایک کامیاب سافٹ ویئر انجینئر"
          : "After IT training, now a successful software engineer",
      beneficiary: language === "ur" ? "احمد علی" : "Ahmad Ali",
      program: "Skills Training",
      impact: "Monthly Income: PKR 45,000",
      donor: language === "ur" ? "محمد خان" : "Muhammad Khan",
    },
    {
      title: language === "ur" ? "فاطمہ کا کاروبار" : "Fatima's Business",
      description:
        language === "ur"
          ? "مائیکرو لون سے شروع کیا گیا کپڑوں کا کاروبار"
          : "Clothing business started with micro loan",
      beneficiary: language === "ur" ? "فاطمہ بیگم" : "Fatima Begum",
      program: "Microfinance",
      impact: "10 Jobs Created",
      donor: language === "ur" ? "علی احمد" : "Ali Ahmad",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            {language === "ur" ? "مکمل" : "Completed"}
          </Badge>
        )
      case "processing":
        return (
          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
            {language === "ur" ? "پروسیسنگ" : "Processing"}
          </Badge>
        )
      case "pending":
        return (
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
            {language === "ur" ? "زیر التواء" : "Pending"}
          </Badge>
        )
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Gold":
        return "bg-yellow-100 text-yellow-800"
      case "Silver":
        return "bg-gray-100 text-gray-800"
      case "Bronze":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-blue-100 text-blue-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-rose-50 to-emerald-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 to-emerald-600 bg-clip-text text-transparent flex items-center">
                <Heart className="h-10 w-10 mr-3 text-rose-600" />
                {t("vips")} {t("donorsPanel")}
              </h1>
              <p className="text-slate-600 mt-2">{t("trackDonationsImpact")}</p>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" className="hover:bg-rose-50 bg-transparent">
                <Gift className="h-4 w-4 mr-2" />
                {t("newDonation")}
              </Button>
              <Button className="bg-gradient-to-r from-rose-600 to-emerald-600 hover:from-rose-700 hover:to-emerald-700">
                <Award className="h-4 w-4 mr-2" />
                {t("donorRecognition")}
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {donationStats.map((stat, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-md"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">{stat.title}</p>
                    <p className="text-3xl font-bold text-slate-900 mt-2">{stat.value}</p>
                    <p className="text-sm text-green-600 mt-1 flex items-center">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      {stat.change} {t("fromLastMonth")}
                    </p>
                  </div>
                  <div className={`w-12 h-12 ${stat.color} rounded-full flex items-center justify-center`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="donations" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-white shadow-md">
            <TabsTrigger value="donations" className="data-[state=active]:bg-rose-500 data-[state=active]:text-white">
              {t("recentDonations")}
            </TabsTrigger>
            <TabsTrigger value="donors" className="data-[state=active]:bg-rose-500 data-[state=active]:text-white">
              {t("topDonors")}
            </TabsTrigger>
            <TabsTrigger value="impact" className="data-[state=active]:bg-rose-500 data-[state=active]:text-white">
              {t("impactStories")}
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-rose-500 data-[state=active]:text-white">
              {t("analytics")}
            </TabsTrigger>
          </TabsList>

          {/* Recent Donations Tab */}
          <TabsContent value="donations">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center">
                    <DollarSign className="h-5 w-5 mr-2 text-rose-600" />
                    {t("recentDonations")} ({recentDonations.length})
                  </span>
                  <Button size="sm" className="bg-rose-600 hover:bg-rose-700">
                    <Eye className="h-4 w-4 mr-2" />
                    {t("viewAll")}
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentDonations.map((donation) => (
                    <Card
                      key={donation.id}
                      className="hover:shadow-md transition-all duration-300 border-l-4 border-l-rose-500"
                    >
                      <CardContent className="p-6">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-3">
                              <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                                <Heart className="h-5 w-5 text-rose-600" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-lg">{donation.donor}</h3>
                                <p className="text-sm text-slate-600">ID: {donation.id}</p>
                              </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                              <div className="flex items-center text-slate-600">
                                <DollarSign className="h-4 w-4 mr-2" />
                                {donation.amount}
                              </div>
                              <div className="flex items-center text-slate-600">
                                <Target className="h-4 w-4 mr-2" />
                                {donation.purpose}
                              </div>
                              <div className="flex items-center text-slate-600">
                                <MapPin className="h-4 w-4 mr-2" />
                                {donation.city}
                              </div>
                              <div className="flex items-center text-slate-600">
                                <Calendar className="h-4 w-4 mr-2" />
                                {donation.date}
                              </div>
                              <div className="flex items-center text-slate-600">
                                <CreditCard className="h-4 w-4 mr-2" />
                                {donation.method}
                              </div>
                              <div>{getStatusBadge(donation.status)}</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button size="sm" variant="outline" className="hover:bg-rose-50 bg-transparent">
                              <Eye className="h-4 w-4 mr-1" />
                              {t("details")}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Top Donors Tab */}
          <TabsContent value="donors">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-rose-600" />
                  {t("topDonorsRecognition")}
                </CardTitle>
                <CardDescription>{t("mostGenerousSupporters")}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {topDonors.map((donor, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-md"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-emerald-500 rounded-full flex items-center justify-center">
                              <span className="text-white font-bold text-lg">#{index + 1}</span>
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg">{donor.name}</h3>
                              <p className="text-sm text-slate-600">{donor.city}</p>
                            </div>
                          </div>
                          <Badge className={getBadgeColor(donor.badge)}>
                            <Star className="h-3 w-3 mr-1" />
                            {donor.badge}
                          </Badge>
                        </div>

                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-slate-600">{t("totalDonated")}</span>
                            <span className="font-bold text-rose-600">{donor.amount}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-slate-600">{t("numberOfDonations")}</span>
                            <span className="font-semibold">{donor.donations}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-slate-600">{t("type")}</span>
                            <Badge variant="outline">{donor.type}</Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Impact Stories Tab */}
          <TabsContent value="impact">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="h-5 w-5 mr-2 text-rose-600" />
                  {t("successStoriesImpact")}
                </CardTitle>
                <CardDescription>{t("realChangesMadePossible")}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {impactStories.map((story, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-gradient-to-br from-white to-emerald-50"
                    >
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                              <CheckCircle className="h-6 w-6 text-emerald-600" />
                            </div>
                            <div>
                              <h3 className="font-bold text-lg text-emerald-800">{story.title}</h3>
                              <p className="text-sm text-slate-600">{story.beneficiary}</p>
                            </div>
                          </div>

                          <p className="text-slate-700">{story.description}</p>

                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-slate-600">{t("program")}:</span>
                              <p className="font-semibold">{story.program}</p>
                            </div>
                            <div>
                              <span className="text-slate-600">{t("impact")}:</span>
                              <p className="font-semibold text-emerald-600">{story.impact}</p>
                            </div>
                          </div>

                          <div className="pt-3 border-t">
                            <p className="text-xs text-slate-500">
                              {t("supportedBy")} <span className="font-semibold">{story.donor}</span>
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2 text-rose-600" />
                    {t("monthlyDonationTrends")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-gradient-to-br from-rose-50 to-emerald-50 rounded-lg">
                    <div className="text-center">
                      <BarChart3 className="h-12 w-12 text-rose-500 mx-auto mb-4" />
                      <p className="text-slate-600">{t("detailedDonationChart")}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <PieChart className="h-5 w-5 mr-2 text-rose-600" />
                    {t("donationDistribution")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{t("medicalAidHelp")}</span>
                      <span className="text-sm text-rose-600">35%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-rose-500 h-2 rounded-full" style={{ width: "35%" }}></div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{t("educationalSupport")}</span>
                      <span className="text-sm text-emerald-600">28%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-emerald-500 h-2 rounded-full" style={{ width: "28%" }}></div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">
                        {language === "ur" ? "ہنگامی امداد" : "Emergency Relief"}
                      </span>
                      <span className="text-sm text-blue-600">22%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "22%" }}></div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{t("microfinance")}</span>
                      <span className="text-sm text-purple-600">15%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: "15%" }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
