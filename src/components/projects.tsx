import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import StockPredictionChart from './stock-prediction-chart';

const Projects = () => {
  const llmChatAppImage = PlaceHolderImages.find(img => img.id === 'llm-chat-app');

  const projects = [
    {
      title: "Stock Prediction Model",
      description: "A deep learning model using LSTM networks to predict stock price movements based on historical Nifty 50 data.",
      techStack: ["Python", "LSTM", "Django", "Pandas"],
      metric: "Achieved 85% directional accuracy on test data.",
      githubUrl: "#",
      demoUrl: "#",
      visualization: <StockPredictionChart />,
    },
    {
      title: "Langchain Demo with Llama2 API",
      description: "An AI-powered chat application that generates Python code for algorithmic trading strategies using Langchain and Llama2.",
      techStack: ["Langchain", "Python", "Llama2"],
      metric: "Real-time code generation.",
      githubUrl: "#",
      demoUrl: "#",
      image: llmChatAppImage,
    },
  ];

  return (
    <section id="projects" className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The Proof (Projects)</h2>
        <p className="mt-4 max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed">
          A selection of projects that showcase my skills in quantitative finance and web development.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col bg-secondary/50 border-secondary">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              {project.visualization ? (
                project.visualization
              ) : project.image ? (
                <div className="aspect-video relative rounded-md overflow-hidden border">
                  <Image
                    src={project.image.imageUrl}
                    alt={project.image.description}
                    fill
                    className="object-cover"
                    data-ai-hint={project.image.imageHint}
                  />
                </div>
              ) : null}
              <div className="mt-4">
                <p className="font-semibold text-sm text-primary">{project.metric}</p>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-4">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-semibold mr-2">Tech Stack:</span>
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-primary border-primary">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-4">
                <Button asChild variant="outline">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github />
                    Source Code
                  </a>
                </Button>
                <Button asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink />
                    Live Demo
                  </a>
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
