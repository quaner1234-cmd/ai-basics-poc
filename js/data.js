// Case data — fact source. English-only UI (submission language).
// Multi-source verified (Palm Beach Post / USA TODAY Network, Hoodline, others).
// Short attributed facts only; do not paste full articles.
window.CASE_DATA = {
  timeline: [
    {
      id: "breakup",
      date: "Mar 2026",
      title: "Breakup, then harassment",
      summary:
        "After a six-month relationship, a 21-year-old woman from Lake Worth Beach ends it by phone—she later tells deputies she feared his “erratic, jealous and controlling behavior.” From March, Darren Zhou turns to ChatGPT to process the breakup and tracks her online activity.",
      aiRole: "context",
      roleLabel: "Context",
      planDetails: []
    },
    {
      id: "planning",
      date: "Mar–May 2026",
      title: "Threats harden into a plan",
      summary:
        "Chat messages preserved in court records escalate from jealousy talk to rape, murder, and murder-suicide. Zhou writes lines including “I'm gonna kill her by the end of this month” and “If I can't have her then nobody can.” Targets later include her family.",
      aiRole: "recorded",
      roleLabel: "Plan recorded",
      planDetails: [
        { label: "Target", text: "Ex-girlfriend; later extended to her family, per investigators." },
        { label: "Stated intent", text: "Kill her “by the end of this month”; “if I can't have her then nobody can.”" },
        { label: "Stalking pattern", text: "Calls, texts, app-generated numbers, social pressure about comments on her TikTok—despite repeated requests to stop." },
        { label: "Escalation", text: "From breakup talk to sexual threats, then detailed violent planning across weeks." },
        { label: "How police read it", text: "A deputy said the logs were not “vague emotional outbursts” but showed rehearsal and planning." }
      ]
    },
    {
      id: "disclosure",
      date: "May 2026",
      title: "OpenAI flags → FBI → local deputies",
      summary:
        "OpenAI’s safety systems flag the chats for human review; the company reports Zhou to the FBI. Federal agents hand two months of his chat logs to the Palm Beach County Sheriff’s Office. Deputies also take the ex-girlfriend’s screenshots of harassing messages.",
      aiRole: "report",
      roleLabel: "Flagged → reported",
      planDetails: [
        { label: "What AI was good at", text: "Pattern over time—repetition, escalation, operational detail—not a single angry line." },
        { label: "Why it mattered", text: "No one had filed a tip first. Logs plus her screenshots linked identity, intent, and capability." },
        { label: "Policy backdrop", text: "OpenAI’s Aug 2025 policy: imminent serious-harm threats to others can escalate to law-enforcement referral." }
      ]
    },
    {
      id: "arrest",
      date: "May 2026",
      title: "Arrest",
      summary:
        "Armed with the AI chat logs and the victim’s screenshots, deputies arrest Zhou. He spends two days in Palm Beach County jail and posts $100,000 bail.",
      aiRole: "outcome",
      roleLabel: "Case opened"
    },
    {
      id: "plea",
      date: "Jun–Aug 13, 2026",
      title: "Charges, plea, probation",
      summary:
        "Assistant State Attorney Ana Cuskova charges aggravated stalking, written threats to kill, and illegal use of a cell phone (felonies, up to 25 years as reported). Zhou pleads guilty to all three on Aug. 13. Circuit Judge Scott Suskauer—withholds adjudication and imposes eight years of probation after the victim approved the deal.",
      aiRole: "outcome",
      roleLabel: "Court outcome",
      planDetails: [
        { label: "Victim’s role", text: "Judge said he accepted the deal only because Zhou’s ex-girlfriend approved it." },
        { label: "Also on record", text: "Northeastern magna cum laude; no prior record; messages implied firearms but he did not own them." }
      ]
    }
  ],
  sources: [
    {
      label: "Florida man told ChatGPT he’d murder his ex. OpenAI alerted the FBI",
      url: "https://valawyersweekly.com/2026/08/17/florida-man-openai-fbi-threats-palm-beach/",
      displayText: "Virginia Lawyers Weekly (USA TODAY Network via Reuters Connect) · Aug 17, 2026 · reporting by Hannah Phillips, Palm Beach Post",
      note: "Primary English narrative used for this timeline. Short attributed facts only."
    },
    {
      label: "South Palm Beach Man's ChatGPT Threats Reported to FBI",
      url: "https://hoodline.com/2026/08/south-palm-beach-analyst-s-chatgpt-rape-murder-threats-land-him-in-fbi-crosshairs/",
      displayText: "Hoodline · Aug 14, 2026",
      note: "Cross-check on OpenAI → FBI referral, quotes, and policy backdrop."
    },
    {
      label: "OpenAI Reports Florida Man’s ChatGPT Murder Threats to FBI",
      url: "https://www.medianama.com/2026/08/223-openai-reports-chatgpt-murder-threats-to-fbi/",
      displayText: "MediaNama · Aug 17, 2026",
      note: "Third outlet on the same referral pattern."
    },
    {
      label: "Sanlian Life Week Chinese magazine feature (secondary, as user source)",
      url: "",
      displayText: "三联生活周刊 long-form feature (Chinese) · secondary source",
      note: "Cross-checked names, charges, plea, and probation; court-facing English reports control the dates."
    }
  ]
};
