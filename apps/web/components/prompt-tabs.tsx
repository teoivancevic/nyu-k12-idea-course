"use client"

import { useState } from "react"
import type { PromptSection } from "@/lib/content"
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@workspace/ui/components/tabs"
import { Check, Copy } from "lucide-react"

function PromptCopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs text-muted-foreground hover:bg-muted hover:text-foreground transition-colors cursor-pointer shrink-0"
    >
      {copied ? (
        <>
          <Check className="size-3.5" />
          Copied!
        </>
      ) : (
        <>
          <Copy className="size-3.5" />
          Copy prompt
        </>
      )}
    </button>
  )
}

export function PromptTabs({
  sections,
  intro,
}: {
  sections: PromptSection[]
  intro?: string
}) {
  if (sections.length === 0) return null

  return (
    <div id="prompt-sequences" className="my-10">
      <h2 className="font-[family-name:var(--font-heading-var)] text-2xl font-bold mb-2 text-foreground">
        Prompt Sequences
      </h2>
      {intro && (
        <p className="text-foreground/90 mb-6 leading-relaxed">{intro}</p>
      )}

      <Tabs defaultValue={sections[0]?.id}>
        <TabsList className="w-full">
          {sections.map((section) => (
            <TabsTrigger key={section.id} value={section.id} className="flex-1">
              {section.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {sections.map((section) => (
          <TabsContent key={section.id} value={section.id}>
            <div className="space-y-4 pt-4">
              {section.prompts.map((prompt) => (
                <div
                  key={prompt.step}
                  className="rounded-xl border bg-card p-4"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <span className="text-xs font-mono text-muted-foreground">
                        Step {prompt.step}
                      </span>
                      <h4 className="text-sm font-semibold text-foreground">
                        {prompt.title}
                      </h4>
                    </div>
                    <PromptCopyButton text={prompt.prompt} />
                  </div>
                  <div className="rounded-lg bg-muted/50 p-3 text-sm leading-relaxed text-foreground/90">
                    {prompt.prompt}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
