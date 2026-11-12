import { Footer } from "@/components/layout/Footer";
import { RouteNav } from "@/features/navigation";
import { Hero } from "@/features/hero";
import { About } from "@/features/about";
import { Stack } from "@/features/stack";
import { Projects } from "@/features/projects";
import { Experience } from "@/features/experience";
import { Contact } from "@/features/contact";

export default function HomePage() {
  return (
    <>
      <RouteNav />
      <main>
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
