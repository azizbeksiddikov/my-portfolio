"use client";

import Image from "next/image";
import { Project, ProjectsLayout } from "@/lib/types/project";
import { ExternalLink } from "lucide-react";

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

      {/* Details */}
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Category */}
        {project.category && (
          <div className="space-y-2">
            <h2 className="text-sm font-medium text-projects-category">
              {projects_layout.category}
            </h2>
            <div className="text-projects-cat_instance">
              {project.category.join(", ")}
            </div>
          </div>
        )}

        {/* Tech Stack */}
        {project.techStack?.length > 0 && (
          <div className="space-y-2">
            <h2 className="text-sm font-medium text-projects-category">
              {projects_layout.tech_stack}
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-projects-tech text-projects-text text-sm rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Project Link */}
      {project.link && (
        <div className="pt-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-projects-text text-main-background
            rounded-lg font-medium transition-colors hover:bg-projects-text focus:outline-none focus:ring-2
             focus:ring-projects-ring focus:ring-offset-2"
          >
            {projects_layout.more_info}
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      )}
    </div>
  );
}
