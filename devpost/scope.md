---
doc: scope
status: approved
---
<!-- `status` is the progress state every skill reads. Write `draft` when you first save this file,
     and change it to `approved` when the learner clearly approves the displayed plan ("looks good" counts).
     Do not request a second sign-off. Never skip the draft save —
     an unsaved draft dies with the conversation. -->

# AI干了什么（暂名）

One line: 一个醒目的单页，用真实可查的案例回答「AI干了什么」——AI 在一起罪案里到底扮演了什么角色。

## The Unique Kernel
组织方式不是「按年份排列的新闻列表」，而是 **AI 的角色**：这件事里 AI 是策划、执行、被利用，还是上报/拦截。内容可以极少（甚至一条），但必须真实可查，且页面有自己的审美系统——质量压倒数量。

## Who It's For
他自己：一个关心 AI 能力边界、听罪案播客、用 agent 做过罪案游戏又不满意的人。今天他想了解 AI 犯罪时，只能去搜新闻、读长报道，拼不出「AI 到底干了什么」的清晰答案。

## The Core Loop
打开页面 → 立刻看到案例与 AI 角色 → 读到关键事实（可核对来源）→ 形成自己的判断（「离我多远」）→ 走人或再看一条。第一眼要能回答：「AI干了什么？」

## Inspiration & Identity
- 拒绝「点下一步看文章」的阅读感（上次罪案游戏的教训）。
- 要醒目、有自己的一套视觉/信息系统，不是模板博客。
- 真实可查：来源要经得起点开。
- 调性悬置：确切审美在 `3-prd` 定；此处只锁定「有系统、不像通用新闻站」。

## Why This Matters to the Learner
三个学习目标之一是做出「自己投入精力、自己能接受」的作品。他自己不喜欢就不发布。这个主题对他个人有钩子（罪案播客 + 小说里写过 AI 上报犯罪，且写在相关新闻之前）；他也想知道：AI 犯罪离我们有多远。

## What "Working" Looks Like
工程完成，而非意义完成：页面完整、可用、能交互。一分钟演示里：打开 `index.html` → 看到设计过的案例呈现 → 「AI干了什么」清楚可读 → 来源真实可点 → 页面可交互（展开/筛选/滚动叙事皆可，以 PRD 为准）。成立的瞬间是「这页面像件作品，而且事实站得住」。

## The POC Boundary
- **在：** 一个网页（`index.html` + css/js）；至少 1 条深度核实的真实案例，按「AI角色」组织信息；来源链接；有辨识度的视觉系统；基础交互。
- **不在（除非极小）：** 「尽量多」的新闻库、持续更新系统、后端、用户账户、完整时间线数据库、未来预测引擎。

## Later
- 扩到多条案例 / 时间线（最早→最近）
- 「AI犯罪离我们有多远」互动自测
- 未来走向一节
- 与小说《会话已恢复》的互文/专区

## Explicitly Cut
- **「尽量多的真实新闻」** — 收集核实是无底洞，会吃掉全部预算；改为深度优先、数量可为 1。
- **做成上次那种罪案游戏** — 明确不满意（点下一步=看文章）；这次不是游戏。
- **完整时间线 / 预测引擎** — 证明 kernel 不需要；进 Later。
