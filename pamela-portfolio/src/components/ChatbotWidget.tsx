"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ sender: "user" | "bot"; text: string }[]>([])
  const [input, setInput] = useState("")

  const handleSend = async () => {
    if (!input.trim()) return
    const userMessage = input.trim()
    setMessages((prev) => [...prev, { sender: "user", text: userMessage }])
    setInput("")
  
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      })
      const data = await res.json()
      setMessages((prev) => [...prev, { sender: "bot", text: data.reply }])
    } catch (error) {
      setMessages((prev) => [...prev, { sender: "bot", text: "Something went wrong." }])
    }
  }
  

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <Button
          className="rounded-full shadow-md"
          onClick={() => setIsOpen(true)}
        >
          💬 Ask me anything
        </Button>
      ) : (
        <Card className="w-[320px] h-[400px] flex flex-col shadow-xl">
          <div className="p-2 border-b flex justify-between items-center">
            <span className="font-medium">Assistant</span>
            <Button size="sm" variant="ghost" onClick={() => setIsOpen(false)}>
              ✖️
            </Button>
          </div>
          <CardContent className="flex-1 p-2">
            <ScrollArea className="h-full pr-2 space-y-2">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`text-sm p-2 rounded-lg max-w-[80%] ${
                    msg.sender === "user"
                      ? "ml-auto bg-blue-100"
                      : "mr-auto bg-gray-100"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
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
      )}
    </div>
  )
}
