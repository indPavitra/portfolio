
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { projects, Project } from "@/lib/data";
import { Github } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            A collection of data analysis, visualization, and machine learning projects that showcase my skills and expertise
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all group h-full flex flex-col">
      <div className="relative overflow-hidden h-48">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-gray-600">
          {project.description}
        </CardDescription>
        <div className="flex flex-wrap gap-1 mt-4">
          {project.tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 text-xs bg-data-blue/10 text-data-blue-dark rounded-md">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end pt-2">
        {project.repoUrl && (
          <Button asChild variant="outline" size="sm">
            <a 
              href={project.repoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              <Github size={16} />
              Code
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default Projects;
