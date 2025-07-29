"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useLanguage } from "@/components/language-provider"
import { CheckCircle, Upload, User, FileText } from "lucide-react"

export default function ApplyPage() {
  const { language, t } = useLanguage()
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    cnic: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    needType: "",
    programName: "",
    reason: "",
    monthlyIncome: "",
    familySize: "",
    hasDisability: false,
    documents: null,
  })

  const steps = [
    {
      number: 1,
      title: t("personalInformation"),
      icon: User,
    },
    {
      number: 2,
      title: t("needDetails"),
      icon: FileText,
    },
    {
      number: 3,
      title: t("documents"),
      icon: Upload,
    },
  ]

  const needTypes = [
    { value: "rozgar", label: t("employmentHelp") },
    { value: "training", label: t("skillsTraining") },
    { value: "microloan", label: t("microloan") },
    { value: "ration", label: t("ration") },
    { value: "medical", label: t("medicalAidHelp") },
    { value: "education", label: t("educationalAid") },
  ]

  const cities = [
    "Karachi",
    "Lahore",
    "Islamabad",
    "Rawalpindi",
    "Faisalabad",
    "Multan",
    "Peshawar",
    "Quetta",
    "Sialkot",
    "Gujranwala",
    "Hyderabad",
    "Bahawalpur",
    "Sargodha",
    "Sukkur",
    "Larkana",
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    } else {
      // Submit form
      console.log("Form submitted:", formData)
      try {
        const response = await fetch("/api/apply", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })

        if (response.ok) {
          console.log("Application submitted successfully!")
          setIsSubmitted(true)
        } else {
          console.error("Failed to submit application.")
        }
      } catch (error) {
        console.error("Error submitting application:", error)
      }
    }
  }

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen py-12 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <CardTitle className="text-2xl text-emerald-600">{t("applicationSubmitted")}</CardTitle>
              <CardDescription className="text-lg">{t("yourApplicationHasBeenSuccessfullySubmitted")}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                {t("applicationNumber")}: HIM-2024-{Math.random().toString().substr(2, 6)}
              </p>
              <Button onClick={() => (window.location.href = "/")}>{t("backToHome")}</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">{t("applyForHelp")}</h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              {t("applyForAssistance")} - {t("weAreHereToHelpYou")}
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-4">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${
                      currentStep >= step.number
                        ? "bg-emerald-600 border-emerald-600 text-white"
                        : "border-slate-300 text-slate-400"
                    }`}
                  >
                    <step.icon className="h-6 w-6" />
                  </div>
                  <div className="ml-3 hidden sm:block">
                    <p
                      className={`text-sm font-medium ${
                        currentStep >= step.number ? "text-emerald-600" : "text-slate-400"
                      }`}
                    >
                      {step.title}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-16 h-0.5 mx-4 ${currentStep > step.number ? "bg-emerald-600" : "bg-slate-300"}`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{steps[currentStep - 1].title}</CardTitle>
              <CardDescription>
                {t("step")} {currentStep} {t("of")} {steps.length} - {t("pleaseFillAllRequiredFields")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t("full_Name")} *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder={t("yourFullName")}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cnic">{t("cnicNumber")} *</Label>
                      <Input
                        id="cnic"
                        required
                        value={formData.cnic}
                        onChange={(e) => handleInputChange("cnic", e.target.value)}
                        placeholder="00000-0000000-0"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">{t("phoneNumber")} *</Label>
                      <Input
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+92 300 0000000"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t("email")}</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="address">{t("completeAddress")} *</Label>
                      <Textarea
                        id="address"
                        required
                        value={formData.address}
                        onChange={(e) => handleInputChange("address", e.target.value)}
                        placeholder={t("yourCompleteAddress")}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">{t("city")} *</Label>
                      <Select value={formData.city} onValueChange={(value) => handleInputChange("city", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder={t("selectCity")} />
                        </SelectTrigger>
                        <SelectContent>
                          {cities.map((city) => (
                            <SelectItem key={city} value={city}>
                              {city}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {/* Step 2: Need Details */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="needType">{t("typeOfHelpNeeded")} *</Label>
                      <Select value={formData.needType} onValueChange={(value) => handleInputChange("needType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder={t("selectTypeOfHelp")} />
                        </SelectTrigger>
                        <SelectContent>
                          {needTypes.map((needType) => (
                            <SelectItem key={needType.value} value={needType.value}>
                              {needType.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Program Selection - Show only if rozgar or training is selected */}
                    {(formData.needType === "rozgar" || formData.needType === "training") && (
                      <div className="space-y-2">
                        <Label htmlFor="programName">{t("selectProgram")} *</Label>
                        <Select
                          value={formData.programName || ""}
                          onValueChange={(value) => handleInputChange("programName", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder={t("selectProgram")} />
                          </SelectTrigger>
                          <SelectContent>
                            {formData.needType === "rozgar" && (
                              <>
                                <SelectItem value="it-support">{t("itSupportTechnician")}</SelectItem>
                                <SelectItem value="motorcycle-mechanic">{t("motorcycleMechanic")}</SelectItem>
                                <SelectItem value="mobile-repair">{t("mobilePhoneRepair")}</SelectItem>
                                <SelectItem value="electrician">{t("electrician")}</SelectItem>
                                <SelectItem value="plumber">{t("plumber")}</SelectItem>
                              </>
                            )}
                            {formData.needType === "training" && (
                              <>
                                <SelectItem value="web-development">{t("webDevelopment")}</SelectItem>
                                <SelectItem value="graphic-design">{t("graphicDesign")}</SelectItem>
                                <SelectItem value="tailoring">{t("stitchingEmbroidery")}</SelectItem>
                                <SelectItem value="handbag-making">{t("handbagMaking")}</SelectItem>
                                <SelectItem value="cooking">{t("professionalCooking")}</SelectItem>
                                <SelectItem value="bakery">{t("bakeryConfectionery")}</SelectItem>
                                <SelectItem value="beauty-parlor">{t("beautyParlorCourse")}</SelectItem>
                              </>
                            )}
                          </SelectContent>
                        </Select>
                      </div>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="reason">{t("reasonForHelp")} *</Label>
                      <Textarea
                        id="reason"
                        required
                        value={formData.reason}
                        onChange={(e) => handleInputChange("reason", e.target.value)}
                        placeholder={t("pleaseExplainInDetailWhyYouNeedHelp")}
                        rows={4}
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="monthlyIncome">{t("monthlyIncome")}</Label>
                        <Input
                          id="monthlyIncome"
                          value={formData.monthlyIncome}
                          onChange={(e) => handleInputChange("monthlyIncome", e.target.value)}
                          placeholder={t("inPKR")}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="familySize">{t("familySize")}</Label>
                        <Input
                          id="familySize"
                          type="number"
                          value={formData.familySize}
                          onChange={(e) => handleInputChange("familySize", e.target.value)}
                          placeholder={t("totalMembers")}
                        />
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="disability"
                        checked={formData.hasDisability}
                        onCheckedChange={(checked) => handleInputChange("hasDisability", checked)}
                      />
                      <Label htmlFor="disability">{t("doYouOrAnyoneInYourFamilyHaveADisability")}</Label>
                    </div>
                  </div>
                )}

                {/* Step 3: Documents */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">{t("requiredDocuments")}</h3>
                      <div className="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg p-8 text-center">
                        <Upload className="mx-auto h-12 w-12 text-slate-400 mb-4" />
                        <p className="text-slate-600 dark:text-slate-300 mb-2">{t("uploadYourDocuments")}</p>
                        <p className="text-sm text-slate-500 mb-4">
                          {t("cnicCopy")}, {t("incomeProof")}, {t("proofOfResidence")}
                        </p>
                        <Button type="button" variant="outline">
                          {t("chooseFiles")}
                        </Button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6">
                  {currentStep > 1 && (
                    <Button type="button" variant="outline" onClick={() => setCurrentStep(currentStep - 1)}>
                      {t("previous")}
                    </Button>
                  )}
                  <Button
                    type="submit"
                    className={`${currentStep === 1 ? "ml-auto" : ""} bg-emerald-600 hover:bg-emerald-700`}
                  >
                    {currentStep === 3 ? t("submitApplication") : t("next")}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
