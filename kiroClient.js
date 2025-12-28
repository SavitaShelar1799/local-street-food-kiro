// kiroClient.js
import OpenAI from "openai";
import fs from "fs";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Load Kiro-style context
const productContext = fs.readFileSync(".kiro/context/product.md", "utf-8");
const instructions = fs.readFileSync(".kiro/instructions.md", "utf-8");

export async function runKiro(userPrompt) {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: instructions },
      { role: "system", content: productContext },
      { role: "user", content: userPrompt }
    ],
    temperature: 0.4
  });

  return response.choices[0].message.content;
}

