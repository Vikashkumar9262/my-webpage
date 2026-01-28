import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SkillsRadarChart } from '@/components/skills-radar-chart';

const skillsData = {
  "Quant Stack": ["Pandas", "NumPy", "Technical Analysis", "Matplotlib"],
  "Dev Stack": ["Django", "Streamlit", "SQL", "Next.js", "React"],
  "Cloud": ["AWS", "Azure", "Firebase"],
};

const Skills = () => {
  return (
    <section id="skills" className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The Toolbox (Skills)</h2>
        <p className="mt-4 max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed">
          The technologies and concepts I use to turn data into insights.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, skills]) => (
            <Card key={category} className="bg-secondary/50 border-secondary">
              <CardHeader>
                <CardTitle className="text-primary">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {skills.map((skill) => (
                    <li key={skill} className="text-muted-foreground">
                      <span className="text-primary mr-2">&gt;</span>{skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="bg-secondary/50 border-secondary flex flex-col items-center justify-center">
          <CardHeader className="items-center">
            <CardTitle>Skills Visualization</CardTitle>
          </CardHeader>
          <CardContent className="w-full flex-grow flex items-center">
            <SkillsRadarChart />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
