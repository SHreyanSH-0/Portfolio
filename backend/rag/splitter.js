/**
 * Clean the extracted text.
 * @param {string} text
 * @returns {string}
 */
function cleanText(text) {
    return text
        .replace(/\r/g, "")
        .replace(/\t/g, " ")
        .replace(/\n{2,}/g, "\n")
        .replace(/[ ]{2,}/g, " ")
        .trim();
}

/**
 * Split text into overlapping chunks.
 *
 * @param {string} text
 * @param {number} chunkSize
 * @param {number} overlap
 * @returns {Array<string>}
 */
function splitText(
    text,
    chunkSize = 800,
    overlap = 150
) {
    text = cleanText(text);

    const chunks = [];

    let start = 0;

    while (start < text.length) {
        let end = start + chunkSize;

        if (end >= text.length) {
            chunks.push(text.slice(start).trim());
            break;
        }

        // Try ending at a paragraph
        let splitIndex = text.lastIndexOf("\n", end);

        // Otherwise sentence
        if (splitIndex <= start) {
            splitIndex = text.lastIndexOf(". ", end);
        }

        // Otherwise space
        if (splitIndex <= start) {
            splitIndex = text.lastIndexOf(" ", end);
        }

        // Fallback
        if (splitIndex <= start) {
            splitIndex = end;
        }

        chunks.push(
            text.slice(start, splitIndex).trim()
        );

        start = splitIndex - overlap;

        if (start < 0) {
            start = 0;
        }
    }

    return chunks.filter(
        (chunk) => chunk.length > 20
    );
}

module.exports = {
    splitText,
    cleanText,
};