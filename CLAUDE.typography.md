# Typography (UI)

Do not hand-pick `font-signifier`, `font-retni-sans`, and sizes on each page.

1. Import from **`@/components/typography`** (`Body`, `Heading1`, `typo`, …).
2. Color is **not** in tokens — set it via context (`text-gray-700` on wrapper) or `className`.

**RAG definition (typography):** "Rag" means the uneven edge of left-aligned text (usually the right edge). Good rag = smooth, natural variation in line endings (not jagged spikes or many ultra-short lines). Keep body copy left-aligned and optimize line breaks (`text-wrap: pretty` / balanced headings) to improve rag quality.
