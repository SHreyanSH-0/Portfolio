const { GoogleGenAI } = require("@google/genai");
const { retrieve } = require("../rag/retrieve");
const systemPrompt = require("../rag/systemPrompt");
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});
const { generateContent } = require("../utils/gemini");
async function chat(req, res) {
    try {
        const { question } = req.body;

        if (!question) {
            return res.status(400).json({
                success: false,
                message: "Question is required",
            });
        }

        const chunks = await retrieve(question, 10);
        console.log(chunks);
        // const relevant = chunks.filter(
        //     c => c.similarity >= 0.65
        // );

        // if (relevant.length === 0) {
        //     return res.json({
        //         success: true,
        //         answer:
        //             "I couldn't find that information in Shreyansh's portfolio."
        //     });
        // }

        const context = chunks
            .map(
                (chunk) =>
                    `[Source: ${chunk.source}]\n${chunk.text}`
            )
            .join("\n\n");

            const prompt = `
            ${systemPrompt}

            Context:
            ${context}

            Question:
            ${question}
            `;

        // const response = await ai.models.generateContent({
        //     model: "gemini-3.5-flash",
        //     contents: prompt,
        // });
        const answer = await generateContent(prompt);

        res.json({
            success: true,
            answer: answer,
            sources: chunks.map((chunk) => ({
                source: chunk.source,
                similarity: Number(chunk.similarity.toFixed(3))
            }))
        });
    } catch (err) {

         if (err.status === 503) {
            return res.status(503).json({
                success: false,
                message:
                    "Portfolio AI is temporarily unavailable because the Gemini service is experiencing high demand. Please try again in a few moments."
            });
        }

        console.error(err);

        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
}

module.exports = {
    chat,
};