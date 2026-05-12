# Relianex 网站专业化抛光 — Design Spec

**Date:** 2026-04-07
**Scope:** Polish pass (no copy rewrite, no IA change, no backend)
**Direction:** Enterprise-serious + brand-aligned minimalism

## 背景与目标

现状:`app/page.tsx` 已拆分成 8 个 section 组件 (`components/sections/*`)。整站使用 Tailwind 4 + shadcn/ui,但视觉语言不一致,看起来像模板拼接。

**核心诊断:** 现在网站的主色 (`blue-950` 近黑蓝 + `cyan-400` 亮青) **与 logo 的宝蓝 `#1E3FBE` 不符**,这是"像模板"的根因之一。

**目标:** 在不改信息架构、不重写文案的前提下,通过一次 polish pass,让整站看起来是**同一个设计系统**出品的企业级页面。

**成功标准 (可检验):**

1. 所有 section 使用统一的 tokens (色、字、间距、圆角、阴影) — 无 hardcoded `blue-950`、`cyan-400`、`slate-*` 混用
2. 所有卡片 section 使用同一个 `FeatureCard` 组件
3. 所有 section 使用同一个 `<Section>` wrapper,内外边距完全一致
4. 所有 H2 使用同一个 `<Eyebrow>` + 标题结构
5. 所有 `cyan-*` 色彩从主页组件中清除
6. `app/page.tsx` 的最终行数减少 (靠组件抽取)
7. `npm run build` 通过,`npx tsc --noEmit` 无错误
8. Lighthouse 对比:Accessibility 分数不下降

## 非目标 (Out of Scope)

为避免 scope creep,下面这些**明确不做**:

- ❌ 不重写任何文案
- ❌ 不换字体族 (保留 Geist)
- ❌ 不改信息架构,仍是 7 个 section
- ❌ 不接后端 / 不实现表单提交
- ❌ 不动 `LogoLoop.tsx` 内部实现,仅改传参和包装
- ❌ 不动 `components/Business.tsx`、`components/ProjectExperience.tsx`、`components/Footer.tsx`、`components/HeaderLinks.tsx` (未在主页渲染)
- ❌ 不做深色模式切换 (保留 `globals.css` 中的 `.dark` vars 但不启用)
- ❌ 不做国际化

## 1. Design Tokens

### 色板 (写入 `app/globals.css` 的 `:root`)

| Token | 值 | 用途 |
|---|---|---|
| `--brand` | `#1E3FBE` | logo 宝蓝;primary 按钮、链接、强调、图标色、data 数字 |
| `--brand-hover` | `#1732A0` | hover 态 |
| `--brand-soft` | `rgba(30, 63, 190, 0.08)` | 图标容器底色 |
| `--ink` | `#0A1A4D` | 深墨蓝;dark section 背景 (替代 `blue-950`) |
| `--ink-soft` | `#15266B` | dark section 内卡片底色 |
| `--surface` | `#FFFFFF` | 主背景 |
| `--surface-alt` | `#F7F8FA` | 交替 section 背景 (替代 `slate-50`) |
| `--border` | `#E5E7EB` | 统一边框 |
| `--text` | `#0F172A` | 正文 |
| `--text-muted` | `#64748B` | 辅助文字 |
| `--text-inverse` | `#FFFFFF` | 深色底上文字 |
| `--accent-gray` | `#B8B8BA` | logo 灰,极少量用于分割线和 eyebrow label |

`--card` 当前被 `components/Footer.tsx` 和 `HeaderLinks.tsx` 引用,**保留**,不修改,避免破坏这两个组件 (它们不在主页渲染但仓库中存在)。

**所有 `cyan-*`、`blue-950`、`blue-900`、`blue-100`、`blue-50`、`slate-50`、`slate-100`、`slate-200`、`slate-300`、`slate-400`、`slate-500`、`slate-600`、`slate-700`、`slate-800`、`slate-900` 在 `components/sections/*.tsx` 中必须替换为 token 或标准 Tailwind 中性色 (只能使用 `white`、`neutral-*`)。**

### 字体

- 字体族:保留 Geist Sans
- 字重:仅使用 `font-normal` (400)、`font-semibold` (600)、`font-bold` (700);**禁止 `font-extrabold` / `font-black`**
- Type scale (Tailwind 对应):
  - `text-xs` / `text-sm` / `text-base` / `text-xl` / `text-3xl` / `text-5xl` / `text-6xl`
  - Hero H1: `text-5xl md:text-6xl font-semibold`
  - Section H2: `text-3xl md:text-4xl font-semibold`
  - Card H3: `text-xl font-semibold`
  - 副标题 / 正文: `text-base leading-relaxed text-[--text-muted]`
