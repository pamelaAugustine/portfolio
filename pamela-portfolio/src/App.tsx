import Header from "@/components/Header"
import Hero from "@/components/Hero"
import ProjectsSection from "@/components/ProjectsSection"
import ChatbotWidget from "@/components/ChatbotWidget"


export default function App() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <Hero />
        <ProjectsSection />
        <ChatbotWidget />
        {/* Work, About, Contact sections will go here */}
      </main>
    </>
  )
}
