import { Download, Eye, FileText } from "lucide-react";

function Resume() {
  return (
    <section
      id="resume"
      className="bg-[#09090B] py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-500">
            Resume
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            My Resume
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-400">
            Download my latest resume or preview it directly below.
          </p>
        </div>

        {/* Buttons */}
        <div className="mb-10 flex flex-wrap justify-center gap-5">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700"
          >
            <Eye size={18} />
            Preview
          </a>

          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 rounded-xl border border-zinc-700 px-6 py-3 font-semibold transition hover:border-blue-500 hover:text-blue-400"
          >
            <Download size={18} />
            Download
          </a>
        </div>

        {/* Resume Preview */}
        <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-2xl">
          <div className="flex items-center gap-3 border-b border-zinc-800 px-6 py-4">
            <FileText className="text-blue-500" size={20} />
            <h3 className="font-semibold">resume.pdf</h3>
          </div>

          <iframe
            src="/resume.pdf"
            title="Resume"
            className="h-[900px] w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Resume;