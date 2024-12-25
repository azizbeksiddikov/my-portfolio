import { getPageData, getLayoutData } from "@/lib/data";
import ProjectsContainer from "@/components/ProjectsContainer";

export default function ProjectsPage() {
  const projects = getPageData("projects").projects;
  const projects_layout = getLayoutData("projects");

  // 2. Render the container, passing the array
  return (
    <div className="min-h-screen bg-main-background text-main-text">
      <ProjectsContainer
        projects={projects}
        projects_layout={projects_layout}
      />
    </div>
  );
}
