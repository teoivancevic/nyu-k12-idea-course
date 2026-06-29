import { notFound } from "next/navigation"
import { courseConfig } from "@content/config"

export default async function DayLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ dayNumber: string }>
}) {
  const { dayNumber } = await params
  const num = Number(dayNumber)
  const scheduleDay = courseConfig.schedule.find((d) => d.day === num)
  if (!scheduleDay) notFound()

  return <>{children}</>
}
