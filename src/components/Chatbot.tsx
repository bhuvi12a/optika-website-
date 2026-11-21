"use client";

import { useState, useRef, useEffect } from "react";
import {
  MessageSquare,
  X,
  Send,
  Loader2,
  Bot,
  User,
  ShieldAlert,
  Sparkles,
  Phone,
} from "lucide-react";
import { contact } from "@/data/site";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

// Helper to render beautiful chat text and pills without any raw asterisks or markdown artifacts
function renderFormattedMessage(text: string) {
  // Strip out stray triple or double asterisks completely
  const sanitized = text
    .replace(/\*\*\*(.*?)\*\*\*/g, "$1")
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\*(.*?)\*/g, "$1");

  const lines = sanitized.split("\n");
  const processedBlocks: React.ReactNode[] = [];

  lines.forEach((line, i) => {
    const trimmed = line.trim();

    if (!trimmed) {
      processedBlocks.push(<div key={i} className="h-2" />);
      return;
    }

    // Convert bullet points or dash lines into elegant cards/pills
    if (trimmed.startsWith("•") || trimmed.startsWith("-") || trimmed.startsWith("*")) {
      const content = trimmed.replace(/^[•\-*]\s*/, "");
      const [title, ...rest] = content.split(":");

      processedBlocks.push(
        <div
          key={i}
          className="my-1.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 text-slate-800 text-[12.5px] leading-snug flex items-start gap-2 shadow-[0_1px_3px_rgba(0,0,0,0.03)]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
          <div className="flex-1">
            {rest.length > 0 ? (
              <>
                <span className="font-bold text-slate-900">{title}:</span>
                <span className="text-slate-700 ml-1">{rest.join(":")}</span>
              </>
            ) : (
              <span className="text-slate-800 font-medium">{content}</span>
            )}
          </div>
        </div>
      );
      return;
    }

    // Normal paragraph text
    processedBlocks.push(
      <p key={i} className="text-[13px] leading-relaxed text-slate-800 mb-1">
        {trimmed}
      </p>
    );
  });

  return processedBlocks;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hello! Welcome to Optika Healthcare. I can help answer questions about our corporate health camps, diagnostic lab packages, eye check-ups, and eyewear prices. How can I assist you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      inputRef.current?.focus();
    }
  }, [isOpen, messages, isLoading]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMessage: ChatMessage = { role: "user", content: trimmed };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        throw new Error(data.error || "Failed to retrieve assistant reply.");
      }

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    } catch (err: any) {
      setErrorMessage(
        err.message || "Something went wrong while connecting to the assistant."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chatbot-root">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="chatbot-btn group"
          aria-label="Open Optika Support Chat"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          <MessageSquare size={19} className="group-hover:scale-110 transition-transform" />
          <span className="tracking-tight pr-1">Chat Support</span>
        </button>
      )}

      {/* Floating Chat Panel */}
      {isOpen && (
        <div className="chatbot-window animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 p-4 text-white flex items-center justify-between shrink-0 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/25">
                <Bot size={20} className="text-white" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-bold text-sm leading-none">Optika AI Assistant</h3>
                  <Sparkles size={13} className="text-emerald-200" />
                </div>
                <span className="text-[11px] text-emerald-100 flex items-center gap-1 mt-0.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-200 animate-pulse" />
                  Online • Hosur Support
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-white/20 text-white/90 hover:text-white transition-colors"
              aria-label="Close Chat"
            >
              <X size={19} />
            </button>
          </div>

          {/* Privacy Notice Banner */}
          <div className="bg-slate-50 border-b border-slate-200/80 px-3.5 py-1.5 flex items-center gap-2 text-[11px] text-slate-500 shrink-0">
            <ShieldAlert size={14} className="text-emerald-600 shrink-0" />
            <span>Please do not share sensitive medical records or lab reports here.</span>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-slate-50/50">
            {messages.map((msg, index) => {
              const isAssistant = msg.role === "assistant";
              return (
                <div
                  key={index}
                  className={`flex gap-2.5 ${isAssistant ? "justify-start" : "justify-end"}`}
                >
                  {isAssistant && (
                    <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                      <Bot size={15} />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-[13px] leading-relaxed break-words whitespace-pre-wrap ${
                      isAssistant
                        ? "bg-white text-slate-800 border border-slate-200/80 shadow-sm rounded-tl-sm chat-markdown"
                        : "bg-emerald-600 text-white font-medium rounded-tr-sm shadow-sm"
                    }`}
                  >
                    {renderFormattedMessage(msg.content)}
                  </div>

                  {!isAssistant && (
                    <div className="w-7 h-7 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center shrink-0 mt-0.5">
                      <User size={15} />
                    </div>
                  )}
                </div>
              );
            })}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex gap-2.5 items-center text-slate-500 text-xs py-1">
                <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200">
                  <Bot size={15} />
                </div>
                <div className="bg-white border border-slate-200 px-3.5 py-2 rounded-2xl flex items-center gap-2 shadow-sm">
                  <Loader2 size={14} className="animate-spin text-emerald-600" />
                  <span>Checking Optika info...</span>
                </div>
              </div>
            )}

            {/* Error Message */}
            {errorMessage && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs space-y-1">
                <div className="font-bold flex items-center gap-1.5">
                  <ShieldAlert size={14} /> Connection Error
                </div>
                <p>{errorMessage}</p>
                <div className="pt-1 flex items-center gap-2">
                  <a
                    href={`tel:${contact.phoneRaw}`}
                    className="font-bold underline text-red-800 flex items-center gap-1"
                  >
                    <Phone size={12} /> Call Us: {contact.phone}
                  </a>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions */}
          <div className="px-3.5 py-1.5 bg-white border-t border-slate-100 flex gap-1.5 overflow-x-auto text-[11px] text-slate-600 shrink-0 no-scrollbar">
            <button
              type="button"
              onClick={() => {
                setInput("What health packages do you offer?");
              }}
              className="px-2.5 py-1 rounded-full bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 border border-slate-200 transition-colors whitespace-nowrap"
            >
              Health packages?
            </button>
            <button
              type="button"
              onClick={() => {
                setInput("How do corporate health camps work?");
              }}
              className="px-2.5 py-1 rounded-full bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 border border-slate-200 transition-colors whitespace-nowrap"
            >
              Corporate camps?
            </button>
            <button
              type="button"
              onClick={() => {
                setInput("What are your eye check-up and eyewear prices?");
              }}
              className="px-2.5 py-1 rounded-full bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 border border-slate-200 transition-colors whitespace-nowrap"
            >
              Eyewear prices?
            </button>
          </div>

          {/* Input Form */}
          <form
            onSubmit={handleSend}
            className="p-3 bg-white border-t border-slate-200/80 flex items-center gap-2 shrink-0"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about packages, camps, eyewear..."
              maxLength={1500}
              disabled={isLoading}
              className="flex-1 px-3.5 py-2.5 text-xs sm:text-[13px] rounded-full border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50 focus:bg-white transition-all disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="p-2.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md hover:shadow-lg disabled:opacity-40 transition-all"
              aria-label="Send Message"
            >
              <Send size={15} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
