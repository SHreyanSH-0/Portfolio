// rag/cosine.js

/**
 * Computes the cosine similarity between two vectors.
 * @param {number[]} vecA
 * @param {number[]} vecB
 * @returns {number}
 */

function cosineSimilarity(vecA, vecB) {
    if (!vecA || !vecB) {
        throw new Error("Both vectors are required.");
    }

    if (vecA.length !== vecB.length) {
        throw new Error("Vectors must have the same dimensions.");
    }

    let dot = 0;
    let normA = 0;
    let normB = 0;

    for (let i = 0; i < vecA.length; i++) {
        dot += vecA[i] * vecB[i];
        normA += vecA[i] * vecA[i];
        normB += vecB[i] * vecB[i];
    }

    normA = Math.sqrt(normA);
    normB = Math.sqrt(normB);

    if (normA === 0 || normB === 0) {
        return 0;
    }

    return dot / (normA * normB);
}

/**
 * Finds the top K most similar chunks.
 *
 * @param {number[]} queryEmbedding
 * @param {Array} documents
 * @param {number} k
 * @returns {Array}
 */

function topKSimilar(queryEmbedding, documents, k = 5) {
    return documents
        .map((doc) => ({
            ...doc,
            similarity: cosineSimilarity(queryEmbedding, doc.embedding),
        }))
        .sort((a, b) => b.similarity - a.similarity)
        .slice(0, k);
}

module.exports = {
    cosineSimilarity,
    topKSimilar,
};