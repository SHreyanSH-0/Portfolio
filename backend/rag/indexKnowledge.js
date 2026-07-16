require("dotenv").config();

const fs = require("fs");
const path = require("path");
const pdfParse = require("pdf-parse");

const { splitText } = require("./splitter");
const { generateEmbedding } = require("./embed");

const KNOWLEDGE_PATH = path.join(__dirname, "../knowledge");
const OUTPUT_PATH = path.join(__dirname, "../vectors.json");

async function extractText(filePath) {
    const extension = path.extname(filePath).toLowerCase();

    if (extension === ".pdf") {
        const buffer = fs.readFileSync(filePath);
        const pdf = await pdfParse(buffer);
        return pdf.text;
    }

    if (extension === ".json") {
        const json = JSON.parse(
            fs.readFileSync(filePath, "utf8")
        );

        return JSON.stringify(json, null, 2);
    }

    if (extension === ".txt" || extension === ".md") {
        return fs.readFileSync(filePath, "utf8");
    }

    return "";
}

async function indexKnowledge() {
    const files = fs.readdirSync(KNOWLEDGE_PATH);

    const vectors = [];

    let id = 1;

    for (const file of files) {
        const filePath = path.join(KNOWLEDGE_PATH, file);

        console.log(`Reading ${file}`);

        const text = await extractText(filePath);

        if (!text) continue;

        const chunks = splitText(text);

        for (let i = 0; i < chunks.length; i++) {
            console.log(
                `Embedding ${file} (${i + 1}/${chunks.length})`
            );

            const embedding = await generateEmbedding(chunks[i]);

            vectors.push({
                id: id++,
                source: file,
                chunk: i + 1,
                text: chunks[i],
                embedding
            });
        }
    }

    fs.writeFileSync(
        OUTPUT_PATH,
        JSON.stringify(vectors, null, 2)
    );

    console.log("--------------------------------");
    console.log("Knowledge Indexed Successfully");
    console.log(`Total Chunks : ${vectors.length}`);
    console.log("--------------------------------");
}

indexKnowledge();