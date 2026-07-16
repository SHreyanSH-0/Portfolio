import { GraduationCap, Code2, Trophy, Brain } from "lucide-react";

function About() {
  const cards = [
    {
      icon: <GraduationCap size={28} />,
      title: "Education",
      description:
        "B.Tech in Computer Science at NIT Kurukshetra with a strong academic record and a passion for software engineering.",
    },
    {
      icon: <Code2 size={28} />,
      title: "Development",
      description:
        "I enjoy building scalable backend systems, full-stack applications, REST APIs, and AI-powered software using modern technologies.",
    },
    {
      icon: <Trophy size={28} />,
      title: "Competitive Programming",
      description:
        "I regularly solve algorithmic problems on LeetCode, Codeforces, CodeChef, and GeeksforGeeks to strengthen problem-solving skills.",
    },
    {
      icon: <Brain size={28} />,
      title: "Learning",
      description:
        "Currently exploring distributed systems, system design, machine learning, and modern AI technologies.",
    },
  ];

  return (
    <section
      id="about"
      className="bg-[#09090B] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-500">
            About Me
          </p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Know Me Better
          </h2>

          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-blue-500" />
        </div>

        {/* Content */}
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left */}
          <div>
            <h3 className="mb-6 text-3xl font-bold">
              Hi, I'm{" "}
              <span className="text-blue-500">
                Shreyansh Tiwari
              </span>
            </h3>

            <p className="mb-6 text-lg leading-8 text-zinc-400">
              I'm a third-year Computer Science student at
              <span className="font-medium text-white">
                {" "}
                NIT Kurukshetra
              </span>{" "}
              with a strong interest in Backend Development, Competitive
              Programming, and Artificial Intelligence.
            </p>

            <p className="mb-6 text-lg leading-8 text-zinc-400">
              I enjoy solving challenging algorithmic problems and building
              scalable applications that combine clean architecture with great
              user experience. My projects focus on backend systems, APIs,
              databases, distributed systems, and AI applications.
            </p>

            <p className="text-lg leading-8 text-zinc-400">
              I'm always looking for opportunities to learn, collaborate, and
              build software that creates real impact.
            </p>
          </div>

          {/* Right */}
          <div className="grid gap-6 sm:grid-cols-2">
            {cards.map((card, index) => (
              <div
                key={index}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="mb-4 inline-flex rounded-xl bg-blue-500/10 p-3 text-blue-500">
                  {card.icon}
                </div>

                <h4 className="mb-3 text-xl font-semibold">
                  {card.title}
                </h4>

                <p className="leading-7 text-zinc-400">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
            <h3 className="text-4xl font-bold text-white-500">1800+</h3>
            <p className="mt-2 text-zinc-400">Problems Solved</p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
            <h3 className="text-4xl font-bold text-white-500">3★</h3>
            <p className="mt-2 text-zinc-400">CodeChef Rating</p>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
            <h3 className="text-4xl font-bold text-white-500">1470</h3>
            <p className="mt-2 text-zinc-400">Codeforces Rating</p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
            <h3 className="text-4xl font-bold text-white-500">1999</h3>
            <p className="mt-2 text-zinc-400">LeetCode Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;