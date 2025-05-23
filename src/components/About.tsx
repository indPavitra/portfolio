
import { Card, CardContent } from "@/components/ui/card";
import { aboutContent } from "@/lib/data";

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="section-title">{aboutContent.title}</h2>
          <p className="text-lg text-gray-600 mb-8">{aboutContent.description}</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            {aboutContent.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          
          <div className="relative h-full flex justify-center items-center">
            <div className="bg-data-blue-dark/5 h-64 w-64 md:h-72 md:w-72 rounded-full absolute animate-pulse"></div>
            <img
              src="\images\Grad_PS.JPG"
              alt="Professional portrait"
              className="rounded-lg shadow-xl z-10 max-w-sm animate-fade-in"
            />
            <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-data-blue/10 rounded-lg animate-bounce-slow"></div>
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-data-accent/20 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
