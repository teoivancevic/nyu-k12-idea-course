"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { courseConfig } from "@content/config"
import { cn } from "@workspace/ui/lib/utils"
import { ScrollArea } from "@workspace/ui/components/scroll-area"
import { Home, Lock, Calendar } from "lucide-react"

function DayNavItem({
  day,
  isActive,
  isLocked,
}: {
  day: (typeof courseConfig.schedule)[number]
  isActive: boolean
  isLocked: boolean
}) {
  return (
    <div className="flex flex-col gap-0.5 min-h-[3.75rem] justify-center">
      <div className="flex items-center gap-1.5 text-xs">
        {isLocked && <Lock className="size-3 shrink-0" />}
        <span className="font-mono">Day {day.day}</span>
        <span className="opacity-30">·</span>
        <span>{day.weekday}, {day.date}</span>
      </div>
      <span className={cn("text-sm leading-tight line-clamp-2", isActive && "font-medium")}>
        {day.theme}
      </span>
    </div>
  )
}

export function DayNav() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col h-full">
      <ScrollArea className="flex-1">
        <nav className="space-y-1 p-4">
          <Link
            href="/"
            className={cn(
              "flex items-center gap-2 rounded-lg px-3 min-h-[3.75rem] text-sm transition-colors",
              pathname === "/"
                ? "bg-primary/10 text-primary font-medium"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            <Home className="size-4" />
            <span>Home</span>
          </Link>

          <div className="my-2 border-b border-border/50" />

          {courseConfig.schedule.map((day, i) => {
            const isActive = pathname === `/day/${day.day}`
            const prevDay = courseConfig.schedule[i - 1]
            const showWeekDivider = prevDay && prevDay.week !== day.week

            const item = !day.available ? (
              <div
                key={day.day}
                className="rounded-lg px-3 text-muted-foreground/40 cursor-not-allowed"
              >
                <DayNavItem day={day} isActive={false} isLocked />
              </div>
            ) : (
              <Link
                key={day.day}
                href={`/day/${day.day}`}
                className={cn(
                  "block rounded-lg px-3 transition-colors",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                <DayNavItem day={day} isActive={isActive} isLocked={false} />
              </Link>
            )

            if (showWeekDivider) {
              return (
                <div key={day.day}>
                  <div className="my-2 border-b border-dashed border-border/50" />
                  {item}
                </div>
              )
            }

            return item
          })}
        </nav>
      </ScrollArea>

      <div className="border-t p-4">
        <a
          href="https://cal.com/teoivancevic/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-lg border border-dashed border-primary/30 bg-primary/5 px-3 py-3 text-sm transition-colors hover:bg-primary/10 hover:border-primary/50"
        >
          <Calendar className="size-4 text-primary shrink-0" />
          <div>
            <p className="font-medium text-foreground text-xs">Office Hours</p>
            <p className="text-xs text-muted-foreground">Book time with Teo</p>
          </div>
        </a>
      </div>
    </div>
  )
}
