import { useState } from "react";
import styles from "./PortfolioBrowser.module.scss";
import ProjectCard from "../ProjectCard/ProjectCard";

const tabs = [
  { label: "Home", key: "home" },
  { label: "Work", key: "work" },
  { label: "Personal", key: "personal" },
  { label: "About", key: "about" },
  { label: "Resume", key: "resume" },
  { label: "Contact", key: "contact" },
];


const PortfolioBrowser = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <div className={styles.homeContent}>
            <h1>Hi, I'm Pamela Augustine</h1>
            <h2>My portfolio is currently under construction</h2>
            <p>Check out some of my work projects in the meatime!</p>
            <button onClick={() => setActiveTab("work")}>View My Work</button>
          </div>
        );
      case "work":
        const workProjects = [
          {
            title: "Lackawanna County | Interactive Map",
            description:
              "Built a responsive, interactive map experience to highlight the towns, attractions, and regions of Lackawanna County in northeastern Pennsylvania.",
            link: "https://www.visitnepa.org/svtest/widgets-and-panels/interactive-map/",
            imageUrl: "/images/lackawanna-map.png",
          },
          {
            title: "Visit Phoenix | Downtown Interactive Map",
            description:
              "Developed an interactive downtown map for Phoenix visitors, integrating hotel, venue, and attraction data into a user-friendly experience.",
            link: "https://www.visitphoenix.com/svtest/downtown-map/",
            imageUrl: "/images/phoenix-map.png",
          },
          {
            title: "Visit Fort Worth | Interactive Map",
            description:
              "Created a custom illustrated map for Visit Fort Worth to showcase key attractions and districts through an engaging digital experience.",
            link: "https://www.fortworth.com/svtest/interactive-map/",
            imageUrl: "/images/fortworth-map.png",
          },
          {
            title: "Visit McKinney | Interactive Map",
            description:
              "Built a dynamic, mobile-friendly map experience for visitors to explore McKinney’s districts and local highlights.",
            link: "https://www.visitmckinney.com/interactivemap/",
            imageUrl: "/images/mckinney-map.png",
          },
          {
            title: "Visit Gulf | Wellness Campaign Site",
            description:
              "Helped develop a thematic microsite focused on promoting wellness-focused travel experiences along the Gulf Coast.",
            link: "https://www.visitgulf.com/svtest/wellness-campaign-test/",
            imageUrl: "/images/gulf-wellness.png",
          },
          {
            title: "Visit Cincy | Digital Bid Book",
            description:
              "Supported the creation of a digital bid book experience to streamline the event and conference planning process for Visit Cincy’s partners.",
            link: "https://www.visitcincy.com/svtest/bidbook/",
            imageUrl: "/images/cincy-bidbook.png",
          },
          {
            title: "Visit Cheyenne | Outdoor Adventures Site",
            description:
              "Developed a microsite to highlight outdoor adventure opportunities around Cheyenne, Wyoming, promoting tourism and recreation.",
            link: "https://www.cheyenne.org/outdoor-adventures/",
            imageUrl: "/images/cheyenne-outdoors.png",
          },
          {
            title: "Visit Cheyenne | Cowboy Adventures Site",
            description:
              "Built a thematic campaign site showcasing cowboy culture experiences in Cheyenne to boost tourism and event participation.",
            link: "https://www.cheyenne.org/cowboy-adventures/",
            imageUrl: "/images/cheyenne-cowboy.png",
          },
        ];

        return (
          <div className={styles.workSection}>
            <p>
              The following projects were built during my time as a Frontend
              Developer on the CMS Team at Simpleview (a Granicus company).
            </p>
            <p>
              Simpleview
              <a
                href="https://www.simpleviewinc.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", marginLeft: "0.25rem" }}
              >
                simpleviewinc.com 
              </a>
              is a leading provider of CRM, CMS, and digital marketing solutions
              for destinations, helping tourism organizations around the world
              better promote their locations and manage visitor engagement.
            </p>
            <p>
              <em>
                Please note: The code for these projects is proprietary and
                cannot be shared publicly. I am happy to discuss my role and
                contributions in more detail upon request.
              </em>
            </p>

            <div className={styles.workGrid}>
              {workProjects.map((project) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  link={project.link}
                  imageUrl={project.imageUrl}
                />
              ))}
            </div>
          </div>
        );
      case "personal":
        return <div>Personal/School Projects Content</div>;
      case "about":
        return (
          <div className={styles.aboutContent}>
            <h2>About Me</h2>
            <p>
              Coming soon!
            </p>
          </div>
        );
      case "resume":
        return <div>Resume Content (Coming Soon)</div>;
      case "contact":
        return <div>Contact Content (Coming Soon)</div>;
      default:
        return null;
    }
  };

  return (
    <div className={styles.browserWindow}>
      <div className={styles.browserHeader}>
        <div className={styles.browserButtons}>
          <div className={`${styles.button} ${styles.red}`} />
          <div className={`${styles.button} ${styles.yellow}`} />
          <div className={`${styles.button} ${styles.green}`} />
        </div>
        <div className={styles.browserAddressContainer}>
          <div className={styles.browserAddressBar}>pamela_augustine_portfolio</div>
          <button onClick={toggleTheme} className={styles.themeToggleIcon}>
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </div>

      <div className={styles.browserTabs}>
        {tabs.map((tab) => (
          <div
            key={tab.key}
            className={`${styles.tab} ${
              activeTab === tab.key ? styles.active : ""
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </div>
        ))}
      </div>

      <div className={styles.browserContent}>{renderContent()}</div>
    </div>
  );
};

export default PortfolioBrowser;