- 大小写:全大写 **只用于** eyebrow label 和表单 label;标题使用 Title Case (`Relianex` 而不是 `RELIANEX`)

### 间距节律

- Section 统一:`py-20 md:py-28 px-6`
- 内容 max-width 统一:`max-w-6xl mx-auto`
- 标题到内容:`mb-12`
- 卡片 padding:`p-8`
- 卡片 grid gap:`gap-6 md:gap-8`

### 圆角 & 阴影

- `rounded-xl` — 卡片、按钮、输入框
- `rounded-2xl` — 大容器 (如 scenario 图片框)
- `shadow-sm` — 静态
- `hover:shadow-md` — hover
- 过渡统一:`transition-all duration-200 ease-out`
- **禁止 `hover:scale-*`** — 企业风格不使用 scale hover

## 2. 新增共享组件

### `components/ui/section.tsx`

```tsx
type SectionProps = {
  id: string;
  tone?: "surface" | "alt" | "ink";  // default "surface"
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
};
```

- 渲染 `<section id={id} className={cn(baseClasses, toneClasses, className)}>`
- `id` 透传,`scroll-mt-20` 处理 sticky header 偏移
- `tone="surface"` → `bg-[--surface] text-[--text]`
- `tone="alt"` → `bg-[--surface-alt] text-[--text]`
- `tone="ink"` → `bg-[--ink] text-[--text-inverse]`
- `baseClasses`: `relative overflow-hidden py-20 md:py-28 px-6 scroll-mt-20` — `relative` 让 hero 的绝对定位蒙层能找到定位父元素
- `cn()` 使用 `tailwind-merge`,允许调用方通过 className 覆盖 padding (hero 需要 `py-28 md:py-36`)
- 内部自动包一层 `<div className={cn("max-w-6xl mx-auto relative z-10", innerClassName)}>` — `relative z-10` 让 hero 的蒙层方案可靠
- 使用 `cn()` from `@/lib/utils`

### `components/ui/eyebrow.tsx`

```tsx
type EyebrowProps = { children: React.ReactNode };
```

渲染:

```
——— [CHILDREN]
```

- 一条 24px 宽 1px 高的 `bg-[--accent-gray]` 横线
- 后面跟 `text-xs font-semibold tracking-[0.2em] uppercase text-[--text-muted]` 的文字
- `flex items-center gap-3 mb-4`
- 在 ink tone 下,用 `text-[--accent-gray]` + `bg-[--accent-gray]/60`

### `components/ui/feature-card.tsx`

```tsx
type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};
```

渲染:

```
<article className="bg-white rounded-xl border border-[--border] p-8
                    shadow-sm hover:shadow-md transition-all duration-200">
  <div className="w-12 h-12 rounded-lg bg-[--brand-soft]
                  text-[--brand] flex items-center justify-center mb-6">
    <Icon className="w-6 h-6" />
  </div>
  <h3 className="text-xl font-semibold mb-3 text-[--text]">{title}</h3>
  <p className="text-sm leading-relaxed text-[--text-muted]">{description}</p>
</article>
```

这三个组件是本次 polish 的**强制约束载体** — 不是过度抽象,而是用组件层确保不会有人再手写一个不一致的卡片/section。

## 3. 各 Section 修改清单

### 3.1 Hero (`HeroSection.tsx`)

- 用 `<Section id="mission" tone="ink" className="relative bg-[url('/bg/home_bg.webp')] bg-cover bg-top bg-no-repeat">` 替换外层
- 在 `<Section>` 的直接子元素中加一层绝对定位的蒙层 `<div className="absolute inset-0 bg-[--ink]/60 pointer-events-none" />`,然后内容用 `<div className="relative">` 包一层,确保在蒙层之上
- `Section` 组件的 `tone="ink"` 颜色仍负责文字颜色 fallback;背景图 + 蒙层负责实际视觉
- **Section 组件要求:** 接受 `className` prop 并合并到外层 `<section>`;内部 max-width 容器要有 `relative z-10` 以便 hero 的蒙层方案可靠工作
- `Precision Architect` badge → `<Eyebrow>Precision Engineering</Eyebrow>` (灰线 + 灰字)
- H1: `RELIANEX` → `Relianex`,字重 `font-semibold`,尺寸 `text-5xl md:text-6xl`
- lede 段:`text-slate-300 font-light` → `text-[--text-inverse]/80 font-normal`,尺寸降到 `text-xl md:text-2xl`
- 引言块:`border-l-4 border-cyan-400` → 去边框,改用 `<span className="inline-block w-6 h-px bg-[--accent-gray]">` 横线前缀
- 内边距:`py-32` → `py-28 md:py-36` (hero 比普通 section 稍大)

