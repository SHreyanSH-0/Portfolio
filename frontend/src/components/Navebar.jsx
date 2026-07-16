import { useState } from "react";
import { Menu, X, Download } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "CP", href: "#cp" },
    { name: "Resume", href: "#resume" },
    { name: "AI", href: "#ai" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#09090B]/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a
          href="/"
          className="text-3xl font-extrabold tracking-tight"
        >
          Shreyansh
          <span className="text-blue-500">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-zinc-300 transition duration-300 hover:text-blue-500"
            >
              {link.name}
            </a>
          ))}

          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 font-medium transition hover:bg-blue-700"
          >
            <Download size={18} />
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-white/10 bg-[#09090B]/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-5 px-6 py-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg text-zinc-300 transition hover:text-blue-500"
              >
                {link.name}
              </a>
            ))}

            <a
              href="/resume.pdf"
              download
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium transition hover:bg-blue-700"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;