// kiroClient.js
import { KiroAgent } from "@kiro-ai/sdk";


const agent = new KiroAgent({
agentPath: ".kiro"
});


export async function runKiro(prompt) {
const response = await agent.run({
input: prompt
});


return response.output;
}