### 3.2 Core Capabilities (`CoreCapabilities.tsx`)

- `<Section id="capabilities" tone="alt">`
- H2 上方加 `<Eyebrow>Capabilities</Eyebrow>`
- H2 字重 `font-semibold`,颜色 `text-[--text]`
- 3 张卡全部替换为 `<FeatureCard>`
- 删除所有 `blue-700`/`blue-50`/`slate-100`/`slate-600` hardcoded

### 3.3 Our Services (`OurServices.tsx`)

- `<Section id="our_service" tone="surface">`
- **删除** `01` 大水印 (`text-8xl font-black text-slate-100 absolute`)
- H2 上方加 `<Eyebrow>01 / Services</Eyebrow>` (保留序号感,但在 eyebrow 里,克制)
- H2 副标题保留文案,改样式:`text-[--text-muted] max-w-md`
- 布局从 "icon 左 + 内容右 flex 行" 改为和 `FeatureCard` 一致的列布局
- 4 张卡全部替换为 `<FeatureCard>`,2x2 grid

### 3.4 Project Experience (`ProjectExperienceSection.tsx`)

- `<Section id="project_experience" tone="alt">`
- **删除** `02` 大水印
- H2 上方加 `<Eyebrow>02 / Partners</Eyebrow>`
- H2 和副标题文案保留
- `LogoLoop` 容器保留,但 props 修改:
  - `logoHeight={60}` → `logoHeight={44}`
  - `fadeOutColor="#ffffff"` → `fadeOutColor="#F7F8FA"` (匹配 `--surface-alt`)
  - 其他 props 不变
- LogoLoop 下方加一行说明:
  ```tsx
  <p className="text-xs text-[--text-muted] text-center mt-6 tracking-wide">
    Trusted by leading automakers across APAC
  </p>
  ```

### 3.5 Scenario Section (`ScenarioSection.tsx`)

- `<Section id="scenario_section" tone="ink">`
- 左侧文案:
  - H2 字重 `font-semibold`,颜色 `text-[--text-inverse]`
  - 副段 `text-[--text-inverse]/75`
  - 数据块重构:从 "4xl 数字 + 横排" → "6xl 数字 + 下方细线 + 标题 + 描述" 垂直版式,两块并列
  - 数字颜色:`text-cyan-400` → `text-[--brand]`(在 ink 底上,宝蓝仍有足够对比度;如测试后发现对比度不足则改用 `text-white`)
- 右侧图:
  - `<img>` 替换为 Next `<Image>` + `fill` + `sizes="(max-width:1024px) 100vw, 50vw"`
  - 容器 `rounded-2xl overflow-hidden`
  - 叠一个左→右的深色渐变 `bg-gradient-to-r from-[--ink] via-[--ink]/40 to-transparent` 让图片和左侧深色背景自然衔接

### 3.6 Customer Value (`CustomerValue.tsx`)

- `<Section id="customer_value" tone="alt">`
- H2 上方加 `<Eyebrow>Customer Value</Eyebrow>`
- 3 列改为 `<FeatureCard>`,和其他卡片 section 完全一致 (不再是"圆形大图标居中"的特殊版式)
- 居中 `text-center` 移除,改成 left-aligned (和其他卡片一致)

### 3.7 Contact Section (`ContactSection.tsx`)

这是改动最大的 section。

- `<Section id="contact" tone="surface">`
- 左右两栏保留,但视觉语言必须统一:
  - **删除右侧深蓝大卡片容器**
  - **删除右侧 `<Map className="w-48 h-48" />` 装饰水印**
  - 表单和左侧文字在同一个白底上
- 表单输入:
  - 引入 `@/components/ui/input` 和 `@/components/ui/textarea` (仓库已有 shadcn 组件)
  - 风格自动对齐 shadcn 系统
  - 在 label 上使用 `text-xs font-semibold tracking-wider uppercase text-[--text-muted]`
- 提交按钮:
  - `bg-cyan-400 text-blue-950` → `bg-[--brand] text-white hover:bg-[--brand-hover]`
- 左侧 "Consultation Services" 列表:
  - check icon `text-cyan-500` → `text-[--brand]`
  - 容器去掉 `bg-slate-50` 单独灰底,改成正文样式 (和上方文字同一视觉层)
