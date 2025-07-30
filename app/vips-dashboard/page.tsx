"use client"

import { useState, useEffect } from "react"
import {
  Users,
  FileText,
  DollarSign,
  CheckCircle,
  Clock,
  XCircle,
  Eye,
  Filter,
  Download,
  Search,
  Bell,
  TrendingUp,
  Calendar,
  MapPin,
  Phone,
  User,
  Briefcase,
  GraduationCap,
  Heart,
  Package,
  Shield,
  Settings,
  Crown,
  UserCheck,
  UserX,
  Plus,
  Edit,
  Trash2,
  Star,
  Award,
  Gift,
  HandHeart,
  Building2,
  UserPlus,
  UserMinus,
  Lock,
  Unlock,
  Mail,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useLanguage } from "@/components/language-provider"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useSearchParams } from "next/navigation"

type AdminRole = "admin" | "super_admin"

export default function VIPsDashboard() {
  const { language, t } = useLanguage()
  const searchParams = useSearchParams()
  const [adminRole, setAdminRole] = useState<AdminRole>("admin")
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [filterType, setFilterType] = useState("all")
  const [showDonorModal, setShowDonorModal] = useState(false)
  const [helpRequests, setHelpRequests] = useState<any[]>([])
  const [donors, setDonors] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [newDonor, setNewDonor] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  })

  // Update adminRole whenever the role query param changes
  useEffect(() => {
    const roleParam = searchParams.get("role")
    if (roleParam === "super_admin" || roleParam === "admin") {
      setAdminRole(roleParam as AdminRole)
    }
  }, [searchParams])

  // API Functions
  const fetchData = async () => {
    setLoading(true)
    try {
      const [requestsRes, donorsRes] = await Promise.all([
        fetch(`/api/vips/requests?type=requests&role=${adminRole}`),
        fetch(`/api/vips/requests?type=donors&role=${adminRole}`)
      ])
      
      const requestsData = await requestsRes.json()
      const donorsData = await donorsRes.json()
      
      setHelpRequests(requestsData.requests || [])
      setDonors(donorsData.donors || [])
    } catch (error) {
      console.error("Error fetching data:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleRequestAction = async (requestId: string, action: "approve" | "reject") => {
    try {
      const response = await fetch("/api/vips/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action,
          role: adminRole,
          requestId,
        }),
      })
      
      const result = await response.json()
      
      if (response.ok) {
        // Refresh data
        fetchData()
      } else {
        alert(result.error || "Action failed")
      }
    } catch (error) {
      console.error("Error processing request:", error)
      alert("Failed to process request")
    }
  }

  const handleAddDonor = async () => {
    try {
      const response = await fetch("/api/vips/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "add_donor",
          role: adminRole,
          ...newDonor,
        }),
      })
      
      const result = await response.json()
      
      if (response.ok) {
        setNewDonor({ name: "", email: "", phone: "", city: "" })
        setShowDonorModal(false)
        fetchData()
      } else {
        alert(result.error || "Failed to add donor")
      }
    } catch (error) {
      console.error("Error adding donor:", error)
      alert("Failed to add donor")
    }
  }

  // Load data on component mount and role change
  useEffect(() => {
    fetchData()
  }, [adminRole])

  const stats = [
    {
      title: t("totalApplications"),
      value: "1,247",
      change: "+12%",
      icon: FileText,
      color: "bg-blue-500",
    },
    {
      title: t("approvedRequestsAdmin"),
      value: "892",
      change: "+8%",
      icon: CheckCircle,
      color: "bg-green-500",
    },
    {
      title: t("pendingReview"),
      value: "234",
      change: "+15%",
      icon: Clock,
      color: "bg-yellow-500",
    },
    {
      title: t("totalDisbursed"),
      value: "PKR 2.5M",
      change: "+22%",
      icon: DollarSign,
      color: "bg-purple-500",
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
      case "under_review":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">{t("underReview")}</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">{language === "ur" ? "اعلیٰ" : "High"}</Badge>
      case "medium":
        return (
          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
            {language === "ur" ? "متوسط" : "Medium"}
          </Badge>
        )
      case "low":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">{language === "ur" ? "کم" : "Low"}</Badge>
        )
      default:
        return <Badge variant="secondary">{priority}</Badge>
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "rozgar":
        return <Briefcase className="h-4 w-4" />
      case "training":
        return <GraduationCap className="h-4 w-4" />
      case "medical":
        return <Heart className="h-4 w-4" />
      case "ration":
        return <Package className="h-4 w-4" />
      case "business":
        return <DollarSign className="h-4 w-4" />
      case "women":
        return <Users className="h-4 w-4" />
      case "agriculture":
        return <Package className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  const isSuperAdmin = adminRole === "super_admin"

  // Panel heading and info based on role
  const panelTitle = isSuperAdmin ? (language === "ur" ? "سپر ایڈمن پینل" : "Super Admin Panel") : (language === "ur" ? "ایڈمن پینل" : "Admin Panel")
  const panelDesc = isSuperAdmin
    ? (language === "ur"
        ? "مکمل اختیارات: درخواستیں منظور/مسترد کریں، ڈونرز کا انتظام کریں، سب کچھ کریں۔"
        : "Full access: Accept/Reject requests, manage donors, everything.")
    : (language === "ur"
        ? "محدود اختیارات: صرف درخواستیں منظور کر سکتے ہیں۔"
        : "Limited access: Can only approve requests.")

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 py-8">
      <div className="container mx-auto px-2 sm:px-4 md:px-8">
        {/* Role Info Card */}
        <Card className="mb-8 border-0 shadow-md bg-gradient-to-r from-emerald-50 to-blue-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {isSuperAdmin ? (
                  <Crown className="h-8 w-8 text-yellow-600" />
                ) : (
                  <UserCheck className="h-8 w-8 text-blue-600" />
                )}
                <div>
                  <h3 className="text-lg font-semibold">{panelTitle}</h3>
                  <p className="text-sm text-slate-600">{panelDesc}</p>
                </div>
              </div>
              <Badge className={isSuperAdmin ? "bg-yellow-100 text-yellow-800" : "bg-blue-100 text-blue-800"}>
                {isSuperAdmin ? (language === "ur" ? "سپر ایڈمن" : "Super Admin") : (language === "ur" ? "ایڈمن" : "Admin")}
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
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

        {/* Loading State */}
        {loading && (
          <Card className="mb-8 border-0 shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
                <span className="ml-3 text-slate-600">{language === "ur" ? "ڈیٹا لوڈ ہو رہا ہے..." : "Loading data..."}</span>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Filters */}
        <Card className="mb-8 border-0 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Filter className="h-5 w-5 mr-2 text-emerald-600" />
              {t("advancedFiltersSearch")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input
                  placeholder={t("searchByNameOrId")}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger>
                  <SelectValue placeholder={t("filterByStatus")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t("allStatus")}</SelectItem>
                  <SelectItem value="pending">{t("pending")}</SelectItem>
                  <SelectItem value="approved">{t("approved")}</SelectItem>
                  <SelectItem value="rejected">{t("rejected")}</SelectItem>
                  <SelectItem value="under_review">{t("underReview")}</SelectItem>
                </SelectContent>
              </Select>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger>
                  <SelectValue placeholder={t("filterByType")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t("allTypes")}</SelectItem>
                  <SelectItem value="rozgar">{t("employment")}</SelectItem>
                  <SelectItem value="training">{t("training")}</SelectItem>
                  <SelectItem value="medical">{t("medical")}</SelectItem>
                  <SelectItem value="ration">{t("ration")}</SelectItem>
                  <SelectItem value="business">{t("businessLoan")}</SelectItem>
                  <SelectItem value="women">{t("womenLoan")}</SelectItem>
                </SelectContent>
              </Select>
              <Button className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700">
                {t("applyFilters")}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Main Content Tabs */}
        <Tabs defaultValue="help-requests" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-white shadow-md">
            <TabsTrigger
              value="help-requests"
              className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white"
            >
              {t("helpRequestsManagement")}
            </TabsTrigger>
            {/* Donors tab only for super_admin */}
            {isSuperAdmin && (
              <TabsTrigger
                value="donors"
                className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white"
              >
                {language === "ur" ? "ڈونرز کا انتظام" : "Donors Management"}
              </TabsTrigger>
            )}
            <TabsTrigger value="approved" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              {t("approvedCasesManagement")}
            </TabsTrigger>
            <TabsTrigger
              value="analytics"
              className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white"
            >
              {t("analytics")}
            </TabsTrigger>
          </TabsList>

          {/* Help Requests Tab */}
          <TabsContent value="help-requests">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center">
                    <Users className="h-5 w-5 mr-2 text-emerald-600" />
                    {t("helpRequestsManagement")} ({helpRequests.length})
                  </span>
                  <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                    <FileText className="h-4 w-4 mr-2" />
                    {t("newRequest")}
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {helpRequests.map((request) => (
                    <Card
                      key={request.id}
                      className="hover:shadow-md transition-all duration-300 border-l-4 border-l-emerald-500"
                    >
                      <CardContent className="p-6">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-3">
                              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                                {getTypeIcon(request.type)}
                              </div>
                              <div>
                                <h3 className="font-semibold text-lg">{request.name}</h3>
                                <p className="text-sm text-slate-600">ID: {request.id}</p>
                              </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                              <div className="flex items-center text-slate-600">
                                <Briefcase className="h-4 w-4 mr-2" />
                                {request.program}
                              </div>
                              <div className="flex items-center text-slate-600">
                                <MapPin className="h-4 w-4 mr-2" />
                                {request.city}
                              </div>
                              <div className="flex items-center text-slate-600">
                                <Calendar className="h-4 w-4 mr-2" />
                                {request.date}
                              </div>
                              <div className="flex items-center text-slate-600">
                                <Phone className="h-4 w-4 mr-2" />
                                {request.phone}
                              </div>
                              <div className="flex items-center text-slate-600">
                                <Gift className="h-4 w-4 mr-2" />
                                {language === "ur" ? "ڈونر" : "Donor"}: {request.donor}
                              </div>
                              <div className="flex items-center text-slate-600">
                                <DollarSign className="h-4 w-4 mr-2" />
                                PKR {Number.parseInt(request.amount).toLocaleString()}
                              </div>
                              <div className="flex items-center space-x-2">
                                {getStatusBadge(request.status)}
                                {getPriorityBadge(request.priority)}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button size="sm" variant="outline" className="hover:bg-blue-50 bg-transparent">
                              <Eye className="h-4 w-4 mr-1" />
                              {t("view")}
                            </Button>
                            {request.status === "pending" && (
                              <>
                                <Button 
                                  size="sm" 
                                  className="bg-green-600 hover:bg-green-700"
                                  onClick={() => handleRequestAction(request.id, "approve")}
                                >
                                  <CheckCircle className="h-4 w-4 mr-1" />
                                  {t("approve")}
                                </Button>
                                {/* Only super_admin can reject */}
                                {isSuperAdmin && (
                                  <Button 
                                    size="sm" 
                                    variant="destructive"
                                    onClick={() => handleRequestAction(request.id, "reject")}
                                  >
                                    <XCircle className="h-4 w-4 mr-1" />
                                    {t("reject")}
                                  </Button>
                                )}
                              </>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Donors Tab */}
          {isSuperAdmin && (
            <TabsContent value="donors">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center">
                      <HandHeart className="h-5 w-5 mr-2 text-emerald-600" />
                      {language === "ur" ? "ڈونرز کا انتظام" : "Donors Management"} ({donors.length})
                    </span>
                    {isSuperAdmin && (
                      <Dialog open={showDonorModal} onOpenChange={setShowDonorModal}>
                        <DialogTrigger asChild>
                          <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                            <UserPlus className="h-4 w-4 mr-2" />
                            {language === "ur" ? "نیا ڈونر" : "New Donor"}
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>{language === "ur" ? "نیا ڈونر شامل کریں" : "Add New Donor"}</DialogTitle>
                            <DialogDescription>
                              {language === "ur" ? "ڈونر کی معلومات درج کریں" : "Enter donor information"}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div>
                              <Label>{language === "ur" ? "نام" : "Name"}</Label>
                              <Input 
                                placeholder={language === "ur" ? "ڈونر کا نام" : "Donor name"}
                                value={newDonor.name}
                                onChange={(e) => setNewDonor({ ...newDonor, name: e.target.value })}
                              />
                            </div>
                            <div>
                              <Label>{language === "ur" ? "ای میل" : "Email"}</Label>
                              <Input 
                                placeholder={language === "ur" ? "ای میل ایڈریس" : "Email address"}
                                value={newDonor.email}
                                onChange={(e) => setNewDonor({ ...newDonor, email: e.target.value })}
                              />
                            </div>
                            <div>
                              <Label>{language === "ur" ? "فون نمبر" : "Phone"}</Label>
                              <Input 
                                placeholder={language === "ur" ? "فون نمبر" : "Phone number"}
                                value={newDonor.phone}
                                onChange={(e) => setNewDonor({ ...newDonor, phone: e.target.value })}
                              />
                            </div>
                            <div>
                              <Label>{language === "ur" ? "شہر" : "City"}</Label>
                              <Input 
                                placeholder={language === "ur" ? "شہر" : "City"}
                                value={newDonor.city}
                                onChange={(e) => setNewDonor({ ...newDonor, city: e.target.value })}
                              />
                            </div>
                            <div className="flex space-x-2">
                              <Button onClick={handleAddDonor}>
                                {language === "ur" ? "شامل کریں" : "Add"}
                              </Button>
                              <Button variant="outline" onClick={() => setShowDonorModal(false)}>
                                {language === "ur" ? "منسوخ کریں" : "Cancel"}
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {donors.map((donor) => (
                      <Card
                        key={donor.id}
                        className="hover:shadow-md transition-all duration-300 border-l-4 border-l-purple-500"
                      >
                        <CardContent className="p-6">
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                            <div className="flex-1">
                              <div className="flex items-center space-x-3 mb-3">
                                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                                  <HandHeart className="h-5 w-5 text-purple-600" />
                                </div>
                                <div>
                                  <h3 className="font-semibold text-lg">{donor.name}</h3>
                                  <p className="text-sm text-slate-600">ID: {donor.id}</p>
                                </div>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                <div className="flex items-center text-slate-600">
                                  <DollarSign className="h-4 w-4 mr-2" />
                                  PKR {Number.parseInt(donor.totalDonated).toLocaleString()}
                                </div>
                                <div className="flex items-center text-slate-600">
                                  <MapPin className="h-4 w-4 mr-2" />
                                  {donor.city}
                                </div>
                                <div className="flex items-center text-slate-600">
                                  <Calendar className="h-4 w-4 mr-2" />
                                  {donor.lastDonation}
                                </div>
                                <div className="flex items-center text-slate-600">
                                  <Phone className="h-4 w-4 mr-2" />
                                  {donor.phone}
                                </div>
                                <div className="flex items-center text-slate-600">
                                  <Mail className="h-4 w-4 mr-2" />
                                  {donor.email}
                                </div>
                                <div>{getStatusBadge(donor.status)}</div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Button size="sm" variant="outline" className="hover:bg-blue-50 bg-transparent">
                                <Eye className="h-4 w-4 mr-1" />
                                {t("view")}
                              </Button>
                              {isSuperAdmin && (
                                <>
                                  <Button size="sm" variant="outline" className="hover:bg-green-50 bg-transparent">
                                    <Edit className="h-4 w-4 mr-1" />
                                    {language === "ur" ? "ترمیم" : "Edit"}
                                  </Button>
                                  <Button size="sm" variant="outline" className="hover:bg-red-50 bg-transparent">
                                    <Trash2 className="h-4 w-4 mr-1" />
                                    {language === "ur" ? "حذف" : "Delete"}
                                  </Button>
                                </>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          )}

          {/* Approved Cases Tab */}
          <TabsContent value="approved">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                  {t("approvedCasesManagement")}
                </CardTitle>
                <CardDescription>{t("allApprovedApplicationsStatus")}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">892 {t("casesSuccessfullyApproved")}</h3>
                  <p className="text-slate-600 mb-6">{t("successfullyProcessedDisbursed")}</p>
                  <Button className="bg-green-600 hover:bg-green-700">{t("viewAllApprovedCases")}</Button>
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
                    {t("monthlyApplicationsTrend")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-gradient-to-br from-emerald-50 to-blue-50 rounded-lg">
                    <div className="text-center">
                      <TrendingUp className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
                      <p className="text-slate-600">{t("advancedAnalyticsChart")}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-2 text-emerald-600" />
                    {t("successRateByProgram")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{t("employmentPrograms")}</span>
                      <span className="text-sm text-green-600">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{t("skillsTraining")}</span>
                      <span className="text-sm text-green-600">92%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "92%" }}></div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{t("microfinance")}</span>
                      <span className="text-sm text-green-600">78%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "78%" }}></div>
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