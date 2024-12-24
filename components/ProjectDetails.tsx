"use client";

import Image from "next/image";
import React from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string[];
  techStack: string[];
  image: string;
  link?: string;
}

export default function ProjectDetails({ project }: { project?: Project }) {
  if (!project) {
    return <p>No project selected.</p>;
  }

  return (
    <div className="space-y-6">
      {/* Image */}
      {project.image && (
        <div>
          {project.link ? (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <Image
                src={
                  project.image.startsWith("/")
                    ? project.image
                    : `/${project.image}` // ensure leading slash
                }
                alt={project.title}
                width={600}
                height={400}
                className="object-cover cursor-pointer hover:opacity-90"
              />
            </a>
          ) : (
            <Image
              src={
                project.image.startsWith("/")
                  ? project.image
                  : `/${project.image}`
              }
              alt={project.title}
              width={600}
              height={400}
              className="object-cover"
            />
          )}
        </div>
      )}

      {/* Title */}
      <h2 className="text-3xl font-bold">{project.title}</h2>

      {/* Description */}
      <p className="text-gray-300">{project.description}</p>

      {/* Category */}
      {project.category && (
        <div className="text-sm text-gray-400">
          Category: {project.category.join(", ")}
        </div>
      )}

      {/* Tech Stack */}
      {project.techStack?.length > 0 && (
        <div>
          <p className="text-sm text-gray-400 mb-2">Tech Stack:</p>
          <ul className="flex flex-wrap gap-2">
            {project.techStack.map((tech, i) => (
              <li key={i} className="px-2 py-1 bg-gray-700 text-sm rounded">
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
          className="inline-block mt-4 px-5 py-2 text-sm font-semibold bg-blue-600 hover:bg-blue-700 rounded transition-colors"
        >
          More Info
        </a>
      )}
    </div>
  );
}
