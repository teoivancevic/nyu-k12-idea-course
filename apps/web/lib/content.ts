import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

export interface WorkshopLink {
  label: string
  url: string
}

export interface AdvancedLink {
  label: string
  url: string
}

export interface PromptStep {
  step: number
  title: string
  prompt: string
}

export interface PromptSection {
  id: string
  label: string
  prompts: PromptStep[]
}

export interface LectureMaterial {
  label: string
  url: string
}

export interface DayFrontmatter {
  title: string
  day: number
  lectureSlides?: string
  lectureMaterials?: LectureMaterial[]
  granolaNotesUrl?: string
  workshopLinks?: WorkshopLink[]
  advancedLinks?: AdvancedLink[]
  actionItems?: string[]
  promptSections?: PromptSection[]
  promptIntro?: string
}

export interface DayContent {
  frontmatter: DayFrontmatter
  content: string
}

function getContentDir() {
  return path.join(process.cwd(), "../../content/days")
}

export function getDayContent(dayNumber: number): DayContent | null {
  const filePath = path.join(getContentDir(), `day-${dayNumber}.md`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(raw)
  return { frontmatter: data as DayFrontmatter, content }
}

export function getAllDays(): DayContent[] {
  const days: DayContent[] = []
  for (let i = 1; i <= 8; i++) {
    const day = getDayContent(i)
    if (day) days.push(day)
  }
  return days
}
