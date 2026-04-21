/**
 * Typography tokens — shape only (family, size, weight, leading, tracking).
 * Color is set by the consuming context, not baked in here.
 *
 * Scale: 16 (body) → 32 (h3 section) → 36 (h2 hero) → 42 (h1 display).
 * Proportions modeled on Linear README: section heads ~1.8x body, hero ~2x body.
 * Headings: Signifier 400 / 1.2 leading / -0.015em.
 * Body: Retni Sans 16px / 400 / normal tracking / 1.7 leading.
 */

export const typo = {
  siteTitle: "font-signifier text-base tracking-[-0.01em]",

  heading1: "font-signifier text-[42px] leading-[1.2] tracking-[-0.015em]",
  heading2: "font-signifier text-[36px] leading-[1.2] tracking-[-0.015em]",
  heading3: "font-signifier text-[32px] leading-[1.2] tracking-[-0.015em]",

  body: "font-retni-sans text-base font-normal leading-[1.7] tracking-normal",
  bodySmall: "font-retni-sans text-sm leading-relaxed tracking-normal",
  caption: "font-retni-sans text-sm leading-relaxed tracking-normal",
  label: "font-retni-sans text-sm tracking-normal",

  markdownBody: "font-retni-sans text-base font-normal leading-[24px] tracking-normal",
  markdownH1: "font-signifier text-[28px] leading-[36px] tracking-[-0.015em]",
  markdownH2: "font-signifier text-[24px] leading-[32px] tracking-[-0.015em]",
  markdownH3: "font-signifier text-xl leading-[28px] tracking-[-0.015em]",
} as const;
