export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
}

export const workProjects = [
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