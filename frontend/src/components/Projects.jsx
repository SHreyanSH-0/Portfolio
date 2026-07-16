import {
  ExternalLink,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "URL Shortener",
      description:
        "A scalable URL shortening service featuring Redis caching, analytics, BullMQ workers, and MongoDB for persistent storage.",
      github: "https://github.com/SHreyanSH-0/UrlShortener",
      live: "https://url-shortener-livid-three.vercel.app/",

      status: "Completed",

      tech: [
        "Node.js",
        "React.js",
        "Redis",
        "MongoDB",
        "BullMQ",
        "Express.js",
        "Rest APIs",
      ],
    },

    {
      title: "Multiplayer Chess",
      description:
        "A real-time multiplayer room based chess application with matchmaking, authentication, Socket.IO communication, and synchronized gameplay.",

      github: "https://github.com/SHreyanSH-0/chess",
      live: "https://chess-sandy-tau.vercel.app/",

      status: "In Progress",

      tech: [
        "Node.js",
        "Socket.IO",
        "Express.js",
        "MongoDB",
        "React.js",
        "JWT",
        "Rest APIs",
      ],
    },
    {
      title: "Spam Mail Classifier",
      description:
        " Built an NLP-based spam classifier using TF–IDF vectorization and scikit-learn; achieved 92.46% precision",

      github: "https://github.com/SHreyanSH-0/Spam_SMS_Detector",
      live: "https://spam-sms-detector-124102054.streamlit.app/",

      status: "Completed",

      tech: [
        "Python",
        "scikit-learn",
        "NumPy",
        "Pandas",
        "Streamlit",
        "Firebase"
      ],
    },
    {
      title: "Event Portal",
      description:
        "Developed a full-stack event management platform supporting event creation, registrations, eligibility filtering, androle-based access control for students and organizers.",
      github: "https://github.com/SHreyanSH-0/EventPortal",
      live: "https://event-portal-delta.vercel.app/",

      status: "Completed",

      tech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "Rest APIs",
      ],
    },
    {
      title: "Placement Portal",
      description:
        "A complete placement management platform with recruiter and student dashboards, eligibility filtering, analytics, resume management, and automation.",
      github: "https://github.com/SHreyanSH-0/PlacementPortal",
      live: "https://placement-portal-indol.vercel.app/",

      status: "Completed",

      tech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "Rest APIs",
      ],
    },
    {
      title: "Rock Paper Scissors",
      description:
        "A simple Rock Paper Scissors game built with HTML, CSS, and JavaScript.",
      github: "https://github.com/SHreyanSH-0/RockPaperScissors",
      live: "https://shreyansh-0.github.io/RockPaperScissors/Html/rockPaperScissors.html",

      status: "Completed",

      tech: [
        "HTML",
        "CSS",
        "JavaScript"
      ],
    },
  ];

  return (
    <section id="projects" className="py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mb-20 text-center">

          <h2 className="mt-4 text-5xl font-bold">
            Projects
          </h2>
        </div>

        {/* Cards */}

        <div className="grid gap-10 lg:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500"
            >

              <div className="relative overflow-hidden">
                <div className="absolute right-5 top-5 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold">
                  {project.status}
                </div>
              </div>

              {/* Content */}

              <div className="p-8">
                <div className="flex items-center gap-3">
                  <Sparkles className="text-blue-500" />

                  <h3 className="text-3xl font-bold">
                    {project.title}
                  </h3>
                </div>

                <p className="mt-5 leading-8 text-zinc-400">
                  {project.description}
                </p>

                {/* Tech */}

                <div className="mt-8 flex flex-wrap gap-3">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-zinc-700 px-6 py-3 transition hover:border-blue-500"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 transition hover:bg-blue-700"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}

        <div className="mt-20 text-center">
          <a
            href="https://github.com/SHreyanSH-0"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-2xl border border-blue-500 px-8 py-4 text-lg font-semibold transition hover:bg-blue-600"
          >
            <FaGithub />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;