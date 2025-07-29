"use client"
import {
  Users,
  FileText,
  CheckCircle,
  Clock,
  TrendingUp,
  Calendar,
  MapPin,
  Briefcase,
  GraduationCap,
  Heart,
  DollarSign,
  Award,
  Target,
  Activity,
  BookOpen,
  Utensils,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "@/components/language-provider"

export default function UserDashboard() {
  const { language, t } = useLanguage()

  // Daily Statistics
  const dailyStats = [
    {
      title: t("todaysRequests"),
      value: "47",
      change: "+12%",
      icon: FileText,
      color: "bg-blue-500",
    },
    {
      title: t("approvedToday"),
      value: "32",
      change: "+8%",
      icon: CheckCircle,
      color: "bg-green-500",
    },
    {
      title: t("pending"),
      value: "15",
      change: "+5%",
      icon: Clock,
      color: "bg-yellow-500",
    },
    {
      title: t("totalHelped"),
      value: "12,847",
      change: "+22%",
      icon: Users,
      color: "bg-purple-500",
    },
  ]

  // Program-wise Statistics
  const programStats = [
    {
      name: t("rozgarPrograms"),
      icon: Briefcase,
      totalHelped: 3247,
      dailyRequests: 12,
      approved: 8,
      pending: 4,
      color: "bg-blue-100 text-blue-800",
    },
    {
      name: t("vocationalTraining"),
      icon: GraduationCap,
      totalHelped: 2156,
      dailyRequests: 8,
      approved: 6,
      pending: 2,
      color: "bg-green-100 text-green-800",
    },
    {
      name: t("microfinance"),
      icon: DollarSign,
      totalHelped: 1892,
      dailyRequests: 15,
      approved: 10,
      pending: 5,
      color: "bg-purple-100 text-purple-800",
    },
    {
      name: t("medicalAid"),
      icon: Heart,
      totalHelped: 2634,
      dailyRequests: 6,
      approved: 4,
      pending: 2,
      color: "bg-red-100 text-red-800",
    },
    {
      name: t("educationalSupport"),
      icon: BookOpen,
      totalHelped: 1567,
      dailyRequests: 4,
      approved: 3,
      pending: 1,
      color: "bg-indigo-100 text-indigo-800",
    },
    {
      name: t("foodAssistance"),
      icon: Utensils,
      totalHelped: 1351,
      dailyRequests: 2,
      approved: 1,
      pending: 1,
      color: "bg-orange-100 text-orange-800",
    },
  ]

  // Recent Requests
  const recentRequests = [
    {
      id: "HIM-2024-047",
      name: language === "ur" ? "احمد علی خان" : "Ahmad Ali Khan",
      city: language === "ur" ? "لاہور" : "Lahore",
      program: language === "ur" ? "IT سپورٹ ٹریننگ" : "IT Support Training",
      status: "approved",
      date: "2024-01-28",
      type: "training",
    },
    {
      id: "HIM-2024-046",
      name: language === "ur" ? "فاطمہ بیگم" : "Fatima Begum",
      city: language === "ur" ? "کراچی" : "Karachi",
      program: language === "ur" ? "کاروباری قرض" : "Business Loan",
      status: "pending",
      date: "2024-01-28",
      type: "microfinance",
    },
    {
      id: "HIM-2024-045",
      name: language === "ur" ? "محمد حسن" : "Muhammad Hassan",
      city: language === "ur" ? "اسلام آباد" : "Islamabad",
      program: language === "ur" ? "طبی امداد" : "Medical Aid",
      status: "approved",
      date: "2024-01-28",
      type: "medical",
    },
    {
      id: "HIM-2024-044",
      name: language === "ur" ? "عائشہ خان" : "Ayesha Khan",
      city: language === "ur" ? "فیصل آباد" : "Faisalabad",
      program: language === "ur" ? "ماہانہ راشن" : "Monthly Ration",
      status: "pending",
      date: "2024-01-28",
      type: "ration",
    },
    {
      id: "HIM-2024-043",
      name: language === "ur" ? "علی احمد" : "Ali Ahmad",
      city: language === "ur" ? "ملتان" : "Multan",
      program: language === "ur" ? "جاب پلیسمنٹ" : "Job Placement",
      status: "approved",
      date: "2024-01-28",
      type: "employment",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">{t("approved")}</Badge>
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">{t("pending")}</Badge>
      case "rejected":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">{t("rejected")}</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "employment":
        return <Briefcase className="h-4 w-4" />
      case "training":
        return <GraduationCap className="h-4 w-4" />
      case "medical":
        return <Heart className="h-4 w-4" />
      case "ration":
        return <Utensils className="h-4 w-4" />
      case "microfinance":
        return <DollarSign className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                {t("userDashboard")}
              </h1>
              <p className="text-slate-600 mt-2">{t("dailyActivitiesProgramDetails")}</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="text-right">
                <p className="text-sm text-slate-600">{t("todaysDate")}</p>
                <p className="font-semibold">January 28, 2024</p>
              </div>
            </div>
          </div>
        </div>

        {/* Daily Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {dailyStats.map((stat, index) => (
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
                      {stat.change} {t("fromYesterday")}
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
        <Tabs defaultValue="programs" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-3 bg-white shadow-md">
            <TabsTrigger value="programs" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              {t("programDetails")}
            </TabsTrigger>
            <TabsTrigger value="recent" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              {t("recentRequests")}
            </TabsTrigger>
            <TabsTrigger
              value="analytics"
              className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white"
            >
              {t("analytics")}
            </TabsTrigger>
          </TabsList>

          {/* Programs Tab */}
          <TabsContent value="programs">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programStats.map((program, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-md"
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-lg">
                      <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                        <program.icon className="h-5 w-5 text-emerald-600" />
                      </div>
                      {program.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">{t("totalHelpedCount")}</span>
                        <span className="font-bold text-lg text-emerald-600">
                          {program.totalHelped.toLocaleString()}
                        </span>
                      </div>

                      <div className="grid grid-cols-3 gap-3 text-center">
                        <div className="bg-blue-50 rounded-lg p-3">
                          <p className="text-2xl font-bold text-blue-600">{program.dailyRequests}</p>
                          <p className="text-xs text-slate-600">{t("todaysRequestsCount")}</p>
                        </div>
                        <div className="bg-green-50 rounded-lg p-3">
                          <p className="text-2xl font-bold text-green-600">{program.approved}</p>
                          <p className="text-xs text-slate-600">{t("approvedCount")}</p>
                        </div>
                        <div className="bg-yellow-50 rounded-lg p-3">
                          <p className="text-2xl font-bold text-yellow-600">{program.pending}</p>
                          <p className="text-xs text-slate-600">{t("pendingCount")}</p>
                        </div>
                      </div>

                      <div className="pt-2">
                        <Badge className={program.color}>{t("activeProgram")}</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Recent Requests Tab */}
          <TabsContent value="recent">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="h-5 w-5 mr-2 text-emerald-600" />
                  {t("todaysRecentRequests")}
                </CardTitle>
                <CardDescription>{t("listOfAllRequestsReceivedToday")}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentRequests.map((request, index) => (
                    <Card
                      key={request.id}
                      className="hover:shadow-md transition-all duration-300 border-l-4 border-l-emerald-500"
                    >
                      <CardContent className="p-4">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-3 lg:space-y-0">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                                {getTypeIcon(request.type)}
                              </div>
                              <div>
                                <h3 className="font-semibold">{request.name}</h3>
                                <p className="text-sm text-slate-600">ID: {request.id}</p>
                              </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
                              <div className="flex items-center text-slate-600">
                                <MapPin className="h-3 w-3 mr-1" />
                                {request.city}
                              </div>
                              <div className="flex items-center text-slate-600">
                                <Briefcase className="h-3 w-3 mr-1" />
                                {request.program}
                              </div>
                              <div className="flex items-center text-slate-600">
                                <Calendar className="h-3 w-3 mr-1" />
                                {request.date}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center">{getStatusBadge(request.status)}</div>
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
                    <TrendingUp className="h-5 w-5 mr-2 text-emerald-600" />
                    {t("weeklyProgress")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{t("thisWeeksRequests")}</span>
                      <span className="text-sm text-green-600">287</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-green-500 h-3 rounded-full" style={{ width: "85%" }}></div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{t("approvedRequests")}</span>
                      <span className="text-sm text-green-600">234</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-blue-500 h-3 rounded-full" style={{ width: "92%" }}></div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{t("completedCases")}</span>
                      <span className="text-sm text-green-600">198</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-purple-500 h-3 rounded-full" style={{ width: "78%" }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="h-5 w-5 mr-2 text-emerald-600" />
                    {t("monthlyTargets")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mb-4">
                        <span className="text-white text-2xl font-bold">78%</span>
                      </div>
                      <p className="text-sm text-slate-600">{t("monthlyTargetCompleted")}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="bg-emerald-50 rounded-lg p-4">
                        <Award className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                        <p className="text-2xl font-bold text-emerald-600">1,247</p>
                        <p className="text-xs text-slate-600">{t("totalHelpedCount")}</p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-4">
                        <Target className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                        <p className="text-2xl font-bold text-blue-600">1,600</p>
                        <p className="text-xs text-slate-600">{t("monthlyTarget")}</p>
                      </div>
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
