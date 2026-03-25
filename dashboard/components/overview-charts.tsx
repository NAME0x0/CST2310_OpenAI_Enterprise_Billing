"use client"

import { Bar, BarChart, XAxis, YAxis, CartesianGrid } from "recharts"
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { markData } from "@/lib/data"

const chartData = markData.map((m) => ({
  name: m.component
    .replace("Use Case ", "UC ")
    .replace("Diagrams", "Diags")
    .replace("Descriptors", "Descs")
    .replace("Activity ", "Act. ")
    .replace("Sequence ", "Seq. ")
    .replace("Project Management", "Proj. Mgmt")
    .replace("Law & Ethics", "Law & Ethics")
    .replace("Presentation", "Pres."),
  maxMarks: m.maxMarks,
}))

const chartConfig = {
  maxMarks: {
    label: "Max Marks",
    color: "oklch(0.55 0.2 250)",
  },
} satisfies ChartConfig

export function OverviewCharts() {
  return (
    <ChartContainer config={chartConfig} className="h-[250px] w-full">
      <BarChart data={chartData} accessibilityLayer>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="name"
          tickLine={false}
          axisLine={false}
          className="text-xs"
          tick={{ fontSize: 10 }}
        />
        <YAxis tickLine={false} axisLine={false} allowDecimals={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="maxMarks" fill="var(--color-maxMarks)" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ChartContainer>
  )
}
