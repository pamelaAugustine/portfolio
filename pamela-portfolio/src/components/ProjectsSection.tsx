import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { workProjects } from "@/components/data/workProjects";
import { schoolProjects } from "@/components/data/schoolProjects";
import { Project } from "@/components/types/Project";

export default function ProjectsSection() {
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
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Card className="flex flex-col h-full hover:shadow-xl transition-shadow">
                <CardHeader className="p-0">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="object-cover w-full h-48"
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
    </section>
  );
}
