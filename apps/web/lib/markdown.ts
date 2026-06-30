import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkGfm from "remark-gfm"
import remarkRehype from "remark-rehype"
import rehypeRaw from "rehype-raw"
import rehypeStringify from "rehype-stringify"
import type { TocItem } from "@/components/table-of-contents"

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()
}

function addHeadingIds(html: string): { html: string; headings: TocItem[] } {
  const headings: TocItem[] = []
  const seen = new Map<string, number>()
  const processed = html.replace(
    /<(h[23])>(.*?)<\/\1>/g,
    (_match, tag: string, content: string) => {
      const text = content.replace(/<[^>]+>/g, "")
      const base = slugify(text)
      const count = seen.get(base) ?? 0
      seen.set(base, count + 1)
      const id = count === 0 ? base : `${base}-${count}`
      const level = tag === "h2" ? 2 : 3
      headings.push({ id, text, level })
      return `<${tag} id="${id}">${content}</${tag}>`
    },
  )
  return { html: processed, headings }
}

export async function renderMarkdown(
  content: string,
): Promise<{ html: string; headings: TocItem[] }> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(content)
  return addHeadingIds(String(result))
}
