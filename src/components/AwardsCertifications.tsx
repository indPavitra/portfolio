
import { ScrollArea } from "@/components/ui/scroll-area";
import { Award, Trophy, MapPin } from "lucide-react";

interface AwardItem {
  id: number;
  title: string;
  issuer: string;
  date: string;
  type: "award" | "certificate";
  description?: string;
  imageUrl: string;
}

const awards: AwardItem[] = [
  {
    id: 1,
    title: "Productivity and Efficency Award",
    issuer: "Tata Consultancy Services",
    date: "September 2023",
    type: "award",
    description: "Awarded for Outstanding Contribution.",
    imageUrl: "/images/TCS Accomplishment.jpeg"
  },
  {
    id: 2,
    title: "Leetcode Badges",
    issuer: "Leetcode",
    date: "March 2025",
    type: "certificate",
    imageUrl: "/images/SQL50.jpg"
  },
  {
    id: 3,
    title: "Azure",
    issuer: "Microsoft",
    date: "January 2024",
    type: "certificate",
    imageUrl: "/images/Azure.png"
  },
  {
    id: 4,
    title: "Published Research Paper",
    issuer: "IJSREM Journal",
    date: "April 2020",
    type: "certificate",
    imageUrl: "/images/e- Certificate IJSREM Pavitra Saxena.png"
  },
  {
    id: 5,
    title: "SQL Bootcamp",
    issuer: "Udemy",
    date: "October 2024",
    type: "certificate",
    imageUrl: "/images/MySQL Bootcamp.jpg"
  },
   {
    id: 6,
    title: "Power BI",
    issuer: "Udemy",
    date: "January 2025",
    type: "certificate",
    imageUrl: "/images/POWER BI.jpg"
  },
  {
    id: 7,
    title: "Project Management",
    issuer: "Udemy",
    date: "October 2024",
    type: "certificate",
    imageUrl: "/images/Project Management Fundamentals.jpg"
  },
  {
    id: 8,
    title: "MS EXCEL",
    issuer: "Microsoft",
    date: "April 2025",
    type: "certificate",
    imageUrl: "/images/Excel.png"
  },
];

const AwardsCertifications = () => {
  const getIcon = (type: string) => {
    if (type === "award") {
      return <Trophy className="w-5 h-5 text-primary" />;
    } else {
      return <Award className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <section id="awards" className="section-padding bg-gray-50 dark:bg-navy-900/20">
      <div className="container mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Awards & <span className="solid-maroon">Certifications</span>
          </h2>
          <p className="text-navy-600 dark:text-gray-400 max-w-2xl mx-auto">
            Recognition and professional qualifications earned throughout my career
          </p>
        </div>

        <ScrollArea className="w-full overflow-hidden pb-6">
          <div className="flex w-max space-x-6 md:space-x-8 px-1 auto-scroll-container">
            {[...awards, ...awards].map((award, index) => (
              <div
                key={`${award.id}-${index}`}
                className="flex-none w-[280px] md:w-[320px] bg-white dark:bg-navy-800/30 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] shadow-sm hover:shadow-md"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={award.imageUrl}
                    alt={award.title}
                    className="w-full h-full object-fill transition-transform hover:scale-105 duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-white dark:bg-navy-800 rounded-full p-2 shadow-md">
                    {getIcon(award.type)}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-navy-800 dark:text-white">
                      {award.title}
                    </h3>
                    <span className="text-xs uppercase font-medium tracking-wider bg-gray-100 dark:bg-navy-700 text-navy-500 dark:text-navy-300 rounded-full px-3 py-1">
                      {award.type}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm text-navy-600 dark:text-gray-400 mb-3">
                    <span>{award.issuer}</span>
                    <span>{award.date}</span>
                  </div>
                  {award.description && (
                    <p className="text-sm text-navy-700 dark:text-gray-300 mt-2">
                      {award.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

      </div>
    </section>
  );
};

export default AwardsCertifications;
