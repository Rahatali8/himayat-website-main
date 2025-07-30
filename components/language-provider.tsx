"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "ur"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About",
    applyForHelp: "Apply for Help",
    rozgarPrograms: "Rozgar Programs",
    vocationalTraining: "Vocational Training",
    microfinance: "Microfinance",
    donate: "Donate",
    contact: "Contact",
    adminLogin: "Admin Login",
    services: "Services",
    apply: "Apply",
    applyForLoan: "Apply for Loan",
    dashboard: "Dashboard", // New
    vips: "VIPs", // New
    adminDashboard: "Admin Dashboard", // New
    donorsDashboard: "Donors Dashboard", // New
    media: "Media", // New
    images: "Images", // New
    videos: "Videos", // New
    blog: "Blog", // New
    news: "News", // New

    // Hero Section
    heroTitle: "First Step Towards Self-Reliant Pakistan",
    heroSubtitle: "Empowering communities through employment, skills training, and financial support",
    applyNow: "Apply Now",
    donateNow: "Donate Now",

    // Stats
    beneficiaries: "Beneficiaries",
    citiesServed: "Cities Served",
    donors: "Donors",
    womenTrained: "Women Trained",

    // Mission
    missionTitle: "Our Mission",
    missionText:
      "Himāyat is dedicated to creating sustainable income opportunities through skills development, microfinance, and comprehensive aid services for underprivileged communities across Pakistan.",

    // Programs (Homepage Cards)
    programsTitle: "Our Programs",
    rozgarSupport: "Employment Programs", // Changed from Rozgar Support
    rozgarDesc: "Job opportunities and placement in various sectors",
    vocationalDesc: "Free training and certification in various skills",
    microfinanceDesc: "Easy loans for small businesses on flexible terms",
    foodAssistance: "Food Assistance", // New
    foodAssistanceDesc: "Monthly rations and emergency food for needy families", // New
    medicalAid: "Medical Aid", // New
    medicalAidDesc: "Free medical treatment, medicines, and surgery support", // New
    educationalSupport: "Educational Support", // New
    educationalSupportDesc: "Financial support for children's education and scholarships", // New
    womenEmpowerment: "Women Empowerment", // New
    womenEmpowermentDesc: "Special programs and training for women's self-reliance", // New
    zakatDistribution: "Zakat Distribution", // New
    zakatDistributionDesc: "Distribution of Zakat according to Islamic principles", // New
    learnMore: "Learn More", // New

    // Footer
    quickLinks: "Quick Links",
    followUs: "Follow Us",
    newsletter: "Newsletter",
    newsletterText: "Subscribe to get updates on our programs",
    subscribe: "Subscribe",
    copyright: "© 2024 Himāyat. All rights reserved.",

    // User Dashboard
    userDashboard: "User Dashboard", // New
    dailyActivitiesProgramDetails: "Daily activities and program details", // New
    todaysDate: "Today's Date", // New
    todaysRequests: "Today's Requests", // New
    approvedToday: "Approved Today", // New
    pending: "Pending", // New
    totalHelped: "Total Helped", // New
    fromYesterday: "from yesterday", // New
    programDetails: "Program Details", // New
    recentRequests: "Recent Requests", // New
    analytics: "Analytics", // New
    totalHelpedCount: "Total Helped", // New
    todaysRequestsCount: "Today's Requests", // New
    approvedCount: "Approved", // New
    pendingCount: "Pending", // New
    activeProgram: "Active Program", // New
    todaysRecentRequests: "Today's Recent Requests", // New
    listOfAllRequestsReceivedToday: "List of all requests received today", // New
    weeklyProgress: "Weekly Progress", // New
    thisWeeksRequests: "This Week's Requests", // New
    approvedRequests: "Approved Requests", // New
    completedCases: "Completed Cases", // New
    monthlyTargets: "Monthly Targets", // New
    monthlyTargetCompleted: "Monthly Target Completed", // New
    monthlyTarget: "Monthly Target", // New

    // Admin Dashboard
    adminPanel: "Admin Panel", // New
    manageAllApplicationsRequests: "Manage all applications and requests with administrative privileges", // New
    exportData: "Export Data", // New
    notifications: "Notifications", // New
    settings: "Settings", // New
    totalApplications: "Total Applications", // New
    approvedRequestsAdmin: "Approved Requests", // New
    pendingReview: "Pending Review", // New
    totalDisbursed: "Total Disbursed", // New
    fromLastMonth: "from last month", // New
    advancedFiltersSearch: "Advanced Filters & Search", // New
    searchByNameOrId: "Search by name or ID...", // New
    filterByStatus: "Filter by Status", // New
    allStatus: "All Status", // New
    approved: "Approved", // New
    rejected: "Rejected", // New
    underReview: "Under Review", // New
    filterByType: "Filter by Type", // New
    allTypes: "All Types", // New
    employment: "Employment", // New
    training: "Training", // New
    medical: "Medical", // New
    ration: "Ration", // New
    businessLoan: "Business Loan", // New
    womenLoan: "Women Loan", // New
    applyFilters: "Apply Filters", // New
    helpRequestsManagement: "Help Requests Management", // New
    newRequest: "New Request", // New
    view: "View", // New
    approve: "Approve", // New
    reject: "Reject", // New
    loanApplicationsManagement: "Loan Applications Management", // New
    newLoan: "New Loan", // New
    review: "Review", // New
    approvedCasesManagement: "Approved Cases Management", // New
    allApprovedApplicationsStatus: "All approved applications and their current disbursement status", // New
    casesSuccessfullyApproved: "Cases Successfully Approved", // New
    successfullyProcessedDisbursed: "Successfully processed and disbursed applications with full tracking", // New
    viewAllApprovedCases: "View All Approved Cases", // New
    monthlyApplicationsTrend: "Monthly Applications Trend", // New
    advancedAnalyticsChart: "Advanced Analytics Chart will be displayed here", // New
    successRateByProgram: "Success Rate by Program", // New
    donorsManagement: "Donors Management", // New
    newDonor: "New Donor", // New
    addNewDonor: "Add New Donor", // New
    enterDonorInformation: "Enter donor information", // New
    donorName: "Donor name", // New
    emailAddress: "Email address", // New
    phoneNumber: "Phone number", // New
    city: "City", // New
    add: "Add", // New
    cancel: "Cancel", // New
    edit: "Edit", // New
    delete: "Delete", // New
    role: "Role", // New
    superAdmin: "Super Admin", // New
    admin: "Admin", // New
    superAdminFullAccess: "Super Admin - Full Access", // New
    adminLimitedAccess: "Admin - Limited Access", // New
    canApproveRejectAllRequests: "Can approve/reject all requests, create and manage donors", // New
    canViewRequestsApproveButCannotReject: "Can view requests, approve but cannot reject", // New

    // Donors Dashboard
    donorsPanel: "Donors Panel", // New
    trackDonationsImpact: "Track donations, impact, and community support", // New
    newDonation: "New Donation", // New
    donorRecognition: "Donor Recognition", // New
    totalDonations: "Total Donations", // New
    activeDonors: "Active Donors", // New
    familiesHelped: "Families Helped", // New
    thisMonth: "This Month", // New
    recentDonations: "Recent Donations", // New
    topDonors: "Top Donors", // New
    impactStories: "Impact Stories", // New
    viewAll: "View All", // New
    details: "Details", // New
    topDonorsRecognition: "Top Donors Recognition", // New
    mostGenerousSupporters: "Our most generous supporters", // New
    totalDonated: "Total Donated", // New
    numberOfDonations: "Number of Donations", // New
    type: "Type", // New
    successStoriesImpact: "Success Stories & Impact", // New
    realChangesMadePossible: "Real changes made possible by your donations", // New
    program: "Program", // New
    impact: "Impact", // New
    supportedBy: "Supported by", // New
    monthlyDonationTrends: "Monthly Donation Trends", // New
    detailedDonationChart: "Detailed donation chart will be displayed here", // New
    donationDistribution: "Donation Distribution", // New

    // Media Pages
    ourGallery: "Our Gallery", // New
    exploreOurVisualJourney: "Explore our visual journey and impact through photos", // New
    ourVideos: "Our Videos", // New
    watchOurImpactStories: "Watch our impact stories and program highlights", // New
    ourBlog: "Our Blog", // New
    insightsStoriesUpdates: "Insights, stories, and updates from Himāyat", // New
    latestNews: "Latest News", // New
    stayUpdatedWithOurWork: "Stay updated with our latest work and achievements", // New
    viewDetails: "View Details", // New
    watchNow: "Watch Now", // New
    readMore: "Read More", // New
    by: "by", // New
    source: "Source", // New
    date: "Date", // New
    allDocumentsShouldBeInPdfOrImageFormat: "All documents should be in PDF or image format", // New
    requiredDocuments: "Required documents:", // New
    copyofCNIC: "Copy of CNIC", // New
    incomeProofIfAny: "Income proof (if any)", // New
    proofOfResidence: "Proof of residence", // New
    bankAccountDetails: "Bank account details", // New
    applicantDocuments: "Applicant Documents:", // New
    bankStatement6Months: "Bank statement (6 months)", // New
    businessLicenseIfAny: "Business license (if any)", // New
    photographsPassportSize: "Photographs (passport size)", // New
    guarantorDocuments: "Guarantor Documents:", // New
    guarantorsCNIC: "Guarantor's CNIC", // New
    guarantorsBankStatement: "Guarantor's bank statement", // New
    guarantorsIncomeProof: "Guarantor's income proof", // New
    guarantorsPhotographs: "Guarantor's photographs", // New
    collateralDocuments: "Collateral documents", // New
    guarantorInformationIsMandatory:
      "Guarantor information is mandatory. Guarantor's monthly income should be at least equal to the loan amount.", // New
    guarantorName: "Guarantor Name", // New
    guarantorCNIC: "Guarantor CNIC", // New
    guarantorPhone: "Guarantor Phone", // New
    guarantorIncome: "Guarantor Income", // New
    guarantorAddress: "Guarantor Address", // New
    relationship: "Relationship", // New
    selectRelationship: "Select relationship", // New
    father: "Father", // New
    brother: "Brother", // New
    uncle: "Uncle", // New
    friend: "Friend", // New
    relative: "Relative", // New
    colleague: "Colleague", // New
    references: "References", // New
    firstReference: "First Reference", // New
    referenceName: "Reference name", // New
    referencePhone: "Phone", // New
    relationshipWithYou: "Relationship with you", // New
    secondReference: "Second Reference", // New
    haveYouTakenALoanFromHimayatBefore: "Have you taken a loan from Himāyat before?", // New
    iAgreeToAllTermsAndConditions:
      "I agree to all terms and conditions and confirm that all provided information is accurate", // New
    noteProvidingFalseInformation:
      "Note: Providing false information will result in rejection of your application and legal action may be taken.", // New
    personalInformation: "Personal Information", // New
    financialInformation: "Financial Information", // New
    loanDetails: "Loan Details", // New
    guarantorReferences: "Guarantor & References", // New
    documentsVerification: "Documents & Verification", // New
    full_Name: "Full Name", // New
    fathersName: "Father's Name", // New
    cnicNumber: "CNIC Number", // New
    dateOfBirth: "Date of Birth", // New
    phoneNumber: "Phone Number", // New
    email: "Email", // New
    completeAddress: "Complete Address", // New
    city: "City", // New
    maritalStatus: "Marital Status", // New
    single: "Single", // New
    married: "Married", // New
    numberOfDependents: "Number of Dependents", // New
    educationLevel: "Education Level", // New
    primary: "Primary", // New
    middle: "Middle", // New
    matric: "Matric", // New
    intermediate: "Intermediate", // New
    bachelor: "Bachelor", // New
    master: "Master", // New
    monthlyIncome: "Monthly Income", // New
    incomeSource: "Income Source", // New
    salary: "Salary", // New
    business: "Business", // New
    agriculture: "Agriculture", // New
    freelance: "Freelance", // New
    other: "Other", // New
    employmentType: "Employment Type", // New
    permanent: "Permanent", // New
    contract: "Contract", // New
    selfEmployed: "Self Employed", // New
    unemployed: "Unemployed", // New
    employerName: "Employer Name", // New
    workExperience: "Work Experience", // New
    bankAccountNumber: "Bank Account Number", // New
    bankName: "Bank Name", // New
    selectBank: "Select bank", // New
    doYouHaveAnyExistingLoans: "Do you have any existing loans?", // New
    no: "No", // New
    yes: "Yes", // New
    existingLoanAmount: "Existing Loan Amount", // New
    loanType: "Loan Type", // New
    loanAmount: "Loan Amount", // New
    repaymentPeriod: "Repayment Period", // New
    estimatedMonthlyPayment: "Estimated Monthly Payment", // New
    loanPurpose: "Loan Purpose", // New
    businessPlan: "Business Plan", // New
    doYouHaveAnyCollateral: "Do you have any collateral?", // New
    collateralType: "Collateral Type", // New
    property: "Property", // New
    vehicle: "Vehicle", // New
    gold: "Gold", // New
    collateralValue: "Collateral Value", // New
    uploadYourDocuments: "Upload your documents", // New
    chooseFiles: "Choose Files", // New
    applicationSubmitted: "Application Submitted!", // New
    yourLoanApplicationHasBeenSuccessfullySubmitted:
      "Your loan application has been successfully submitted. We will contact you within 24-48 hours.", // New
    applicationNumber: "Application Number", // New
    nextSteps: "Next Steps:", // New
    ourTeamWillReviewYourApplication: "Our team will review your application", // New
    requiredDocumentsWillBeVerified: "Required documents will be verified", // New
    youWillBeCalledForAnInterview: "You will be called for an interview", // New
    afterApprovalAmountWillBeTransferred: "After approval, amount will be transferred to your account", // New
    backToHome: "Back to Home", // New
    previous: "Previous", // New
    next: "Next", // New
    submitApplication: "Submit Application", // New
    applyForAssistance: "Apply for assistance", // New
    weAreHereToHelpYou: "We are here to help you", // New
    step: "Step", // New
    of: "of", // New
    pleaseFillAllRequiredFields: "Please fill all required fields", // New
    typeOfHelpNeeded: "Type of Help Needed", // New
    selectTypeOfHelp: "Select type of help", // New
    employmentHelp: "Employment", // New
    skillsTraining: "Skills Training", // New
    microloan: "Microloan", // New
    ration: "Ration", // New
    medicalAidHelp: "Medical Aid", // New
    educationalAid: "Educational Aid", // New
    selectProgram: "Select Program", // New
    itSupportTechnician: "IT Support Technician", // New
    motorcycleMechanic: "Motorcycle Mechanic", // New
    mobilePhoneRepair: "Mobile Phone Repair", // New
    electrician: "Electrician", // New
    plumber: "Plumber", // New
    webDevelopment: "Web Development", // New
    graphicDesign: "Graphic Design", // New
    stitchingEmbroidery: "Stitching & Embroidery", // New
    handbagMaking: "Handbag Making", // New
    professionalCooking: "Professional Cooking", // New
    bakeryConfectionery: "Bakery & Confectionery", // New
    beautyParlorCourse: "Beauty Parlor Course", // New
    reasonForHelp: "Reason for Help", // New
    pleaseExplainInDetailWhyYouNeedHelp: "Please explain in detail why you need help", // New
    inPKR: "In PKR", // New
    familySize: "Family Size", // New
    totalMembers: "Total members", // New
    doYouOrAnyoneInYourFamilyHaveADisability: "Do you or anyone in your family have a disability?", // New
    uploadYourDocuments: "Upload your documents", // New
    cnicCopy: "CNIC copy", // New
    incomeProof: "Income proof", // New
    proofOfAddress: "Proof of address", // New
    bankAccountDetails: "Bank account details", // New
    applicationSubmitted: "Application Submitted!", // New
    yourApplicationHasBeenSuccessfullySubmitted:
      "Your application has been successfully submitted. We will contact you soon.", // New
    applicationNumber: "Application Number", // New
    backToHome: "Back to Home", // New
    loanApplication: "Apply for Loan", // New
    getALoanOnEasyTerms: "Get a loan on easy terms", // New
    inYears: "In years", // New
    accountNumber: "Account number", // New
    companyEmployerName: "Company/Employer name", // New
    selectType: "Select type", // New
    selectSource: "Select source", // New
    detailsOfYourBusinessPlan: "Details of your business plan", // New
    pleaseExplainInDetail: "Please explain in detail", // New
    selectPeriod: "Select period", // New
    selectCity: "Select city", // New
    yourFullName: "Your full name", // New
    fathersNamePlaceholder: "Father's name", // New
    yourCompleteAddress: "Your complete address", // New
    selectEducation: "Select education", // New
    guarantorsFullName: "Guarantor's full name", // New
    guarantorsCompleteAddress: "Guarantor's complete address", // New
    monthlyIncomePlaceholder: "Monthly income", // New
    referenceNamePlaceholder: "Reference name", // New
    selectSubject: "Select subject", // New
    yourName: "Your name", // New
    writeYourMessageHere: "Write your message here...", // New
    sendMessage: "Send Message", // New
    messageSent: "Message Sent!", // New
    yourMessageHasBeenSentSuccessfully: "Your message has been sent successfully. We will contact you soon.", // New
    officeAddress: "Office Address", // New
    phoneNumbers: "Phone Numbers", // New
    emailContact: "Email", // New
    officeHours: "Office Hours", // New
    chatOnWhatsApp: "Chat on WhatsApp", // New
    ourLocation: "Our Location", // New
    googleMapsWillLoadHere: "Google Maps will load here", // New
    frequentlyAskedQuestions: "Frequently Asked Questions", // New
    findAnswersToCommonQuestionsHere: "Find answers to common questions here", // New
    haveMoreQuestions: "Have More Questions?", // New
    dontHesitateToContactUs: "Don't hesitate to contact us - we are here to help you", // New
    callNow: "Call Now", // New
    sendEmail: "Send Email", // New
    whatIsHimayat: "What is Himāyat?", // New
    howToApplyForHelp: "How to apply for help?", // New
    whatAreTheLoanTerms: "What are the loan terms?", // New
    isTrainingFree: "Is training free?", // New
    howToDonate: "How to donate?", // New
    doYouAcceptZakat: "Do you accept Zakat?", // New
    doYouHaveJobPlacement: "Do you have job placement?", // New
    areThereSeparateProgramsForWomen: "Are there separate programs for women?", // New
    // New services
    foodAssistanceService: "Food Assistance",
    medicalAidService: "Medical Aid",
    educationalSupportService: "Educational Support",
    womenEmpowermentService: "Women Empowerment",
    zakatDistributionService: "Zakat Distribution",
  },
  ur: {
    // Navigation
    home: "ہوم",
    about: "ہمارے بارے میں",
    applyForHelp: "مدد کے لیے درخواست دیں",
    rozgarPrograms: "روزگار پروگرام",
    vocationalTraining: "ہنر مندی تربیت",
    microfinance: "مائیکرو فنانس",
    donate: "عطیہ کریں",
    contact: "رابطہ کریں",
    adminLogin: "ایڈمن",
    services: "خدمات",
    apply: "درخواست",
    applyForLoan: "قرض کے لیے درخواست",
    dashboard: "ڈیش بورڈ", // New
    vips: "وی آئی پیز", // New
    adminDashboard: "ایڈمن ڈیش بورڈ", // New
    donorsDashboard: "ڈونرز ڈیش بورڈ", // New
    media: "میڈیا", // New
    images: "تصاویر", // New
    videos: "ویڈیوز", // New
    blog: "بلاگ", // New
    news: "خبریں", // New

    // Hero Section
    heroTitle: "خوددار پاکستان کے لیے پہلا قدم",
    heroSubtitle: "روزگار، ہنر مندی تربیت، اور مالی مدد کے ذریعے کمیونٹیز کو بااختیار بنانا",
    applyNow: "ابھی درخواست دیں",
    donateNow: "ابھی عطیہ کریں",

    // Stats
    beneficiaries: "مستفید افراد",
    citiesServed: "شہروں میں خدمات",
    donors: "عطیہ دہندگان",
    womenTrained: "تربیت یافتہ خواتین",

    // Mission
    missionTitle: "ہمارا مشن",
    missionText:
      "حمایت پاکستان بھر میں پسماندہ کمیونٹیز کے لیے ہنر کی ترقی، مائیکرو فنانس، اور جامع امدادی خدمات کے ذریعے پائیدار آمدنی کے مواقع پیدا کرنے کے لیے وقف ہے۔",

    // Programs (Homepage Cards)
    programsTitle: "ہمارے پروگرام",
    rozgarSupport: "روزگار پروگرام", // Changed from Rozgar Support
    rozgarDesc: "مختلف شعبوں میں ملازمت کے مواقع اور جاب پلیسمنٹ",
    vocationalDesc: "مختلف ہنروں میں مفت تربیت اور سرٹیفکیٹ",
    microfinanceDesc: "آسان شرائط پر چھوٹے کاروبار کے لیے قرض",
    foodAssistance: "راشن اور خوراک", // New
    foodAssistanceDesc: "ضرورت مند خاندانوں کو ماہانہ راشن اور ہنگامی خوراک", // New
    medicalAid: "طبی امداد", // New
    medicalAidDesc: "مفت طبی علاج، دوائیں، اور آپریشن کی مدد", // New
    educationalSupport: "تعلیمی امداد", // New
    educationalSupportDesc: "بچوں کی تعلیم کے لیے مالی مدد اور اسکالرشپ", // New
    womenEmpowerment: "خواتین کی بااختیاری", // New
    womenEmpowermentDesc: "خواتین کے لیے خصوصی پروگرام اور خود انحصاری کی تربیت", // New
    zakatDistribution: "زکوٰۃ کی تقسیم", // New
    zakatDistributionDesc: "شرعی اصولوں کے مطابق زکوٰۃ کی تقسیم", // New
    learnMore: "مزید جانیں", // New

    // Footer
    quickLinks: "فوری لنکس",
    followUs: "ہمیں فالو کریں",
    newsletter: "نیوز لیٹر",
    newsletterText: "ہمارے پروگراموں کی اپڈیٹس حاصل کرنے کے لیے سبسکرائب کریں",
    subscribe: "سبسکرائب کریں",
    copyright: "© ۲۰۲۴ حمایت۔ تمام حقوق محفوظ ہیں۔",

    // User Dashboard
    userDashboard: "صارف ڈیش بورڈ", // New
    dailyActivitiesProgramDetails: "روزانہ کی سرگرمیاں اور پروگرام کی تفصیلات", // New
    todaysDate: "آج کی تاریخ", // New
    todaysRequests: "آج کی درخواستیں", // New
    approvedToday: "آج منظور شدہ", // New
    pending: "زیر التواء", // New
    totalHelped: "کل مدد یافتہ", // New
    fromYesterday: "گزشتہ دن سے", // New
    programDetails: "پروگرام کی تفصیلات", // New
    recentRequests: "حالیہ درخواستیں", // New
    analytics: "تجزیات", // New
    totalHelpedCount: "کل مدد یافتہ", // New
    todaysRequestsCount: "آج کی درخواستیں", // New
    approvedCount: "منظور شدہ", // New
    pendingCount: "زیر التواء", // New
    activeProgram: "فعال پروگرام", // New
    todaysRecentRequests: "آج کی حالیہ درخواستیں", // New
    listOfAllRequestsReceivedToday: "آج موصولہ تمام درخواستوں کی فہرست", // New
    weeklyProgress: "ہفتہ وار پیش قدمی", // New
    thisWeeksRequests: "اس ہفتے کی درخواستیں", // New
    approvedRequests: "منظور شدہ درخواستیں", // New
    completedCases: "مکمل شدہ کیسز", // New
    monthlyTargets: "ماہانہ اہداف", // New
    monthlyTargetCompleted: "ماہانہ ہدف مکمل", // New
    monthlyTarget: "ماہانہ ہدف", // New

    // Admin Dashboard
    adminPanel: "ایڈمن پینل", // New
    manageAllApplicationsRequests: "تمام درخواستوں اور درخواستوں کا انتظام انتظامی مراعات کے ساتھ", // New
    exportData: "ڈیٹا ایکسپورٹ کریں", // New
    notifications: "اطلاعات", // New
    settings: "ترتیبات", // New
    totalApplications: "کل درخواستیں", // New
    approvedRequestsAdmin: "منظور شدہ درخواستیں", // New
    pendingReview: "زیر التواء جائزہ", // New
    totalDisbursed: "کل تقسیم شدہ", // New
    fromLastMonth: "گزشتہ ماہ سے", // New
    advancedFiltersSearch: "ایڈوانسڈ فلٹرز اور تلاش", // New
    searchByNameOrId: "نام یا ID سے تلاش کریں...", // New
    filterByStatus: "حالت کے لحاظ سے فلٹر کریں", // New
    allStatus: "تمام حالات", // New
    approved: "منظور شدہ", // New
    rejected: "مسترد", // New
    underReview: "زیر جائزہ", // New
    filterByType: "قسم کے لحاظ سے فلٹر کریں", // New
    allTypes: "تمام اقسام", // New
    employment: "روزگار", // New
    training: "تربیت", // New
    medical: "طبی", // New
    ration: "راشن", // New
    businessLoan: "کاروباری قرض", // New
    womenLoan: "خواتین کا قرض", // New
    applyFilters: "فلٹرز لگائیں", // New
    helpRequestsManagement: "مدد کی درخواستوں کا انتظام", // New
    newRequest: "نئی درخواست", // New
    view: "دیکھیں", // New
    approve: "منظور کریں", // New
    reject: "مسترد کریں", // New
    loanApplicationsManagement: "قرض کی درخواستوں کا انتظام", // New
    newLoan: "نیا قرض", // New
    review: "جائزہ لیں", // New
    approvedCasesManagement: "منظور شدہ کیسز کا انتظام", // New
    allApprovedApplicationsStatus: "تمام منظور شدہ درخواستیں اور ان کی موجودہ تقسیم کی حالت", // New
    casesSuccessfullyApproved: "کیسز کامیابی سے منظور ہوئے", // New
    successfullyProcessedDisbursed: "کامیابی سے پروسیس شدہ اور مکمل ٹریکنگ کے ساتھ تقسیم شدہ درخواستیں", // New
    viewAllApprovedCases: "تمام منظور شدہ کیسز دیکھیں", // New
    monthlyApplicationsTrend: "ماہانہ درخواستوں کا رجحان", // New
    advancedAnalyticsChart: "ایڈوانسڈ تجزیاتی چارٹ یہاں دکھایا جائے گا", // New
    successRateByProgram: "پروگرام کے لحاظ سے کامیابی کی شرح", // New
    donorsManagement: "ڈونرز کا انتظام", // New
    newDonor: "نیا ڈونر", // New
    addNewDonor: "نیا ڈونر شامل کریں", // New
    enterDonorInformation: "ڈونر کی معلومات درج کریں", // New
    donorName: "ڈونر کا نام", // New
    emailAddress: "ای میل ایڈریس", // New
    phoneNumber: "فون نمبر", // New
    city: "شہر", // New
    add: "شامل کریں", // New
    cancel: "منسوخ کریں", // New
    edit: "ترمیم", // New
    delete: "حذف", // New
    role: "رول", // New
    superAdmin: "سپر ایڈمن", // New
    admin: "ایڈمن", // New
    superAdminFullAccess: "سپر ایڈمن - مکمل اختیارات", // New
    adminLimitedAccess: "ایڈمن - محدود اختیارات", // New
    canApproveRejectAllRequests: "تمام درخواستوں کو منظور/مسترد کر سکتے ہیں، ڈونرز بنانے اور انتظام کر سکتے ہیں", // New
    canViewRequestsApproveButCannotReject: "صرف درخواستوں کو دیکھ سکتے ہیں، منظور کر سکتے ہیں لیکن مسترد نہیں کر سکتے", // New

    // Donors Dashboard
    donorsPanel: "ڈونرز پینل", // New
    trackDonationsImpact: "عطیات، اثرات، اور کمیونٹی سپورٹ کو ٹریک کریں", // New
    newDonation: "نیا عطیہ", // New
    donorRecognition: "ڈونر کی پہچان", // New
    totalDonations: "کل عطیات", // New
    activeDonors: "فعال ڈونرز", // New
    familiesHelped: "مدد یافتہ خاندان", // New
    thisMonth: "اس ماہ", // New
    recentDonations: "حالیہ عطیات", // New
    topDonors: "اعلیٰ ڈونرز", // New
    impactStories: "اثرات کی کہانیاں", // New
    viewAll: "تمام دیکھیں", // New
    details: "تفصیلات", // New
    topDonorsRecognition: "اعلیٰ ڈونرز کی پہچان", // New
    mostGenerousSupporters: "ہمارے سب سے زیادہ سخی معاونین", // New
    totalDonated: "کل عطیہ", // New
    numberOfDonations: "عطیات کی تعداد", // New
    type: "قسم", // New
    successStoriesImpact: "کامیابی کی کہانیاں اور اثرات", // New
    realChangesMadePossible: "آپ کے عطیات سے ممکن ہونے والی حقیقی تبدیلیاں", // New
    program: "پروگرام", // New
    impact: "اثر", // New
    supportedBy: "سپورٹ کیا گیا", // New
    monthlyDonationTrends: "ماہانہ عطیات کا رجحان", // New
    detailedDonationChart: "تفصیلی عطیہ چارٹ یہاں دکھایا جائے گا", // New
    donationDistribution: "عطیات کی تقسیم", // New

    // Media Pages
    ourGallery: "ہماری گیلری", // New
    exploreOurVisualJourney: "تصاویر کے ذریعے ہمارے بصری سفر اور اثرات کو دریافت کریں", // New
    ourVideos: "ہماری ویڈیوز", // New
    watchOurImpactStories: "ہماری اثرات کی کہانیاں اور پروگرام کی جھلکیاں دیکھیں", // New
    ourBlog: "ہمارا بلاگ", // New
    insightsStoriesUpdates: "حمایت سے بصیرت، کہانیاں، اور اپڈیٹس", // New
    latestNews: "تازہ ترین خبریں", // New
    stayUpdatedWithOurWork: "ہمارے تازہ ترین کام اور کامیابیوں سے باخبر رہیں", // New
    viewDetails: "تفصیلات دیکھیں", // New
    watchNow: "ابھی دیکھیں", // New
    readMore: "مزید پڑھیں", // New
    by: "بذریعہ", // New
    source: "ماخذ", // New
    date: "تاریخ", // New
    allDocumentsShouldBeInPdfOrImageFormat: "تمام دستاویزات PDF یا تصویری فارمیٹ میں ہونی چاہیے", // New
    requiredDocuments: "مطلوبہ دستاویزات:", // New
    copyofCNIC: "شناختی کارڈ کی کاپی", // New
    incomeProofIfAny: "آمدنی کا ثبوت (اگر کوئی ہے)", // New
    proofOfResidence: "رہائشی پتے کا ثبوت", // New
    bankAccountDetails: "بینک اکاؤنٹ کی تفصیلات", // New
    applicantDocuments: "درخواست گزار کی دستاویزات:", // New
    bankStatement6Months: "بینک اسٹیٹمنٹ (6 ماہ)", // New
    businessLicenseIfAny: "کاروباری لائسنس (اگر کوئی ہے)", // New
    photographsPassportSize: "تصاویر (پاسپورٹ سائز)", // New
    guarantorDocuments: "ضامن کی دستاویزات:", // New
    guarantorsCNIC: "ضامن کا شناختی کارڈ", // New
    guarantorsBankStatement: "ضامن کا بینک اسٹیٹمنٹ", // New
    guarantorsIncomeProof: "ضامن کی آمدنی کا ثبوت", // New
    guarantorsPhotographs: "ضامن کی تصاویر", // New
    collateralDocuments: "ضمانت کی دستاویزات", // New
    guarantorInformationIsMandatory:
      "ضامن کی معلومات لازمی ہے۔ ضامن کی ماہانہ آمدنی کم از کم قرض کی رقم کے برابر ہونی چاہیے۔", // New
    guarantorName: "ضامن کا نام", // New
    guarantorCNIC: "ضامن کا شناختی کارڈ", // New
    guarantorPhone: "ضامن کا فون", // New
    guarantorIncome: "ضامن کی آمدنی", // New
    guarantorAddress: "ضامن کا پتہ", // New
    relationship: "رشتہ", // New
    selectRelationship: "رشتہ منتخب کریں", // New
    father: "والد", // New
    brother: "بھائی", // New
    uncle: "چچا/ماما", // New
    friend: "دوست", // New
    relative: "رشتہ دار", // New
    colleague: "ساتھی", // New
    references: "حوالہ جات", // New
    firstReference: "پہلا حوالہ", // New
    referenceName: "حوالہ کا نام", // New
    referencePhone: "فون", // New
    relationshipWithYou: "آپ سے کیا رشتہ ہے", // New
    secondReference: "دوسرا حوالہ", // New
    haveYouTakenALoanFromHimayatBefore: "کیا آپ نے پہلے کبھی حمایت سے قرض لیا ہے؟", // New
    iAgreeToAllTermsAndConditions:
      "میں تمام شرائط و ضوابط سے اتفاق کرتا/کرتی ہوں اور تصدیق کرتا/کرتی ہوں کہ فراہم کردہ تمام معلومات درست ہیں", // New
    noteProvidingFalseInformation:
      "نوٹ: غلط معلومات فراہم کرنے پر آپ کی درخواست مسترد کر دی جائے گی اور قانونی کارروائی کی جا سکتی ہے۔", // New
    personalInformation: "ذاتی معلومات", // New
    financialInformation: "مالی معلومات", // New
    loanDetails: "قرض کی تفصیلات", // New
    guarantorReferences: "ضامن اور حوالہ جات", // New
    documentsVerification: "دستاویزات اور تصدیق", // New
    full_Name: "مکمل نام", // New
    fathersName: "والد کا نام", // New
    cnicNumber: "شناختی کارڈ نمبر", // New
    dateOfBirth: "تاریخ پیدائش", // New
    phoneNumber: "فون نمبر", // New
    email: "ای میل", // New
    completeAddress: "مکمل پتہ", // New
    city: "شہر", // New
    maritalStatus: "ازدواجی حالت", // New
    single: "غیر شادی شدہ", // New
    married: "شادی شدہ", // New
    numberOfDependents: "زیر کفالت افراد", // New
    educationLevel: "تعلیمی قابلیت", // New
    primary: "پرائمری", // New
    middle: "مڈل", // New
    matric: "میٹرک", // New
    intermediate: "انٹرمیڈیٹ", // New
    bachelor: "بیچلر", // New
    master: "ماسٹر", // New
    monthlyIncome: "ماہانہ آمدنی", // New
    incomeSource: "آمدنی کا ذریعہ", // New
    salary: "تنخواہ", // New
    business: "کاروبار", // New
    agriculture: "زراعت", // New
    freelance: "فری لانس", // New
    other: "دیگر", // New
    employmentType: "ملازمت کی قسم", // New
    permanent: "مستقل", // New
    contract: "کنٹریکٹ", // New
    selfEmployed: "خود کار", // New
    unemployed: "بے روزگار", // New
    employerName: "آجر کا نام", // New
    workExperience: "کام کا تجربہ", // New
    bankAccountNumber: "بینک اکاؤنٹ نمبر", // New
    bankName: "بینک کا نام", // New
    selectBank: "بینک منتخب کریں", // New
    doYouHaveAnyExistingLoans: "کیا آپ کا کوئی اور قرض ہے؟", // New
    no: "نہیں", // New
    yes: "ہاں", // New
    existingLoanAmount: "موجودہ قرض کی رقم", // New
    loanType: "قرض کی قسم", // New
    loanAmount: "قرض کی رقم", // New
    repaymentPeriod: "واپسی کی مدت", // New
    estimatedMonthlyPayment: "تخمینی ماہانہ قسط", // New
    loanPurpose: "قرض کا مقصد", // New
    businessPlan: "کاروباری منصوبہ", // New
    doYouHaveAnyCollateral: "کیا آپ کے پاس کوئی ضمانت ہے؟", // New
    collateralType: "ضمانت کی قسم", // New
    property: "جائیداد", // New
    vehicle: "گاڑی", // New
    gold: "سونا", // New
    collateralValue: "ضمانت کی قیمت", // New
    uploadYourDocuments: "دستاویزات اپ لوڈ کریں", // New
    chooseFiles: "فائل منتخب کریں", // New
    applicationSubmitted: "درخواست جمع ہو گئی!", // New
    yourLoanApplicationHasBeenSuccessfullySubmitted:
      "آپ کی قرض کی درخواست کامیابی سے جمع ہو گئی ہے۔ ہم 24-48 گھنٹوں میں آپ سے رابطہ کریں گے۔", // New
    applicationNumber: "درخواست نمبر", // New
    nextSteps: "اگلے قدامات:", // New
    ourTeamWillReviewYourApplication: "ہماری ٹیم آپ کی درخواست کا جائزہ لے گی", // New
    requiredDocumentsWillBeVerified: "ضروری دستاویزات کی تصدیق کی جائے گی", // New
    youWillBeCalledForAnInterview: "آپ کو انٹرویو کے لیے بلایا جائے گا", // New
    afterApprovalAmountWillBeTransferred: "منظوری کے بعد رقم آپ کے اکاؤنٹ میں بھیج دی جائے گی", // New
    backToHome: "ہوم پیج پر واپس", // New
    previous: "پچھلا", // New
    next: "اگلا", // New
    submitApplication: "درخواست جمع کریں", // New
    applyForAssistance: "مدد کے لیے درخواست دیں", // New
    weAreHereToHelpYou: "ہم آپ کی مدد کے لیے موجود ہیں", // New
    step: "قدم", // New
    of: "از", // New
    pleaseFillAllRequiredFields: "براہ کرم تمام فیلڈز بھریں", // New
    typeOfHelpNeeded: "مدد کی قسم", // New
    selectTypeOfHelp: "مدد کی قسم منتخب کریں", // New
    employmentHelp: "روزگار", // New
    skillsTraining: "ہنر مندی تربیت", // New
    microloan: "مائیکرو لون", // New
    ration: "راشن", // New
    medicalAidHelp: "طبی امداد", // New
    educationalAid: "تعلیمی امداد", // New
    selectProgram: "پروگرام منتخب کریں", // New
    itSupportTechnician: "IT سپورٹ ٹیکنیشن", // New
    motorcycleMechanic: "موٹر سائیکل مکینک", // New
    mobilePhoneRepair: "موبائل فون ریپیئر", // New
    electrician: "الیکٹریشن", // New
    plumber: "پلمبر", // New
    webDevelopment: "ویب ڈیولپمنٹ", // New
    graphicDesign: "گرافک ڈیزائن", // New
    stitchingEmbroidery: "سلائی کڑھائی", // New
    handbagMaking: "ہینڈ بیگ میکنگ", // New
    professionalCooking: "پیشہ ورانہ کھانا پکانا", // New
    bakeryConfectionery: "بیکری اینڈ کنفیکشنری", // New
    beautyParlorCourse: "بیوٹی پارلر کورس", // New
    reasonForHelp: "مدد کی وجہ", // New
    pleaseExplainInDetailWhyYouNeedHelp: "تفصیل سے بتائیں کہ آپ کو کیوں مدد کی ضرورت ہے", // New
    inPKR: "روپے میں", // New
    familySize: "خاندان کے افراد", // New
    totalMembers: "کل افراد", // New
    doYouOrAnyoneInYourFamilyHaveADisability: "کیا آپ یا آپ کے خاندان میں کوئی معذور ہے؟", // New
    uploadYourDocuments: "دستاویزات اپ لوڈ کریں", // New
    cnicCopy: "شناختی کارڈ کی کاپی", // New
    incomeProof: "آمدنی کا ثبوت", // New
    proofOfAddress: "رہائشی پتے کا ثبوت", // New
    bankAccountDetails: "بینک اکاؤنٹ کی تفصیلات", // New
    applicationSubmitted: "درخواست جمع ہو گئی!", // New
    yourApplicationHasBeenSuccessfullySubmitted:
      "آپ کی درخواست کامیابی سے جمع ہو گئی ہے۔ ہم جلد ہی آپ سے رابطہ کریں گے۔", // New
    applicationNumber: "درخواست نمبر", // New
    backToHome: "ہوم پیج پر واپس", // New
    loanApplication: "قرض کے لیے درخواست", // New
    getALoanOnEasyTerms: "آسان شرائط پر قرض حاصل کریں", // New
    inYears: "سال میں", // New
    accountNumber: "اکاؤنٹ نمبر", // New
    companyEmployerName: "کمپنی/آجر کا نام", // New
    selectType: "قسم منتخب کریں", // New
    selectSource: "ذریعہ منتخب کریں", // New
    detailsOfYourBusinessPlan: "اپنے کاروباری منصوبے کی تفصیل", // New
    pleaseExplainInDetail: "تفصیل سے بتائیں", // New
    selectPeriod: "مدت منتخب کریں", // New
    selectCity: "شہر منتخب کریں", // New
    yourFullName: "آپ کا مکمل نام", // New
    fathersNamePlaceholder: "والد کا نام", // New
    yourCompleteAddress: "آپ کا مکمل پتہ", // New
    selectEducation: "تعلیم منتخب کریں", // New
    guarantorsFullName: "ضامن کا مکمل نام", // New
    guarantorsCompleteAddress: "ضامن کا مکمل پتہ", // New
    monthlyIncomePlaceholder: "ماہانہ آمدنی", // New
    referenceNamePlaceholder: "حوالہ کا نام", // New
    selectSubject: "موضوع منتخب کریں", // New
    yourName: "آپ کا نام", // New
    writeYourMessageHere: "اپنا پیغام یہاں لکھیں...", // New
    sendMessage: "پیغام بھیجیں", // New
    messageSent: "پیغام بھیج دیا گیا!", // New
    yourMessageHasBeenSentSuccessfully: "آپ کا پیغام کامیابی سے بھیج دیا گیا ہے۔ ہم جلد ہی آپ سے رابطہ کریں گے۔", // New
    officeAddress: "دفتر کا پتہ", // New
    phoneNumbers: "فون نمبرز", // New
    emailContact: "ای میل", // New
    officeHours: "دفتری اوقات", // New
    chatOnWhatsApp: "WhatsApp پر چیٹ کریں", // New
    ourLocation: "ہمارا مقام", // New
    googleMapsWillLoadHere: "Google Maps یہاں لوڈ ہوگا", // New
    frequentlyAskedQuestions: "اکثر پوچھے جانے والے سوالات", // New
    findAnswersToCommonQuestionsHere: "یہاں آپ کو عام سوالات کے جوابات مل جائیں گے", // New
    haveMoreQuestions: "مزید سوالات ہیں؟", // New
    dontHesitateToContactUs: "ہم سے رابطہ کرنے میں ہچکچاہٹ نہ کریں - ہم آپ کی مدد کے لیے یہاں ہیں", // New
    callNow: "فون کریں", // New
    sendEmail: "ای میل کریں", // New
    whatIsHimayat: "حمایت کیا ہے؟", // New
    howToApplyForHelp: "مدد کے لیے کیسے درخواست دیں؟", // New
    whatAreTheLoanTerms: "قرض کی شرائط کیا ہیں؟", // New
    isTrainingFree: "تربیت مفت ہے؟", // New
    howToDonate: "عطیہ کیسے کریں؟", // New
    doYouAcceptZakat: "کیا آپ زکوٰۃ قبول کرتے ہیں؟", // New
    doYouHaveJobPlacement: "کیا آپ کے پاس جاب پلیسمنٹ ہے؟", // New
    areThereSeparateProgramsForWomen: "کیا خواتین کے لیے الگ پروگرام ہیں؟", // New
    // New services
    foodAssistanceService: "راشن اور خوراک",
    medicalAidService: "طبی امداد",
    educationalSupportService: "تعلیمی امداد",
    womenEmpowermentService: "خواتین کی بااختیاری",
    zakatDistributionService: "زکوٰۃ کی تقسیم",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language
    if (saved && (saved === "en" || saved === "ur")) {
      setLanguage(saved)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["en"]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      <div className={language === "ur" ? "rtl urdu-font" : "ltr"}>{children}</div>
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
