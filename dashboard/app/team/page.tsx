import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { teamMembers, ganttTasks } from "@/lib/data"
import { TaskDistribution } from "@/components/task-distribution"

const totalNonMilestone = ganttTasks.filter((t) => !t.isMilestone).length

export default function TeamPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Team</h1>
        <p className="text-muted-foreground">
          Member roles, file ownership, and task distribution
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {teamMembers.map((m) => {
          const taskCount = ganttTasks.filter(
            (t) => t.owner === m.name && !t.isMilestone
          ).length
          const pct = Math.round((taskCount / totalNonMilestone) * 100)

          return (
            <Card key={m.name} className="transition-shadow hover:shadow-sm">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div
                    className="size-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                    style={{
                      backgroundColor: m.color,
                      boxShadow: `0 0 0 2px var(--background), 0 0 0 4px ${m.color}`,
                    }}
                  >
                    {m.name[0]}
                  </div>
                  <div>
                    <CardTitle className="text-base">{m.name}</CardTitle>
                    <CardDescription className="text-xs font-mono">
                      {m.handle}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium">{m.role}</p>
                <Separator className="my-3" />

                {/* Task allocation bar */}
                <div className="flex flex-col gap-1.5 mb-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Assigned tasks</span>
                    <span className="tabular-nums text-xs">
                      {taskCount} / {totalNonMilestone} ({pct}%)
                    </span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{
                        width: `${pct}%`,
                        backgroundColor: m.color,
                      }}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-xs text-muted-foreground">
                    Primary files
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {m.files.map((f) => (
                      <Badge key={f} variant="outline" className="text-[10px]">
                        {f}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Task Distribution</CardTitle>
          <CardDescription>Number of individual tasks per member</CardDescription>
        </CardHeader>
        <CardContent>
          <TaskDistribution />
        </CardContent>
      </Card>
    </div>
  )
}
