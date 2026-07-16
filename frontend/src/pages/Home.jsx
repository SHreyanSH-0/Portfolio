import Navbar from "../components/Navebar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import CP from "../components/CP";
import Resume from "../components/Resume";
import AI from "../components/AI";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import { Link } from "react-router-dom";
import { Bot } from "lucide-react";

function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#09090B] text-white">
      {/* Background Gradient */}
      <div className="fixed inset-0 -z-20">
        <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-blue-600/15 blur-[140px]" />
        <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-purple-600/15 blur-[160px]" />
        <div className="absolute bottom-0 left-1/3 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[150px]" />
      </div>

      {/* Grid Pattern */}
      <div
        className="fixed inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

        <Navbar />

        <main className="pt-25">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <CP />
            <Resume />
            <section className="w-full bg-zinc-950 py-20" id="ai">
              <div className="mx-auto max-w-6xl px-6">

                  <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-10">

                      <div className="flex flex-col items-center text-center">

                          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-600">
                              <Bot size={40} />
                          </div>

                          <h2 className="text-4xl font-bold text-white">
                              Portfolio AI
                          </h2>

                          <p className="mt-5 max-w-3xl text-lg text-zinc-400">
                              Have questions about my projects, skills, education,
                              competitive programming, or experience?
                              Instead of browsing my portfolio, ask my AI assistant.
                          </p>

                          <div className="mt-10 flex flex-wrap justify-center gap-3">

                              <span className="rounded-full bg-zinc-800 px-4 py-2 text-sm text-zinc-300">
                                  Projects
                              </span>

                              <span className="rounded-full bg-zinc-800 px-4 py-2 text-sm text-zinc-300">
                                  Skills
                              </span>

                              <span className="rounded-full bg-zinc-800 px-4 py-2 text-sm text-zinc-300">
                                  Resume
                              </span>

                              <span className="rounded-full bg-zinc-800 px-4 py-2 text-sm text-zinc-300">
                                  Competitive Programming
                              </span>

                              <span className="rounded-full bg-zinc-800 px-4 py-2 text-sm text-zinc-300">
                                  Education
                              </span>

                          </div>

                          <Link
                              to="/ai"
                              className="mt-10 rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold transition hover:bg-blue-700"
                          >
                              Open Portfolio AI
                          </Link>

                      </div>

                  </div>

              </div>
          </section>

            <Contact />
        </main>

        <Footer />
    </div>
  );
}

export default Home;