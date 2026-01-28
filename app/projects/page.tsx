// 'use client';

// import { ArrowUpRight } from 'lucide-react'; 

// // THE DATA (Moved from Home)
// const projects = [
//   { 
//     id: "01",
//     title: "ZARA ANALYTICS", 
//     category: "Predictive Modeling", 
//     year: "2024",
//     description: "Architected a demand forecasting engine using Random Forest. Processed 14M rows of seasonal data to reduce inventory waste by 18% across North American stores.",
//     stack: ["Python", "Pandas", "Scikit-Learn"]
//   },
//   { 
//     id: "02",
//     title: "TEENAGE ENG.", 
//     category: "Supply Chain", 
//     year: "2023",
//     description: "Designed a supply chain dashboard tracking component lead times. Identified critical bottlenecks in the OP-1 Field production line using SQL window functions.",
//     stack: ["PostgreSQL", "dbt", "Tableau"]
//   },
//   { 
//     id: "03",
//     title: "AESOP SKINCARE", 
//     category: "Market Analysis", 
//     year: "2023",
//     description: "Performed sentiment analysis on 50k customer reviews. Mapped 'Quiet Luxury' keywords to sales spikes, influencing the 2024 digital ad spend strategy.",
//     stack: ["R Studio", "NLP", "GGPlot2"]
//   },
//   { 
//     id: "04",
//     title: "ACNE STUDIOS", 
//     category: "Trend Forecasting", 
//     year: "2022",
//     description: "Built a visual trend scraper that aggregates runway colors and fabrics. Used computer vision to quantify 'minimalism' trends for the FW25 procurement team.",
//     stack: ["Python", "OpenCV", "React"]
//   }
// ];

// export default function ProjectsPage() {
//   return (
//     <main className="min-h-screen bg-black text-white pt-32 px-6 md:px-20 pb-20">
//       {/* Header */}
//       <div className="border-b border-zinc-800 pb-12 mb-20">
//         <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4">ARCHIVE.</h1>
//         <p className="font-mono text-zinc-500 max-w-xl">
//           [ // A collection of data architecture, predictive models, and visualization systems designed for clarity. ]
//         </p>
//       </div>

//       {/* The List */}
//       <div className="flex flex-col">
//         {projects.map((project, i) => (
//           <div key={i} className="group border-b border-zinc-900 py-12 flex flex-col md:flex-row md:items-start gap-8 hover:bg-zinc-900/30 transition-colors duration-500 cursor-pointer">
            
//             {/* ID */}
//             <div className="font-mono text-zinc-600 text-sm md:w-1/12">
//               [{project.id}]
//             </div>

//             {/* Title & Category */}
//             <div className="md:w-4/12">
//               <h2 className="text-3xl font-bold mb-2 group-hover:text-zinc-300 transition-colors">{project.title}</h2>
//               <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider border border-zinc-800 px-2 py-1 rounded-full">
//                 {project.category}
//               </span>
//             </div>

//             {/* Description */}
//             <div className="md:w-5/12 text-zinc-400 leading-relaxed font-light">
//               <p>{project.description}</p>
//               <div className="flex gap-4 mt-4 text-xs font-mono text-zinc-600">
//                 {project.stack.map((tech, t) => (
//                   <span key={t}>// {tech}</span>
//                 ))}
//               </div>
//             </div>

//             {/* Link Icon */}
//             <div className="md:w-1/12 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
//                 <ArrowUpRight className="w-8 h-8 text-white" />
//             </div>

//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }


'use client';

import { ArrowUpRight } from 'lucide-react'; 
import GlitchText from '@/components/GlitchText'; // <--- NEW IMPORT

// THE DATA
const projects = [
  { 
    id: "01",
    title: "ZARA ANALYTICS", 
    category: "Predictive Modeling", 
    year: "2024",
    description: "Architected a demand forecasting engine using Random Forest. Processed 14M rows of seasonal data to reduce inventory waste by 18% across North American stores.",
    stack: ["Python", "Pandas", "Scikit-Learn"]
  },
  { 
    id: "02",
    title: "TEENAGE ENG.", 
    category: "Supply Chain", 
    year: "2023",
    description: "Designed a supply chain dashboard tracking component lead times. Identified critical bottlenecks in the OP-1 Field production line using SQL window functions.",
    stack: ["PostgreSQL", "dbt", "Tableau"]
  },
  { 
    id: "03",
    title: "AESOP SKINCARE", 
    category: "Market Analysis", 
    year: "2023",
    description: "Performed sentiment analysis on 50k customer reviews. Mapped 'Quiet Luxury' keywords to sales spikes, influencing the 2024 digital ad spend strategy.",
    stack: ["R Studio", "NLP", "GGPlot2"]
  },
  { 
    id: "04",
    title: "ACNE STUDIOS", 
    category: "Trend Forecasting", 
    year: "2022",
    description: "Built a visual trend scraper that aggregates runway colors and fabrics. Used computer vision to quantify 'minimalism' trends for the FW25 procurement team.",
    stack: ["Python", "OpenCV", "React"]
  }
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 px-6 md:px-20 pb-20">
      {/* Header */}
      <div className="border-b border-zinc-800 pb-12 mb-20">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4">ARCHIVE.</h1>
        <p className="font-mono text-zinc-500 max-w-xl">
          [ // A collection of data architecture, predictive models, and visualization systems designed for clarity. ]
        </p>
      </div>

      {/* The List */}
      <div className="flex flex-col">
        {projects.map((project, i) => (
          <div key={i} className="group border-b border-zinc-900 py-12 flex flex-col md:flex-row md:items-start gap-8 hover:bg-zinc-900/30 transition-colors duration-500 cursor-pointer">
            
            {/* ID */}
            <div className="font-mono text-zinc-600 text-sm md:w-1/12">
              [{project.id}]
            </div>

            {/* Title & Category */}
            <div className="md:w-4/12">
              <h2 className="text-3xl font-bold mb-2 text-white group-hover:text-zinc-300 transition-colors">
                {/* HERE IS THE CHANGE: Replaced static text with the component */}
                <GlitchText text={project.title} />
              </h2>
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider border border-zinc-800 px-2 py-1 rounded-full">
                {project.category}
              </span>
            </div>

            {/* Description */}
            <div className="md:w-5/12 text-zinc-400 leading-relaxed font-light">
              <p>{project.description}</p>
              <div className="flex gap-4 mt-4 text-xs font-mono text-zinc-600">
                {project.stack.map((tech, t) => (
                  <span key={t}>// {tech}</span>
                ))}
              </div>
            </div>

            {/* Link Icon */}
            <div className="md:w-1/12 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-8 h-8 text-white" />
            </div>

          </div>
        ))}
      </div>
    </main>
  );
}