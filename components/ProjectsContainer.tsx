"use client";

import { useState } from "react";
import ProjectList from "./ProjectList";
import ProjectDetails from "./ProjectDetails";
import { Project, ProjectsLayout } from "@/lib/types/project";

export default function ProjectsContainer({
  projects,
  projects_layout,
}: {
  projects: Project[];
  projects_layout: ProjectsLayout;
}) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedProject = projects[selectedIndex];

  return (
    <div className="flex flex-col lg:flex-row min-h-screen gap-8">
      {/* Project Details */}
      <div className="lg:w-2/3 p-8 bg-main-background">
        <ProjectDetails
          project={selectedProject}
          projects_layout={projects_layout}
        />
      </div>

      {/* Project List */}
      <div className="lg:w-1/3 p-8 bg-sidebar-background">
        <ProjectList
          projects={projects}
          selectedIndex={selectedIndex}
          onSelect={setSelectedIndex}
          projects_name={projects_layout.projects_name}
        />
      </div>
    </div>
  );
}
