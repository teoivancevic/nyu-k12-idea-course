"use client"

import { useEffect, useRef, useState } from "react"
import { Check, Copy } from "lucide-react"
import { createPortal } from "react-dom"

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

export function MarkdownContent({ html }: { html: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [codeBlocks, setCodeBlocks] = useState<
    Array<{ element: HTMLElement; code: string; language: string }>
  >([])

  useEffect(() => {
    if (!containerRef.current) return

    const pres = containerRef.current.querySelectorAll("pre")
    const blocks: typeof codeBlocks = []

    pres.forEach((pre) => {
      const codeEl = pre.querySelector("code")
      if (!codeEl) return

      const code = codeEl.textContent || ""
      const langMatch = /language-(\w+)/.exec(codeEl.className || "")
      const language = langMatch?.[1] || ""

      pre.className =
        "group relative my-4 rounded-xl border bg-muted/50 overflow-hidden"
      codeEl.className = "block overflow-x-auto p-4 text-sm leading-relaxed"

      const header = document.createElement("div")
      header.className =
        "flex items-center justify-between px-4 py-2 border-b border-border/50"
      pre.insertBefore(header, pre.firstChild)

      if (language) {
        const langSpan = document.createElement("span")
        langSpan.className = "text-xs text-muted-foreground font-mono"
        langSpan.textContent = language
        header.appendChild(langSpan)
      }

      const buttonMount = document.createElement("span")
      buttonMount.className = "ml-auto"
      header.appendChild(buttonMount)

      blocks.push({ element: buttonMount, code, language })
    })

    // Style links to open in new tab
    const links = containerRef.current.querySelectorAll("a")
    links.forEach((a) => {
      if (a.hostname !== window.location.hostname) {
        a.target = "_blank"
        a.rel = "noopener noreferrer"
      }
    })

    setCodeBlocks(blocks)
  }, [html])

  return (
    <>
      <div
        ref={containerRef}
        className="prose-custom"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      {codeBlocks.map((block, i) =>
        createPortal(<CopyButton code={block.code} />, block.element, `cb-${i}`),
      )}
    </>
  )
}
