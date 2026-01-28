import { Button } from '@/components/ui/button';
import { Github, FileText, Linkedin } from 'lucide-react';

const KaggleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <title>Kaggle</title>
    <path d="M20.46 3.654h-3.485L12 10.239 6.966 3.654H3.518L12 15.313v5.033h1.884v-5.033z" />
  </svg>
);

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
          <a href="https://drive.google.com/file/d/1zCbfyBu43idkoxe664fYXnlmOb36mF1V/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            <FileText />
            View my Resume
          </a>
        </Button>
        <Button asChild variant="secondary" size="lg">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Github />
            GitHub
          </a>
        </Button>
        <Button asChild variant="secondary" size="lg">
          <a href="https://www.linkedin.com/in/vikash-kumar-5b2b9b31b" target="_blank" rel="noopener noreferrer">
            <Linkedin />
            LinkedIn
          </a>
        </Button>
        <Button asChild variant="secondary" size="lg">
          <a href="https://www.kaggle.com/vikashkumar9262" target="_blank" rel="noopener noreferrer">
            <KaggleIcon />
            Kaggle
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
