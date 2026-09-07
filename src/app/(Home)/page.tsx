import { ConnectedSection } from "./_components/ConnectedSection";
import { CtaSection } from "./_components/CtaSection";
import { Footer } from "./_components/Footer";
import { Hero } from "./_components/Hero";
import { Navbar } from "./_components/Navbar";
import { WorkflowSection } from "./_components/WorflowSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background text-foreground">
        <Hero />
        <WorkflowSection />
        <ConnectedSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
