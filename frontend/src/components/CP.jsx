import {
  Trophy,
  Code2,
  Star,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";

function CP() {
  const profiles = [
    {
      name: "LeetCode",
      icon: <Code2 className="text-yellow-400" size={28} />,
      rating: "1999",
      solved: "950+",
      rank: "25,631/875,878",
      color: "from-yellow-500/20 to-yellow-700/10",
      link: "https://leetcode.com/u/tiwarishreyansh013/",
    },
    {
      name: "Codeforces",
      icon: <BarChart3 className="text-blue-400" size={28} />,
      rating: "1470",
      solved: "600+",
      color: "from-blue-500/20 to-blue-700/10",
      link: "https://codeforces.com/profile/tiwarishreyansh013",
    },
    {
      name: "CodeChef",
      icon: <Star className="text-orange-400" size={28} />,
      rating: "1694",
      color: "from-orange-500/20 to-orange-700/10",
      link: "https://www.codechef.com/users/tiwari013",
    },
    {
      name: "GeeksForGeeks",
      icon: <Trophy className="text-green-400" size={28} />,
      solved: "189",
      color: "from-green-500/20 to-green-700/10",
      link: "https://www.geeksforgeeks.org/profile/tiwarishre0yqv",
    },
  ];

  return (
    <section
      id="cp"
      className="bg-[#09090B] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">
        
        <div className="mb-16 text-center">

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Coding Profiles
          </h2>
        </div>

        <div className="mb-20 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 text-center flex items-center justify-center">
            <h3 className="text-5xl font-bold text-blue-500">
              1800+
            </h3>
            <p className="mt-3 text-zinc-400">
              Total Problems Solved
            </p>
          </div>
        </div>   

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {profiles.map((profile) => (
            <div
              key={profile.name}
              className={`rounded-3xl border border-zinc-800 bg-gradient-to-br ${profile.color} p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500`}
            >
              <div className="mb-6 flex items-center justify-between">
                {profile.icon}

                <a
                  href={profile.link}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg bg-zinc-900 p-2 transition hover:bg-blue-600"
                >
                  <ArrowUpRight size={18} />
                </a>
              </div>

              <h3 className="mb-6 text-2xl font-bold">
                {profile.name}
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between">
                  {profile.rating && (
                    <>
                      <span className="text-zinc-400">Rating</span>
                      <span className="font-semibold">{profile.rating}</span>
                    </>
                  )}
                </div>

                <div className="flex justify-between">
                  {profile.solved && (
                    <>
                      <span className="text-zinc-400">Problems</span>
                      <span className="font-semibold">{profile.solved}</span>
                    </>
                  )}
                </div>

                <div className="flex justify-between">
                  {profile.rank && (
                    <>
                      <span className="text-zinc-400">Rank</span>
                      <span className="font-semibold">{profile.rank}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>     
      </div>
    </section>
  );
}

export default CP;