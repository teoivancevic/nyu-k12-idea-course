import type { DayFrontmatter } from "@/lib/content"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import {
  FileText,
  Wrench,
  BookOpen,
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
        <CardTitle className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
          <Icon className="size-3.5" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-3 pt-1">{children}</CardContent>
    </Card>
  )
}

export function QuickLinksRow({
  frontmatter,
}: {
  frontmatter: DayFrontmatter
}) {
  const hasWorkshopLinks =
    frontmatter.workshopLinks && frontmatter.workshopLinks.length > 0
  const hasAdvancedLinks =
    frontmatter.advancedLinks && frontmatter.advancedLinks.length > 0

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-8">
      <LinkCard icon={FileText} title="Lecture Materials">
        {frontmatter.lectureMaterials &&
        frontmatter.lectureMaterials.length > 0 ? (
          <div className="space-y-1">
            {frontmatter.lectureMaterials.map((mat) => (
              <a
                key={mat.url}
                href={mat.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-primary hover:underline"
              >
                {mat.label} <ExternalLink className="size-3" />
              </a>
            ))}
          </div>
        ) : frontmatter.lectureSlides ? (
          <a
            href={frontmatter.lectureSlides}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
          >
            View slides <ExternalLink className="size-3" />
          </a>
        ) : (
          <p className="text-xs text-muted-foreground">
            Slides will be posted before class
          </p>
        )}
      </LinkCard>

      <LinkCard icon={Wrench} title="Workshop Tools">
        {hasWorkshopLinks ? (
          <div className="flex flex-wrap gap-1.5">
            {frontmatter.workshopLinks!.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Badge
                  variant="secondary"
                  className="text-xs hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
                >
                  {link.label}
                </Badge>
              </a>
            ))}
          </div>
        ) : (
          <p className="text-xs text-muted-foreground">
            No tools listed yet
          </p>
        )}
      </LinkCard>

      {hasAdvancedLinks && (
        <LinkCard icon={BookOpen} title="Advanced Reading">
          <div className="space-y-1">
            {frontmatter.advancedLinks!.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs text-primary hover:underline truncate"
              >
                {link.label}
              </a>
            ))}
          </div>
        </LinkCard>
      )}
    </div>
  )
}
