require("dotenv").config();

const express = require("express");
const cors = require("cors");

const chatRoutes = require("./routes/chat");

const app = express();

app.use(cors(
    {
        origin: process.env.FRONTEND_URL || "http://localhost:5173",
    }
));

app.use(express.json());

app.use("/api/chat", chatRoutes);

app.get("/", (req, res) => {
    res.send("Portfolio AI Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});