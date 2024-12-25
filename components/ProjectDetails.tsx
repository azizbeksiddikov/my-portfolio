"use client";

import Image from "next/image";
import { Project, ProjectsLayout } from "@/lib/types/project";

export default function ProjectDetails({
  project,
  projects_layout,
}: {
  project?: Project;
  projects_layout: ProjectsLayout;
}) {
  if (!project) return <p>No project selected.</p>;

  return (
    <div className="space-y-6">
      {/* Image */}
      {project.image && (
        <div className="relative w-full max-w-lg h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md">
          {project.link ? (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                className="object-contain cursor-pointer hover:opacity-90"
              />
            </a>
          ) : (
            <Image
              src={project.image}
              alt={project.title}
              layout="fill"
              className="object-contain"
            />
          )}
        </div>
      )}

      {/* Title */}
      <h2 className="text-3xl font-bold text-main-title">{project.title}</h2>

      {/* Description */}
      <p className="text-lg text-main-text">{project.description}</p>

      {/* Category */}
      {project.category && (
        <div className="text-sm text-main-subtitle ">
          {projects_layout.category}: {project.category.join(", ")}
        </div>
      )}

      {/* Tech Stack */}
      {project.techStack?.length > 0 && (
        <div>
          <p className="text-sm text-main-subtitle mb-3">
            {projects_layout.tech_stack}:
          </p>
          <ul className="flex flex-wrap gap-2">
            {project.techStack.map((tech, i) => (
              <li
                key={i}
                className="px-3 py-1 bg-main-sub-background text-sm rounded font-mono bg-sidebar-background"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* More Info Button */}
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-3 bg-attention rounded"
        >
          {projects_layout.more_info}
        </a>
      )}
    </div>
  );
}
