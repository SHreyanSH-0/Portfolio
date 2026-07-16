import { useState } from "react";
import {
  Bot,
  User,
  Send,
  Sparkles,
  Trash2,
} from "lucide-react";

function AI() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "👋 Hi! I'm Shreyansh's AI Assistant. Ask me anything about his resume, projects, skills, or competitive programming achievements.",
    },
  ]);

  const [input, setInput] = useState("");

  const suggestions = [
    "Summarize your resume",
    "Tell me about your projects",
    "What backend technologies do you know?",
    "What are your competitive programming achievements?",
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: input,
      },
      {
        role: "assistant",
        content:
          "Gemini integration will be added here. This response is currently a placeholder.",
      },
    ]);

    setInput("");
  };

  const clearChat = () => {
    setMessages([
      {
        role: "assistant",
        content:
          "👋 Hi! I'm Shreyansh's AI Assistant. Ask me anything about his resume, projects, skills, or competitive programming achievements.",
      },
    ]);
  };

  return (
    <section
      id="ai"
      className="bg-[#09090B] py-24 text-white"
    >
      <div className="mx-auto max-w-5xl px-6">
        {/* Heading */}

        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-500">
            Artificial Intelligence
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Ask My AI Assistant
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-400">
            Have questions about my experience, resume, projects,
            skills, or competitive programming journey? Just ask.
          </p>
        </div>

        {/* Chat Box */}

        <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-2xl">
          {/* Header */}

          <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-5">
            <div className="flex items-center gap-3">
              <Sparkles className="text-blue-500" />

              <div>
                <h3 className="font-bold">
                  AI Portfolio Assistant
                </h3>

                <p className="text-sm text-green-400">
                  Online
                </p>
              </div>
            </div>

            <button
              onClick={clearChat}
              className="rounded-lg p-2 transition hover:bg-zinc-800"
            >
              <Trash2 size={18} />
            </button>
          </div>

          {/* Messages */}

          <div className="h-[450px] space-y-5 overflow-y-auto p-6">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`flex max-w-[80%] gap-3 ${
                    message.role === "user"
                      ? "flex-row-reverse"
                      : ""
                  }`}
                >
                  <div className="mt-1">
                    {message.role === "assistant" ? (
                      <Bot className="text-blue-500" />
                    ) : (
                      <User className="text-green-400" />
                    )}
                  </div>

                  <div
                    className={`rounded-2xl px-5 py-3 ${
                      message.role === "assistant"
                        ? "bg-zinc-800"
                        : "bg-blue-600"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Suggestions */}

          <div className="flex flex-wrap gap-3 border-t border-zinc-800 px-6 py-5">
            {suggestions.map((item) => (
              <button
                key={item}
                onClick={() => setInput(item)}
                className="rounded-full border border-zinc-700 px-4 py-2 text-sm transition hover:border-blue-500 hover:text-blue-400"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Input */}

          <div className="flex gap-3 border-t border-zinc-800 p-6">
            <input
              type="text"
              placeholder="Ask anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && handleSend()
              }
              className="flex-1 rounded-xl border border-zinc-700 bg-[#18181B] px-5 py-3 outline-none transition focus:border-blue-500"
            />

            <button
              onClick={handleSend}
              className="rounded-xl bg-blue-600 p-4 transition hover:bg-blue-700"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AI;