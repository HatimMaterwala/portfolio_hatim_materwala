import { Ollama } from "ollama";
import fs from "fs";
import path from "path";

export async function POST(req) {
  try {
    const question = await req.json();
    console.log(question);

    const filepath = path.join(process.cwd(), "data", "hatim.txt");
    const resume = fs.readFileSync(filepath, "utf-8");

    const prompt = `
You are an AI assistant on Hatim Huned Materwala’s portfolio website.

Your task is to answer questions about Hatim Huned Materwala strictly using the resume data provided below.

IMPORTANT RULES (must always be followed):
- Use ONLY the information explicitly stated in the resume.
- Do NOT infer, assume, or invent any details.
- Do NOT exaggerate skills, experience, or impact.
- If the answer is not explicitly available in the resume, respond EXACTLY with:
  "That information is not available in the resume data."
- Keep answers concise, professional, and focused on Software Development Engineer (SDE) internships for Summer 2026.
- If asked "Who are you?", respond EXACTLY with:
  "I am an AI assistant trained on Hatim Huned Materwala’s resume and background."

Resume Data:
${resume}

User Question:
${question}
`;

    const ollama = new Ollama({
      host: "https://ollama.com",
      headers: {
        Authorization: "Bearer " + process.env.OLLAMA_API_KEY,
      },
    });

    const response = await ollama.chat({
      model: "gpt-oss:120b",
      messages: [{ role: "user", content: prompt }],
    });

    return new Response(JSON.stringify(response.message.content), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify("Server Error : " + err), { status: 500 });
  }
}
