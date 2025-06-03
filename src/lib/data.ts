
import { BarChart, FileText, Database, PieChart, LineChart, Code } from "lucide-react";

export type Skill = {
  name: string;
  level: number;
  category: 'Data' | 'Programming' | 'Tool' | 'Soft' | 'Cloud';
};

export type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
};

export type Award = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  icon: "award" | "certificate" | "medal" | "trophy";
};

export type Certification = {
  id: number;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  expiryDate?: string;
  icon: "badge" | "certificate" | "medal";
};

export const personalInfo = {
  name: "Pavitra Saxena",
  title: "Data Analyst",
  email: "ind.pavitra@gmail.com",
  location: "Seattle, WA",
  bio1: "Experienced data professional with 3+ years specializing in transforming complex datasets into actionable business insights. Strong background in statistical analysis, machine learning, and data visualization with a passion for solving challenging business problems.",
  bio2: "Master’s in Business Analytics from UMass Amherst, focused on solving business problems with measurable impact. I turn data into strategic action through automation, predictive modeling, and dashboards.",
  bio3: "My work is rooted in outcomes, not outputs. My work is driven by impact, not just insight. When I’m not optimizing models, I’m exploring food spots, curiosity fuels both my data journey and my search for the next hidden gem.",
  resumeUrl: "#",
  social: {
    linkedin: "https://www.linkedin.com/in/pavitra-saxena/",
    github: "https://github.com/indPavitra",
  }
};

export const aboutContent = {
  title: "About Me",
  description: "I'm a data analyst with a passion for uncovering insights from complex datasets. With a background in both business and technology, I bridge the gap between data and decision-making to help organizations achieve their goals.",
  paragraphs: [
    "I'm a Data Analyst with a Master’s in Business Analytics from the University of Massachusetts Amherst (CGPA 4.0), driven by the goal of solving business problems with measurable impact. I specialize in using data to optimize performance, reduce inefficiencies, and support strategic decisions through automation, predictive modeling, and visualization.",
    "During my time at Tata Consultancy Services, I delivered end-to-end solutions that saved 500+ hours annually—automating reporting processes, building forecasting models, and launching self-serve dashboards that empowered stakeholders across finance, operations, and product teams. My technical stack includes Python, SQL, Power BI, Tableau, and AWS.",
    "I approach every project with a business-first mindset—identifying real-world problems, collaborating across functions, and creating scalable solutions that deliver value. From pricing strategies to churn reduction and operational analytics, my work is rooted in outcomes, not outputs.",
    "Outside of analytics, I’m an avid food explorer—constantly on the hunt for hidden culinary gems. That same curiosity fuels my data journey: always exploring, always optimizing, always uncovering what others might miss."
  ]
};

export const skills: Skill[] = [
  // Programming Languages
  { name: "Python", level: 95, category: "Programming" },
  { name: "R", level: 90, category: "Programming" },
  { name: "SQL", level: 95, category: "Programming" },

  // Data Science & Analytics
  { name: "Statistical Analysis", level: 85, category: "Data" },
  { name: "Machine Learning", level: 80, category: "Data" },
  { name: "Feature Engineering", level: 80, category: "Data" },
  { name: "Data Cleaning", level: 90, category: "Data" },
  { name: "Data Storytelling", level: 90, category: "Data" },
  { name: "Problem Solving", level: 90, category: "Data" },

  // Visualization & BI Tools
  { name: "Tableau", level: 85, category: "Tool" },
  { name: "Power BI", level: 90, category: "Tool" },
  { name: "Excel", level: 95, category: "Tool" },
  { name: "Spark", level: 75, category: "Tool" },
  // Big Data & Cloud
  { name: "AWS", level: 75, category: "Cloud" },
  { name: "Azure", level: 75, category: "Cloud" },
  { name: "Snowflakes", level: 70, category: "Cloud" },


  // Project & Communication
  { name: "Project Management", level: 80, category: "Soft" },
  { name: "Communication", level: 85, category: "Soft" },
  { name: "JIRA", level: 80, category: "Soft" },
  { name: "Confluence", level: 80, category: "Soft" },
  { name: "Agile", level: 85, category: "Soft" },
  { name: "Lean Methodology", level: 80, category: "Soft" }
];


export const services = [
  {
    icon: Database,
    title: "Data Analysis",
    description: "Transform raw data into actionable insights through comprehensive analysis, statistical methods, and data visualization.",
  },
  {
    icon: BarChart,
    title: "Business Intelligence",
    description: "Create interactive dashboards and reports that provide real-time insights into business performance and key metrics.",
  },
  {
    icon: PieChart,
    title: "Predictive Analytics",
    description: "Develop machine learning models that forecast trends, classify data, and optimize business processes.",
  },
  {
    icon: LineChart,
    title: "Data Strategy",
    description: "Design data strategies aligned with business goals, including data collection, storage, processing, and governance frameworks.",
  },
  {
    icon: FileText,
    title: "Reporting & Insights",
    description: "Create clear, concise reports that communicate complex findings to both technical and non-technical stakeholders.",
  },
  {
    icon: Code,
    title: "Automation Solutions",
    description: "Build automated data pipelines and ETL processes that save time and reduce manual effort in data processing.",
  },
];

