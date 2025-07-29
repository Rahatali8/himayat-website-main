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
import { CheckCircle, Upload, User, FileText, DollarSign, Calculator } from "lucide-react"

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
      title: t("personalInformation"),
      icon: User,
    },
    {
      number: 2,
      title: t("financialInformation"),
      icon: DollarSign,
    },
    {
      number: 3,
      title: t("loanDetails"),
      icon: Calculator,
    },
    {
      number: 4,
      title: t("guarantorReferences"),
      icon: FileText,
    },
    {
      number: 5,
      title: t("documentsVerification"),
      icon: Upload,
    },
  ]

  const loanTypes = [
    { value: "business", label: t("businessLoan") },
    { value: "agriculture", label: t("agriculture") },
    { value: "women", label: t("womenLoan") },
    { value: "emergency", label: t("emergencyLoan") },
    { value: "education", label: t("educationalAid") },
    { value: "housing", label: t("housingLoan") },
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
              <CardTitle className="text-2xl text-emerald-600">{t("loanApplicationSubmitted")}</CardTitle>
              <CardDescription className="text-lg">
                {t("yourLoanApplicationHasBeenSuccessfullySubmitted")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-6">
                <p className="text-slate-600 dark:text-slate-300">
                  {t("applicationNumber")}: LOAN-2024-{Math.random().toString().substr(2, 6)}
                </p>
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">{t("nextSteps")}:</h3>
                  <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1 text-left">
                    <li>• {t("ourTeamWillReviewYourApplication")}</li>
                    <li>• {t("requiredDocumentsWillBeVerified")}</li>
                    <li>• {t("youWillBeCalledForAnInterview")}</li>
                    <li>• {t("afterApprovalAmountWillBeTransferred")}</li>
                  </ul>
                </div>
              </div>
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
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">{t("loanApplication")}</h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">{t("getALoanOnEasyTerms")}</p>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-center mb-12 overflow-x-auto">
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
                      <Label htmlFor="fatherName">{t("fathersName")} *</Label>
                      <Input
                        id="fatherName"
                        required
                        value={formData.fatherName}
                        onChange={(e) => handleInputChange("fatherName", e.target.value)}
                        placeholder={t("fathersNamePlaceholder")}
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
                      <Label htmlFor="dateOfBirth">{t("dateOfBirth")} *</Label>
                      <Input
                        id="dateOfBirth"
                        type="date"
                        required
                        value={formData.dateOfBirth}
                        onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
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
                        rows={3}
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
                    <div className="space-y-2">
                      <Label>{t("maritalStatus")} *</Label>
                      <RadioGroup
                        value={formData.maritalStatus}
                        onValueChange={(value) => handleInputChange("maritalStatus", value)}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="single" id="single" />
                          <Label htmlFor="single">{t("single")}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="married" id="married" />
                          <Label htmlFor="married">{t("married")}</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dependents">{t("numberOfDependents")}</Label>
                      <Input
                        id="dependents"
                        type="number"
                        value={formData.dependents}
                        onChange={(e) => handleInputChange("dependents", e.target.value)}
                        placeholder="0"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="education">{t("educationLevel")}</Label>
                      <Select
                        value={formData.education}
                        onValueChange={(value) => handleInputChange("education", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder={t("selectEducation")} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="primary">{t("primary")}</SelectItem>
                          <SelectItem value="middle">{t("middle")}</SelectItem>
                          <SelectItem value="matric">{t("matric")}</SelectItem>
                          <SelectItem value="intermediate">{t("intermediate")}</SelectItem>
                          <SelectItem value="bachelor">{t("bachelor")}</SelectItem>
                          <SelectItem value="master">{t("master")}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {/* Step 2: Financial Information */}
                {currentStep === 2 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="monthlyIncome">{t("monthlyIncome")} *</Label>
                      <Input
                        id="monthlyIncome"
                        type="number"
                        required
                        value={formData.monthlyIncome}
                        onChange={(e) => handleInputChange("monthlyIncome", e.target.value)}
                        placeholder={t("inPKR")}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="incomeSource">{t("incomeSource")} *</Label>
                      <Select
                        value={formData.incomeSource}
                        onValueChange={(value) => handleInputChange("incomeSource", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder={t("selectSource")} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="salary">{t("salary")}</SelectItem>
                          <SelectItem value="business">{t("business")}</SelectItem>
                          <SelectItem value="agriculture">{t("agriculture")}</SelectItem>
                          <SelectItem value="freelance">{t("freelance")}</SelectItem>
                          <SelectItem value="other">{t("other")}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="employmentType">{t("employmentType")}</Label>
                      <Select
                        value={formData.employmentType}
                        onValueChange={(value) => handleInputChange("employmentType", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder={t("selectType")} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="permanent">{t("permanent")}</SelectItem>
                          <SelectItem value="contract">{t("contract")}</SelectItem>
                          <SelectItem value="self-employed">{t("selfEmployed")}</SelectItem>
                          <SelectItem value="unemployed">{t("unemployed")}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="employerName">{t("employerName")}</Label>
                      <Input
                        id="employerName"
                        value={formData.employerName}
                        onChange={(e) => handleInputChange("employerName", e.target.value)}
                        placeholder={t("companyEmployerName")}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="workExperience">{t("workExperience")}</Label>
                      <Input
                        id="workExperience"
                        value={formData.workExperience}
                        onChange={(e) => handleInputChange("workExperience", e.target.value)}
                        placeholder={t("inYears")}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bankAccount">{t("bankAccountNumber")} *</Label>
                      <Input
                        id="bankAccount"
                        required
                        value={formData.bankAccount}
                        onChange={(e) => handleInputChange("bankAccount", e.target.value)}
                        placeholder={t("accountNumber")}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bankName">{t("bankName")} *</Label>
                      <Select value={formData.bankName} onValueChange={(value) => handleInputChange("bankName", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder={t("selectBank")} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hbl">Habib Bank Limited (HBL)</SelectItem>
                          <SelectItem value="ubl">United Bank Limited (UBL)</SelectItem>
                          <SelectItem value="mcb">MCB Bank</SelectItem>
                          <SelectItem value="allied">Allied Bank</SelectItem>
                          <SelectItem value="nbp">National Bank of Pakistan</SelectItem>
                          <SelectItem value="askari">Askari Bank</SelectItem>
                          <SelectItem value="js">JS Bank</SelectItem>
                          <SelectItem value="other">{t("other")}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label>{t("doYouHaveAnyExistingLoans")}</Label>
                      <RadioGroup
                        value={formData.existingLoans}
                        onValueChange={(value) => handleInputChange("existingLoans", value)}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="no-loan" />
                          <Label htmlFor="no-loan">{t("no")}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="yes-loan" />
                          <Label htmlFor="yes-loan">{t("yes")}</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    {formData.existingLoans === "yes" && (
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="existingLoanAmount">{t("existingLoanAmount")}</Label>
                        <Input
                          id="existingLoanAmount"
                          type="number"
                          value={formData.existingLoanAmount}
                          onChange={(e) => handleInputChange("existingLoanAmount", e.target.value)}
                          placeholder={t("inPKR")}
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
                        <Label htmlFor="loanType">{t("loanType")} *</Label>
                        <Select
                          value={formData.loanType}
                          onValueChange={(value) => handleInputChange("loanType", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder={t("selectType")} />
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
                        <Label htmlFor="loanAmount">{t("loanAmount")} *</Label>
                        <Input
                          id="loanAmount"
                          type="number"
                          required
                          value={formData.loanAmount}
                          onChange={(e) => handleInputChange("loanAmount", e.target.value)}
                          placeholder={t("inPKR")}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="repaymentPeriod">{t("repaymentPeriod")} *</Label>
                        <Select
                          value={formData.repaymentPeriod}
                          onValueChange={(value) => handleInputChange("repaymentPeriod", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder={t("selectPeriod")} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="6">6 {t("months")}</SelectItem>
                            <SelectItem value="12">12 {t("months")}</SelectItem>
                            <SelectItem value="18">18 {t("months")}</SelectItem>
                            <SelectItem value="24">24 {t("months")}</SelectItem>
                            <SelectItem value="36">36 {t("months")}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">{t("estimatedMonthlyPayment")}</Label>
                        <div className="p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
                          <span className="text-lg font-bold text-emerald-600">
                            PKR {calculateMonthlyPayment().toLocaleString("en-US", { maximumFractionDigits: 0 })}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="loanPurpose">{t("loanPurpose")} *</Label>
                      <Textarea
                        id="loanPurpose"
                        required
                        value={formData.loanPurpose}
                        onChange={(e) => handleInputChange("loanPurpose", e.target.value)}
                        placeholder={t("pleaseExplainInDetail")}
                        rows={3}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="businessPlan">{t("businessPlan")}</Label>
                      <Textarea
                        id="businessPlan"
                        value={formData.businessPlan}
                        onChange={(e) => handleInputChange("businessPlan", e.target.value)}
                        placeholder={t("detailsOfYourBusinessPlan")}
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
                        <Label htmlFor="hasCollateral">{t("doYouHaveAnyCollateral")}</Label>
                      </div>

                      {formData.hasCollateral && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="collateralType">{t("collateralType")}</Label>
                            <Select
                              value={formData.collateralType}
                              onValueChange={(value) => handleInputChange("collateralType", value)}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder={t("selectType")} />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="property">{t("property")}</SelectItem>
                                <SelectItem value="vehicle">{t("vehicle")}</SelectItem>
                                <SelectItem value="gold">{t("gold")}</SelectItem>
                                <SelectItem value="other">{t("other")}</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="collateralValue">{t("collateralValue")}</Label>
                            <Input
                              id="collateralValue"
                              type="number"
                              value={formData.collateralValue}
                              onChange={(e) => handleInputChange("collateralValue", e.target.value)}
                              placeholder={t("inPKR")}
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
                      <h3 className="text-lg font-semibold border-b pb-2">{t("guarantorInformation")}</h3>
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                        <p className="text-sm text-blue-800 dark:text-blue-200">
                          {t("guarantorInformationIsMandatory")}
                        </p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="guarantorName">{t("guarantorName")} *</Label>
                          <Input
                            id="guarantorName"
                            required
                            value={formData.guarantorName}
                            onChange={(e) => handleInputChange("guarantorName", e.target.value)}
                            placeholder={t("guarantorsFullName")}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="guarantorCnic">{t("guarantorCNIC")} *</Label>
                          <Input
                            id="guarantorCnic"
                            required
                            value={formData.guarantorCnic}
                            onChange={(e) => handleInputChange("guarantorCnic", e.target.value)}
                            placeholder="00000-0000000-0"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="guarantorPhone">{t("guarantorPhone")} *</Label>
                          <Input
                            id="guarantorPhone"
                            required
                            value={formData.guarantorPhone}
                            onChange={(e) => handleInputChange("guarantorPhone", e.target.value)}
                            placeholder="+92 300 0000000"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="guarantorIncome">{t("guarantorIncome")} *</Label>
                          <Input
                            id="guarantorIncome"
                            type="number"
                            required
                            value={formData.guarantorIncome}
                            onChange={(e) => handleInputChange("guarantorIncome", e.target.value)}
                            placeholder={t("monthlyIncomePlaceholder")}
                          />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="guarantorAddress">{t("guarantorAddress")} *</Label>
                          <Textarea
                            id="guarantorAddress"
                            required
                            value={formData.guarantorAddress}
                            onChange={(e) => handleInputChange("guarantorAddress", e.target.value)}
                            placeholder={t("guarantorsCompleteAddress")}
                            rows={2}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="guarantorRelation">{t("relationship")} *</Label>
                          <Select
                            value={formData.guarantorRelation}
                            onValueChange={(value) => handleInputChange("guarantorRelation", value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder={t("selectRelationship")} />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="father">{t("father")}</SelectItem>
                              <SelectItem value="brother">{t("brother")}</SelectItem>
                              <SelectItem value="uncle">{t("uncle")}</SelectItem>
                              <SelectItem value="friend">{t("friend")}</SelectItem>
                              <SelectItem value="relative">{t("relative")}</SelectItem>
                              <SelectItem value="colleague">{t("colleague")}</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* References */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold border-b pb-2">{t("references")}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h4 className="font-medium">{t("firstReference")}</h4>
                          <div className="space-y-2">
                            <Label htmlFor="reference1Name">{t("name")} *</Label>
                            <Input
                              id="reference1Name"
                              required
                              value={formData.reference1Name}
                              onChange={(e) => handleInputChange("reference1Name", e.target.value)}
                              placeholder={t("referenceNamePlaceholder")}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="reference1Phone">{t("referencePhone")} *</Label>
                            <Input
                              id="reference1Phone"
                              required
                              value={formData.reference1Phone}
                              onChange={(e) => handleInputChange("reference1Phone", e.target.value)}
                              placeholder="+92 300 0000000"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="reference1Relation">{t("relationship")} *</Label>
                            <Input
                              id="reference1Relation"
                              required
                              value={formData.reference1Relation}
                              onChange={(e) => handleInputChange("reference1Relation", e.target.value)}
                              placeholder={t("relationshipWithYou")}
                            />
                          </div>
                        </div>
                        <div className="space-y-4">
                          <h4 className="font-medium">{t("secondReference")}</h4>
                          <div className="space-y-2">
                            <Label htmlFor="reference2Name">{t("name")} *</Label>
                            <Input
                              id="reference2Name"
                              required
                              value={formData.reference2Name}
                              onChange={(e) => handleInputChange("reference2Name", e.target.value)}
                              placeholder={t("referenceNamePlaceholder")}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="reference2Phone">{t("referencePhone")} *</Label>
                            <Input
                              id="reference2Phone"
                              required
                              value={formData.reference2Phone}
                              onChange={(e) => handleInputChange("reference2Phone", e.target.value)}
                              placeholder="+92 300 0000000"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="reference2Relation">{t("relationship")} *</Label>
                            <Input
                              id="reference2Relation"
                              required
                              value={formData.reference2Relation}
                              onChange={(e) => handleInputChange("reference2Relation", e.target.value)}
                              placeholder={t("relationshipWithYou")}
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
                      <h3 className="text-lg font-semibold">{t("requiredDocuments")}</h3>
                      <div className="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg p-8 text-center">
                        <Upload className="mx-auto h-12 w-12 text-slate-400 mb-4" />
                        <p className="text-slate-600 dark:text-slate-300 mb-2">{t("uploadYourDocuments")}</p>
                        <p className="text-sm text-slate-500 mb-4">{t("allDocumentsShouldBeInPdfOrImageFormat")}</p>
                        <Button type="button" variant="outline">
                          {t("chooseFiles")}
                        </Button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="text-sm">
                          <p className="font-semibold mb-3">{t("applicantDocuments")}:</p>
                          <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300">
                            <li>{t("copyofCNIC")}</li>
                            <li>{t("bankStatement6Months")}</li>
                            <li>{t("incomeProof")}</li>
                            <li>{t("proofOfAddress")}</li>
                            <li>{t("businessLicenseIfAny")}</li>
                            <li>{t("photographsPassportSize")}</li>
                          </ul>
                        </div>
                        <div className="text-sm">
                          <p className="font-semibold mb-3">{t("guarantorDocuments")}:</p>
                          <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300">
                            <li>{t("guarantorsCNIC")}</li>
                            <li>{t("guarantorsBankStatement")}</li>
                            <li>{t("guarantorsIncomeProof")}</li>
                            <li>{t("guarantorsPhotographs")}</li>
                            <li>{t("collateralDocuments")}</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="previousLoan"
                          checked={formData.previousLoan}
                          onCheckedChange={(checked) => handleInputChange("previousLoan", checked)}
                        />
                        <Label htmlFor="previousLoan">{t("haveYouTakenALoanFromHimayatBefore")}</Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="agreeTerms"
                          checked={formData.agreeTerms}
                          onCheckedChange={(checked) => handleInputChange("agreeTerms", checked)}
                          required
                        />
                        <Label htmlFor="agreeTerms" className="text-sm">
                          {t("iAgreeToAllTermsAndConditions")}
                        </Label>
                      </div>

                      <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                        <p className="text-sm text-yellow-800 dark:text-yellow-200">
                          {t("noteProvidingFalseInformation")}
                        </p>
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
                    disabled={currentStep === 5 && !formData.agreeTerms}
                  >
                    {currentStep === 5 ? t("submitApplication") : t("next")}
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
