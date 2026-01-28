"use client";

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { skill: "Coding", level: 85 },
  { skill: "Finance", level: 90 },
  { skill: "Math", level: 75 },
];

const chartConfig = {
  level: {
    label: "Skill Level",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

export function SkillsRadarChart() {
  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-[300px]"
    >
      <RadarChart data={chartData}>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="line" />}
        />
        <PolarAngleAxis dataKey="skill" tick={{ fill: 'hsl(var(--foreground))' }} />
        <PolarGrid />
        <Radar
          dataKey="level"
          fill="hsl(var(--primary))"
          fillOpacity={0.6}
          stroke="hsl(var(--primary))"
        />
      </RadarChart>
    </ChartContainer>
  );
}