export const projects: Project[] = [
  {
    id: "Customer Churn Strategy - BCG Data Science",
    title: "Customer Churn Analysis",
    description: "Built a churn classification model and segmented 50K+ utility customers to identify high-risk accounts, reducing false positives by 20%, and enabling targeted discount strategies that optimized retention efforts.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["Python", "ML Classification", "Data Visualization", "Scikit-Learn"],
    demoUrl: "#",
    repoUrl: "https://github.com/indPavitra/Customer_Churn_Analysis",
  },
  {
    id: "Airbnb Price Prediction",
    title: "Airbnb Price Prediction, and Market Analysis ",
    description: "Analyzed 150K+ Airbnb listings and 500K+ reviews using A/B testing and NLP, identifying top pricing drivers and revealing that higher sentiment scores led to 12% more revenue, helping boost host earnings by 18%.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["Inferential Statistics", "Tatural Language Processing", "Ensemble Methods"],
    demoUrl: "#",
    repoUrl: "https://github.com/indPavitra/AirBNB_Boston_Analysis",
  },
  {
    id: "Prime-Air",
    title: "Amazon Prime Air",
    description: "Analyzed Amazon Prime Air’s drone delivery feasibility in Massachusetts using demographic, geographic, and regulatory data, forecasting a 23% regional coverage within a 12.5-mile drone radius.",
    imageUrl: "/portfolio/images/drone.png",
    tags: ["Python", "Statistical modeling", "MS Excel", "Geospatial Analytics"],
    demoUrl: "#",
    repoUrl: "https://github.com/indPavitra/Amazon-Prime-Air",
  },
  {
    id: "Sales-dashboard",
    title: "Interactive Sales Dashboard",
    description: "Created a KPI-driven Power BI dashboard analyzing 18K+ sales records with a star schema and DAX measures, uncovering high-value customer segments and improving visibility into MRR, ARPC, and sales trends for better executive decision-making.",
    imageUrl: "/portfolio/images/Dashboard.png",
    tags: ["Power BI", "DAX", "Sales Analysis","Data Modeling"],
    demoUrl: "#",
    repoUrl: "https://github.com/indPavitra/AdventureWorks",
  },
  {
    id: "Trial-analysis",
    title: "Clinical Trial Analysis",
    description: "Analyzed clinical trial data comparing groups using Hypothesis tests; identified significant differences in adverse effects and age distributions, supporting data-driven safety evaluations in treatment outcomes.",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    tags: ["Python", "Z-test", "Chi-squared test", "Mann-Whitney U tests"],
    demoUrl: "#",
    repoUrl: "https://github.com/indPavitra/Hypothesis_Testing",
  },
  {
    id: "Bot",
    title: "AI Interview Bot",
    description: "Developed an automated interview platform to streamline technical and HR evaluations, enabling mass recruitment through a chatbot interface, intelligent candidate response matching, and performance dashboards for stakeholder analysis.",
    imageUrl: "/portfolio/images/Bot.png",
    tags: ["Python", "MongoDB", "Flask", "Semantic Matching", "Google Charts"],
    demoUrl: "#",
    repoUrl: "https://github.com/indPavitra/AI_Interview_Bot",
  },
];

export const contactContent = {
  title: "Get in Touch",
  description: "Interested in working together or have a question? Feel free to reach out. I'm always open to discussing new projects, opportunities, and connections.",
  email: "ind.pavitra@gmail.com",
  location: "Seattle, WA"
};

// New awards and certifications data
export const awards: Award[] = [
  {
    id: 1,
    title: "Data Science Excellence Award",
    issuer: "Tech Innovations Inc.",
    date: "2023",
    description: "Recognized for developing ML models that increased customer retention by 24%.",
    icon: "trophy"
  },
  {
    id: 2,
    title: "Outstanding Analytical Achievement",
    issuer: "Data Science Summit",
    date: "2022",
    description: "Awarded for research paper on predictive analytics in healthcare outcomes.",
    icon: "award"
  },
  {
    id: 3,
    title: "Innovation in Analytics",
    issuer: "Global Data Conference",
    date: "2021",
    description: "Recognized for innovative approach to real-time data visualization solutions.",
    icon: "medal"
  }
];

export const certifications: Certification[] = [
  {
    id: 1,
    name: "AWS Certified Data Analytics - Specialty",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialUrl: "#",
    expiryDate: "2026",
    icon: "certificate"
  },
  {
    id: 2,
    name: "Professional Data Scientist",
    issuer: "DataCamp",
    date: "2022",
    credentialUrl: "#",
    icon: "badge"
  },
  {
    id: 3,
    name: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "2021",
    credentialUrl: "#",
    expiryDate: "2024",
    icon: "certificate"
  },
  {
    id: 4,
    name: "Microsoft Certified: Azure Data Scientist Associate",
    issuer: "Microsoft",
    date: "2022",
    credentialUrl: "#",
    expiryDate: "2025",
    icon: "badge"
  }
];
