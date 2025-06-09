import Header from "@/components/Header"
import Hero from "@/components/Hero"
import ProjectsSection from "@/components/ProjectsSection"
import ChatbotWidget from "@/components/ChatbotWidget"
import AboutMe from "@/components/AboutMe"
import Contact from "@/components/Contact"
import Footer from "./components/Footer"
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <Hero />
        <ProjectsSection />
        <AboutMe />
        <Contact />
        <Footer />
        <ChatbotWidget />
      </main>
      <Analytics />
    </>
  )
}
