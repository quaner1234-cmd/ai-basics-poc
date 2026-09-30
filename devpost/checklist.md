---
doc: checklist
status: approved
---
<!-- `status` is the progress state every skill reads. Write `draft` when you first save this file,
     and change it to `approved` when the learner clearly approves the displayed plan ("looks good" counts).
     Do not request a second sign-off. Never skip the draft save —
     an unsaved draft dies with the conversation. -->

# Build Checklist

Build mode: learn

## Slices

- [x] **1. 骨架 + 第一屏提问**
  Becomes usable: 打开 `index.html` 能看到主标题「AI会伤害人吗？」、副题「帮凶？帮手？AI遇上暴力，会怎么做？」，有明确的进入/向下动作，能到达页面下方各节的占位。
  Why now: 第一片就把脚手架和真实 Hero 一起交付，端到端路径先通；后续切片往这条路上填内容。
  PRD ref: `prd.md > 第一屏提问` / `prd.md > The Core Journey`
  Spec ref: `spec.md > Hero 提问屏` / `spec.md > File Structure` / `spec.md > Look and Feel`
  Build: 按 spec 文件树搭建 `index.html`、`css/styles.css`、`js/app.js`、`js/data.js`（先空/占位）；实现 Hero 与锚点滚动；暗底与标题气质先铺上（完整视觉可在 4 收尾）。
  Verify (mechanical): 浏览器打开 index.html，无控制台报错；标题/副题可见；进入动作能把视图带到时间线一节。
  Learner check: 打开页面，说出第一眼是否感到「这是一个问题」，进入动作是否明显。
  Commit: `Add scaffold and hero question screen`

- [x] **2. 可滚动时间线（kernel）**
  Becomes usable: 时间线一节出现 Darren 案节点：日期、事件摘要、**行动顺序/具体计划**要点；可纵向滚动读完。
  Why now: 这是 unique kernel——「AI干了什么 / 行动顺序与具体计划」尽早可用，而不是最后才接上。
  PRD ref: `prd.md > AI干了什么 · 时间线`
  Spec ref: `spec.md > 时间线（AI干了什么）` / `spec.md > 计划要素块（具体性）` / `spec.md > Data Model`
  Build: 在 `js/data.js` 写入案件时间线数据（依据三联报道核准事实与日期）；`app.js` 渲染为可滚动时间线；计划成型节点含目标/方式/步骤/升级等结构化要点。
  Verify (mechanical): 滚动到底；每个节点有日期与摘要；计划要点块存在且与 data.js 字段对应；刷新后一致。
  Learner check: 滚完整条时间线，是否能回答「AI在这案子里干了什么」「计划是怎么一步步具体化的」。
  Commit: `Render case timeline with action sequence and plan details`

- [x] **3. AI 角色标签 + 展开细节**
  Becomes usable: 时间线节点带 **AI 角色**（如识别/上报）标签；要点可展开看细节，收起不挡路。
  Why now: 补全 kernel 的第二问「角色是什么」；交互按「人少点、多看清」落地。
  PRD ref: `prd.md > AI干了什么 · 时间线` / `prd.md > 交互与完成度`
  Spec ref: `spec.md > 时间线（AI干了什么）` / `spec.md > 交互层`
  Build: 数据层增加 `aiRole` 与可选 `planDetails`；样式做出标签与展开/收起；保证键盘可点、状态可辨。
  Verify (mechanical): 标签与数据一致；展开/收起无误；无 JS 报错。
  Learner check: 不看说明能否看出每段 AI 的角色；展开细节是否好用、是否觉得像「点下一步」。
  Commit: `Add AI role labels and expandable details`

- [x] **4. 来源区 + 视觉收尾 + README**
  Becomes usable: 来源一节含可点链接与完整出处；整体暗色科技/档案感成型；README 说明如何本地打开与部署；页面满足工程 done。
  Why now: 真实可查与作品感是提交底线；放在最后收口，避免中途被视觉细节拖住 kernel。
  PRD ref: `prd.md > 事实与来源` / `prd.md > 交互与完成度` / `prd.md > Look and Feel`
  Spec ref: `spec.md > 来源区` / `spec.md > Look and Feel` / `spec.md > Where It Runs and How Someone Tries It` / `spec.md > Important Failure Modes`
  Build: 来源短摘+URL；对照 Look and Feel 与「避免」清单打磨视觉（色值/字体栈）；静态兜底；写 README；准备 GitHub Pages 说明。
  Verify (mechanical): 来源链接可点击（或显示完整出处）；对照避免清单自查截图/浏览；本地打开完整路径（Hero→时间线→来源）不断链；无控制台错误。
  Learner check: 从头到尾走一遍；页面是否像「自己的作品」；事实是否觉得站得住。
  Commit: `Add sources, visual polish, and README`

## Hands-on Checkpoints

- [x] Early usable behavior explored 鈥?slices 1-2 完成后（时间线 kernel 可用时）
- [ ] Final kick-the-tires exploration and feedback completed

## Final Review

- [ ] Final review complete 鈥?feedback resolved and learner confirms ready to ship

## Code Tour and App Map

- [ ] Learning activity complete 鈥?guided route, focused alternative, prior practice connected, or brief recap
- [ ] Optional edit and transfer reflection addressed 鈥?offered/declined/already covered/not applicable as appropriate
- [ ] `devpost/app-map.html` generated from finished code, checked, and shown, including a project-grounded practice to reuse

Activity and evidence: [to fill]
Route and stops: [to fill]
Edit outcome: [to fill]
Reflection: [to fill]
Activity mode: [to fill]

## Revisions

- [Pixel fonts + Matrix phosphor green palette] — [Final-review visual request from learner: VT323/Press Start 2P and #00ff41 on near-black. Digital-rain animation still out; green theme is in.]

- [English-only UI and copy] — [Submission materials must be English (or translated); learner chose English-only instead of a zh/en toggle after this constraint was flagged mid-build. Dual-language switch is cut.]
