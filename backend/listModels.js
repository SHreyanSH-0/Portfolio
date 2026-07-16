require("dotenv").config();
const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function test() {
  const models = [
    "gemini-2.0-flash",
    "gemini-flash-latest",
    "gemini-pro-latest",
    "gemini-3.5-flash",
  ];

  for (const model of models) {
    try {
      console.log(`Testing ${model}...`);

      const res = await ai.models.generateContent({
        model,
        contents: "Reply with only OK",
      });

      console.log("✅ Success:", model);
      console.log(res.text);
      return;
    } catch (e) {
      console.log(`❌ ${model}`);
      console.log(e.status);
      console.log(e.message);
      console.log("----------------");
    }
  }
}

test();