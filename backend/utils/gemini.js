require("dotenv").config();

const OpenAI = require("openai");

const client = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
});

const MODEL = "llama-3.3-70b-versatile";

async function generateContent(prompt, retries = 5) {
    let delay = 1000;

    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            const response = await client.chat.completions.create({
                model: MODEL,
                temperature: 0.2,
                messages: [
                    {
                        role: "user",
                        content: prompt,
                    },
                ],
            });

            return response.choices[0].message.content;
        } catch (err) {
            if (attempt === retries) {
                throw err;
            }

            console.log(
                `Groq error. Retry ${attempt}/${retries} in ${delay}ms`
            );

            await new Promise((resolve) => setTimeout(resolve, delay));

            delay *= 2;
        }
    }

    throw new Error("Groq service unavailable.");
}

module.exports = {
    generateContent,
};