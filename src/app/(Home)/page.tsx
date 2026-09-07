import { Hero } from "./_components/Hero";
import { Navbar } from "./_components/Navbar";
import { WorkflowSection } from "./_components/WorflowSection";


export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <WorkflowSection />
    </main>
  );
}