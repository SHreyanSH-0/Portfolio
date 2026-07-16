import { ArrowUp } from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaHeart,
} from "react-icons/fa";

import {
  SiLeetcode,
  SiCodeforces,
  SiCodechef,
  SiGeeksforgeeks,
} from "react-icons/si";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const links = [
    {
      name: "GitHub",
      icon: <FaGithub size={22} />,
      url: "https://github.com/SHreyanSH-0",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={22} />,
      url: "https://linkedin.com/in/YOUR_LINKEDIN",
    },
    {
      name: "LeetCode",
      icon: <SiLeetcode size={22} />,
      url: "https://leetcode.com/u/YOUR_USERNAME/",
    },
    {
      name: "Codeforces",
      icon: <SiCodeforces size={22} />,
      url: "https://codeforces.com/profile/YOUR_USERNAME",
    },
    {
      name: "CodeChef",
      icon: <SiCodechef size={22} />,
      url: "https://www.codechef.com/users/YOUR_USERNAME",
    },
    {
      name: "GeeksForGeeks",
      icon: <SiGeeksforgeeks size={22} />,
      url: "https://auth.geeksforgeeks.org/user/YOUR_USERNAME",
    },
  ];

  return (
    <footer className="border-t border-zinc-800 bg-[#09090B]">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Branding */}

          <div>
            <h2 className="text-3xl font-bold">
              Shreyansh
              <span className="text-blue-500">.</span>
            </h2>

            <p className="mt-5 leading-8 text-zinc-400">
              Backend Developer, Competitive Programmer, and AI
              Enthusiast passionate about building scalable software,
              solving algorithmic problems, and creating impactful
              products.
            </p>
          </div>

          {/* Navigation */}

          <div>
            <h3 className="mb-5 text-xl font-semibold">
              Navigation
            </h3>

            <div className="space-y-3 text-zinc-400">
              <a href="#about" className="block hover:text-blue-500">
                About
              </a>

              <a href="#skills" className="block hover:text-blue-500">
                Skills
              </a>

              <a href="#projects" className="block hover:text-blue-500">
                Projects
              </a>

              <a href="#cp" className="block hover:text-blue-500">
                Competitive Programming
              </a>

              <a href="#resume" className="block hover:text-blue-500">
                Resume
              </a>

              <a href="#contact" className="block hover:text-blue-500">
                Contact
              </a>
            </div>
          </div>

          {/* Socials */}

          <div>
            <h3 className="mb-5 text-xl font-semibold">
              Connect
            </h3>

            <div className="flex flex-wrap gap-4">
              {links.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  title={item.name}
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-600"
                >
                  {item.icon}
                </a>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              className="mt-8 flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-700"
            >
              <ArrowUp size={18} />
              Back to Top
            </button>
          </div>
        </div>

        {/* Divider */}

        <div className="my-10 h-px bg-zinc-800" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row">
          <p className="text-zinc-500">
            © {new Date().getFullYear()} Shreyansh Tiwari.
            All Rights Reserved.
          </p>

          <p className="flex items-center gap-2 text-zinc-500">
            Built with React, Tailwind CSS & Gemini AI
          </p>

          <p className="flex items-center gap-2 text-zinc-500">
            Made with
            <FaHeart className="text-red-500" />
            in India
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;