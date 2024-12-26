"use client";
import { Project } from "@/lib/types/project";
import { ChevronRight } from "lucide-react";

interface ProjectListProps {
  projects: Project[];
  selectedIndex: number;
  onSelect: (index: number) => void;
  projects_name: string;
}

export default function ProjectList({
  projects,
  selectedIndex,
  onSelect,
  projects_name,
}: ProjectListProps) {
  return (
    <div className="flex-1 p-6">
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 text-2xl font-semibold">
          <span>{projects_name}</span>
          <span>({projects.length})</span>
        </div>
      </header>

      <div className="space-y-3">
        {projects.map((project, idx) => (
          <button
            key={project.id}
            onClick={() => onSelect(idx)}
            className={`
              w-full text-left px-4 py-5 rounded-lg
              transition-all duration-200 ease-in-out
              hover:bg-sidebar-hover focus:outline-none focus:ring-2 focus:ring-projects-ring
              ${
                idx === selectedIndex
                  ? "bg-projects-tech text-projects-text"
                  : "bg-main-background text-projects-cat_instance"
              }
            `}
            aria-selected={idx === selectedIndex}
            role="option"
          >
            <div className="font-medium truncate">{project.title}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
