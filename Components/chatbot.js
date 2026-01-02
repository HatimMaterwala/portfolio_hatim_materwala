"use client";
import { useState } from "react";
import Image from "next/image";

export default function Chatbot() {
  const [quest, setQuest] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  const submitQuestion = async () => {
    try {
      setLoading(true);
      const postQuestion = await fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify(quest),
        headers: {
          "Content-type": "application/json",
        },
      });

      const response = await postQuestion.json();

      setAnswer(response);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <div className="w-full">
      {!chatOpen ? (
        <div className="fixed bottom-10 right-10 z-50">
          <Image
            src={"/assets/img/chatbot_image.jpeg"}
            width={50}
            height={50}
            alt="chatbot_logo"
            className="border-2 border-white rounded-full cursor-pointer"
            onClick={() => setChatOpen(true)}
          />
        </div>
      ) : (
        <form onSubmit={(e) => {
          e.preventDefault();
          if(!quest.trim() || loading) return;
          submitQuestion();
        }} className="z-50 fixed bottom-6 right-6 w-[90vw] md:w-1/2 ">
          <div className="w-full max-w-3xl h-[78vh] sm:h-[75vh] md:h-[72vh] lg:h-[68vh] px-4 flex items-center">
            <div className="w-full h-full rounded-2xl bg-gradient-to-b from-white/5 via-white/3 to-black/0 border border-white/5 backdrop-blur-md p-6 flex flex-col shadow-2xl">
              <header className="flex items-center justify-between mb-4">
                <h1 className="text-lg sm:text-2xl font-semibold text-white tracking-tight">
                  Ask about Hatim
                </h1>
                <div 
                className="cursor-pointer"
                onClick={() => setChatOpen(false)}
                >
                  X
                </div>
              </header>

              <div className="flex gap-3 items-center mb-4">
                <input
                  id="question"
                  type="text"
                  placeholder="Ask me anything..."
                  value={quest}
                  onChange={(e) => setQuest(e.target.value)}
                  className="w-2/3 flex-1 bg-black/50 placeholder-white/40 text-white rounded-xl px-4 py-3 border border-white/8 focus:outline-none focus:ring-2 focus:ring-white/10 transition"
                />

                <button
                  type="submit"
                  className="ml-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-md hover:opacity-95 cursor-pointer"
                >
                  {loading ? "Thinking…" : "Submit"}
                </button>
              </div>

              <div className="flex-1 mb-3 h-1/2">
                <div className="h-full bg-black/40 rounded-xl border border-white/8 p-4 overflow-y-auto">
                  {loading && <div className="text-white/60">Loading…</div>}

                  {!loading && answer && answer.length > 0 ? (
                    <div className="prose prose-invert text-white text-sm leading-relaxed whitespace-pre-wrap ">
                      {answer}
                    </div>
                  ) : (
                    !loading && (
                      <div className="text-white/40">
                        Your answer will appear here.
                      </div>
                    )
                  )}
                </div>
              </div>

              <footer className="text-xs text-white/40 text-right">
                Created by Hatim Materwala
              </footer>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
