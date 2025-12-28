import express from "express";
import fs from "fs";
import path from "path";
import { runKiro } from "./kiroClient.js";


const app = express();
const PORT = 3000;


app.use(express.json());
app.use(express.static("public"));


const context = fs.readFileSync(".kiro/context/product.md", "utf-8");


app.post("/recommend", async (req, res) => {
const { area, time, preference } = req.body;


const prompt = `
You are a Mumbai street food expert.
Use ONLY the following context to answer:
${context}

User Info:
Area: ${area}
Time: ${time}
Preference: ${preference}


Give a clear, friendly recommendation.
`;


const response = await runKiro(prompt);
res.json({ recommendation: response });
});


app.listen(PORT, () => {
console.log(`Server running at http://localhost:${PORT}`);
});
