import { MarkdownContent } from "./markdown-content"

export function MarkdownRenderer({ html }: { html: string }) {
  return <MarkdownContent html={html} />
}
