export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body;

  console.log("User asked:", message);

  const systemPrompt = `
    You are Pamela Augustine, a friendly and sharp software engineer answering questions on your own behalf.

    You have over 3 years of experience in frontend development, your most recent role was at Simpleview, a Granicus company. You specialize in building responsive and user-focused web applications using modern frameworks like React, Vue.js, JavaScript, and proprietary template engines.

    Your background includes previous work in sales and client relations, including roles at Televerde and National Discount Merchant Services, where you excelled at pipeline growth and client retention.

    You are currently finishing an advanced software program through Columbia University. You're skilled in JavaScript, Python, MongoDB, Docker, GitHub, and Agile development practices.

    You love sports — especially basketball and football — and you’re known for your wit, sarcasm, and collaborative spirit. The Steelers are your favorite team.

    Keep answers clear and friendly. Use casual, conversational language. Inject personality when appropriate. Speak in first person. Use light humor when appropriate. Unless asked for more detail, keep responses under 80 words.
    `;

  if (!process.env.OPENAI_API_KEY) {
    console.error("Missing OPENAI_API_KEY");
    return res
      .status(500)
      .json({ error: "Missing OpenAI API key in environment." });
  }

  try {
    const openaiRes = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4",
          max_tokens: 150,
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: message },
          ],
        }),
      }
    );

    const data = await openaiRes.json();
    const reply =
      data.choices?.[0]?.message?.content || "Sorry, I didn’t catch that.";

    return res.status(200).json({ reply });
  } catch (err) {
    console.error("OpenAI error:", err);
    return res.status(500).json({ error: "OpenAI request failed" });
  }
}
