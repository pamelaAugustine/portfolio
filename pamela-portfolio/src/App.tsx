import Header from "@/components/Header"
import Hero from "@/components/Hero"
import ProjectsSection from "@/components/ProjectsSection"


export default function App() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <Hero />
        <ProjectsSection />
        {/* Work, About, Contact sections will go here */}
      </main>
    </>
  )
}
