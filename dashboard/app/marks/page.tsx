import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table"
import { markData, TOTAL_MARKS } from "@/lib/data"
import { MarksCharts } from "@/components/marks-charts"

const COMPONENT_COLORS: Record<string, string> = {
  "Case Study": "oklch(0.6 0.19 260)",
  "Use Case Diagrams": "oklch(0.6 0.18 165)",
  "Use Case Descriptors": "oklch(0.62 0.17 155)",
  "Class Diagram": "oklch(0.65 0.17 55)",
  "Activity Diagrams": "oklch(0.62 0.18 55)",
  "Sequence Diagrams": "oklch(0.58 0.2 305)",
  "Project Management": "oklch(0.55 0.2 250)",
  "Law & Ethics": "oklch(0.6 0.16 15)",
  "Presentation": "oklch(0.63 0.2 305)",
}

export default function MarksPage() {
  const totalScored = markData.reduce((sum, m) => sum + m.marks, 0)

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Marks</h1>
        <p className="text-muted-foreground">
          Assessment component breakdown — marks available and scored out of {TOTAL_MARKS}
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Marks Allocation</CardTitle>
            <CardDescription>
              Maximum marks available per assessment component
            </CardDescription>
          </CardHeader>
          <CardContent>
            <MarksCharts />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Marks Summary</CardTitle>
            <CardDescription>Itemised breakdown per component</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Component</TableHead>
                  <TableHead className="text-right">Scored</TableHead>
                  <TableHead className="text-right">Available</TableHead>
                  <TableHead className="text-right">%</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {markData.map((m) => {
                  const pct = m.maxMarks > 0
                    ? Math.round((m.marks / m.maxMarks) * 100)
                    : 0
                  const color = COMPONENT_COLORS[m.component] ?? "oklch(0.58 0.16 15)"
                  return (
                    <TableRow key={m.component}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span
                            className="size-2.5 rounded-full shrink-0"
                            style={{ backgroundColor: color }}
                          />
                          <span className="font-medium">{m.component}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right tabular-nums">
                        {m.marks}
                      </TableCell>
                      <TableCell className="text-right tabular-nums font-semibold">
                        {m.maxMarks}
                      </TableCell>
                      <TableCell className="text-right tabular-nums text-muted-foreground">
                        {pct}%
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={2} className="font-semibold">
                    Total
                  </TableCell>
                  <TableCell className="text-right font-bold tabular-nums">
                    {TOTAL_MARKS}
                  </TableCell>
                  <TableCell className="text-right font-bold tabular-nums">
                    {TOTAL_MARKS > 0
                      ? Math.round((totalScored / TOTAL_MARKS) * 100)
                      : 0}%
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
