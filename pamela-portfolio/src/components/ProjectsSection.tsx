import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { workProjects } from "@/components/data/workProjects";
import { schoolProjects } from "@/components/data/schoolProjects";
import { Project } from "@/components/types/Project";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function ProjectsSection() {
  const [openTechModal, setOpenTechModal] = useState(false);
  const [activeTech, setActiveTech] = useState<string[] | null>(null);
  const [activeTitle, setActiveTitle] = useState<string>("");

  return (
    <section id="work" className="py-20 px-8 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
      >
        My Work
      </motion.h2>

      <motion.div className="py-20 px-8 max-w-6xl mx-auto">
        These projects were built while working at{" "}
        <a
          href="https://www.simpleviewinc.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-500 hover:text-blue-700"
        >
          Simpleview
        </a>{" "}
        (a Granicus Company), a leading provider of CRM, CMS, and digital
        marketing solutions for destination marketing organizations (DMOs)
        around the world. While I can’t share the source code due to client
        confidentiality, I played a key role in developing them using Vue,
        JavaScript, CSS, and a proprietary templating engine. I’m happy to chat
        in more detail about my contributions!
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {workProjects.map((project: Project, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Card className="flex flex-col h-full hover:shadow-xl transition-shadow">
                <CardHeader className="p-0">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="object-cover object-top w-full h-full"
                  />
                </CardHeader>
                <CardContent className="p-4 flex-grow flex flex-col justify-between">
                  <CardTitle className="text-lg mb-2">
                    {project.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            </a>
          </motion.div>
        ))}
      </div>

      {/* School & Personal Projects */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold mt-20 mb-8 text-center"
      >
        School & Personal Projects
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {schoolProjects.map((project: Project, index: number) => (
          <motion.div
            key={`school-${index}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex"
          >
            
              <Card className="flex flex-col h-full hover:shadow-xl transition-shadow">
                <CardHeader className="p-0">
                  {project.videoUrl ? (
                    <video
                      className="object-cover w-full h-48"
                      src={project.videoUrl}
                      controls
                      muted
                      playsInline
                      preload="metadata"
                      poster={project.imageUrl} 
                    />
                  ) : (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="object-cover w-full h-48"
                    />
                  )}
                </CardHeader>

                <CardContent className="p-4 flex-grow flex flex-col justify-between">
                  <CardTitle className="text-lg mb-2">
                    {project.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-auto flex justify-between items-center">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTech(project.tech ?? []);
                      setActiveTitle(project.title);
                      setOpenTechModal(true);
                    }}
                    className="mt-4 text-sm text-blue-500 hover:underline self-start cursor-pointer"
                  >
                    View Tech Used
                  </button>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary cursor-pointer"
                    aria-label="View on GitHub"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <title>GitHub</title>
                      <path d="M12 .5C5.37.5 0 5.87 0 12.497c0 5.282 3.438 9.756 8.205 11.337.6.11.82-.26.82-.577 0-.285-.012-1.234-.017-2.238-3.338.727-4.042-1.608-4.042-1.608-.546-1.387-1.334-1.756-1.334-1.756-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.996.11-.775.418-1.305.76-1.604-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.468-2.38 1.236-3.22-.125-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.004-.404c1.02.005 2.048.138 3.005.404 2.29-1.553 3.296-1.23 3.296-1.23.653 1.652.243 2.873.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.805 5.625-5.475 5.921.43.37.814 1.103.814 2.222 0 1.606-.015 2.902-.015 3.293 0 .32.216.694.825.576C20.565 22.25 24 17.78 24 12.497 24 5.87 18.627.5 12 .5z" />
                    </svg>
                  </a>
                  </div>
                </CardContent>
              </Card>
            
          </motion.div>
        ))}
        <Dialog open={openTechModal} onOpenChange={setOpenTechModal}>
          <DialogContent className="max-w-sm">
            <DialogHeader>
              <DialogTitle className="text-lg font-semibold mb-2">
                Tech Used: {activeTitle}
              </DialogTitle>
            </DialogHeader>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              {activeTech?.map((techItem, index) => (
                <li key={index}>{techItem}</li>
              ))}
            </ul>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
