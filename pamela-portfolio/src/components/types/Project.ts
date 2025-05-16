export interface Project {
  title: string;
  description: string;
  tech?: string[];
  github?: string;
  demo?: string;
  imageUrl?: string; // ✅ Required for your UI
  link?: string;     // ✅ Used in <a href={project.link}>
}
