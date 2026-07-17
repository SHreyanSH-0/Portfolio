require("dotenv").config();

const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});
const ai2 = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY2,
});
const ai3 = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY3,
});

const MODEL = "gemini-3.5-flash";

async function generateContent(prompt, retries = 6) {
    let delay = 1000;

    for (let attempt = 1; attempt <= retries/2; attempt++) {
        try {
            const response = await ai.models.generateContent({
                model: MODEL,
                contents: prompt,
            });

            return response.text;
        } catch (err) {
            const status = err.status || 500;

            // if (status !== 503 || attempt === retries) {
            //     throw err;
            // }

            console.log(
                `Gemini busy. Retry ${attempt}/${retries} in ${delay}ms`
            );

            // await new Promise((resolve) =>
            //     setTimeout(resolve, delay)
            // );

            delay *= 2;
        }
    }
    delay = 1000;
    for (let attempt = 1; attempt <= retries/2; attempt++) {
        try {
            const response = await ai2.models.generateContent({
                model: MODEL,
                contents: prompt,
            });

            return response.text;
        } catch (err) {
            const status = err.status || 500;

            // if (status !== 503 || attempt === retries) {
            //     throw err;
            // }

            console.log(
                `Gemini busy. Retry ${attempt}/${retries} in ${delay}ms`
            );

            // await new Promise((resolve) =>
            //     setTimeout(resolve, delay)
            // );

            delay *= 2;
        }
    }
    delay = 1000;
    for (let attempt = 1; attempt <= retries/2; attempt++) {
        try {
            const response = await ai3.models.generateContent({
                model: MODEL,
                contents: prompt,
            });

            return response.text;
        } catch (err) {
            const status = err.status || 500;

            // if (status !== 503 || attempt === retries) {
            //     throw err;
            // }

            console.log(
                `Gemini busy. Retry ${attempt}/${retries} in ${delay}ms`
            );

            // await new Promise((resolve) =>
            //     setTimeout(resolve, delay)
            // );

            delay *= 2;
        }
    }

    throw new Error(
        "Gemini service is temporarily unavailable. Please try again later."
    );
}

module.exports = {
    generateContent,
};