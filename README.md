### TinyThinker – AI-Powered PDF Q&A Chatbot
TinyThinker is an AI-powered chatbot application designed to answer questions based on the content of uploaded PDF documents. The project features a modern, interactive frontend built with React and a Node.js-Flask hybrid backend that utilizes a lightweight LLM (TinyLlama via Ollama) for contextual response generation.

# Project Structure
pgsql
Copy
Edit
TinyThinker/
├── frontend/           # React app (user interface)
├── server/             # Node.js server handling user requests and LLM calls
├── pdf-parser/         # Flask API for PDF processing and text extraction
│   └── temp/           # Temporary folder to store uploaded PDF files

# Features
Upload a .pdf file and get context-aware answers from the document.

Seamless chat-like UI similar to ChatGPT.

Light and dark mode toggle.

Modern UI with responsive design.

No cloud storage – secure on-device processing.

Easy to extend with document memory and better chunking methods.

# Getting Started
1. Clone the Repository
bash
Copy
Edit
# git clone https://github.com/gampa-anupama/TinyThinker.git
cd TinyThinker
2. Install Frontend Dependencies
bash
Copy
Edit
cd frontend
npm install
npm start
This will start the React development server on http://localhost:3000.

3. Start the Node.js Backend
bash
Copy
Edit
cd ../server
npm install
node index.js
This will run the Node server on http://localhost:5000.

4. Run the Flask PDF Parser
bash
Copy
Edit
cd ../pdf-parser
pip install flask pymupdf
python app.py
This will start the PDF parsing server at http://localhost:5001.

5. Make Sure Ollama is Running Locally
Ensure you have Ollama installed and running:

bash
Copy
Edit
ollama run tinyllama

# Frontend Tech Stack
ReactJS: SPA with component-based structure

Axios: For API integration

React PDF: Display PDF previews

Framer Motion & Tailwind CSS: Smooth UI animations and styling

React Router: Page navigation

Dark Mode Toggle: Light/Dark theme switch

# Backend Tech Stack
Node.js Server
Express.js: Web framework

Multer: For handling file uploads

Axios: For communicating with Flask and Ollama APIs

CORS: Cross-origin support

Python Flask API
Flask: Lightweight Python web framework

PyMuPDF: To extract text from PDF files

# Notes
All uploaded PDFs are stored temporarily in the pdf-parser/temp/ folder.

Make sure all three services (frontend, server, and pdf-parser) are running simultaneously.

Modify port numbers in .env files or directly in code if ports conflict.

# Future Enhancements
Chat memory and long context handling

Multi-document support

Deployment on platforms like Azure or Render

Embedding and vector search using FAISS or ChromaDB

Integration with LangChain for advanced prompt handling

# Contributing
Feel free to fork the repository and submit pull requests to improve or extend the functionality.









Tools


