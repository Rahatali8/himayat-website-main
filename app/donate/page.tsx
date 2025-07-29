"use client"

import type React from "react"

import { useState } from "react"
import { Heart, CreditCard, Shield, CheckCircle, Users, Zap, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useLanguage } from "@/components/language-provider"

export default function DonatePage() {
  const { language, t } = useLanguage()
  const [donationType, setDonationType] = useState("one-time")
  const [amount, setAmount] = useState("")
  const [customAmount, setCustomAmount] = useState("")
  const [isZakat, setIsZakat] = useState(false)
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    email: "",
    phone: "",
    anonymous: false,
  })

  const predefinedAmounts = [500, 1000, 2500, 5000, 10000, 25000]

  const impactData = [
    {
      amount: 500,
      impact: language === "ur" ? "ایک خاندان کو ایک ہفتے کا راشن" : "One week ration for a family",
      icon: Gift,
    },
    {
      amount: 2000,
      impact: language === "ur" ? "ایک شخص کو ایک ماہ کی تربیت" : "One month training for a person",
      icon: Users,
    },
    {
      amount: 5000,
      impact: language === "ur" ? "چھوٹے کاروبار کے لیے مائیکرو لون" : "Microloan for small business",
      icon: Zap,
    },
  ]

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault()
    const finalAmount = amount === "custom" ? customAmount : amount

    // In a real application, this would integrate with Stripe
    console.log("Donation details:", {
      type: donationType,
      amount: finalAmount,
      isZakat,
      donor: donorInfo,
    })

    // Simulate payment processing
    alert(
      language === "ur"
        ? `شکریہ! آپ کا ${finalAmount} روپے کا عطیہ کامیابی سے موصول ہوا۔`
        : `Thank you! Your donation of PKR ${finalAmount} has been received successfully.`,
    )
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">{t("donate")}</h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              {language === "ur"
                ? "آپ کا عطیہ کسی کی زندگی بدل سکتا ہے۔ آج ہی کسی ضرورت مند کی مدد کریں۔"
                : "Your donation can change someone's life. Help someone in need today."}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Donation Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Heart className="h-6 w-6 text-red-500 mr-2" />
                    {t("makeADonation")}
                  </CardTitle>
                  <CardDescription>
                    {language === "ur" ? "محفوظ اور آسان طریقے سے عطیہ کریں" : "Donate securely and easily"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleDonate} className="space-y-6">
                    {/* Donation Type */}
                    <div className="space-y-3">
                      <Label className="text-base font-semibold">
                        {language === "ur" ? "عطیہ کی قسم" : "Donation Type"}
                      </Label>
                      <RadioGroup value={donationType} onValueChange={setDonationType}>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="one-time" id="one-time" />
                          <Label htmlFor="one-time">{language === "ur" ? "ایک بار" : "One-time"}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="monthly" id="monthly" />
                          <Label htmlFor="monthly">{language === "ur" ? "ماہانہ" : "Monthly"}</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Amount Selection */}
                    <div className="space-y-4">
                      <Label className="text-base font-semibold">
                        {language === "ur" ? "رقم منتخب کریں" : "Select Amount"}
                      </Label>
                      <div className="grid grid-cols-3 gap-3">
                        {predefinedAmounts.map((amt) => (
                          <Button
                            key={amt}
                            type="button"
                            variant={amount === amt.toString() ? "default" : "outline"}
                            onClick={() => setAmount(amt.toString())}
                            className="h-12"
                          >
                            PKR {amt.toLocaleString()}
                          </Button>
                        ))}
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="custom"
                          name="amount"
                          checked={amount === "custom"}
                          onChange={() => setAmount("custom")}
                          className="w-4 h-4 text-emerald-600 border-gray-300 focus:ring-emerald-500"
                        />
                        <Label htmlFor="custom" className="flex-1">
                          {language === "ur" ? "دوسری رقم" : "Other Amount"}
                        </Label>
                        {amount === "custom" && (
                          <Input
                            type="number"
                            placeholder="PKR"
                            value={customAmount}
                            onChange={(e) => setCustomAmount(e.target.value)}
                            className="w-32"
                          />
                        )}
                      </div>
                    </div>

                    {/* Zakat Option */}
                    <div className="flex items-center space-x-2 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
                      <Checkbox id="zakat" checked={isZakat} onCheckedChange={setIsZakat} />
                      <Label htmlFor="zakat" className="text-sm">
                        {language === "ur" ? "یہ زکوٰۃ کا عطیہ ہے" : "This is a Zakat donation"}
                      </Label>
                    </div>

                    {/* Donor Information */}
                    <div className="space-y-4">
                      <Label className="text-base font-semibold">
                        {language === "ur" ? "آپ کی معلومات" : "Your Information"}
                      </Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="donor-name">{t("name")} *</Label>
                          <Input
                            id="donor-name"
                            required
                            value={donorInfo.name}
                            onChange={(e) => setDonorInfo((prev) => ({ ...prev, name: e.target.value }))}
                            placeholder={t("yourName")}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="donor-email">{t("email")} *</Label>
                          <Input
                            id="donor-email"
                            type="email"
                            required
                            value={donorInfo.email}
                            onChange={(e) => setDonorInfo((prev) => ({ ...prev, email: e.target.value }))}
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="donor-phone">{t("phoneNumber")}</Label>
                        <Input
                          id="donor-phone"
                          value={donorInfo.phone}
                          onChange={(e) => setDonorInfo((prev) => ({ ...prev, phone: e.target.value }))}
                          placeholder="+92 300 0000000"
                        />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="anonymous"
                          checked={donorInfo.anonymous}
                          onCheckedChange={(checked) => setDonorInfo((prev) => ({ ...prev, anonymous: !!checked }))}
                        />
                        <Label htmlFor="anonymous" className="text-sm">
                          {language === "ur" ? "گمنام عطیہ کریں" : "Make this donation anonymous"}
                        </Label>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                      disabled={!amount || (amount === "custom" && !customAmount)}
                    >
                      <CreditCard className="h-5 w-5 mr-2" />
                      {language === "ur"
                        ? `PKR ${amount === "custom" ? customAmount : amount} عطیہ کریں`
                        : `Donate PKR ${amount === "custom" ? customAmount : amount}`}
                    </Button>

                    {/* Security Notice */}
                    <div className="flex items-center justify-center space-x-2 text-sm text-slate-500">
                      <Shield className="h-4 w-4" />
                      <span>{language === "ur" ? "محفوظ پیمنٹ - SSL انکرپٹڈ" : "Secure Payment - SSL Encrypted"}</span>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Impact & Info Sidebar */}
            <div className="space-y-6">
              {/* Impact Calculator */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">{t("yourImpact")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {impactData.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg"
                    >
                      <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div>
                        <div className="font-semibold text-emerald-600">PKR {item.amount.toLocaleString()}</div>
                        <div className="text-sm text-slate-600 dark:text-slate-300">{item.impact}</div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Recent Donations */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">{t("recentDonations")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { name: language === "ur" ? "احمد علی" : "Ahmad Ali", amount: 5000, time: "2 hours ago" },
                    { name: language === "ur" ? "فاطمہ خان" : "Fatima Khan", amount: 2500, time: "4 hours ago" },
                    { name: "Anonymous", amount: 10000, time: "6 hours ago" },
                    { name: language === "ur" ? "محمد حسن" : "Muhammad Hassan", amount: 1000, time: "1 day ago" },
                  ].map((donation, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>{donation.name}</span>
                      </div>
                      <div className="text-slate-600 dark:text-slate-300">
                        PKR {donation.amount.toLocaleString()} ({donation.time})
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
