

const { GoogleGenAI } = require("@google/genai");
require("dotenv").config();
console.log(process.env.GEMINI_API_KEY);
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

/**
 * Generate embedding for a piece of text.
 * @param {string} text
 * @returns {Promise<number[]>}
 */
async function generateEmbedding(text) {
    try {
        const response = await ai.models.embedContent({
            model: "gemini-embedding-001",
            contents: text,
        });

        return response.embeddings[0].values;
    } catch (error) {
        console.error("Embedding Error:", error.message);
        throw error;
    }
}

module.exports = {
    generateEmbedding,
};