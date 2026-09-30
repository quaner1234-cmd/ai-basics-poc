---
doc: spec
status: approved
---
<!-- `status` is the progress state every skill reads. Write `draft` when you first save this file,
     and change it to `approved` when the learner clearly approves the displayed plan ("looks good" counts).
     Do not request a second sign-off. Never skip the draft save —
     an unsaved draft dies with the conversation. -->

# AI会伤害人吗？ — Technical Spec

## How This Works, In Plain Language
这个应用就是**一个网页文件包**：浏览器打开 `index.html`，加载样式（长什么样）和脚本（怎么交互），把写在数据文件里的案件内容，按时间线画到屏幕上。

一共三块：
1. **页面骨架（HTML）** — 标题、三段结构（提问 → 时间线 → 来源），语义清晰、可滚动。
2. **皮肤（CSS）** — 暗色科技/终端档案感；颜色、字体、间距都在这里。
3. **行为与内容（JS + 数据）** — 案件时间线写成**结构化数据**（节点、日期、行动顺序、AI 角色、来源），脚本负责渲染成可滚动时间线、处理「点开展开」。

为什么是这个形状而不是更复杂的：PoC 要证明的是「按 AI 角色讲清一起真实案件」，不是平台。静态页零安装、双击能演示、几乎没有会坏的服务。内容与呈现分开，是为了改事实时不动布局，也方便核对「有没有编造」。

## The Core Journey Through the System
PRD ref: `prd.md > The Core Journey`。

1. 打开 `index.html`（本地双击，或 GitHub Pages 网址）→ 浏览器加载 HTML/CSS/JS。
2. 看到 Hero：主标题「AI会伤害人吗？」+ 副题「帮凶？帮手？AI遇上暴力，会怎么做？」。
3. 用户点「进入」或向下滚动 → 脚本/锚点把视图带到时间线一节。
4. 时间线由 `data/case.js`（或等价文件）里的节点数组渲染：每条含日期、「AI/事件」摘要、**行动顺序/具体计划**要点、**AI 角色**标签（如：识别 / 上报）。
5. 滚动阅读；需要时点节点展开细节。
6. 进到来源一节：短摘 + 可点击 URL（三联报道等）。
7. 离开前形成自己的判断。全程无登录、无网络请求（外链点击除外）。

