import type { Metadata } from "next"
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google"

import "@workspace/ui/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { DayNav } from "@/components/day-nav"
import { DayNavMobile } from "@/components/day-nav-mobile"
import { cn } from "@workspace/ui/lib/utils"
import { WelcomeBanner } from "@/components/welcome-banner"

export const metadata: Metadata = {
  title: "NYU Tandon IDEA · Design with AI for Public Service",
  description:
    "Summer 2026 course hub — Design with AI for Public Service at NYU Tandon IDEA",
}

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading-var",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased font-sans",
        geist.variable,
        fontMono.variable,
        jakarta.variable,
      )}
    >
      <body suppressHydrationWarning>
        <ThemeProvider>
          <div className="relative min-h-screen">
            <SiteHeader />
            <WelcomeBanner />

            <div className="lg:hidden px-4 py-3 border-b">
              <DayNavMobile />
            </div>

            <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-0">
              <aside className="hidden lg:block sticky top-14 h-[calc(100vh-3.5rem)] border-r">
                <DayNav />
              </aside>

              <main className="min-w-0">
                <div className="mx-auto max-w-5xl">{children}</div>
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
