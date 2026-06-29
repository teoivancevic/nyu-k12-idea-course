import { courseConfig } from "@content/config"
import { ScheduleTable } from "@/components/schedule-table"
import { Card, CardContent } from "@workspace/ui/components/card"
import { MapPin, Clock, Calendar, FileText, ExternalLink } from "lucide-react"

export default function HomePage() {
  return (
    <div className="px-4 sm:px-6 py-12 sm:py-20 max-w-3xl">
      <div className="mb-12 sm:mb-16">
        <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">
          {courseConfig.program} · {courseConfig.semester}
        </p>
        <h1 className="font-[family-name:var(--font-heading-var)] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
          {courseConfig.title}
        </h1>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <Calendar className="size-4 text-primary/70" />
            {courseConfig.dates}
          </span>
          <span className="flex items-center gap-2">
            <Clock className="size-4 text-primary/70" />
            {courseConfig.times}
          </span>
          <a
            href={courseConfig.locationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <MapPin className="size-4 text-primary/70" />
            {courseConfig.location}
          </a>
        </div>
      </div>

      <div className="mb-12">
        {courseConfig.syllabusUrl ? (
          <a href={courseConfig.syllabusUrl} target="_blank" rel="noopener noreferrer">
            <Card className="transition-colors hover:border-primary/30 hover:bg-primary/5">
              <CardContent className="flex items-center gap-3 py-4">
                <FileText className="size-5 text-primary shrink-0" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">Course Syllabus</p>
                  <p className="text-xs text-muted-foreground">View the full syllabus and course policies</p>
                </div>
                <ExternalLink className="size-4 text-muted-foreground" />
              </CardContent>
            </Card>
          </a>
        ) : (
          <Card className="border-dashed">
            <CardContent className="flex items-center gap-3 py-4">
              <FileText className="size-5 text-muted-foreground/40 shrink-0" />
              <div>
                <p className="text-sm font-medium text-muted-foreground">Course Syllabus</p>
                <p className="text-xs text-muted-foreground/60">Will be posted before the first class</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      <section>
        <h2 className="font-[family-name:var(--font-heading-var)] text-xl font-semibold mb-6">
          Course Schedule
        </h2>
        <ScheduleTable />
      </section>
    </div>
  )
}
