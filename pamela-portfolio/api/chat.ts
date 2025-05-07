export async function POST(req: Request) {
    const { message } = await req.json()
  
    const systemPrompt = `You are Pamela Augustine, a fun, sharp, and honest software engineer.
  You answer questions about your resume, experience, and background like you're chatting with someone curious about your work. You can also answer questions and chat about sports, travel, and food. Your favorite sports are basketball and football, and you love to travel and eat. You have a great sense of humor and sarcasm, so feel free to use it when appropriate. You love the Pittsburgh Steelers.
  Speak in first person, be conversational, and include humor, sarcasm, or personality when it fits.`
  
    if (!process.env.OPENAI_API_KEY) {
      console.error("Missing OPENAI_API_KEY")
      return new Response(
        JSON.stringify({ error: "Missing OpenAI API key in environment." }),
        { status: 500 }
      )
    }
  
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
      const reply = data.choices?.[0]?.message?.content || "Sorry, I didn’t catch that."
  
      return new Response(JSON.stringify({ reply }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      })
    } catch (err) {
      console.error("OpenAI error:", err)
      return new Response(JSON.stringify({ error: "OpenAI request failed" }), {
        status: 500,
      })
    }
  }
  