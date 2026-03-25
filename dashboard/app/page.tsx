import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  BookCheckIcon,
  ListChecksIcon,
  UsersIcon,
  CalendarDaysIcon,
} from "lucide-react"
import {
  ganttTasks,
  teamMembers,
  markData,
  milestones,
  TOTAL_MARKS,
} from "@/lib/data"
import { OverviewCharts } from "@/components/overview-charts"

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

export default function Page() {
  const totalTasks = ganttTasks.filter((t) => !t.isMilestone).length
  const memberCount = teamMembers.length

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Project Overview</h1>
        <p className="text-muted-foreground">
          CST2310 — OpenAI Enterprise Billing | Weeks 7–12 | Due 24 April 2026
        </p>
      </div>

      {/* Summary cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardDescription>Total Marks</CardDescription>
            <BookCheckIcon className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold tabular-nums">
              /{TOTAL_MARKS}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {markData.length} components
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardDescription>Total Tasks</CardDescription>
            <ListChecksIcon className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold tabular-nums">{totalTasks}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {milestones.length} milestones
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardDescription>Team Members</CardDescription>
            <UsersIcon className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold tabular-nums">{memberCount}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Unified Process
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardDescription>Project Duration</CardDescription>
            <CalendarDaysIcon className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold tabular-nums">6 Weeks</div>
            <p className="text-xs text-muted-foreground mt-1">
              Week 7 &rarr; Week 12
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Marks allocation chart */}
        <Card>
          <CardHeader>
            <CardTitle>Marks Allocation</CardTitle>
            <CardDescription>Maximum marks per assessment component</CardDescription>
          </CardHeader>
          <CardContent>
            <OverviewCharts />
          </CardContent>
        </Card>

        {/* Milestones */}
        <Card>
          <CardHeader>
            <CardTitle>Milestones</CardTitle>
            <CardDescription>Key project gates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-3">
              {milestones.map((m, i) => (
                <div key={m.name}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex size-6 items-center justify-center rounded-full border bg-muted text-[10px] font-bold tabular-nums">
                        {i + 1}
                      </div>
                      <span className="text-sm">{m.name}</span>
                    </div>
                    <Badge variant="outline" className="text-xs tabular-nums shrink-0 ml-2">
                      W{m.week} D{m.day}
                    </Badge>
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="ml-3 h-3 border-l border-dashed border-muted-foreground/30" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Marking Components */}
      <Card>
        <CardHeader>
          <CardTitle>Marking Components</CardTitle>
          <CardDescription>Assessment breakdown — marks available per component</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {markData.map((c) => {
              const color = COMPONENT_COLORS[c.component] ?? "oklch(0.58 0.16 15)"
              const pct = Math.round((c.marks / c.maxMarks) * 100)
              return (
                <div
                  key={c.component}
                  className="rounded-lg border border-l-4 p-4 transition-shadow hover:shadow-sm"
                  style={{ borderLeftColor: color }}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="size-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: color }}
                    />
                    <p className="font-medium text-sm">{c.component}</p>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex flex-col gap-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Available</span>
                      <span className="tabular-nums font-semibold">{c.maxMarks} marks</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${pct}%`,
                          backgroundColor: color,
                        }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{c.marks}/{c.maxMarks} scored</span>
                      <span>{pct}%</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
