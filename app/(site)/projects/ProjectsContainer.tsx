"use client";

import { useState } from "react";
import ProjectList from "@/components/ProjectList";
import ProjectDetails from "@/components/ProjectDetails";

// Define a TypeScript interface for clarity (optional)
interface Project {
  id: number;
  title: string;
  description: string;
  category: string[];
  techStack: string[];
  image: string;
  link?: string;
}

export default function ProjectsContainer({
  projects,
}: {
  projects: Project[];
}) {
  // Track the selected project index
  const [selectedIndex, setSelectedIndex] = useState(0);

  // The currently chosen project
  const selectedProject = projects[selectedIndex];

  return (
    <div className="flex min-h-screen">
      {/* LEFT: Project Details */}
      <div className="w-2/3 p-8 bg-gray-800">
        <ProjectDetails project={selectedProject} />
      </div>

      {/* RIGHT: Project List */}
      <div className="w-1/3 p-8 border-l border-gray-700">
        <ProjectList
          projects={projects}
          selectedIndex={selectedIndex}
          onSelect={setSelectedIndex}
        />
      </div>
    </div>
  );
}

// "use client";

// import Image from "next/image";
// import React from "react";

// interface Project {
//   id: number;
//   title: string;
//   description: string;
//   category: string[];
//   techStack: string[];
//   image: string;
//   link?: string;
// }

// export default function ProjectDetails({ project }: { project?: Project }) {
//   if (!project) {
//     return <p>No project selected.</p>;
//   }

//   return (
//     <div className="space-y-6">
//       {/* Image (using a standard 400x250 container) */}
//       {project.image && (
//         <div className="relative w-[400px] h-[250px] mb-4">
//           {project.link ? (
//             <a href={project.link} target="_blank" rel="noopener noreferrer">
//               <Image
//                 src={project.image.startsWith("/")
//                   ? project.image
//                   : `/${project.image}`
//                 }
//                 alt={project.title}
//                 fill
//                 className="object-cover rounded cursor-pointer hover:opacity-90"
//               />
//             </a>
//           ) : (
//             <Image
//               src={project.image.startsWith("/")
//                 ? project.image
//                 : `/${project.image}`
//               }
//               alt={project.title}
//               fill
//               className="object-cover rounded"
//             />
//           )}
//         </div>
//       )}

//       {/* Title */}
//       <h2 className="text-3xl font-bold">{project.title}</h2>

//       {/* Description */}
//       <p className="text-gray-300">{project.description}</p>

//       {/* Category badges */}
//       {project.category?.length > 0 && (
//         <div>
//           <p className="text-sm text-gray-400 mb-2">Category:</p>
//           <ul className="flex flex-wrap gap-2">
//             {project.category.map((cat) => (
//               <li key={cat} className="px-2 py-1 bg-green-700 text-sm rounded">
//                 {cat}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* Tech Stack badges */}
//       {project.techStack?.length > 0 && (
//         <div>
//           <p className="text-sm text-gray-400 mb-2">Tech Stack:</p>
//           <ul className="flex flex-wrap gap-2">
//             {project.techStack.map((tech) => (
//               <li key={tech} className="px-2 py-1 bg-gray-700 text-sm rounded">
//                 {tech}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* More Info Button */}
//       {project.link && (
//         <a
//           href={project.link}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-block mt-4 px-5 py-2 text-sm font-semibold bg-blue-600 hover:bg-blue-700 rounded transition-colors"
//         >
//           More Info
//         </a>
//       )}
//     </div>
//   );
// }
