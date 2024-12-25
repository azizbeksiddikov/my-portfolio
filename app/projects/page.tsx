import fs from "fs";
import path from "path";
import ProjectsContainer from "./ProjectsContainer";

export default function ProjectsPage() {
  // 1) Locate and read the JSON file
  const filePath = path.join(process.cwd(), "data", "en", "projects.json");
  const rawData = fs.readFileSync(filePath, "utf-8");

  // 2) Parse, then extract the 'projects' array
  const parsedData = JSON.parse(rawData);
  const projects = parsedData.projects; // <-- actual array

  // 3) Render the container, passing the array
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <ProjectsContainer projects={projects} />
    </div>
  );
}
