// Case data — fact source. English-only UI (submission language).
// Short attributed excerpts only; do not paste full articles.
window.CASE_DATA = {
  timeline: [
    {
      id: "breakup",
      date: "Feb–Mar 2025",
      title: "Breakup, then harassment",
      summary:
        "After a 6-month relationship, Amber ends it following a violent outburst. From March, anonymous messages escalate—insults, sexual threats, and hints that he knows where she is.",
      aiRole: "context",
      roleLabel: "Context",
      planDetails: []
    },
    {
      id: "planning",
      date: "Apr 24–29, 2025",
      title: "A plan takes shape in chat",
      summary:
        "Darren Zhou repeats a detailed plan to ChatGPT: wait near her Thursday volleyball lot, approach with flowers, and if she refuses, shoot her, then die by suicide. He restates it across days.",
      aiRole: "recorded",
      roleLabel: "Plan recorded",
      planDetails: [
        { label: "Target", text: "Ex-girlfriend Amber; later extended to her family in chat." },
        { label: "Method", text: "Firearm; messages also describe beating and other violence." },
        { label: "Place & timing", text: "Parking lot by her weekly Thursday volleyball; he would wait outside." },
        { label: "Sequence", text: "Wait → approach with flowers → if refused, shoot → suicide." },
        { label: "Escalation", text: "From vague lines to insults, threats, then a full repeated plan." }
      ]
    },
    {
      id: "disclosure",
      date: "May 2025",
      title: "OpenAI flags & discloses",
      summary:
        "OpenAI’s backend detects repeated, dangerous violent content and issues an emergency disclosure to law enforcement—citing intent to die by suicide and murder the ex-girlfriend, stalking her schedule, and a plan with target, means, sequence, and specificity.",
      aiRole: "report",
      roleLabel: "Flagged → reported",
      planDetails: [
        { label: "What AI was good at", text: "Pattern over time: repetition, escalation, operational detail—not a single angry line." },
        { label: "Why it mattered", text: "No one had filed a report. Chat logs linked the anonymous messages and showed threat capability." }
      ]
    },
    {
      id: "arrest",
      date: "May 27, 2025",
      title: "Law enforcement at the door",
      summary:
        "Palm Beach County Sheriff’s Office contacts Amber. Darren is arrested as a credible threat—aggravated stalking, written threats, unlawful use of a communications device (charges as reported).",
      aiRole: "outcome",
      roleLabel: "Case opened"
    },
    {
      id: "plea",
      date: "Aug 13–14, 2025",
      title: "Guilty pleas, probation",
      summary:
        "He pleads guilty to three counts. The court withholds adjudication and imposes 8 years of probation (per reporting), with restrictions including a GPS monitor for two years and no weapons—victim input and no prior record were factors.",
      aiRole: "outcome",
      roleLabel: "Court outcome"
    }
  ],
  sources: [
    {
      label: "Sanlian Life Week (三联生活周刊) — “25-year-old Goldman Sachs analyst planned to kill ex: a crime plan reported by AI”",
      url: "",
      note: "Primary narrative source for this PoC (in Chinese). Date as published: 2025-09-13. Short excerpts only on this page.",
      displayText: "Sanlian Life Week · 2025-09-13 · journalist Song Ruoxi / editor Wang Shan"
    },
    {
      label: "OpenAI law-enforcement disclosure (as described in court filing / reporting)",
      url: "",
      note: "Described in the Sanlian piece and court probable-cause affidavit coverage. Link to be verified in slice 4 if a stable public URL is available.",
      displayText: "As reported: emergency disclosure to law enforcement, May 2025"
    },
    {
      label: "Comparable cases named in the same reporting (context only)",
      url: "",
      note: "Brazil parental-murder plan case (June 2025); Canada school-shooting chat flags without same-day LE report (Feb 2025). Not expanded in this PoC.",
      displayText: "Context: other 2025 AI-disclosure cases (Brazil, Canada) — not this timeline"
    }
  ]
};
