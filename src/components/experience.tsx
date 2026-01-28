import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Experience = () => {
  return (
    <section id="experience" className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Freelance & Certs</h2>
        <p className="mt-4 max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed">
          Demonstrating practical skills and continuous learning.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        <Card className="bg-secondary/50 border-secondary">
          <CardHeader>
            <CardTitle>Freelance Quant</CardTitle>
            <CardDescription>2022 - Present</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Managed a freelance portfolio focusing on trend-following models. Developed and backtested various quantitative strategies, delivering data-driven insights to clients.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-secondary/50 border-secondary">
          <CardHeader>
            <CardTitle>Certifications</CardTitle>
            <CardDescription>Continuous Professional Development</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Deloitte Certified Analyst</li>
              <li>AWS Certified Cloud Practitioner</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Experience;
