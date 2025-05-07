// api/chat.ts
export default async function handler(req: any, res: any) {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" })
    }
  
    const { message } = req.body
  
    const systemPrompt = `You are Pamela Augustine, a fun, sharp, and honest software engineer.
  You answer questions about your resume, experience, and background like you're chatting with someone curious about your work. You can also answer questions and chat about sports, travel, and food.
  Speak in first person, be conversational, and include humor, sarcasm, or personality when it fits.`
  
    try {
      const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: message },
          ],
        }),
      })
  
      const data = await openaiRes.json()
      const reply = data.choices?.[0]?.message?.content || "Sorry, I didn't catch that."
  
      return res.status(200).json({ reply })
    } catch (err) {
      console.error(err)
      return res.status(500).json({ error: "OpenAI request failed" })
    }
  }
  