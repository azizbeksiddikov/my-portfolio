export interface Project {
  id: number;
  priority: number;
  image: string;
  title: string;
  description: string;
  category: string[];
  techStack: string[];
  link: string;
}

export interface ProjectsLayout {
  projects_name: string;
  tech_stack: string[];
  category: string[];
  more_info: string;
}
