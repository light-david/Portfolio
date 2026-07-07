import StarBackground from "@/components/sub/StarBackground";
import Navbar         from "@/components/main/Navbar";
import Hero           from "@/components/main/Hero";
import About          from "@/components/main/About";
import Skills         from "@/components/main/Skills";
import Projects       from "@/components/main/Projects";
import Experience     from "@/components/main/Experience";
import GitHub         from "@/components/main/GitHub";
import Contact        from "@/components/main/Contact";
import FAQ            from "@/components/main/FAQ";
import Footer         from "@/components/main/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Fixed deep-space radial gradient underlay */}
      <div
        className="fixed inset-0 -z-20 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139,92,246,.12) 0%, transparent 70%)",
        }}
      />
      {/* Decorative nebula orbs */}
      <div className="fixed -z-10 pointer-events-none select-none">
        <div className="absolute top-[-10%] left-[-5%]  w-[500px] h-[500px] rounded-full opacity-[0.07] blur-3xl"
             style={{ background: "radial-gradient(circle,#8b5cf6,transparent)" }} />
        <div className="absolute top-[30%]  right-[-8%] w-[420px] h-[420px] rounded-full opacity-[0.06] blur-3xl"
             style={{ background: "radial-gradient(circle,#06b6d4,transparent)" }} />
        <div className="absolute bottom-[10%] left-[20%] w-[380px] h-[380px] rounded-full opacity-[0.05] blur-3xl"
             style={{ background: "radial-gradient(circle,#e879f9,transparent)" }} />
      </div>

      <StarBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <GitHub />
      <Contact />
      <FAQ />
      <Footer />
    </main>
  );
}
