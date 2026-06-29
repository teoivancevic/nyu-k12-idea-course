import { courseConfig } from "@content/config"
import { ScheduleTable } from "@/components/schedule-table"
import { MapPin, Clock, Calendar } from "lucide-react"

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
          <span className="flex items-center gap-2">
            <MapPin className="size-4 text-primary/70" />
            {courseConfig.location}
          </span>
        </div>
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
