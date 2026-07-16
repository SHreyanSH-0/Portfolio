import {
  Code2,
  Database,
  Globe,
  Brain,
  Wrench,
  Server,
} from "lucide-react";

function Skills() {
  const skillGroups = [
    {
      title: "Languages",
      icon: <Code2 className="text-blue-500" size={24} />,
      skills: [
        "C++",
        "C",
        "Python",
        "JavaScript",
        "TypeScript",
        "Kotlin",
        "SQL",
      ],
    },
    {
      title: "Frontend",
      icon: <Globe className="text-green-500" size={24} />,
      skills: [
        "React",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "Vite",
      ],
    },
    {
      title: "Backend",
      icon: <Server className="text-purple-500" size={24} />,
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "JWT",
        "Socket.IO",
      ],
    },
    {
      title: "Databases",
      icon: <Database className="text-yellow-500" size={24} />,
      skills: [
        "MongoDB",
        "Redis",
        "Firebase",
      ],
    },
    {
      title: "AI / ML",
      icon: <Brain className="text-pink-500" size={24} />,
      skills: [
        "Machine Learning",
        "OpenCV",
        "NumPy",
        "Pandas",
        "Scikit-learn",
        "Gemini API",
      ],
    },
    {
      title: "Tools",
      icon: <Wrench className="text-orange-500" size={24} />,
      skills: [
        "Git",
        "GitHub",
        "Docker",
        "Postman",
        "Amazon Web Services (AWS)",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-[#09090B] py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-500">
            Skills
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Tech Stack
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-400">
            Technologies and tools I use to build scalable
            applications, solve algorithmic problems, and explore
            artificial intelligence.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500"
            >
              <div className="mb-6 flex items-center gap-3">
                {group.icon}

                <h3 className="text-2xl font-bold">
                  {group.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 transition hover:bg-blue-500 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>        
      </div>
    </section>
  );
}

export default Skills;