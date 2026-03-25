"use client"

import { Bar, BarChart, XAxis, YAxis, CartesianGrid, Cell } from "recharts"
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { markData } from "@/lib/data"

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

const chartData = markData.map((m) => ({
  name: m.component,
  maxMarks: m.maxMarks,
  fill: COMPONENT_COLORS[m.component] ?? "oklch(0.58 0.16 15)",
}))

const chartConfig = {
  maxMarks: {
    label: "Max Marks",
    color: "oklch(0.55 0.2 250)",
  },
} satisfies ChartConfig

export function MarksCharts() {
  return (
    <ChartContainer config={chartConfig} className="h-[320px] w-full">
      <BarChart
        data={chartData}
        layout="vertical"
        accessibilityLayer
        margin={{ left: 8, right: 8 }}
      >
        <CartesianGrid horizontal={false} />
        <XAxis
          type="number"
          tickLine={false}
          axisLine={false}
          allowDecimals={false}
          domain={[0, 25]}
        />
        <YAxis
          type="category"
          dataKey="name"
          tickLine={false}
          axisLine={false}
          width={140}
          tick={{ fontSize: 11 }}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="maxMarks" radius={[0, 4, 4, 0]}>
          {chartData.map((entry, i) => (
            <Cell key={i} fill={entry.fill} />
          ))}
        </Bar>
      </BarChart>
    </ChartContainer>
  )
}
