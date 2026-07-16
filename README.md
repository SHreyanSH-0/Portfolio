# Portfolio Website with AI Assistant

A modern full-stack developer portfolio showcasing my projects, skills, competitive programming achievements, and resume. The portfolio features an AI-powered assistant built using **Retrieval-Augmented Generation (RAG)** that answers questions about me by retrieving information from a structured knowledge base and generating accurate responses using the **Gemini API**.

## Features

- 👨‍💻 Modern and responsive portfolio
- 🤖 AI Assistant powered by RAG
- 📄 Resume download
- 📚 AI answers questions about:
  - Projects
  - Skills
  - Experience
  - Education
  - Achievements
  - Competitive Programming
- 🔍 Semantic search using vector embeddings
- 🧠 Knowledge base built from structured JSON files and resume
- 💬 Simple chatbot interface
- 📱 Fully responsive design

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Tailwind CSS
- React Router
- Axios
- Lucide React

### Backend

- Node.js
- Express.js
- Gemini API
- pdf-parse

### AI / RAG

- Gemini Embeddings
- Cosine Similarity Search
- Custom Vector Database
- Retrieval-Augmented Generation (RAG)

---

## Project Structure

```
Portfolio
│
├── frontend
│   ├── src
│   ├── components
│   ├── pages
│   └── services
│
├── backend
│   ├── controllers
│   ├── routes
│   ├── rag
│   ├── knowledge
│   ├── vectors.json
│   └── server.js
│
└── README.md
```

---

##  AI Architecture

```
                    User Question
                          │
                          ▼
                   React Frontend
                          │
                          ▼
                   Express Backend
                          │
                          ▼
              Generate Query Embedding
                          │
                          ▼
                  Vector Similarity Search
                          │
                          ▼
             Retrieve Relevant Knowledge
                          │
                          ▼
                  Gemini 3.5 Flash API
                          │
                          ▼
                   AI Generated Answer
```

---

## Knowledge Base

The AI retrieves information from:

```
knowledge/
│
├── about.json
├── achievements.json
├── cp.json
├── education.json
├── experience.json
├── faq.json
├── personality.json
├── projects.json
├── resume.pdf
├── resumeSummary.json
├── skills.json
└── socials.json
```

---

##  Getting Started

### Clone Repository

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

---

### Frontend

```bash
cd frontend

npm install

npm run dev
```

---

### Backend

```bash
cd backend

npm install

node rag/indexKnowledge.js

npm start
```

---

## ⚙️ Environment Variables

### Frontend

```
VITE_BACKEND_URL=http://localhost:5000
```

### Backend

```
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
PORT=5000
```

---

##  How the AI Works

1. The user asks a question.
2. The question is converted into an embedding.
3. Cosine similarity search retrieves the most relevant knowledge chunks.
4. Retrieved context is combined with a system prompt.
5. Gemini generates a context-aware response.
6. The answer is returned to the frontend.

---

##  Example Questions

- Tell me about yourself.
- Explain your URL Shortener project.
- What backend technologies do you know?
- Tell me about your competitive programming journey.
- Which project are you most proud of?
- What machine learning projects have you built?
- What databases have you worked with?
- Explain your RAG implementation.

---

##  Contact

**Shreyansh Tiwari**

- GitHub: https://github.com/SHreyanSH-0
---

## ⭐ If you like this project

Give it a ⭐ on GitHub!
