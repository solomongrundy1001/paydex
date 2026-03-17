export const CASE_STUDIES = [
  {
    id: "logistics-marketplace-driver-payouts",
    company: "Global Logistics Marketplace",
    title: "Automating Driver Payouts for a Logistics Platform",
    industry: "Logistics",
    result: "80% faster reconciliation",
    minRead: 6,

    excerpt:
      "A fast-growing logistics marketplace used Paydex to automate weekly payouts to over 2,000 drivers across multiple regions, reducing reconciliation time by 80% and eliminating manual payment workflows.",

    cover:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",

    init: "LM",

    blocks: [
      { type: "section", label: "The Challenge" },

      {
        type: "text",
        content:
          "Every Friday the finance team at this global logistics marketplace spent hours processing payouts for more than 2,000 independent drivers operating across the United States and Europe. Each payment required manual entry through multiple corporate banking portals followed by reconciliation against the company's internal trip and earnings records.",
      },

      {
        type: "text",
        content:
          "The process was slow, fragmented, and difficult to scale. As driver volume grew week after week, the operations team found themselves spending more time managing payments than supporting the growth of the marketplace.",
      },

      {
        type: "text",
        content:
          "Failed transfers, incorrect account details, and duplicate payments were common issues. Drivers frequently contacted support to ask about missing payouts, and the finance team had limited visibility into the status of each transaction once it left the bank portal.",
      },

      {
        type: "text",
        content:
          "As the platform expanded internationally, the complexity multiplied. Different banking rails, varying settlement times, and compliance requirements made manual payment workflows increasingly unsustainable.",
      },

      {
        type: "stat-row",
        stats: [
          { value: "2,000+", label: "Drivers paid weekly" },
          { value: "8 hours", label: "Manual payout processing time" },
          { value: "~12%", label: "Error rate on payouts" },
        ],
      },

      { type: "section", label: "The Solution" },

      {
        type: "text",
        content:
          "The company integrated Paydex’s payout infrastructure directly into its driver management platform using the Paydex API. At the end of each payout cycle the platform automatically compiles driver earnings and submits a bulk payout request through Paydex.",
      },

      {
        type: "image",
        src: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80",
        caption:
          "Drivers receiving real-time payment notifications through the logistics platform.",
      },

      {
        type: "text",
        content:
          "Paydex validates recipient account information before execution, screens for duplicate transactions, and intelligently routes payments through the fastest available banking rails.",
      },

      {
        type: "text",
        content:
          "Finance teams gain a real-time dashboard showing every payment in progress — initiated, pending, completed, or failed — while automated retry logic resolves most payment failures without human intervention.",
      },

      {
        type: "text",
        content:
          "The integration required less than a week to implement using the Paydex sandbox environment and SDKs. Importantly, the logistics company did not need to change its existing banking relationships or financial workflows.",
      },

      { type: "section", label: "The Results" },

      {
        type: "text",
        content:
          "Within the first month of using Paydex the weekly payout workflow dropped from an eight-hour manual process to a largely automated task requiring under twenty minutes of oversight.",
      },

      {
        type: "text",
        content:
          "Driver support requests related to missing payments fell dramatically, while the finance team gained the ability to track and reconcile thousands of payments in real time.",
      },

      {
        type: "stat-row",
        stats: [
          { value: "80%", label: "Reduction in reconciliation time" },
          { value: "20 mins", label: "Weekly payout process (was 8hrs)" },
          { value: "0.3%", label: "Error rate (down from 12%)" },
        ],
      },

      {
        type: "quote",
        content:
          "We used to spend an entire day processing payouts. Now the system runs automatically and our team can focus on growing the business.",
        author: "Head of Finance, Global Logistics Marketplace",
      },
    ],
  },

  {
    id: "electronics-distributor-supplier-payments",
    company: "Electronics Distribution Company",
    title: "Scaling Supplier Payments Across Multiple Banking Networks",
    industry: "Distribution",
    result: "Real-time visibility across banking partners",
    minRead: 5,

    excerpt:
      "An international electronics distributor integrated Paydex to manage supplier payments across multiple banks while maintaining full visibility into its payables.",

    cover:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",

    init: "ED",

    blocks: [
      { type: "section", label: "The Challenge" },

      {
        type: "text",
        content:
          "This electronics distributor manages a network of more than 400 suppliers across North America and Europe. Payments were executed through six different banking portals, each with its own file formats, login credentials, and processing timelines.",
      },

      {
        type: "text",
        content:
          "The finance team had no single source of truth for supplier payments. Transactions were initiated across multiple systems, making it difficult to determine which payments had been processed and which were still pending.",
      },

      {
        type: "stat-row",
        stats: [
          { value: "400+", label: "Active suppliers" },
          { value: "6 banks", label: "Separate payment systems" },
          { value: "0", label: "Unified treasury visibility" },
        ],
      },

      { type: "section", label: "The Solution" },

      {
        type: "text",
        content:
          "The company connected its ERP system to Paydex through a secure API integration. Payment runs are now triggered directly from the ERP, and Paydex manages routing, execution, and settlement across the appropriate banking rails.",
      },

      {
        type: "image",
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        caption:
          "Unified treasury dashboard showing real-time supplier payment status.",
      },

      {
        type: "text",
        content:
          "Paydex provides a centralized dashboard allowing finance teams to monitor all outgoing payments across every banking partner in real time.",
      },

      { type: "section", label: "The Results" },

      {
        type: "text",
        content:
          "Supplier payment disputes dropped significantly within the first quarter. The treasury team also reduced reconciliation work by several hours per day and gained a reliable overview of the company’s cash position.",
      },

      {
        type: "stat-row",
        stats: [
          { value: "65%", label: "Drop in payment disputes" },
          { value: "3 days", label: "Earlier monthly close" },
          { value: "4 hrs/day", label: "Reconciliation work eliminated" },
        ],
      },

      {
        type: "quote",
        content:
          "Paydex gave us a single control layer across every bank we work with.",
        author: "Finance Director",
      },
    ],
  },

  {
    id: "b2b-saas-embedded-payouts",
    company: "B2B SaaS Platform",
    title: "Embedding Payout Infrastructure for Merchants",
    industry: "Technology",
    result: "Thousands of daily disbursements automated",
    minRead: 5,

    excerpt:
      "A B2B SaaS platform embedded Paydex payout infrastructure to process thousands of merchant disbursements daily.",

    cover:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",

    init: "BS",

    blocks: [
      { type: "section", label: "The Challenge" },

      {
        type: "text",
        content:
          "This B2B software platform manages marketplace transactions between corporate buyers and thousands of merchants. As transaction volume grew, the company needed a scalable way to distribute merchant earnings.",
      },

      {
        type: "text",
        content:
          "Their internal payment infrastructure struggled with scale, generating failed transfers and delayed settlements.",
      },

      {
        type: "stat-row",
        stats: [
          { value: "3,000+", label: "Daily merchant payouts" },
          { value: "~8%", label: "Payment failure rate" },
          { value: "48 hrs", label: "Failure detection time" },
        ],
      },

      { type: "section", label: "The Solution" },

      {
        type: "text",
        content:
          "The engineering team integrated Paydex's payout API to automate merchant settlements directly from the platform's backend systems.",
      },

      {
        type: "image",
        src: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
        caption:
          "Merchant dashboard showing settlement status powered by Paydex.",
      },

      {
        type: "text",
        content:
          "Paydex webhooks provide real-time transaction events allowing the platform to update merchant dashboards instantly.",
      },

      { type: "section", label: "The Results" },

      {
        type: "stat-row",
        stats: [
          { value: "0.4%", label: "Failure rate (down from 8%)" },
          { value: "3 mins", label: "Failure detection time" },
          { value: "70%", label: "Less engineering time spent on payments" },
        ],
      },
    ],
  },

  {
    id: "staffing-company-contract-payroll",
    company: "Global Staffing Firm",
    title: "Simplifying Payroll for Contract Workers",
    industry: "Staffing",
    result: "Payroll processing reduced to 40 minutes",
    minRead: 4,

    excerpt:
      "A staffing company uses Paydex to automate payroll for hundreds of contract workers every week.",

    cover:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",

    init: "SC",

    blocks: [
      { type: "section", label: "The Challenge" },

      {
        type: "text",
        content:
          "This staffing company manages payroll for hundreds of contract workers supporting enterprise clients across multiple regions.",
      },

      {
        type: "text",
        content:
          "Weekly payroll cycles required extensive manual processing and reconciliation across several banking partners.",
      },

      {
        type: "stat-row",
        stats: [
          { value: "600+", label: "Workers on payroll" },
          { value: "2 days", label: "Weekly payroll processing" },
          { value: "High", label: "Worker turnover from late pay" },
        ],
      },

      { type: "section", label: "The Solution" },

      {
        type: "text",
        content:
          "The company connected its workforce management system to Paydex, automatically generating payment runs from approved timesheet data.",
      },

      {
        type: "image",
        src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
        caption: "Workers receiving real-time payroll notifications.",
      },

      { type: "section", label: "The Results" },

      {
        type: "stat-row",
        stats: [
          { value: "40 mins", label: "Weekly payroll process" },
          { value: "0", label: "Late payment incidents" },
          { value: "34%", label: "Reduction in worker turnover" },
        ],
      },
    ],
  },
];
