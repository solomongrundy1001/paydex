import {
  Send, Shield, BarChart3, Globe, Zap, Link2, Building2, Users, Briefcase,
  HeartHandshake, Code2, PhoneCall, BookOpen, Award, TrendingUp, CheckCircle2,
  CreditCard, RefreshCcw, Lock, Layers, Plus, Minus, Star, Quote, Play,
  ArrowUpRight, FileText, 
} from "lucide-react";

export const ICON_MAP = { Send, Shield, BarChart3, Globe, Zap, Link2, Building2, Users,
  Briefcase, HeartHandshake, Code2, PhoneCall, BookOpen, Award, TrendingUp,
  CheckCircle2, CreditCard, RefreshCcw, Lock, Layers, Star, Quote, Play,
  FileText, ArrowUpRight };

export const NAV_ROUTES = [
  {
    label: "Solutions", imgBg: "#0D9488", imgEmoji: "💸",imgSrc: "/images/paydex-dashboard.png",
    headline: "Payments built for every workflow",
    desc: "Tools that let you pay, collect, and manage money at enterprise scale.",
    subs: [
      { label: "Mass Payouts",         desc: "Disburse to thousands instantly",  slug: "/solutions/mass-payouts",         icon: "Send" },
      { label: "Invoice Payments",     desc: "Automated B2B settlement",          slug: "/solutions/invoice-payments",     icon: "CreditCard" },
      { label: "Payroll Disbursement", desc: "Multi-currency payroll flows",      slug: "/solutions/payroll-disbursement", icon: "RefreshCcw" },
      { label: "Vendor Payments",      desc: "Streamlined supplier payouts",      slug: "/solutions/vendor-payments",      icon: "Layers" },
      { label: "Receivables Suite",    desc: "Collect and reconcile faster",      slug: "/solutions/receivables-suite",    icon: "TrendingUp" },
      { label: "Analytics Dashboard",  desc: "Real-time financial visibility",    slug: "/solutions/analytics-dashboard",  icon: "BarChart3" },
    ],
  },
  {
    label: "Who We Serve", imgBg: "#065F46", imgEmoji: "🏢",imgSrc: "/images/modern-equipped-computer-lab.jpg",
    headline: "Solutions for every business type",
    desc: "Whether you are a bank, enterprise, or growing startup — we have you covered.",
    subs: [
      { label: "Financial Institutions", desc: "Banks, lenders, and fintech platforms", slug: "/who-we-serve/financial-institutions", icon: "Building2" },
      { label: "Enterprises",            desc: "Large global organizations",       slug: "/who-we-serve/enterprises",            icon: "Briefcase" },
      { label: "Mid-Size Businesses",    desc: "Growing companies scaling payments",        slug: "/who-we-serve/mid-size-businesses",    icon: "Users" },
      { label: "Nonprofits",             desc: "Grant and donor payouts",     slug: "/who-we-serve/nonprofits",             icon: "HeartHandshake" },
      { label: "Developer Portal",       desc: "APIs, SDKs and sandbox",      slug: "/who-we-serve/developer-portal",       icon: "Code2" },
    ],
  },
  {
    label: "Platform", imgBg: "#0F766E", imgEmoji: "⚙️", imgSrc: "/images/business-scaling.jpg",
    headline: "A platform built for scale",
    desc: "Secure, compliant, and deeply integrated with your existing stack.",
    subs: [
      { label: "Security and Compliance", desc: "SOC 2, PCI DSS, GDPR",     slug: "/platform/security-compliance",  icon: "Shield" },
      { label: "API and Integrations",    desc: "200+ connectors",           slug: "/platform/api-integrations",     icon: "Link2" },
      { label: "Global Rails",            desc: "Multi-Currency Support",           slug: "/platform/global-rails",         icon: "Globe" },
      { label: "Fraud Prevention",        desc: "AI-powered detection",      slug: "/platform/fraud-prevention",     icon: "Lock" },
      { label: "Real-Time Processing",    desc: "Sub-second settlement",     slug: "/platform/real-time-processing", icon: "Zap" },
    ],
  },
  {
    label: "About Us", imgBg: "#042F2E", imgEmoji: "🌍", imgSrc: "/images/multiple-transactions.jpeg",
    headline: "Modern payment infrastructure for global businesses",
    desc: "Built by operators, for operators.",
    subs: [
      { label: "Our Story",    desc: "Mission and milestones",  slug: "/about/our-story",    icon: "Award" },
      { label: "Leadership",   desc: "Meet the team",           slug: "/about/leadership",   icon: "Users" },
      { label: "Newsroom",     desc: "Press and announcements", slug: "/about/newsroom",     icon: "BookOpen" },
      { label: "Careers",      desc: "Join us",                 slug: "/about/careers",      icon: "Star" },
      { label: "Case Studies", desc: "Real client outcomes",    slug: "/about/case-studies", icon: "FileText" },
    ],
  },
  {
    label: "Support", imgBg: "#134E4A", imgEmoji: "🛟", imgSrc: "/images/paydex-support.jpeg",
    headline: "We are here when you need us",
    desc: "From onboarding to enterprise support.",
    subs: [
      { label: "Contact Support",  desc: "Reach our team",       slug: "/support/contact",          icon: "PhoneCall" },
      // { label: "Help Center",      desc: "FAQs and guides",      slug: "/support/help-center",      icon: "BookOpen" },
      { label: "System Status",    desc: "Uptime and incidents", slug: "/support/system-status",    icon: "CheckCircle2" },
      { label: "Onboarding Guide", desc: "Get set up fast",      slug: "/support/onboarding-guide", icon: "Play" },
    ],
  },
];

