const fs = require("fs");
const path = require("path");

const { generateEmbedding } = require("./embed");
const { cosineSimilarity } = require("./cosine");

const VECTOR_PATH = path.join(__dirname, "../vectors.json");

function loadVectors() {
    if (!fs.existsSync(VECTOR_PATH)) {
        throw new Error("vectors.json not found. Run indexKnowledge.js first.");
    }

    return JSON.parse(
        fs.readFileSync(VECTOR_PATH, "utf8")
    );
}

async function retrieve(query, k = 5, threshold = 0.55) {
    const vectors = loadVectors();

    const queryEmbedding = await generateEmbedding(query);

    const scored = vectors.map((doc) => ({
        ...doc,
        similarity: cosineSimilarity(
            queryEmbedding,
            doc.embedding
        )
    }));

    const filtered = scored
        .filter((doc) => doc.similarity >= threshold)
        .sort((a, b) => b.similarity - a.similarity)
        .slice(0, k);

    return filtered;
}

module.exports = {
    retrieve
};