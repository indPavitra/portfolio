
import { skills } from "@/lib/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Skills = () => {
  // Define skill groups for the accordion
  const skillGroups = {
    programming: "Programming Languages",
    framework: "Frameworks",
    tool: "Tools",
    database: "Databases",
    cloud: "Cloud",
    devops: "DevOps",
  };
  
  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    const category = skill.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">
            I've developed a diverse skillset spanning data analysis, programming, and business intelligence
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {Object.entries(groupedSkills).map(([category, categorySkills]) => (
              <AccordionItem key={category} value={category}>
                <AccordionTrigger className="text-lg font-medium">
                  {skillGroups[category as keyof typeof skillGroups] || category}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                    {categorySkills.map((skill, index) => (
                      <div key={index} className="bg-white rounded-md p-3 border border-gray-200">
                        {skill.name}
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Skills;
