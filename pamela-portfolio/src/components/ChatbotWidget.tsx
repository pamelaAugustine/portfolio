"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";


export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<
    { sender: "user" | "bot"; text: string }[]
  >([]);
  const [input, setInput] = useState("");
  const [username, setUsername] = useState<string | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          sender: "bot",
          text: "Hey there! I’m Pamela’s virtual assistant. What’s your name?",
        },
      ]);
    }
  }, [isOpen]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage = input.trim();

    setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);
    setInput("");

    // First message: capture name
    if (!username) {
      setUsername(userMessage);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: `Nice to meet you, ${userMessage}! I’m Pamela (well... a virtual version of her). What would you like to know?`,
        },
      ]);
      return;
    }
    setIsTyping(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Something went wrong." },
      ]);
    } finally {
      setIsTyping(false); // hide after response
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {!isOpen ? (
          <Button
            className="rounded-full shadow-md"
            onClick={() => setIsOpen(true)}
          >
            💬 Ask me anything
          </Button>
        ) : (
          <motion.div
            key="chat"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 z-50"
          >
            <Card className="w-full max-w-[375px] h-[700px] flex flex-col shadow-xl">
              <div className="p-2 border-b flex justify-between items-center bg-[#E02C9A] text-white rounded-t-lg">
                <span className="font-medium">Assistant</span>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-[#d02687]"
                >
                  ✖️
                </Button>
              </div>
              <CardContent className="flex-1 p-2">
                <ScrollArea className="flex-1 overflow-y-auto max-h-[500px] pr-2 space-y-2">
                  {messages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`text-sm px-3 py-2 rounded-xl max-w-[80%] ${
                        msg.sender === "user"
                          ? "ml-auto bg-[#f2f2f2] text-black text-right dark:text-black"
                          : "mr-auto bg-[#E02C9A] text-white"
                      }`}
                      style={{ marginBottom: "8px" }}
                    >
                      {msg.text}
                    </div>
                  ))}
                  <div ref={chatEndRef} />
                </ScrollArea>
              </CardContent>
              <div className="p-2 border-t flex gap-2">
                <Input
                  placeholder="Type your message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                />
                <Button onClick={handleSend}>Send</Button>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
  
}
