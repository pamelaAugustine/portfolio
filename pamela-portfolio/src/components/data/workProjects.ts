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
    title: "San Antonio | Riverwalk",
    description:
      "Contributed to a multisite project for the San Antonio River Walk, working with my team to deliver a custom-built site for the client.",
    link: "https://www.thesanantonioriverwalk.com/",
    imageUrl: "/images/riverwalk.png",
  },
  {
    title: "Visit Rapid City | New Build",
    description:
      "Helped build a brand-new tourism website for Rapid City from the ground up, focusing on responsive design and dynamic content.",
    link: "https://www.visitrapidcity.com/",
    imageUrl: "/images/rapid-city.png",
  },
];