## Stack
| 选择 | 说明 | 文档 |
|------|------|------|
| HTML / CSS / JS（原生，无框架） | 双击可跑、演示零依赖；交互手写但量很小 | [MDN](https://developer.mozilla.org/) |
| 内容数据放在 JS 对象数组 | 案件节点一处管理，渲染与事实分离 | — |
| GitHub Pages（部署） | 仓库已须公开，Pages 免费静态托管 | [GitHub Pages](https://docs.github.com/en/pages) |

Learner 已接受：不引入框架。取舍：没有现成组件库，视觉全靠手写 CSS——这正好服务「自己的审美系统」。

**未单独验证：** GitHub Pages 对带中文文件名/路径的兼容性（一般没问题）；若遇问题，入口用 `index.html` 英文名即可，已规避。

## Where It Runs and How Someone Tries It
- **本地：** 用浏览器打开 `D:\Projects\ai-basics-poc\index.html`（或在该目录起任意静态服务）。演示时就用本地打开。
- **线上：** 推送到 GitHub 仓库后开启 GitHub Pages，访问 `https://<user>.github.io/<repo>/`。
- **演示录制：** 打开页面 → 滚完整条路径（Hero → 时间线 → 来源）→ 特写「AI 角色」与「具体计划」→ 点一个来源链接。
- 提交物是**演示视频 + 公开仓库**；Pages 是加分项，不替代视频。

## Look and Feel
PRD ref: `prd.md > Look and Feel`；scope: `Inspiration & Identity`。

- **气质：** 暗底、终端/档案/拦截感；高对比；信息可以密，但时间线要可扫。
- **避免：** 满屏绿色数字雨；紫蓝渐变通用 AI 风；阅读器式长文排版。
- **色彩方向：** 近黑/深灰背景；文字冷白/浅灰；强调色少量（偏冷青或警示橙红之一，用于 AI 角色标签与关键动作）；警示「计划」块可用更强对比。
- **字体：** 标题用有压迫感的粗无衬线；正文清晰无衬线；标签/元数据可用等宽（终端感）。
- **文案语气：** 冷静、系统日志感；标题是提问，不是营销口号。
- **实现边界：** 纯 CSS 可达成上述气质；不引入字体 CDN 也能用系统字体栈站住。

## Components

### Hero 提问屏
显示主标题「AI会伤害人吗？」、副题「帮凶？帮手？AI遇上暴力，会怎么做？」，以及明确的进入动作（按钮「点开：AI干了什么」或强滚动引导）。
PRD ref: `prd.md > 第一屏提问`。

### 时间线（AI干了什么）
可滚动竖向时间线；节点 = 日期 + 事件摘要 + **行动顺序/具体计划**要点 + **AI 角色**标签（识别/上报等）。节点可展开细节。这是 kernel 所在。
PRD ref: `prd.md > AI干了什么 · 时间线`。

### 计划要素块（具体性）
时间线中「计划成型」阶段的结构化块：目标、方式、地点/场景、步骤顺序、升级轨迹——对应报道中「具体性」的证据维度。
PRD ref: `prd.md > AI干了什么 · 时间线`（行动顺序与具体计划）。

### 来源区
事实要点 + 至少一条可核对来源（《三联生活周刊》报道链接或完整出处）；可点 URL，失效时仍显示完整出处文本。
PRD ref: `prd.md > 事实与来源`。

### 交互层
进入/锚点滚动、节点展开收起。无路由、无登录。
PRD ref: `prd.md > 交互与完成度`。

## Data Model
案件内容是**只读数据**，构建时写入，运行时不改、不存用户状态。

```
caseTimeline: [
  {
    id, date, title,
    summary,              # 一句事件摘要
    planDetails?: [..],   # 行动顺序/具体计划要点（可选）
    aiRole: "识别" | "上报" | "…",
    source?: { label, url }
  },
  ...
]
sources: [ { label, url, note? } ]
```

- **存放：** 例如 `data/case.js` 或 `js/data.js` 导出的常量。
- **更新方式：** 只在编辑文件时更新（改事实 → 只改数据）。
- **刷新/重进：** 无持久化，每次都是初始渲染。

## File Structure

```
ai-basics-poc/
├── index.html          # 页面骨架（Hero / 时间线 / 来源）
├── css/
│   └── styles.css      # 暗色科技视觉系统
├── js/
│   ├── data.js         # 案件时间线与来源（事实源）
│   └── app.js          # 渲染时间线、展开、锚点交互
├── assets/             # 可选：少量图标/OG 图（若有）
├── devpost/            # Devpost 学习工作区（规划文档）
├── .gitignore          # 含 learner-profile 等
└── README.md           # 是什么、如何本地打开、如何部署
```

## External Services and Dependencies
| 项 | 用途 | 说明 |
|----|------|------|
| 无必须的 API | — | 页面不请求后端 |
| GitHub / GitHub Pages | 托管公开仓库与静态页 | 免费；推 `main` 即发布 |
| 外部来源链接 | 事实核对 | 仅 `<a href>`，不拉取内容进页面 |

**媒体版权：** 正文用短摘+出处，不整篇转载三联全文（见 PRD Non-Goals）。

## Important Failure Modes
- **来源链接失效** → 仍显示媒体名/标题/日期等完整出处文本，不假装可点。
- **用户禁用 JS 或数据文件路径写错** → 尽量在 HTML 里保留关键标题与来源的静态兜底（至少 Hero + 来源出处可读）。
- **视觉做成俗套「黑客帝国」** → 按 Look and Feel 的「避免」清单验收，构建后自查。

## What Was Simplified and Why
- **单页滚动 + 展开**，不做多页路由 — 深度用视觉分层表达；多页对证明 kernel 无增益。
- **案件数据静态写入**，不做 CMS/搜索/多案例 — 一条做深做实；收集核实才是主成本。
- **无框架、无构建步骤** — 演示可靠优先；交互量小。
- **GitHub Pages 静态托管**，不做服务器 — 与产品类型匹配。

## Decisions and Open Issues
- **Learner 选择：** 原生 HTML/CSS/JS 静态页（已接受推荐）；本地演示 + **GitHub Pages 部署**。
- **Learner 选择（产品）：** 主标题「AI会伤害人吗？」；时间线优先「行动顺序/具体计划」；暗色科技感。
- **有用的不确定（已澄清）：**
  - 「端到端」= 一件事从打开到来源点完不断链 → 写入演示路径。
  - 网页深度 = 单页内分层展开，不做多路由。
  - 交互适配 = 对人少点点多看清；对 agent 内容/结构分离、语义化 DOM。
  构建时按此切片；若滚动/展开手感不对，在 `5-build` 内改交互实现即可，不改产品定义。
- **来自 PRD Open Questions：**
  - 时间线节点最终文案/日期 — 构建时依据报道整理，不阻塞。
  - 色值/字体 — 见 Look and Feel 方向，构建时定具体值。
  - 来源 ≥1 条核心报道；能加 OpenAI 声明等公开来源则加。
