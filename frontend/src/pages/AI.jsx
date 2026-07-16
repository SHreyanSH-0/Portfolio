import { useEffect, useRef, useState } from "react";
import { ArrowLeft, Bot, Copy, Send, User } from "lucide-react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import api from "../services/api";

function AI() {
    const [messages, setMessages] = useState([]);
    const [question, setQuestion] = useState("");
    const [loading, setLoading] = useState(false);

    const bottomRef = useRef(null);

    const suggestions = [
        "Tell me about yourself",
        "Explain your URL Shortener project",
        "What backend technologies do you know?",
        "Tell me about your competitive programming journey",
        "Which project are you most proud of?",
        "Why should someone hire you?",
    ];

    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages, loading]);

    async function sendMessage(text = question) {
        if (!text.trim() || loading) return;

        setMessages((prev) => [
            ...prev,
            {
                role: "user",
                text,
            },
        ]);

        setQuestion("");
        setLoading(true);

        try {
            const { data } = await api.post("/api/chat", {
                question: text,
            });

            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    text: data.answer,
                    sources: data.sources || [],
                },
            ]);
        } catch (err) {
            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    text: "Something went wrong while contacting the AI.",
                    sources: [],
                },
            ]);
        }

        setLoading(false);
    }

    return (
        <div className="min-h-screen bg-[#09090B] text-white">
            <div className="mx-auto flex h-screen max-w-6xl flex-col px-6 py-6">

                <div className="mb-6 flex items-center justify-between">
                    <div>
                        <h1 className="text-4xl font-bold">
                            Portfolio AI
                        </h1>

                        <p className="mt-2 text-zinc-400">
                            Ask anything about my experience,
                            projects, skills, education or
                            competitive programming.
                        </p>
                    </div>

                    <Link
                        to="/"
                        className="flex items-center gap-2 rounded-xl border border-zinc-700 px-5 py-3 transition hover:bg-zinc-800"
                    >
                        <ArrowLeft size={18} />
                        Portfolio
                    </Link>
                </div>

                {messages.length === 0 && (
                    <div className="mb-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

                        <h2 className="text-2xl font-semibold">
                            Suggested Questions
                        </h2>

                        <div className="mt-6 flex flex-wrap gap-3">
                            {suggestions.map((item) => (
                                <button
                                    key={item}
                                    onClick={() =>
                                        sendMessage(item)
                                    }
                                    className="rounded-full border border-zinc-700 px-5 py-3 text-sm transition hover:border-blue-500 hover:bg-blue-600"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                <div className="flex-1 space-y-6 overflow-y-auto pr-2">

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
                                className={`max-w-4xl rounded-2xl p-5 ${
                                    message.role === "user"
                                        ? "bg-blue-600"
                                        : "border border-zinc-800 bg-zinc-900"
                                }`}
                            >
                                <div className="mb-3 flex items-center gap-2">

                                    {message.role === "assistant" ? (
                                        <Bot size={18} />
                                    ) : (
                                        <User size={18} />
                                    )}

                                    <span className="font-semibold">
                                        {message.role ===
                                        "assistant"
                                            ? "Portfolio AI"
                                            : "You"}
                                    </span>
                                </div>

                                <div className="prose prose-invert max-w-none">
                                    <ReactMarkdown
                                        remarkPlugins={[
                                            remarkGfm,
                                        ]}
                                    >
                                        {message.text}
                                    </ReactMarkdown>
                                </div>

                                {message.role ===
                                    "assistant" && (
                                    <>
                                        {message.sources
                                            ?.length > 0 && (
                                            <div className="mt-5">

                                                <p className="mb-2 text-sm text-zinc-400">
                                                    Sources
                                                </p>

                                                <div className="flex flex-wrap gap-2">
                                                    {message.sources.map(
                                                        (
                                                            source,
                                                            i
                                                        ) => (
                                                            <span
                                                                key={
                                                                    i
                                                                }
                                                                className="rounded-full bg-zinc-800 px-3 py-1 text-xs"
                                                            >
                                                                {
                                                                    source.source
                                                                }
                                                            </span>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        )}

                                        <button
                                            onClick={() =>
                                                navigator.clipboard.writeText(
                                                    message.text
                                                )
                                            }
                                            className="mt-5 flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
                                        >
                                            <Copy size={16} />
                                            Copy Response
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}

                    {loading && (
                        <div className="flex justify-start">
                            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
                                <div className="flex items-center gap-3">
                                    <Bot size={18} />
                                    <span>
                                        Thinking...
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}

                    <div ref={bottomRef} />
                </div>

                <div className="mt-6 flex gap-4">

                    <input
                        value={question}
                        onChange={(e) =>
                            setQuestion(e.target.value)
                        }
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                sendMessage();
                            }
                        }}
                        placeholder="Ask me anything..."
                        className="flex-1 rounded-2xl border border-zinc-700 bg-zinc-900 px-6 py-4 outline-none transition focus:border-blue-500"
                    />

                    <button
                        onClick={() => sendMessage()}
                        disabled={loading}
                        className="rounded-2xl bg-blue-600 px-7 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        <Send />
                    </button>

                </div>

            </div>
        </div>
    );
}

export default AI;