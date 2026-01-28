import { Button } from '@/components/ui/button';
import { Github, FileText } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="flex flex-col items-center text-center pt-12 md:pt-20">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
        <span className="text-primary animate-pulse">&gt;</span> Vikash Kumar
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground md:text-xl">
        Hi, I&apos;m Vikash. I build Algorithmic Trading strategies in Python and develop AI-powered web apps.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button asChild size="lg">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FileText />
            View my Resume
          </a>
        </Button>
        <Button asChild variant="secondary" size="lg">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Github />
            Check my GitHub
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
