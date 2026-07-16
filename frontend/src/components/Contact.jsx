import {
  Mail,
  MapPin,
  Send,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";

import {
  SiLeetcode,
  SiCodeforces,
  SiCodechef,
  SiGeeksforgeeks,
} from "react-icons/si";

function Contact() {
  const socials = [
    {
      name: "GitHub",
      icon: <FaGithub size={26} />,
      link: "https://github.com/SHreyanSH-0",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={26} />,
      link: "https://www.linkedin.com/in/shreyansh-tiwari-501165312/",
    },
    {
      name: "LeetCode",
      icon: <SiLeetcode size={26} />,
      link: "https://leetcode.com/u/tiwarishreyansh013/",
    },
    {
      name: "Codeforces",
      icon: <SiCodeforces size={26} />,
      link: "https://codeforces.com/profile/tiwarishreyansh013",
    },
    {
      name: "CodeChef",
      icon: <SiCodechef size={26} />,
      link: "https://www.codechef.com/users/tiwari013",
    },
    {
      name: "GeeksForGeeks",
      icon: <SiGeeksforgeeks size={26} />,
      link: "https://www.geeksforgeeks.org/profile/tiwarishre0yqv",
    },
  ];

  return (
    <section id="contact" className="py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mb-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
            Contact
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Let's Build Something Amazing
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-400">
            Whether you have an internship opportunity, project idea,
            collaboration, or simply want to connect, my inbox is
            always open.
          </p>
        </div>

        <div className="">
          {/* Left */}

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-10">
            <h3 className="text-3xl font-bold">
              Get In Touch
            </h3>

            <p className="mt-5 leading-8 text-zinc-400">
              I'm always interested in discussing software
              engineering, backend development, competitive
              programming, AI, or exciting internship opportunities.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="text-blue-500" />

                <div>
                  <p className="font-semibold">
                    Email
                  </p>

                  <p className="text-zinc-400">
                    tiwarishreyansh013@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-blue-500" />

                <div>
                  <p className="font-semibold">
                    Location
                  </p>

                  <p className="text-zinc-400">
                    Kurukshetra, Haryana, India
                  </p>
                </div>
              </div>
            </div>

            {/* Socials */}

            <div className="mt-12">
              <h4 className="mb-6 text-xl font-semibold">
                Connect With Me
              </h4>

              <div className="grid grid-cols-4 gap-4">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    title={social.name}
                    className="flex h-16 w-16 items-center justify-center rounded-2xl border border-zinc-700 bg-[#18181B] transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:bg-blue-600"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;