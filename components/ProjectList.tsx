"use client";

interface Project {
  id: number;
  title: string;
  category: string[];
}

interface ProjectListProps {
  projects: Project[];
  selectedIndex: number;
  onSelect: (index: number) => void;
}

export default function ProjectList({
  projects,
  selectedIndex,
  onSelect,
}: ProjectListProps) {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold uppercase tracking-widest">
          Projects
        </h2>
        <span className="text-sm text-gray-400">{projects.length}</span>
      </div>

      <div className="space-y-4">
        {projects.map((proj, idx) => {
          const isSelected = idx === selectedIndex;
          return (
            <div
              key={proj.id}
              onClick={() => onSelect(idx)}
              className={`cursor-pointer border-b border-gray-700 py-2
                ${
                  isSelected
                    ? "text-white font-semibold"
                    : "text-gray-400 hover:text-gray-200"
                }
              `}
            >
              {/* Title */}
              <div className="text-base">{proj.title}</div>
              {/* Example: show categories on the next line */}
              {proj.category && (
                <div className="text-xs text-gray-500 mt-1">
                  {proj.category.join(", ")}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
