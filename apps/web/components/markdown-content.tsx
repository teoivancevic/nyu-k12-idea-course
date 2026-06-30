"use client"

import { useMemo, useState } from "react"
import { Check, Copy } from "lucide-react"

function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
    >
      {copied ? (
        <>
          <Check className="size-3.5" />
          <span>Copied!</span>
        </>
      ) : (
        <>
          <Copy className="size-3.5" />
          <span>Copy</span>
        </>
      )}
    </button>
  )
}

function CodeBlock({ code, language }: { code: string; language: string }) {
  return (
    <div className="relative my-4 rounded-xl border border-border bg-muted/50 overflow-hidden">
      <div className="flex gap-3 p-4">
        <pre className="!m-0 !border-0 !rounded-none !bg-transparent flex-1 min-w-0">
          <code className="block text-sm leading-relaxed whitespace-pre-wrap break-words">
            {code}
          </code>
        </pre>
        <div className="shrink-0 pt-0.5">
          <CopyButton code={code} />
        </div>
      </div>
    </div>
  )
}

export function MarkdownContent({ html }: { html: string }) {
  const parts = useMemo(() => {
    const segments: Array<
      { type: "html"; content: string } | { type: "code"; code: string; language: string }
    > = []

    const regex = /<pre><code(?:\s+class="language-(\w+)")?>([\s\S]*?)<\/code><\/pre>/g
    let lastIndex = 0
    let match

    while ((match = regex.exec(html)) !== null) {
      if (match.index > lastIndex) {
        segments.push({ type: "html", content: html.slice(lastIndex, match.index) })
      }

      const language = match[1] || ""
      const code = (match[2] ?? "")
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/\n/g, " ")
        .replace(/\s+/g, " ")
        .trim()

      segments.push({ type: "code", code, language })
      lastIndex = match.index + match[0].length
    }

    if (lastIndex < html.length) {
      segments.push({ type: "html", content: html.slice(lastIndex) })
    }

    return segments
  }, [html])

  return (
    <div className="prose-custom">
      {parts.map((part, i) =>
        part.type === "html" ? (
          <div key={i} dangerouslySetInnerHTML={{ __html: part.content }} />
        ) : (
          <CodeBlock key={i} code={part.code} language={part.language} />
        ),
      )}
    </div>
  )
}
