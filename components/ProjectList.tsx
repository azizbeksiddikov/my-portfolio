"use client";
import { Project } from "@/lib/types/project";

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
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-main-title">{projects_name}</h2>
        <span className="text-sm text-main-subtitle">
          {projects.length} {projects_name}
        </span>
      </div>
      <div className="space-y-4">
        {projects.map((proj, idx) => (
          <div
            key={proj.id}
            onClick={() => onSelect(idx)}
            className={`cursor-pointer border-b py-2 ${
              idx === selectedIndex
                ? "text-main-title font-bold"
                : "text-main-text hover:text-main-title"
            }`}
          >
            <div className="text-lg">{proj.title}</div>
            <div className="text-sm text-main-subtitle mt-1">
              {proj.category.join(", ")}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
