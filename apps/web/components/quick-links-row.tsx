import type { DayFrontmatter } from "@/lib/content"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import {
  FileText,
  Wrench,
  BookOpen,
  Mic,
  ExternalLink,
} from "lucide-react"

function LinkCard({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType
  title: string
  children: React.ReactNode
}) {
  return (
    <Card className="flex-1 min-w-0">
      <CardHeader className="p-3 pb-1">
        <CardTitle className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wide">
          <Icon className="size-3.5" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-3 pt-1">{children}</CardContent>
    </Card>
  )
}

function LinkList({
  links,
  placeholder,
}: {
  links: { label: string; url: string }[]
  placeholder?: string
}) {
  if (links.length === 0) {
    return <p className="text-xs text-muted-foreground">{placeholder}</p>
  }
  return (
    <div className="space-y-1.5">
      {links.map((link) => (
        <a
          key={link.url}
          href={link.url}
          target={link.url.startsWith("/") ? undefined : "_blank"}
          rel={link.url.startsWith("/") ? undefined : "noopener noreferrer"}
          className="flex items-center gap-1.5 text-sm text-primary hover:underline"
        >
          <span className="truncate">{link.label}</span>
          <ExternalLink className="size-3 shrink-0" />
        </a>
      ))}
    </div>
  )
}

export function QuickLinksRow({
  frontmatter,
}: {
  frontmatter: DayFrontmatter
}) {
  const hasAdvancedLinks =
    frontmatter.advancedLinks && frontmatter.advancedLinks.length > 0

  const lectureMaterials = frontmatter.lectureMaterials?.length
    ? frontmatter.lectureMaterials
    : frontmatter.lectureSlides
      ? [{ label: "View slides", url: frontmatter.lectureSlides }]
      : []

  const workshopLinks = frontmatter.workshopLinks ?? []

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-8">
      <LinkCard icon={FileText} title="Lecture Materials">
        <LinkList
          links={lectureMaterials}
          placeholder="Slides will be posted before class"
        />
      </LinkCard>

      <LinkCard icon={Wrench} title="Workshop Tools">
        <LinkList
          links={workshopLinks}
          placeholder="No tools listed yet"
        />
      </LinkCard>

      <LinkCard icon={Mic} title="Granola Notes">
        {frontmatter.granolaNotesUrl ? (
          <a
            href={frontmatter.granolaNotesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-primary hover:underline"
          >
            <span>View notes</span>
            <ExternalLink className="size-3 shrink-0" />
          </a>
        ) : (
          <p className="text-xs text-muted-foreground">Notes will appear after class</p>
        )}
      </LinkCard>

      {hasAdvancedLinks && (
        <LinkCard icon={BookOpen} title="Advanced Reading">
          <LinkList links={frontmatter.advancedLinks!} />
        </LinkCard>
      )}
    </div>
  )
}