- 左侧邮箱联系卡片:
  - 背景 `bg-blue-100` → `bg-[--brand-soft]`
  - 图标 `text-blue-800` → `text-[--brand]`
  - 链接 `hover:underline` 保留

### 3.8 Page Footer (`PageFooter.tsx`)

- 保留结构
- `text-blue-900` → `text-[--ink]`
- `hover:text-blue-600` → `hover:text-[--brand]`
- `border-slate-200` → `border-[--border]`
- 版权年份 `© 2024` → `© 2026`
- 不包在 `<Section>` 里 (footer 有自己的规则)

### 3.9 Header (`Header.tsx`)

- 不在 `components/sections/` 里,但需要同步调整
- `border-slate-100` → `border-[--border]`
- nav 链接 active 态:`text-blue-600 border-blue-600` → `text-[--brand] border-[--brand]`
- nav 链接 hover:`hover:text-blue-600` → `hover:text-[--brand]`
- 右上 Contact 按钮 (已改成 `<a>`):`bg-blue-900 hover:bg-blue-800` → `bg-[--brand] hover:bg-[--brand-hover]`
- 移动端 slide-over 菜单 active 态同步
- sticky 时的背景:`bg-white` → `bg-white/90 backdrop-blur-md`

### 3.10 `app/page.tsx`

- 移除 `min-h-screen bg-slate-50 font-sans text-slate-900` 的外层 `<div>`,这些全局样式下沉到 `body`
- 只保留一个简单的 `<main>` fragment 包裹 8 个 section

### 3.11 `app/layout.tsx`

- body className 追加 `bg-[--surface] text-[--text]`
- metadata 补充 `themeColor: "#0A1A4D"`
- `<html className="scroll-smooth">` 追加 `scroll-pt-20` (一次性解决所有锚点偏移)

## 4. 全局细节

### 4.1 Anchor scroll offset

在 `<html>` 上追加 `scroll-pt-20` (或等效 `scroll-padding-top: 5rem`),使所有 `href="#..."` 跳转不被 72px 高的 sticky header 遮挡。比在每个 section 加 `scroll-mt-20` 更干净。`Section` 组件内再加一次 `scroll-mt-20` 作为防御性兜底。

### 4.2 Focus ring

在 `globals.css` 的 `@layer base` 追加:

```css
*:focus-visible {
  outline: 2px solid var(--brand);
  outline-offset: 2px;
  border-radius: 4px;
}
```

### 4.3 图片

- Hero 背景图:`bg-blend-overlay` 移除,通过 `::before` 蒙层 `bg-[--ink]/60` 控制对比度
- Scenario 图:`<img>` → `<Image>`

### 4.4 Accessibility

- 所有交互元素满足 WCAG AA 对比度
- `--brand` 在 `--ink` 上的对比度验证:`#1E3FBE` on `#0A1A4D` ≈ 2.8:1 ❌ 不达 AA。
- **处理:** Scenario section 里的大数字 (`20+` / `100%`) **不** 使用 `--brand`,改用 `text-white` 或 `text-[--accent-gray]` 的细处理。ink 底上涉及宝蓝色的元素 (按钮 hover 态等) 都需验证对比度,不达标的改用白色。

## 5. 实施顺序建议 (供 writing-plans 参考)

1. 先建 tokens (`globals.css`) — 基础
2. 再建 3 个 UI 组件 (`Section`, `Eyebrow`, `FeatureCard`) — 约束载体
3. 按 section 依次改:Hero → Capabilities → Services → Project Experience → Customer Value → Scenario → Contact → Footer → Header
4. 全局细节 (scroll-pt、focus ring、layout metadata)
5. 运行 `npx tsc --noEmit` 和 `npm run build` 验证
6. 人工目测对比

## 6. 风险

- **`--brand` 在深色底对比度不足** — 第 4.4 节已规定替代方案
- **shadcn Input/Textarea 组件样式** 可能和 tokens 冲突,需要在使用时 override 颜色 class,或通过 CSS vars 对齐 (shadcn 已经基于 CSS vars,如果 `--border`/`--ring` 改到位,自动跟随)
- **Footer.tsx 和 HeaderLinks.tsx** 依赖 `--card`/`--text`/`--background`,本次不动它们,CSS vars 里保留这些兼容变量
- **`bg-slate-50` 全局外层** 当前在 `page.tsx`,下沉到 body 后要确认所有 section 都有自己的 tone,不留空白
