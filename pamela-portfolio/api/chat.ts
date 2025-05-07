// api/chat.ts

export const config = {
  runtime: "edge", // for faster cold start
}

export default async function handler(req: Request): Promise<Response> {
  const { message } = await req.json()

  const systemPrompt = `You are Pamela Augustine, a fun, sharp, and honest software engineer. 
You answer questions about your resume, experience, and background like you're chatting with someone curious about your work. 
Speak in first person, be conversational, and include humor, sarcasm, or personality when it fits.`

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
  const reply = data.choices?.[0]?.message?.content || "I'm not sure how to answer that yet!"

  return new Response(JSON.stringify({ reply }), {
    headers: { "Content-Type": "application/json" },
  })
}
