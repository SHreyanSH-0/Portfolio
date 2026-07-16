import { Download, ChevronDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

function Hero() {
  const scrollToProjects = () => {
    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden text-white"
    >
      {/* Background Blur */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-10 top-10 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-16 px-6 lg:flex-row">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <p className="mb-4 text-lg text-blue-400">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl font-black leading-tight md:text-7xl">
            Shreyansh <br />
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Tiwari
            </span>
          </h1>

          <h2 className="mt-8 text-2xl font-semibold text-zinc-300 md:text-3xl">
            Backend Developer • Competitive Programmer • AI Enthusiast
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
            Passionate about building scalable backend systems, developing AI-powered applications, and solving complex algorithmic challenges.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={scrollToProjects}
              className="rounded-xl bg-blue-600 px-7 py-3 font-semibold transition hover:bg-blue-700"
            >
              View Projects
            </button>

            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 rounded-xl border border-zinc-700 px-7 py-3 transition hover:border-blue-500 hover:bg-zinc-900"
            >
              <Download size={18} />
              Resume
            </a>
          </div>

          {/* Socials */}
          <div className="mt-10 flex gap-5">
            <a
              href="https://github.com/SHreyanSH-0"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-zinc-700 p-4 transition hover:border-blue-500 hover:text-blue-500"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/shreyansh-tiwari-501165312/"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-zinc-700 p-4 transition hover:border-blue-500 hover:text-blue-500"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-1 justify-center"
        >
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 rounded-full" />

            {/* Profile */}
            <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-black md:h-96 md:w-96">
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQGJq88ZY_cszg/profile-displayphoto-crop_800_800/B56Z7MoP2_IgAM-/0/1781549564959?e=1785974400&v=beta&t=sfULE6BAqYllQfEmxYX27e6oKC5rs5Z6msQTq1FjDgo"
                alt="Shreyansh Tiwari"
                className="h-full w-full"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown size={34} className="text-zinc-500" />
      </motion.div>
    </section>
  );
}

export default Hero;