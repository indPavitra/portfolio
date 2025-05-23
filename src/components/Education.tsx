
import { useState } from "react";
import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from "@/components/ui/collapsible";
import { Calendar, BookOpen, Award } from "lucide-react";

type EducationItem = {
  id: number;
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  achievements: string[];
  coursework: string[];
};

const educationData: EducationItem[] = [
  {
    id: 1,
    degree: "Master of Science",
    field: "Business Analytics",
    institution: "University of Massachusetts Amherst",
    location: "Amherst, MA",
    period: "2024 - 2025",
    achievements: [
      "Graduated with honors (GPA:4.0/4.0)",
      "Featured in Isenberg impact marketing campaign",
      "Representator for UMass Dining for Women In Business"
    ],
    coursework: [
      "Data Science for Business",
      "Business Intelligence and Analytics",
      "Advanced Statistics",
      "Artificial Inteeligence and Applications in Business",
      "Data Mining"
    ]
  },
  {
    id: 2,
    degree: "Bachelor of Engineering",
    field: "Computer Science",
    institution: "Rajiv Gandhi Proudyogiki Vishwavidyalaya",
    location: "India",
    period: "2016- 2020",
    achievements: [
      "Published a research paper, 'Text Preprocessing, Comparative Study of Cosine Similarity and Integration of TF-IDF'"
    ],
    coursework: [
      "Data Structures and Algorithms",
      "Database Systems",
      "Machine Learning",
      "Introduction to Artificial Intelligence"
    ]
  }
];

const Education = () => {
  const [openItems, setOpenItems] = useState<number[]>([1]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };

  return (
    <section id="education" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            My academic journey
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-gray-200 pl-8 ml-4">
            {educationData.map((item) => (
              <div key={item.id} className="mb-12 relative">
                <div className="absolute -left-12 mt-1.5 w-7 h-7 rounded-full bg-data-blue flex items-center justify-center">
                  <BookOpen className="h-4 w-4 text-white" />
                </div>
                
                <Collapsible 
                  open={true} 
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-5"
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                    <CollapsibleTrigger 
                      onClick={() => toggleItem(item.id)}
                      className="flex-1 text-left cursor-pointer w-full"
                    >
                      <h3 className="font-medium text-xl text-data-blue">{item.degree} in {item.field}</h3>
                      <p className="text-lg font-medium">{item.institution}</p>
                    </CollapsibleTrigger>
                    
                    <div className="flex flex-col items-start sm:items-end text-gray-600 mt-2 sm:mt-0">
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>{item.period}</span>
                      </div>
                      <div className="mt-1">{item.location}</div>
                    </div>
                  </div>
                  
                  <CollapsibleContent>
                    <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <div className="flex items-center mb-3">
                          <Award className="h-5 w-5 text-data-blue mr-2" />
                          <h4 className="text-lg font-medium">Achievements</h4>
                        </div>
                        <ul className="list-disc pl-5 space-y-2">
                          {item.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-gray-700">{achievement}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <div className="flex items-center mb-3">
                          <BookOpen className="h-5 w-5 text-data-blue mr-2" />
                          <h4 className="text-lg font-medium">Relevant Coursework</h4>
                        </div>
                        <ul className="list-disc pl-5 space-y-2">
                          {item.coursework.map((course, idx) => (
                            <li key={idx} className="text-gray-700">{course}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
