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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useLanguage } from "@/components/language-provider"
import { CheckCircle, Upload, User, FileText } from "lucide-react"

export default function ApplyLoanPage() {
  const { language, t } = useLanguage()
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    // Personal Information
    name: "",
    fatherName: "",
    cnic: "",
    dateOfBirth: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    maritalStatus: "",
    dependents: "",
    education: "",

    // Financial Information
    monthlyIncome: "",
    incomeSource: "",
    employmentType: "",
    employerName: "",
    workExperience: "",
    bankAccount: "",
    bankName: "",
    existingLoans: "",
    existingLoanAmount: "",

    // Loan Details
    loanType: "",
    loanAmount: "",
    loanPurpose: "",
    businessPlan: "",
    repaymentPeriod: "",
    collateralType: "",
    collateralValue: "",

    // Guarantor Information
    guarantorName: "",
    guarantorCnic: "",
    guarantorPhone: "",
    guarantorAddress: "",
    guarantorRelation: "",
    guarantorIncome: "",

    // References
    reference1Name: "",
    reference1Phone: "",
    reference1Relation: "",
    reference2Name: "",
    reference2Phone: "",
    reference2Relation: "",

    // Additional Information
    hasCollateral: false,
    previousLoan: false,
    agreeTerms: false,
  })

  const steps = [
    {
      number: 1,
      title: language === "ur" ? "ذاتی معلومات" : "Personal Information",
      icon: User,
    },
    {
      number: 2,
      title: language === "ur" ? "مالی معلومات" : "Financial Information",
      icon: FileText,
    },
    {
      number: 3,
      title: language === "ur" ? "قرض کی تفصیلات" : "Loan Details",
      icon: FileText,
    },
    {
      number: 4,
      title: language === "ur" ? "ضامن اور حوالہ جات" : "Guarantor & References",
      icon: FileText,
    },
    {
      number: 5,
      title: language === "ur" ? "دستاویزات اور تصدیق" : "Documents & Verification",
      icon: Upload,
    },
  ]

  const loanTypes = [
    { value: "business", label: language === "ur" ? "کاروباری قرض" : "Business Loan" },
    { value: "agriculture", label: language === "ur" ? "زرعی قرض" : "Agriculture Loan" },
    { value: "women", label: language === "ur" ? "خواتین کا قرض" : "Women's Loan" },
    { value: "emergency", label: language === "ur" ? "ایمرجنسی قرض" : "Emergency Loan" },
    { value: "education", label: language === "ur" ? "تعلیمی قرض" : "Education Loan" },
    { value: "housing", label: language === "ur" ? "رہائشی قرض" : "Housing Loan" },
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
    "Mardan",
    "Kasur",
    "Rahim Yar Khan",
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1)
    } else {
      console.log("Loan application submitted:", formData)
      setIsSubmitted(true)
    }
  }

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const calculateMonthlyPayment = () => {
    const amount = Number.parseFloat(formData.loanAmount) || 0
    const period = Number.parseInt(formData.repaymentPeriod) || 12
    const interestRate =
      formData.loanType === "women"
        ? 0.08
        : formData.loanType === "agriculture"
          ? 0.1
          : formData.loanType === "emergency"
            ? 0.15
            : 0.12

    const monthlyRate = interestRate / 12
    const monthlyPayment =
      (amount * (monthlyRate * Math.pow(1 + monthlyRate, period))) / (Math.pow(1 + monthlyRate, period) - 1)

    return isNaN(monthlyPayment) ? 0 : monthlyPayment
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
              <CardTitle className="text-2xl text-emerald-600">
                {language === "ur" ? "قرض کی درخواست جمع ہو گئی!" : "Loan Application Submitted!"}
              </CardTitle>
              <CardDescription className="text-lg">
                {language === "ur"
                  ? "آپ کی قرض کی درخواست کامیابی سے جمع ہو گئی ہے۔ ہم 24-48 گھنٹوں میں آپ سے رابطہ کریں گے۔"
                  : "Your loan application has been successfully submitted. We will contact you within 24-48 hours."}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-6">
                <p className="text-slate-600 dark:text-slate-300">
                  {language === "ur"
                    ? "درخواست نمبر: LOAN-2024-" + Math.random().toString().substr(2, 6)
                    : "Application Number: LOAN-2024-" + Math.random().toString().substr(2, 6)}
                </p>
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">{language === "ur" ? "اگلے قدامات:" : "Next Steps:"}</h3>
                  <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1 text-left">
                    <li>
                      •{" "}
                      {language === "ur"
                        ? "ہماری ٹیم آپ کی درخواست کا جائزہ لے گی"
                        : "Our team will review your application"}
                    </li>
                    <li>
                      •{" "}
                      {language === "ur"
                        ? "ضروری دستاویزات کی تصدیق کی جائے گی"
                        : "Required documents will be verified"}
                    </li>
                    <li>
                      •{" "}
                      {language === "ur" ? "آپ کو انٹرویو کے لیے بلایا جائے گا" : "You will be called for an interview"}
                    </li>
                    <li>
                      •{" "}
                      {language === "ur"
                        ? "منظوری کے بعد رقم آپ کے اکاؤنٹ میں بھیج دی جائے گی"
                        : "After approval, amount will be transferred to your account"}
                    </li>
                  </ul>
                </div>
              </div>
              <Button onClick={() => (window.location.href = "/")}>
                {language === "ur" ? "ہوم پیج پر واپس" : "Back to Home"}
              </Button>
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
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">{t("applyForLoan")}</h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">{t("getALoanOnEasyTerms")}</p>
          </div>

          {/* Progress Steps */}
          {/* <div className="flex justify-center mb-12 overflow-x-auto">
            <div className="flex items-center space-x-2 md:space-x-4 min-w-max px-4">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border-2 ${
                      currentStep >= step.number
                        ? "bg-emerald-600 border-emerald-600 text-white"
                        : "border-slate-300 text-slate-400"
                    }`}
                  >
                    <step.icon className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <div className="ml-2 hidden sm:block">
                    <p
                      className={`text-xs md:text-sm font-medium ${
                        currentStep >= step.number ? "text-emerald-600" : "text-slate-400"
                      }`}
                    >
                      {step.title}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-8 md:w-16 h-0.5 mx-2 md:mx-4 ${currentStep > step.number ? "bg-emerald-600" : "bg-slate-300"}`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div> */}

          {/* Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{steps[currentStep - 1].title}</CardTitle>
              <CardDescription>
                {language === "ur"
                  ? `قدم ${currentStep} از ${steps.length} - براہ کرم تمام فیلڈز بھریں`
                  : `Step ${currentStep} of ${steps.length} - Please fill all required fields`}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">{language === "ur" ? "مکمل نام *" : "Full Name *"}</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder={language === "ur" ? "آپ کا مکمل نام" : "Your full name"}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="fatherName">{language === "ur" ? "والد کا نام *" : "Father's Name *"}</Label>
                      <Input
                        id="fatherName"
                        required
                        value={formData.fatherName}
                        onChange={(e) => handleInputChange("fatherName", e.target.value)}
                        placeholder={language === "ur" ? "والد کا نام" : "Father's name"}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cnic">{language === "ur" ? "شناختی کارڈ نمبر *" : "CNIC Number *"}</Label>
                      <Input
                        id="cnic"
                        required
                        value={formData.cnic}
                        onChange={(e) => handleInputChange("cnic", e.target.value)}
                        placeholder="00000-0000000-0"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dateOfBirth">{language === "ur" ? "تاریخ پیدائش *" : "Date of Birth *"}</Label>
                      <Input
                        id="dateOfBirth"
                        type="date"
                        required
                        value={formData.dateOfBirth}
                        onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">{language === "ur" ? "فون نمبر *" : "Phone Number *"}</Label>
                      <Input
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+92 300 0000000"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{language === "ur" ? "ای میل" : "Email"}</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="address">{language === "ur" ? "مکمل پتہ *" : "Complete Address *"}</Label>
                      <Textarea
                        id="address"
                        required
                        value={formData.address}
                        onChange={(e) => handleInputChange("address", e.target.value)}
                        placeholder={language === "ur" ? "آپ کا مکمل پتہ" : "Your complete address"}
                        rows={3}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">{language === "ur" ? "شہر *" : "City *"}</Label>
                      <Select value={formData.city} onValueChange={(value) => handleInputChange("city", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder={language === "ur" ? "شہر منتخب کریں" : "Select city"} />
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
                    <div className="space-y-2">
                      <Label>{language === "ur" ? "ازدواجی حالت *" : "Marital Status *"}</Label>
                      <RadioGroup
                        value={formData.maritalStatus}
                        onValueChange={(value) => handleInputChange("maritalStatus", value)}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="single" id="single" />
                          <Label htmlFor="single">{language === "ur" ? "غیر شادی شدہ" : "Single"}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="married" id="married" />
                          <Label htmlFor="married">{language === "ur" ? "شادی شدہ" : "Married"}</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dependents">
                        {language === "ur" ? "زیر کفالت افراد" : "Number of Dependents"}
                      </Label>
                      <Input
                        id="dependents"
                        type="number"
                        value={formData.dependents}
                        onChange={(e) => handleInputChange("dependents", e.target.value)}
                        placeholder="0"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="education">{language === "ur" ? "تعلیمی قابلیت" : "Education Level"}</Label>
                      <Select
                        value={formData.education}
                        onValueChange={(value) => handleInputChange("education", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder={language === "ur" ? "تعلیم منتخب کریں" : "Select education"} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="primary">{language === "ur" ? "پرائمری" : "Primary"}</SelectItem>
                          <SelectItem value="middle">{language === "ur" ? "مڈل" : "Middle"}</SelectItem>
                          <SelectItem value="matric">{language === "ur" ? "میٹرک" : "Matric"}</SelectItem>
                          <SelectItem value="intermediate">
                            {language === "ur" ? "انٹرمیڈیٹ" : "Intermediate"}
                          </SelectItem>
                          <SelectItem value="bachelor">{language === "ur" ? "بیچلر" : "Bachelor"}</SelectItem>
                          <SelectItem value="master">{language === "ur" ? "ماسٹر" : "Master"}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {/* Step 2: Financial Information */}
                {currentStep === 2 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="monthlyIncome">{language === "ur" ? "ماہانہ آمدنی *" : "Monthly Income *"}</Label>
                      <Input
                        id="monthlyIncome"
                        type="number"
                        required
                        value={formData.monthlyIncome}
                        onChange={(e) => handleInputChange("monthlyIncome", e.target.value)}
                        placeholder={language === "ur" ? "روپے میں" : "In PKR"}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="incomeSource">{language === "ur" ? "آمدنی کا ذریعہ *" : "Income Source *"}</Label>
                      <Select
                        value={formData.incomeSource}
                        onValueChange={(value) => handleInputChange("incomeSource", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder={language === "ur" ? "ذریعہ منتخب کریں" : "Select source"} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="salary">{language === "ur" ? "تنخواہ" : "Salary"}</SelectItem>
                          <SelectItem value="business">{language === "ur" ? "کاروبار" : "Business"}</SelectItem>
                          <SelectItem value="agriculture">{language === "ur" ? "زراعت" : "Agriculture"}</SelectItem>
                          <SelectItem value="freelance">{language === "ur" ? "فری لانس" : "Freelance"}</SelectItem>
                          <SelectItem value="other">{language === "ur" ? "دیگر" : "Other"}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="employmentType">{language === "ur" ? "ملازمت کی قسم" : "Employment Type"}</Label>
                      <Select
                        value={formData.employmentType}
                        onValueChange={(value) => handleInputChange("employmentType", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder={language === "ur" ? "قسم منتخب کریں" : "Select type"} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="permanent">{language === "ur" ? "مستقل" : "Permanent"}</SelectItem>
                          <SelectItem value="contract">{language === "ur" ? "کنٹریکٹ" : "Contract"}</SelectItem>
                          <SelectItem value="self-employed">
                            {language === "ur" ? "خود کار" : "Self Employed"}
                          </SelectItem>
                          <SelectItem value="unemployed">{language === "ur" ? "بے روزگار" : "Unemployed"}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="employerName">{language === "ur" ? "آجر کا نام" : "Employer Name"}</Label>
                      <Input
                        id="employerName"
                        value={formData.employerName}
                        onChange={(e) => handleInputChange("employerName", e.target.value)}
                        placeholder={language === "ur" ? "کمپنی/آجر کا نام" : "Company/Employer name"}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="workExperience">{language === "ur" ? "کام کا تجربہ" : "Work Experience"}</Label>
                      <Input
                        id="workExperience"
                        value={formData.workExperience}
                        onChange={(e) => handleInputChange("workExperience", e.target.value)}
                        placeholder={language === "ur" ? "سال میں" : "In years"}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bankAccount">
                        {language === "ur" ? "بینک اکاؤنٹ نمبر *" : "Bank Account Number *"}
                      </Label>
                      <Input
                        id="bankAccount"
                        required
                        value={formData.bankAccount}
                        onChange={(e) => handleInputChange("bankAccount", e.target.value)}
                        placeholder={language === "ur" ? "اکاؤنٹ نمبر" : "Account number"}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bankName">{language === "ur" ? "بینک کا نام *" : "Bank Name *"}</Label>
                      <Select value={formData.bankName} onValueChange={(value) => handleInputChange("bankName", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder={language === "ur" ? "بینک منتخب کریں" : "Select bank"} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hbl">Habib Bank Limited (HBL)</SelectItem>
                          <SelectItem value="ubl">United Bank Limited (UBL)</SelectItem>
                          <SelectItem value="mcb">MCB Bank</SelectItem>
                          <SelectItem value="allied">Allied Bank</SelectItem>
                          <SelectItem value="nbp">National Bank of Pakistan</SelectItem>
                          <SelectItem value="askari">Askari Bank</SelectItem>
                          <SelectItem value="js">JS Bank</SelectItem>
                          <SelectItem value="other">{language === "ur" ? "دیگر" : "Other"}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label>
                        {language === "ur" ? "کیا آپ کا کوئی اور قرض ہے؟" : "Do you have any existing loans?"}
                      </Label>
                      <RadioGroup
                        value={formData.existingLoans}
                        onValueChange={(value) => handleInputChange("existingLoans", value)}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="no-loan" />
                          <Label htmlFor="no-loan">{language === "ur" ? "نہیں" : "No"}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="yes-loan" />
                          <Label htmlFor="yes-loan">{language === "ur" ? "ہاں" : "Yes"}</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    {formData.existingLoans === "yes" && (
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="existingLoanAmount">
                          {language === "ur" ? "موجودہ قرض کی رقم" : "Existing Loan Amount"}
                        </Label>
                        <Input
                          id="existingLoanAmount"
                          type="number"
                          value={formData.existingLoanAmount}
                          onChange={(e) => handleInputChange("existingLoanAmount", e.target.value)}
                          placeholder={language === "ur" ? "روپے میں" : "In PKR"}
                        />
                      </div>
                    )}
                  </div>
                )}

                {/* Step 3: Loan Details */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="loanType">{language === "ur" ? "قرض کی قسم *" : "Loan Type *"}</Label>
                        <Select
                          value={formData.loanType}
                          onValueChange={(value) => handleInputChange("loanType", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder={language === "ur" ? "قسم منتخب کریں" : "Select type"} />
                          </SelectTrigger>
                          <SelectContent>
                            {loanTypes.map((type) => (
                              <SelectItem key={type.value} value={type.value}>
                                {type.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="loanAmount">{language === "ur" ? "قرض کی رقم *" : "Loan Amount *"}</Label>
                        <Input
                          id="loanAmount"
                          type="number"
                          required
                          value={formData.loanAmount}
                          onChange={(e) => handleInputChange("loanAmount", e.target.value)}
                          placeholder={language === "ur" ? "روپے میں" : "In PKR"}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="repaymentPeriod">
                          {language === "ur" ? "واپسی کی مدت *" : "Repayment Period *"}
                        </Label>
                        <Select
                          value={formData.repaymentPeriod}
                          onValueChange={(value) => handleInputChange("repaymentPeriod", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder={language === "ur" ? "مدت منتخب کریں" : "Select period"} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="6">6 {language === "ur" ? "ماہ" : "months"}</SelectItem>
                            <SelectItem value="12">12 {language === "ur" ? "ماہ" : "months"}</SelectItem>
                            <SelectItem value="18">18 {language === "ur" ? "ماہ" : "months"}</SelectItem>
                            <SelectItem value="24">24 {language === "ur" ? "ماہ" : "months"}</SelectItem>
                            <SelectItem value="36">36 {language === "ur" ? "ماہ" : "months"}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">
                          {language === "ur" ? "تخمینی ماہانہ قسط" : "Estimated Monthly Payment"}
                        </Label>
                        <div className="p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
                          <span className="text-lg font-bold text-emerald-600">
                            PKR {calculateMonthlyPayment().toLocaleString("en-US", { maximumFractionDigits: 0 })}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="loanPurpose">{language === "ur" ? "قرض کا مقصد *" : "Loan Purpose *"}</Label>
                      <Textarea
                        id="loanPurpose"
                        required
                        value={formData.loanPurpose}
                        onChange={(e) => handleInputChange("loanPurpose", e.target.value)}
                        placeholder={language === "ur" ? "تفصیل سے بتائیں" : "Please explain in detail"}
                        rows={3}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="businessPlan">{language === "ur" ? "کاروباری منصوبہ" : "Business Plan"}</Label>
                      <Textarea
                        id="businessPlan"
                        value={formData.businessPlan}
                        onChange={(e) => handleInputChange("businessPlan", e.target.value)}
                        placeholder={
                          language === "ur" ? "اپنے کاروباری منصوبہ کی تفصیل" : "Details of your business plan"
                        }
                        rows={4}
                      />
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="hasCollateral"
                          checked={formData.hasCollateral}
                          onCheckedChange={(checked) => handleInputChange("hasCollateral", checked)}
                        />
                        <Label htmlFor="hasCollateral">
                          {language === "ur" ? "کیا آپ کے پاس کوئی ضمانت ہے؟" : "Do you have any collateral?"}
                        </Label>
                      </div>

                      {formData.hasCollateral && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="collateralType">
                              {language === "ur" ? "ضمانت کی قسم" : "Collateral Type"}
                            </Label>
                            <Select
                              value={formData.collateralType}
                              onValueChange={(value) => handleInputChange("collateralType", value)}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder={language === "ur" ? "قسم منتخب کریں" : "Select type"} />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="property">{language === "ur" ? "جائیداد" : "Property"}</SelectItem>
                                <SelectItem value="vehicle">{language === "ur" ? "گاڑی" : "Vehicle"}</SelectItem>
                                <SelectItem value="gold">{language === "ur" ? "سونا" : "Gold"}</SelectItem>
                                <SelectItem value="other">{language === "ur" ? "دیگر" : "Other"}</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="collateralValue">
                              {language === "ur" ? "ضمانت کی قیمت" : "Collateral Value"}
                            </Label>
                            <Input
                              id="collateralValue"
                              type="number"
                              value={formData.collateralValue}
                              onChange={(e) => handleInputChange("collateralValue", e.target.value)}
                              placeholder={language === "ur" ? "روپے میں" : "In PKR"}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Step 4: Guarantor & References */}
                {currentStep === 4 && (
                  <div className="space-y-8">
                    {/* Guarantor Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold border-b pb-2">
                        {language === "ur" ? "ضامن کی معلومات" : "Guarantor Information"}
                      </h3>
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                        <p className="text-sm text-blue-800 dark:text-blue-200">
                          {language === "ur"
                            ? "ضامن کی معلومات لازمی ہے۔ ضامن کی ماہانہ آمدنی کم از کم قرض کی رقم کے برابر ہونی چاہیے۔"
                            : "Guarantor information is mandatory. Guarantor's monthly income should be at least equal to the loan amount."}
                        </p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="guarantorName">
                            {language === "ur" ? "ضامن کا نام *" : "Guarantor Name *"}
                          </Label>
                          <Input
                            id="guarantorName"
                            required
                            value={formData.guarantorName}
                            onChange={(e) => handleInputChange("guarantorName", e.target.value)}
                            placeholder={language === "ur" ? "ضامن کا مکمل نام" : "Guarantor's full name"}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="guarantorCnic">
                            {language === "ur" ? "ضامن کا شناختی کارڈ *" : "Guarantor CNIC *"}
                          </Label>
                          <Input
                            id="guarantorCnic"
                            required
                            value={formData.guarantorCnic}
                            onChange={(e) => handleInputChange("guarantorCnic", e.target.value)}
                            placeholder="00000-0000000-0"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="guarantorPhone">
                            {language === "ur" ? "ضامن کا فون *" : "Guarantor Phone *"}
                          </Label>
                          <Input
                            id="guarantorPhone"
                            required
                            value={formData.guarantorPhone}
                            onChange={(e) => handleInputChange("guarantorPhone", e.target.value)}
                            placeholder="+92 300 0000000"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="guarantorIncome">
                            {language === "ur" ? "ضامن کی آمدنی *" : "Guarantor Income *"}
                          </Label>
                          <Input
                            id="guarantorIncome"
                            type="number"
                            required
                            value={formData.guarantorIncome}
                            onChange={(e) => handleInputChange("guarantorIncome", e.target.value)}
                            placeholder={language === "ur" ? "ماہانہ آمدنی" : "Monthly income"}
                          />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="guarantorAddress">
                            {language === "ur" ? "ضامن کا پتہ *" : "Guarantor Address *"}
                          </Label>
                          <Textarea
                            id="guarantorAddress"
                            required
                            value={formData.guarantorAddress}
                            onChange={(e) => handleInputChange("guarantorAddress", e.target.value)}
                            placeholder={language === "ur" ? "ضامن کا مکمل پتہ" : "Guarantor's complete address"}
                            rows={2}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="guarantorRelation">{language === "ur" ? "رشتہ *" : "Relationship *"}</Label>
                          <Select
                            value={formData.guarantorRelation}
                            onValueChange={(value) => handleInputChange("guarantorRelation", value)}
                          >
                            <SelectTrigger>
                              <SelectValue
                                placeholder={language === "ur" ? "رشتہ منتخب کریں" : "Select relationship"}
                              />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="father">{language === "ur" ? "والد" : "Father"}</SelectItem>
                              <SelectItem value="brother">{language === "ur" ? "بھائی" : "Brother"}</SelectItem>
                              <SelectItem value="uncle">{language === "ur" ? "چچا/ماما" : "Uncle"}</SelectItem>
                              <SelectItem value="friend">{language === "ur" ? "دوست" : "Friend"}</SelectItem>
                              <SelectItem value="relative">{language === "ur" ? "رشتہ دار" : "Relative"}</SelectItem>
                              <SelectItem value="colleague">{language === "ur" ? "ساتھی" : "Colleague"}</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* References */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold border-b pb-2">
                        {language === "ur" ? "حوالہ جات" : "References"}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h4 className="font-medium">{language === "ur" ? "پہلا حوالہ" : "First Reference"}</h4>
                          <div className="space-y-2">
                            <Label htmlFor="reference1Name">{language === "ur" ? "نام *" : "Name *"}</Label>
                            <Input
                              id="reference1Name"
                              required
                              value={formData.reference1Name}
                              onChange={(e) => handleInputChange("reference1Name", e.target.value)}
                              placeholder={language === "ur" ? "حوالہ کا نام" : "Reference name"}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="reference1Phone">{language === "ur" ? "فون *" : "Phone *"}</Label>
                            <Input
                              id="reference1Phone"
                              required
                              value={formData.reference1Phone}
                              onChange={(e) => handleInputChange("reference1Phone", e.target.value)}
                              placeholder="+92 300 0000000"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="reference1Relation">
                              {language === "ur" ? "رشتہ *" : "Relationship *"}
                            </Label>
                            <Input
                              id="reference1Relation"
                              required
                              value={formData.reference1Relation}
                              onChange={(e) => handleInputChange("reference1Relation", e.target.value)}
                              placeholder={language === "ur" ? "آپ سے کیا رشتہ ہے" : "Relationship with you"}
                            />
                          </div>
                        </div>
                        <div className="space-y-4">
                          <h4 className="font-medium">{language === "ur" ? "دوسرا حوالہ" : "Second Reference"}</h4>
                          <div className="space-y-2">
                            <Label htmlFor="reference2Name">{language === "ur" ? "نام *" : "Name *"}</Label>
                            <Input
                              id="reference2Name"
                              required
                              value={formData.reference2Name}
                              onChange={(e) => handleInputChange("reference2Name", e.target.value)}
                              placeholder={language === "ur" ? "حوالہ کا نام" : "Reference name"}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="reference2Phone">{language === "ur" ? "فون *" : "Phone *"}</Label>
                            <Input
                              id="reference2Phone"
                              required
                              value={formData.reference2Phone}
                              onChange={(e) => handleInputChange("reference2Phone", e.target.value)}
                              placeholder="+92 300 0000000"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="reference2Relation">
                              {language === "ur" ? "رشتہ *" : "Relationship *"}
                            </Label>
                            <Input
                              id="reference2Relation"
                              required
                              value={formData.reference2Relation}
                              onChange={(e) => handleInputChange("reference2Relation", e.target.value)}
                              placeholder={language === "ur" ? "آپ سے کیا رشتہ ہے" : "Relationship with you"}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 5: Documents & Verification */}
                {currentStep === 5 && (
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">
                        {language === "ur" ? "ضروری دستاویزات" : "Required Documents"}
                      </h3>
                      <div className="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg p-8 text-center">
                        <Upload className="mx-auto h-12 w-12 text-slate-400 mb-4" />
                        <p className="text-slate-600 dark:text-slate-300 mb-2">
                          {language === "ur" ? "دستاویزات اپ لوڈ کریں" : "Upload your documents"}
                        </p>
                        <p className="text-sm text-slate-500 mb-4">
                          {language === "ur"
                            ? "تمام دستاویزات PDF یا تصویری فارمیٹ میں ہونی چاہیے"
                            : "All documents should be in PDF or image format"}
                        </p>
                        <Button type="button" variant="outline">
                          {language === "ur" ? "فائل منتخب کریں" : "Choose Files"}
                        </Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="text-sm">
                        <p className="font-semibold mb-3">
                          {language === "ur" ? "درخواست گزار کی دستاویزات:" : "Applicant Documents:"}
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300">
                          <li>{language === "ur" ? "شناختی کارڈ کی کاپی" : "Copy of CNIC"}</li>
                          <li>{language === "ur" ? "بینک اسٹیٹمنٹ (6 ماہ)" : "Bank statement (6 months)"}</li>
                          <li>{language === "ur" ? "آمدنی کا ثبوت" : "Income proof"}</li>
                          <li>{language === "ur" ? "رہائشی پتے کا ثبوت" : "Proof of residence"}</li>
                          <li>{language === "ur" ? "کاروباری لائسنس (اگر کوئی ہے)" : "Business license (if any)"}</li>
                          <li>{language === "ur" ? "تصاویر (پاسپورٹ سائز)" : "Photographs (passport size)"}</li>
                        </ul>
                      </div>
                      <div className="text-sm">
                        <p className="font-semibold mb-3">
                          {language === "ur" ? "ضامن کی دستاویزات:" : "Guarantor Documents:"}
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300">
                          <li>{language === "ur" ? "ضامن کا شناختی کارڈ" : "Guarantor's CNIC"}</li>
                          <li>{language === "ur" ? "ضامن کا بینک اسٹیٹمنٹ" : "Guarantor's bank statement"}</li>
                          <li>{language === "ur" ? "ضامن کی آمدنی کا ثبوت" : "Guarantor's income proof"}</li>
                          <li>{language === "ur" ? "ضامن کی تصاویر" : "Guarantor's photographs"}</li>
                          <li>{language === "ur" ? "ضمانت کی دستاویزات" : "Collateral documents"}</li>
                        </ul>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="previousLoan"
                          checked={formData.previousLoan}
                          onCheckedChange={(checked) => handleInputChange("previousLoan", checked)}
                        />
                        <Label htmlFor="previousLoan">
                          {language === "ur"
                            ? "کیا آپ نے پہلے کبھی حمایت سے قرض لیا ہے؟"
                            : "Have you taken a loan from Himāyat before?"}
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="agreeTerms"
                          checked={formData.agreeTerms}
                          onCheckedChange={(checked) => handleInputChange("agreeTerms", checked)}
                          required
                        />
                        <Label htmlFor="agreeTerms" className="text-sm">
                          {language === "ur"
                            ? "میں تمام شرائط و ضوابط سے اتفاق کرتا/کرتی ہوں اور تصدیق کرتا/کرتی ہوں کہ فراہم کردہ تمام معلومات درست ہیں"
                            : "I agree to all terms and conditions and confirm that all provided information is accurate"}
                        </Label>
                      </div>

                      <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                        <p className="text-sm text-yellow-800 dark:text-yellow-200">
                          {language === "ur"
                            ? "نوٹ: غلط معلومات فراہم کرنے پر آپ کی درخواست مسترد کر دی جائے گی اور قانونی کارروائی کی جا سکتی ہے۔"
                            : "Note: Providing false information will result in rejection of your application and legal action may be taken."}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6">
                  {currentStep > 1 && (
                    <Button type="button" variant="outline" onClick={() => setCurrentStep(currentStep - 1)}>
                      {language === "ur" ? "پچھلا" : "Previous"}
                    </Button>
                  )}
                  <Button
                    type="submit"
                    className={`${currentStep === 1 ? "ml-auto" : ""} bg-emerald-600 hover:bg-emerald-700`}
                    disabled={currentStep === 5 && !formData.agreeTerms}
                  >
                    {currentStep === 5
                      ? language === "ur"
                        ? "درخواست جمع کریں"
                        : "Submit Application"
                      : language === "ur"
                        ? "اگلا"
                        : "Next"}
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
