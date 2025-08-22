import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaDocker,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiFigma,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiPytorch,
  SiScikitlearn,
  SiHuggingface,
  SiKubernetes,
  SiAmazon,
  SiVuedotjs,
  SiOpenai,
  SiPostman,
  SiGraphql,
  SiAxios,
  SiJest,
} from "react-icons/si";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function AboutMe() {
  return (
    <section id="about" className="py-12 px-4 md:px-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
      <Card>
        <CardContent className="p-6 text-center">
          <p className="text-lg leading-relaxed">
            I’m a Software Engineer with a frontend focus who enjoys building
            interactive web applications. I create intuitive, accessible
            interfaces with React, Vue, and TypeScript, and also work across the
            stack with Node.js, Express, PostgreSQL, and MongoDB. My background
            includes hands-on AI/ML experience from Columbia University’s
            Applied AI Solutions Engineering program, where I worked with
            Python, PyTorch, Hugging Face, and cloud deployment. I love
            simplifying complex problems, collaborating with teams, and
            delivering polished, user-centered products that make an impact.
          </p>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-center mb-4">
              Tech I’ve Worked With
            </h3>
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-6 justify-items-center text-4xl">
              <FaReact
                title="React"
                style={{ color: "#61DBFB" }}
                className="transition-transform duration-200 hover:scale-110"
              />
              <SiTypescript
                title="TypeScript"
                style={{ color: "#3178C6" }}
                className="transition-transform duration-200 hover:scale-110"
              />
              <SiJavascript
                title="JavaScript"
                style={{ color: "#F7DF1E" }}
                className="transition-transform duration-200 hover:scale-110"
              />
              <FaHtml5
                title="HTML5"
                style={{ color: "#E34F26" }}
                className="transition-transform duration-200 hover:scale-110"
              />
              <FaCss3Alt
                title="CSS3"
                style={{ color: "#1572B6" }}
                className="transition-transform duration-200 hover:scale-110"
              />
              <SiTailwindcss
                title="Tailwind CSS"
                style={{ color: "#06B6D4" }}
                className="transition-transform duration-200 hover:scale-110"
              />
              <SiFigma
                title="Figma"
                style={{ color: "#F24E1E" }}
                className="transition-transform duration-200 hover:scale-110"
              />
              <FaNodeJs
                title="Node.js"
                style={{ color: "#339933" }}
                className="transition-transform duration-200 hover:scale-110"
              />
              <SiExpress
                title="Express"
                className="transition-transform duration-200 hover:scale-110 text-gray-800 dark:text-gray-200"
              />
              <SiPostgresql
                title="PostgreSQL"
                style={{ color: "#336791" }}
                className="transition-transform duration-200 hover:scale-110"
              />
              <SiMongodb
                title="MongoDB"
                style={{ color: "#47A248" }}
                className="transition-transform duration-200 hover:scale-110"
              />
              <FaPython
                title="Python"
                style={{ color: "#3776AB" }}
                className="transition-transform duration-200 hover:scale-110"
              />
              <SiPytorch
                title="PyTorch"
                style={{ color: "#EE4C2C" }}
                className="transition-transform duration-200 hover:scale-110"
              />
              <SiScikitlearn
                title="Scikit-learn"
                style={{ color: "#F7931E" }}
                className="transition-transform duration-200 hover:scale-110"
              />
              <SiHuggingface
                title="Hugging Face"
                style={{ color: "#FFAE00" }}
                className="transition-transform duration-200 hover:scale-110"
              />
              <FaDocker
                title="Docker"
                style={{ color: "#2496ED" }}
                className="transition-transform duration-200 hover:scale-110"
              />
              <SiKubernetes
                title="Kubernetes"
                style={{ color: "#326CE5" }}
                className="transition-transform duration-200 hover:scale-110"
              />
              <FaGitAlt
                title="Git"
                style={{ color: "#F05032" }}
                className="transition-transform duration-200 hover:scale-110"
              />
              <SiVuedotjs
                title="Vue.js"
                style={{ color: "#4FC08D" }}
                className="transition-transform duration-200 hover:scale-110"
              />
              <SiOpenai
                title="OpenAI / AI / ML"
                style={{ color: "#412991" }}
                className="transition-transform duration-200 hover:scale-110"
              />
              <SiPostman
                title="Postman"
                style={{ color: "#FF6C37" }}
                className="transition-transform duration-200 hover:scale-110"
              />
              <SiGraphql
                title="GraphQL"
                style={{ color: "#E10098" }}
                className="transition-transform duration-200 hover:scale-110"
              />
              <SiAxios
                title="Axios"
                style={{ color: "#5A29E4" }}
                className="transition-transform duration-200 hover:scale-110"
              />
              <SiJest
                title="Jest"
                style={{ color: "#C21325" }}
                className="transition-transform duration-200 hover:scale-110"
              />
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <a href="/Pamela_Resume_0825.pdf" download>
              <Button variant="default" className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download Resume
              </Button>
            </a>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
