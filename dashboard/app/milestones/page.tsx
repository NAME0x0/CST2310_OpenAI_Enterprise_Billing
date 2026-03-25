import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { milestones, ganttTasks, WEEKS } from "@/lib/data"

const stageMap: Record<number, { name: string; description: string }> = {
  7: {
    name: "Inception Phase 1",
    description:
      "Initial requirements, vision, scope, business case",
  },
  8: {
    name: "Inception Phase 2",
    description:
      "Activity list, WBS, Gantt chart, risk matrix, case study",
  },
  9: {
    name: "Elaboration Phase 1",
    description:
      "Use case diagrams, class diagram, ERD, activity diagrams",
  },
  10: {
    name: "Elaboration Phase 2",
    description:
      "Sequence diagrams, collaboration diagrams, UI designs, tutor review",
  },
  11: {
    name: "Elaboration Phase 3",
    description:
      "Law & ethics, diagram refinement, report drafting",
  },
  12: {
    name: "Submission",
    description:
      "Final report compilation, peer review, presentation, submission",
  },
}

export default function MilestonesPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          Milestones &amp; Timeline
        </h1>
        <p className="text-muted-foreground">
          Unified Process milestones and weekly deliverables
        </p>
      </div>

      {/* Timeline */}
      <div className="flex flex-col gap-0">
        {WEEKS.map((week, idx) => {
          const stage = stageMap[week]
          const weekMilestones = milestones.filter((m) => m.week === week)
          const weekTasks = ganttTasks.filter(
            (t) =>
              !t.isMilestone &&
              ((t.startWeek <= week && t.endWeek >= week) ||
                t.startWeek === week)
          )
          const uniqueTasks = weekTasks.filter(
            (t, i, arr) => arr.findIndex((x) => x.id === t.id) === i
          )
          const isLast = idx === WEEKS.length - 1

          return (
            <div key={week} className="flex gap-4">
              {/* Timeline track */}
              <div className="flex flex-col items-center pt-4">
                <div className="flex size-9 items-center justify-center rounded-full border-2 border-primary bg-background text-sm font-bold shrink-0 tabular-nums">
                  {week}
                </div>
                {!isLast && (
                  <div className="w-px flex-1 bg-border min-h-6" />
                )}
              </div>

              {/* Content card */}
              <div className="flex-1 pb-6">
                <Card className="transition-shadow hover:shadow-sm">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">
                          Week {week}
                        </CardTitle>
                        <CardDescription>{stage.name}</CardDescription>
                      </div>
                      <Badge
                        variant="outline"
                        className="text-xs tabular-nums shrink-0"
                      >
                        {uniqueTasks.length} tasks
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      {stage.description}
                    </p>

                    {weekMilestones.length > 0 && (
                      <>
                        <Separator className="my-3" />
                        <div className="flex flex-col gap-2">
                          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                            Milestones
                          </span>
                          {weekMilestones.map((m) => (
                            <div
                              key={m.name}
                              className="flex items-center gap-2.5 text-sm"
                            >
                              <span className="size-2 rotate-45 bg-primary shrink-0" />
                              <span>{m.name}</span>
                              <Badge
                                variant="secondary"
                                className="ml-auto text-xs shrink-0"
                              >
                                Day {m.day}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
