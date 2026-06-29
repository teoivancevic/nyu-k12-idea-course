import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { CheckCircle2 } from "lucide-react"

export function ActionItemsSidebar({
  items,
}: {
  items?: string[]
}) {
  const hasItems = items && items.length > 0

  return (
    <Card>
      <CardHeader className="p-4 pb-2">
        <CardTitle className="text-sm font-semibold">
          Today&apos;s Deliverables
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        {hasItems ? (
          <ul className="space-y-2.5">
            {items.map((item, i) => (
              <li key={i} className="flex gap-2 text-sm text-foreground/80">
                <CheckCircle2 className="size-4 text-primary/50 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-muted-foreground">
            Check back after class
          </p>
        )}
      </CardContent>
    </Card>
  )
}
