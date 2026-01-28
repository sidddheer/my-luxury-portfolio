// 'use client';

// import { motion } from 'framer-motion';

// const techs = [
//   "PYTHON", "SQL", "TENSORFLOW", "AWS_GLUE", "KAFKA", "TABLEAU", 
//   "REACT", "NEXT.JS", "TYPESCRIPT", "DOCKER", "KUBERNETES", "AIRFLOW"
// ];

// // Duplicate the list 4 times to ensure smooth infinite scrolling
// const tickerItems = [...techs, ...techs, ...techs, ...techs];

// const TechTicker = () => {
//   return (
//     <div className="w-full overflow-hidden border-y border-zinc-800 py-4 mb-16 relative">
//       {/* Fade edges to look like it's emerging from darkness */}
//       <div className="absolute left-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-black to-transparent"></div>
//       <div className="absolute right-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-black to-transparent"></div>

//       <motion.div 
//         className="flex gap-8 whitespace-nowrap"
//         animate={{ x: [0, -1000] }}
//         transition={{ 
//           repeat: Infinity, 
//           ease: "linear", 
//           duration: 20 
//         }}
//       >
//         {tickerItems.map((item, i) => (
//           <span key={i} className="text-zinc-500 font-mono text-xs tracking-widest">
//             [{item}]
//           </span>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default TechTicker;


'use client';

import { motion } from 'framer-motion';
// Importing specific icons from 'react-icons/si' (Simple Icons)
import { 
  SiPython, SiPostgresql, SiTensorflow, SiApachekafka, 
  SiTableau, SiReact, SiNextdotjs, SiTypescript, 
  SiDocker, SiKubernetes, SiApacheairflow, SiR 
} from 'react-icons/si';

const techs = [
  { name: "PYTHON", icon: SiPython },
  { name: "POSTGRES", icon: SiPostgresql },
  { name: "TENSORFLOW", icon: SiTensorflow },
  { name: "KAFKA", icon: SiApachekafka },
  { name: "TABLEAU", icon: SiTableau },
  { name: "REACT", icon: SiReact },
  { name: "NEXT.JS", icon: SiNextdotjs },
  { name: "TYPESCRIPT", icon: SiTypescript },
  { name: "DOCKER", icon: SiDocker },
  { name: "KUBERNETES", icon: SiKubernetes },
  { name: "AIRFLOW", icon: SiApacheairflow },
  { name: "R STUDIO", icon: SiR },
];

// Duplicate list for infinite scroll
const tickerItems = [...techs, ...techs];

const TechTicker = () => {
  return (
    <div className="w-full overflow-hidden border-y border-zinc-800 py-12 mb-20 relative bg-zinc-900/20">
      
      {/* Gradients to fade visually */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-black to-transparent"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-black to-transparent"></div>

      <motion.div 
        className="flex gap-16 whitespace-nowrap"
        animate={{ x: [0, -2000] }} // Adjusted for wider items
        transition={{ 
          repeat: Infinity, 
          ease: "linear", 
          duration: 40 
        }}
      >
        {tickerItems.map((item, i) => (
          <div key={i} className="flex items-center gap-4 group cursor-pointer">
            {/* ICON: Large and dims on hover */}
            <item.icon className="text-4xl md:text-5xl text-zinc-600 group-hover:text-white transition-colors duration-300" />
            
            {/* TEXT: Bold and Monospaced */}
            <span className="text-xl md:text-2xl font-bold font-mono text-zinc-700 group-hover:text-zinc-300 transition-colors duration-300">
              {item.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechTicker;