import { notFound } from "next/navigation"
import { getDayContent } from "@/lib/content"
import { renderMarkdown } from "@/lib/markdown"
import { courseConfig } from "@content/config"
import { QuickLinksRow } from "@/components/quick-links-row"
import { MarkdownRenderer } from "@/components/markdown-renderer"
import { PromptTabs } from "@/components/prompt-tabs"
import { TableOfContents, type TocItem } from "@/components/table-of-contents"
import { ActionItemsSidebar } from "@/components/action-items-sidebar"
import { Card, CardContent } from "@workspace/ui/components/card"
import { Lock, Mic, ExternalLink } from "lucide-react"

export function generateStaticParams() {
  return Array.from({ length: courseConfig.schedule.length }, (_, i) => ({
    dayNumber: String(i + 1),
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ dayNumber: string }>
}) {
  const { dayNumber } = await params
  const scheduleDay = courseConfig.schedule.find(
    (d) => d.day === Number(dayNumber),
  )
  if (!scheduleDay) return {}

  return {
    title: `Day ${dayNumber}: ${scheduleDay.theme} — ${courseConfig.program}`,
    description: scheduleDay.theme,
  }
}

export default async function DayPage({
  params,
}: {
  params: Promise<{ dayNumber: string }>
}) {
  const { dayNumber } = await params
  const num = Number(dayNumber)
  const scheduleDay = courseConfig.schedule.find((d) => d.day === num)
  if (!scheduleDay) notFound()

  if (!scheduleDay.available) {
    return (
      <div className="px-4 sm:px-6 py-6 lg:py-8">
        <div className="mb-6">
          <p className="text-sm text-muted-foreground mb-1">
            Day {dayNumber}
            <span className="mx-1.5 opacity-30">·</span>
            {scheduleDay.theme}
          </p>
          <h1 className="font-[family-name:var(--font-heading-var)] text-2xl sm:text-3xl font-bold tracking-tight">
            {scheduleDay.theme}
          </h1>
        </div>
        <Card className="border-dashed">
          <CardContent className="flex flex-col items-center justify-center py-16 text-center">
            <Lock className="size-8 text-muted-foreground/40 mb-4" />
            <p className="text-lg font-medium text-muted-foreground mb-1">
              Coming soon
            </p>
            <p className="text-sm text-muted-foreground/60">
              This day&apos;s content will be available when class begins.
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  const day = getDayContent(num)
  if (!day) notFound()

  const { html, headings } = await renderMarkdown(day.content)

  const allHeadings: TocItem[] = [...headings]
  if (day.frontmatter.promptSections && day.frontmatter.promptSections.length > 0) {
    allHeadings.push({ id: "prompt-sequences", text: "Prompt Sequences", level: 2 })
  }

  return (
    <div className="lg:grid lg:grid-cols-[1fr_240px] lg:gap-6">
      <div className="min-w-0 px-4 sm:px-6 py-6 lg:py-8">
        <div className="mb-6">
          <p className="text-sm text-muted-foreground mb-1">
            Day {dayNumber}
            <span className="mx-1.5 opacity-30">·</span>
            {scheduleDay.theme}
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="font-[family-name:var(--font-heading-var)] text-2xl sm:text-3xl font-bold tracking-tight">
              {day.frontmatter.title}
            </h1>
            {day.frontmatter.granolaNotesUrl ? (
              <a
                href={day.frontmatter.granolaNotesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary transition-colors hover:bg-primary/10"
              >
                <Mic className="size-3" />
                Granola Notes
                <ExternalLink className="size-3" />
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground cursor-not-allowed">
                <Mic className="size-3" />
                Granola Notes
              </span>
            )}
          </div>
        </div>

        <QuickLinksRow frontmatter={day.frontmatter} />

        <MarkdownRenderer html={html} />

        {day.frontmatter.promptSections &&
          day.frontmatter.promptSections.length > 0 && (
            <PromptTabs
              sections={day.frontmatter.promptSections}
              intro={day.frontmatter.promptIntro}
            />
          )}
      </div>

      <aside className="px-4 sm:px-6 pb-8 lg:px-0 lg:py-8">
        <div className="lg:sticky lg:top-22 space-y-6">
          <TableOfContents items={allHeadings} />
          <ActionItemsSidebar items={day.frontmatter.actionItems} />
        </div>
      </aside>
    </div>
  )
}
