import TickerTape from '@/components/ticker-tape';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import Experience from '@/components/experience';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <TickerTape />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col gap-20 md:gap-28">
          <Hero />
          <Projects />
          <Skills />
          <Experience />
        </div>
      </main>
      <footer className="text-center py-8 text-muted-foreground text-sm border-t">
        <p>Built by Vikash Kumar. Inspired by professional trading terminals.</p>
      </footer>
    </div>
  );
}
