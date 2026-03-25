"use client"

import { useMemo, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import {
  ganttTasks,
  teamMembers,
  WEEKS,
  DAYS_PER_WEEK,
  TOTAL_DAYS,
  getDayOffset,
  getTaskWidth,
  type GanttTask,
} from "@/lib/data"

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"]

const MEMBER_COLORS: Record<string, string> = {
  Afsah: "oklch(0.55 0.2 250)",
  Jake: "oklch(0.6 0.18 165)",
  Eeshitha: "oklch(0.55 0.2 300)",
  Syed: "oklch(0.62 0.18 55)",
}

function getColor(owner: string): string {
  return MEMBER_COLORS[owner] ?? "oklch(0.58 0.16 15)"
}

function TaskBar({ task }: { task: GanttTask }) {
  const offset = getDayOffset(task.startWeek, task.startDay)
  const width = getTaskWidth(task)
  const leftPct = (offset / TOTAL_DAYS) * 100
  const widthPct = (width / TOTAL_DAYS) * 100
  const color = getColor(task.owner)

  if (task.isMilestone) {
    const centerPct = leftPct + widthPct / 2
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className="absolute top-1/2 -translate-y-1/2 size-3 rotate-45 border-2 border-foreground bg-foreground cursor-pointer"
            style={{ left: `${centerPct}%` }}
          />
        </TooltipTrigger>
        <TooltipContent>
          <p className="font-semibold">{task.name}</p>
          <p className="text-xs">W{task.startWeek} Day {task.startDay}</p>
        </TooltipContent>
      </Tooltip>
    )
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className="absolute top-1 bottom-1 rounded-sm cursor-pointer transition-opacity hover:opacity-80"
          style={{
            left: `${leftPct}%`,
            width: `${widthPct}%`,
            backgroundColor: color,
            minWidth: "4px",
          }}
        />
      </TooltipTrigger>
      <TooltipContent>
        <p className="font-semibold">{task.name}</p>
        <p className="text-xs text-muted-foreground">
          {task.id} | {task.owner}
        </p>
        <p className="text-xs">
          W{task.startWeek}D{task.startDay} — W{task.endWeek}D{task.endDay} ({width}d)
        </p>
      </TooltipContent>
    </Tooltip>
  )
}

export function GanttChart() {
  const [filter, setFilter] = useState<string | null>(null)

  const categories = useMemo(() => {
    const cats: string[] = []
    for (const t of ganttTasks) {
      if (!cats.includes(t.category)) cats.push(t.category)
    }
    return cats
  }, [])

  const filteredTasks = filter
    ? ganttTasks.filter((t) => t.owner === filter || t.owner === "All")
    : ganttTasks

  return (
    <div className="flex flex-col gap-4">
      {/* Legend */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => setFilter(null)}
          className={`text-xs px-2 py-1 rounded-md border transition-colors ${
            filter === null ? "bg-foreground text-background" : "hover:bg-muted"
          }`}
        >
          All
        </button>
        {teamMembers.map((m) => (
          <button
            key={m.name}
            onClick={() => setFilter(filter === m.name ? null : m.name)}
            className={`flex items-center gap-1.5 text-xs px-2 py-1 rounded-md border transition-colors ${
              filter === m.name ? "bg-foreground text-background" : "hover:bg-muted"
            }`}
          >
            <span
              className="size-2.5 rounded-full"
              style={{ backgroundColor: getColor(m.name) }}
            />
            {m.name}
          </button>
        ))}
        <span className="flex items-center gap-1.5 text-xs text-muted-foreground ml-2">
          <span className="size-2.5 rotate-45 bg-foreground" />
          Milestone
        </span>
      </div>

      {/* Chart */}
      <div className="overflow-x-auto border rounded-lg">
        <div className="min-w-[900px]">
          {/* Week headers */}
          <div className="flex border-b bg-muted/50">
            <div className="w-56 shrink-0 px-3 py-2 text-xs font-medium text-muted-foreground border-r">
              Task
            </div>
            <div className="flex-1 flex">
              {WEEKS.map((w) => (
                <div
                  key={w}
                  className="flex-1 text-center text-xs font-semibold py-2 border-r last:border-r-0"
                >
                  Week {w}
                </div>
              ))}
            </div>
          </div>

          {/* Day headers */}
          <div className="flex border-b bg-muted/30">
            <div className="w-56 shrink-0 border-r" />
            <div className="flex-1 flex">
              {WEEKS.map((w) =>
                DAYS.map((d, i) => (
                  <div
                    key={`${w}-${i}`}
                    className="flex-1 text-center text-[10px] text-muted-foreground py-1 border-r last:border-r-0"
                  >
                    {d}
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Task rows grouped by category */}
          {categories.map((cat) => {
            const tasks = filteredTasks.filter((t) => t.category === cat)
            if (tasks.length === 0) return null

            return (
              <div key={cat}>
                {/* Category header */}
                <div className="flex border-b bg-muted/20">
                  <div className="w-56 shrink-0 px-3 py-1.5 border-r">
                    <span className="text-xs font-semibold">{cat}</span>
                  </div>
                  <div className="flex-1" />
                </div>

                {/* Task rows */}
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    className="flex border-b last:border-b-0 hover:bg-muted/10 transition-colors"
                  >
                    <div className="w-56 shrink-0 px-3 py-1.5 border-r flex items-center gap-2">
                      {!task.isMilestone && (
                        <span
                          className="size-2 rounded-full shrink-0"
                          style={{ backgroundColor: getColor(task.owner) }}
                        />
                      )}
                      {task.isMilestone && (
                        <span className="size-2 rotate-45 bg-foreground shrink-0" />
                      )}
                      <span className="text-xs truncate">{task.name}</span>
                      <Badge variant="secondary" className="ml-auto text-[10px] shrink-0">
                        {task.owner}
                      </Badge>
                    </div>
                    <div className="flex-1 relative">
                      {/* Grid lines */}
                      <div className="absolute inset-0 flex">
                        {Array.from({ length: TOTAL_DAYS }).map((_, i) => (
                          <div
                            key={i}
                            className={`flex-1 ${
                              i % DAYS_PER_WEEK === DAYS_PER_WEEK - 1
                                ? "border-r"
                                : "border-r border-dashed border-muted"
                            }`}
                          />
                        ))}
                      </div>
                      {/* Task bar */}
                      <div className="relative h-7">
                        <TaskBar task={task} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
