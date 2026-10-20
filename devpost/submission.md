---
doc: submission
status: draft
---

# Devpost Submission — Would AI Hurt People?

Your copy (2026-10-20), arranged into the standard Devpost story fields. Only spelling, grammar and ambiguity fixes are applied — each one is numbered and listed below so you can accept or reject it. **Everything marked TODO has to be your own words**; I don't draft submission copy.

## Story

### Inspiration

I joined this contest because I enjoyed another building contest, the WeChat Mini Program contest. [1] I learnt a lot and it was fun, so I asked ChatGPT if there were others it could recommend. Then I came here.

I have to say, at first I thought it would be too easy, as this is AI Basics, but I have built something.

### How I built it

In the process, it was interesting, because I had never built something as a complete beginner. [2] I followed the skill instructions to think before acting. This was a bit difficult for me, as I usually don't think too much when I build things. But I followed the agent's instructions in the skill [3] and finally built a simple page. I edited a video and held off submitting. [4] I did not submit immediately, and in the following days, this experience stayed with me when I built other things.

### What I learned

I love sharing with people when I do something successfully, but the truth is many people are still at a very early stage of using AI or agents, which means they need help. When I decided to share my experience, this contest came to mind. [5] So I packed part of what I learned here into my public GitHub repos [6] to help those who are very green at building or learning with AI/agents, and to let agents guide them to the end. This is very important, because when I guided my friends to use some workflows, they did not even know what a terminal was, just like me at the beginning. So this skill pack helps them do it smoothly.

You can check the repositories here: [7]

- https://github.com/quaner1234-cmd/labor-arbitration-toolkit-cn
- https://github.com/quaner1234-cmd/trade-client-memory

### Closing

Anyway, I am really happy that I decided to join this. Thanks a lot.

## Fixes applied

| # | Your original | Now | Why |
|---|---|---|---|
| 1 | "I joined this **game** because I enjoyed another building **game**" | "this **contest** … another building **contest**" | "game" reads as a game jam; the WeChat Mini Program event was a contest. Revert if "game" is deliberate. |
| 2 | "because I had not **attended building as a fresh student**" | "because I had never built something as a complete beginner" | "attend building" is not idiomatic. **Confirm this is what you meant** — this is the one fix that changes meaning if I guessed wrong. |
| 3 | "I followed the **agent's words from** the skill" | "the **agent's instructions in** the skill" | Clearer; no meaning change. |
| 4 | "I edited a video and **waited to submit**." | "I edited a video and **held off submitting**." | "waited to submit" can read as "was waiting for permission/moment"; your next sentence shows you deliberately delayed. |
| 5 | "I **just thought of** this contest" | "this contest **came to mind**" | "just thought of" is ambiguous between "only thought of" and "remembered". |
| 6 | "part of **this skill** into my public GitHub **repo**" | "part of **what I learned here** into my public GitHub **repos**" | Two repos are linked below it, and the skill inside them is each repo's own agent skill (see next section). |
| 7 | "my **GitHub pages** that can be checked" | "the **repositories** here" | These links are repositories, not GitHub Pages sites. |

Not changed: "learnt" is correct British English. Switch to "learned" only if you want US spelling throughout.

## One claim to re-check

The line "I packed part of this skill into my public GitHub repo" is the only factual claim in the story that the linked repos don't literally support. Checked 2026-10-20:

- **labor-arbitration-toolkit-cn** contains an agent skill at `07_给Agent用户/SKILL.md`. It walks a zero-background user through labor-arbitration prep: privacy check first, "ask before guessing", never infer progress. It does not copy this contest's Learn skills.
- **trade-client-memory** is a "Skill Pack" that turns an authorized mailbox into one folder per customer for foreign-trade salespeople who shouldn't need Python, IMAP or MCP.

So "part of what I learned here" is accurate as written above. If you meant you republished the contest's skill files themselves, that is not what those two repos contain, and the sentence would need different wording.

## Link check (2026-10-20)

| Link | Result |
|---|---|
| `https://github.com/quaner1234-cmd/labor-arbitration-toolkit` | **404** — wrong repo name; the public repo is `labor-arbitration-toolkit-cn` |
| `https://github.com/quaner1234-cmd/labor-arbitration-toolkit-cn` | 200 |
| `https://github.com/quaner1234-cmd/trade-client-memory` | 200 |
| `https://github.com/quaner1234-cmd/ai-basics-poc` | 200 (public) |
| `https://quaner1234-cmd.github.io/ai-basics-poc/` | 200 |

## Still needed before submitting

- [ ] **Project name** — "Would AI Hurt People?" (already the repo and OG title; confirm it carries into the form)
- [ ] **Short description** — the one-line tagline on the project card: **TODO, yours**
- [ ] **What it does** — **TODO, yours.** Prompt: "In your own words, what did you make, and who is it for?"
- [ ] Optional **Challenges we ran into** — your "I usually don't think too much when I build" passage could sit here if you'd rather split it out
- [ ] Optional **Accomplishments we're proud of**
- [ ] **Demo video public URL** — local file is `devpost/demo-video/ai-basics-poc-demo.mp4` (1440×900, 1.8 MB); it must be watchable without a login
- [ ] **Public repo URL** — https://github.com/quaner1234-cmd/ai-basics-poc
- [ ] Optional **live link** — https://quaner1234-cmd.github.io/ai-basics-poc/
- [ ] **"Built with" tags** — pick only what the project actually uses: HTML, CSS, JavaScript, GitHub Pages, ChatGPT, AI agent skills

`devpost/learner-profile.md` and `devpost/demo-video/` stay out of the public repo (both are gitignored).
