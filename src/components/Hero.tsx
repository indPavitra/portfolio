
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/data";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 bg-gradient-to-br from-background to-data-gray-light"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      <div className="container-custom">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 animate-fade-in">
            <h2 className="text-lg font-medium text-data-blue mb-2">
              Hello, I'm
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-data-blue-darker">
              {personalInfo.name}
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
              {personalInfo.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              {personalInfo.bio1}
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              {personalInfo.bio2}
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              {personalInfo.bio3}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-data-blue hover:bg-data-blue-dark">
                <a href="#projects">View Projects</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#experience">My Experience</a>
              </Button>
            </div>
            
            <div className="flex items-center gap-4 mt-8">
              <a 
                href={personalInfo.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-data-blue/10 hover:bg-data-blue/20 text-data-blue transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href={personalInfo.social.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-data-blue/10 hover:bg-data-blue/20 text-data-blue transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="p-2 rounded-full bg-data-blue/10 hover:bg-data-blue/20 text-data-blue transition-colors"
                aria-label="Email Me"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* <div className="lg:w-1/2 flex justify-center lg:justify-end animate-fade-in animate-delay-200">
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 relative">
              <div className="absolute inset-0 bg-data-blue rounded-full opacity-10 animate-pulse"></div>
              <div className="absolute inset-4 bg-gradient-to-tr from-data-blue to-data-blue-light rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src="/portfolio/images/Initial_PS.jpeg" 
                  alt={personalInfo.name}
                  className=" w-90 h-90 rounded-full object-cover" 
                />
              </div>
            </div>
          </div> */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end animate-fade-in animate-delay-200">
  <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] relative">
    <div className="absolute inset-0 bg-data-blue rounded-full opacity-10 animate-pulse"></div>
    <div className="absolute inset-4 bg-gradient-to-tr from-data-blue to-data-blue-light rounded-full overflow-hidden border-4 border-white shadow-xl">
      <img 
        src="/portfolio/images/Main.jpg" 
        alt={personalInfo.name}
        className="w-full h-full rounded-full object-cover" 
      />
    </div>
  </div>
</div>

        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <a 
            href="#experience"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md animate-bounce"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-data-blue" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
