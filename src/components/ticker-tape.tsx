"use client";

import { useState, useEffect } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Separator } from './ui/separator';

type Ticker = {
  name: string;
  value: number;
  change: number;
  changePercent: number;
  direction: 'up' | 'down' | 'flat';
};

const initialTickers: Ticker[] = [
  { name: 'NIFTY 50', value: 23537.85, change: 36.75, changePercent: 0.16, direction: 'up' },
  { name: 'BANK NIFTY', value: 51703.95, change: -75.15, changePercent: -0.15, direction: 'down' },
  { name: 'SENSEX', value: 77337.59, change: 131.18, changePercent: 0.17, direction: 'up' },
  { name: 'FINNIFTY', value: 23058.40, change: -45.10, changePercent: -0.20, direction: 'down' },
  { name: 'RELIANCE', value: 2959.85, change: 51.50, changePercent: 1.77, direction: 'up' },
  { name: 'TCS', value: 3813.25, change: -7.50, changePercent: -0.20, direction: 'down' },
  { name: 'HDFCBANK', value: 1711.60, change: 18.25, changePercent: 1.08, direction: 'up' },
  { name: 'INFY', value: 1526.50, change: -1.05, changePercent: -0.07, direction: 'down' },
];

const TickerTape = () => {
  const [tickers, setTickers] = useState<Ticker[]>(initialTickers);

  useEffect(() => {
    const interval = setInterval(() => {
      setTickers(prevTickers =>
        prevTickers.map(ticker => {
          const randomChange = (Math.random() - 0.5) * (ticker.value * 0.001);
          const newValue = ticker.value + randomChange;
          const newChange = newValue - (ticker.value - ticker.change);
          const newChangePercent = (newChange / (ticker.value - ticker.change)) * 100;
          let direction: Ticker['direction'] = 'flat';
          if (randomChange > 0) direction = 'up';
          if (randomChange < 0) direction = 'down';

          return {
            ...ticker,
            value: parseFloat(newValue.toFixed(2)),
            change: parseFloat(newChange.toFixed(2)),
            changePercent: parseFloat(newChangePercent.toFixed(2)),
            direction,
          };
        })
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const TickerItem = ({ ticker }: { ticker: Ticker }) => (
    <div className="flex items-center gap-4 shrink-0 px-6">
      <span className="font-semibold text-sm text-muted-foreground">{ticker.name}</span>
      <div
        className={cn(
          "flex items-center font-mono text-sm font-semibold",
          {
            "text-primary": ticker.direction === 'up',
            "text-destructive": ticker.direction === 'down',
            "text-foreground": ticker.direction === 'flat',
          }
        )}
      >
        {ticker.direction === 'up' && <ArrowUp className="h-4 w-4" />}
        {ticker.direction === 'down' && <ArrowDown className="h-4 w-4" />}
        <span className="ml-2">{ticker.value.toFixed(2)}</span>
        <span className="ml-4">{ticker.change.toFixed(2)} ({ticker.changePercent.toFixed(2)}%)</span>
      </div>
    </div>
  );
  
  const duplicatedTickers = [...tickers, ...tickers];

  return (
    <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="relative w-full overflow-hidden h-12 flex items-center">
        <div className="absolute flex animate-marquee-slow hover:pause">
            {duplicatedTickers.map((ticker, index) => (
              <div key={index} className="flex items-center">
                <TickerItem ticker={ticker} />
                <Separator orientation="vertical" className="h-6" />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TickerTape;
