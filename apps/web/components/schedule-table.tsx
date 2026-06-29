import Link from "next/link"
import { courseConfig } from "@content/config"
import {
  Card,
  CardContent,
} from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import { ArrowRight, Lock } from "lucide-react"
import { cn } from "@workspace/ui/lib/utils"

export function ScheduleTable() {
  return (
    <div className="space-y-6">
      {[1, 2].map((week) => (
        <div key={week}>
          <h3 className="font-[family-name:var(--font-heading-var)] text-lg font-semibold mb-3">
            Week {week}
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {courseConfig.schedule
              .filter((d) => d.week === week)
              .map((day) => {
                const inner = (
                  <Card
                    className={cn(
                      "h-full transition-all",
                      day.available
                        ? "group hover:border-primary/40 hover:shadow-sm cursor-pointer"
                        : "opacity-50",
                    )}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <Badge
                            variant="secondary"
                            className="text-xs font-mono"
                          >
                            Day {day.day}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {day.weekday}, {day.date}
                          </span>
                        </div>
                        {day.available ? (
                          <ArrowRight className="size-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-0.5" />
                        ) : (
                          <Lock className="size-3.5 text-muted-foreground shrink-0 mt-0.5" />
                        )}
                      </div>
                      <p className="font-[family-name:var(--font-heading-var)] font-semibold text-sm">
                        {day.theme}
                      </p>
                    </CardContent>
                  </Card>
                )

                if (day.available) {
                  return (
                    <Link key={day.day} href={`/day/${day.day}`}>
                      {inner}
                    </Link>
                  )
                }

                return <div key={day.day}>{inner}</div>
              })}
          </div>
        </div>
      ))}
    </div>
  )
}
