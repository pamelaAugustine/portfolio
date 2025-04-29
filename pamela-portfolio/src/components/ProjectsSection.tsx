import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "Visit Cincy Digital Bid Book",
    description:
      "Interactive bid book to streamline event planning for Visit Cincy.",
    imageUrl: "/images/cincy-bidbook.png",
    link: "https://www.visitcincy.com/svtest/bidbook/",
  },
  {
      title: "Visit Cheyenne | Microsite",
      description:
      "Built a thematic campaign site showcasing cowboy culture experiences in Cheyenne to boost tourism and event participation.",
      link: "https://www.cheyenne.org/cowboy-adventures/",
      imageUrl: "/images/cheyenne-cowboy.png",
    },
    {
        title: "Visit Gulf | Wellness Campaign Site",
        description:
        "Helped develop a thematic microsite focused on promoting wellness-focused travel experiences along the Gulf Coast.",
        link: "https://www.visitgulf.com/svtest/wellness-campaign-test/",
        imageUrl: "/images/gulf-wellness.png",
    },
    {
      title: "Visit Phoenix Downtown Map",
      description:
        "An interactive map experience for visitors to downtown Phoenix.",
      imageUrl: "/images/phoenix-map.png",
      link: "https://www.visitphoenix.com/svtest/downtown-map/",
    },
  {
    title: "Visit McKinney | Interactive Map",
    description:
      "Built a dynamic, mobile-friendly map experience for visitors to explore McKinney’s districts and local highlights.",
    link: "https://www.visitmckinney.com/interactivemap/",
    imageUrl: "/images/mckinney-map.png",
  },
  {
    title: "Visit Fort Worth | Interactive Map",
    description:
      "Created a custom illustrated map for Visit Fort Worth to showcase key attractions and districts through an engaging digital experience.",
    link: "https://www.fortworth.com/svtest/interactive-map/",
    imageUrl: "/images/fortworth-map.png",
  },
];

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader className="p-0">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </CardHeader>
                <CardContent className="p-4">
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
