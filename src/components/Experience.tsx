
import { useState } from "react";
import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from "@/components/ui/collapsible";
import { Calendar, Briefcase } from "lucide-react";

type ExperienceItem = {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
};

/*const experienceData: ExperienceItem[] = [
  {
    id: 1,
    title: "Data Analyst",
    company: "Tata Consultancy Services",
    location: "Pune, India",
    period: " Dec 2021 - Dec 2023",
    description: [
      "Developed 15+ Tableau and Excel dashboards to support finance and operations, reducing manual reporting time by 4+ hours weekly and enabling faster decision-making.",
      "Automated ETL workflows using Python and VBA, saving 16+ hours per week and accelerating data refresh cycles for critical reports.",
      "Built Python-based forecasting models that improved workforce planning accuracy and minimized overstaffing inefficiencies across departments.",
      "Optimized SQL queries with CTEs and window functions, leading to a 40% faster delivery of reporting insights for high-volume datasets.",
      "Recognized with “Embark Leadership Certification” and “Productivity & Efficiency Improvement” award for driving business value through analytics innovation."
    ]
  },
  {
    id: 2,
    title: "Junior Data Analyst",
    company: "Tata Consultancy Services",
    location: "Pune, India",
    period: "Oct 2020 - Nov 2021",
    description: [
      "Improved claims accuracy by maintaining 5,000+ patient records in Salesforce and EHR systems (Epic) with correct CPT/ICD-10 coding, improving data reliability for claims and provider reporting.",
      "Boosted clinical workflow efficiency by 30% by creating Excel-based dashboards and reports to track KPIs, enabling care teams to make data-driven decisions.",
      "Reduced care delays by 20% through root cause analysis of enrollment and refill issues, while ensuring HIPAA compliance with 90 %+ audit scores."
    ]
  
  }
];*/



const experienceData: ExperienceItem[] = [
  {
    id: 1,
    title: "Data Engineer",
    company: "Tata Consultancy Services",
    location: "Pune, India",
    period: " Oct 2020 - Dec 2023",
    description: [
    "Led a team of 5 in building data-driven reporting solutions by aligning data pipelines with stakeholder needs, improving reporting accuracy by 25%.",
    "Built scalable ETL workflows using Python, SQL (CTEs, window functions), and AWS Lambda to reduce data refresh time by 40% and power near real-time dashboards.",
    "Engineered PySpark-based data ingestion pipelines integrated with AWS (Lambda, S3), enabling near real-time updates for cost analysis and fraud detection use cases.",
    "Designed and optimized relational data models and databases to support daily branch-level reporting, reducing data retrieval latency by 30% and enhancing reporting reliability.",
    "Introduced data validation checks and Lean practices in PySpark workflows, improving data reliability and reducing pipeline failures and inefficiencies by 15%.",
    "Earned “Embark Leadership Certification”, “Productivity and Efficiency Improvement” award, and Microsoft Certified: Azure Data Scientist Associate for driving automation and measurable business impact across financial operations."  
    ]
  },
];





const Experience = () => {
  const [openItems, setOpenItems] = useState<number[]>([1]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };

  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            My journey through the data engineer landscape
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-gray-200 pl-8 ml-4">
            {experienceData.map((item) => (
              <div key={item.id} className="mb-12 relative">
                <div className="absolute -left-12 mt-1.5 w-7 h-7 rounded-full bg-data-blue flex items-center justify-center">
                  <Briefcase className="h-4 w-4 text-white" />
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
                      <h3 className="font-medium text-xl text-data-blue">{item.title}</h3>
                      <p className="text-lg font-medium">{item.company}</p>
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
                    <div className="mt-4">
                      <ul className="list-disc pl-5 space-y-2">
                        {item.description.map((desc, idx) => (
                          <li key={idx} className="text-gray-700">{desc}</li>
                        ))}
                      </ul>
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

export default Experience;
