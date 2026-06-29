import Link from "next/link"
import { courseConfig } from "@content/config"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-7xl items-center px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-[family-name:var(--font-heading-var)] text-sm font-bold text-primary">
            {courseConfig.program}
          </span>
          <span className="text-border">|</span>
          <span className="text-sm text-muted-foreground hidden sm:inline">
            {courseConfig.title}
          </span>
        </Link>
      </div>
    </header>
  )
}
