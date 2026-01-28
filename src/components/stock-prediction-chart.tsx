"use client";

import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import {
  ChartContainer,
  ChartTooltipContent,
  ChartConfig,
} from '@/components/ui/chart';

const chartData = [
  { date: "2024-01-01", actual: 21741, predicted: 21750 },
  { date: "2024-01-02", actual: 21665, predicted: 21700 },
  { date: "2024-01-03", actual: 21530, predicted: 21600 },
  { date: "2024-01-04", actual: 21658, predicted: 21550 },
  { date: "2024-01-05", actual: 21710, predicted: 21680 },
  { date: "2024-01-06", actual: 21782, predicted: 21720 },
  { date: "2024-01-07", actual: 21731, predicted: 21790 },
];

const chartConfig = {
  actual: {
    label: "Actual Price",
    color: "hsl(var(--secondary-foreground))",
  },
  predicted: {
    label: "Predicted Price",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

const StockPredictionChart = () => {
  return (
    <ChartContainer config={chartConfig} className="h-[200px] w-full">
      <LineChart data={chartData} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
        <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="hsl(var(--border) / 0.5)" />
        <XAxis
          dataKey="date"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}
        />
         <YAxis
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          domain={['dataMin - 100', 'dataMax + 100']}
          tickFormatter={(value) => value.toLocaleString()}
        />
        <Tooltip content={<ChartTooltipContent indicator='line' />} />
        <Line dataKey="actual" type="monotone" stroke="var(--color-actual)" strokeWidth={2} dot={false} />
        <Line dataKey="predicted" type="monotone" stroke="var(--color-predicted)" strokeWidth={2} strokeDasharray="5 5" dot={false} />
      </LineChart>
    </ChartContainer>
  );
};

export default StockPredictionChart;
