# TinyThinker – AI-Powered PDF Q&A Chatbot

**TinyThinker** is an AI-powered chatbot that enables users to upload PDF files and ask questions related to the document content. It uses a modern React frontend, a Node.js backend to handle user requests and interface with the LLM, and a Flask-based microservice to extract text from PDFs.

---

## 📁 Project Structure

TinyThinker/
├── frontend/ # React app for the user interface
├── server/ # Node.js server to handle API requests and communicate with LLM
├── pdf-parser/ # Flask app to extract text from uploaded PDFs
│ └── temp/ # Temporary folder to store uploaded PDF files

yaml
Copy
Edit

---

## 🚀 Features

- Upload PDF documents and receive context-based answers.
- Real-time chat experience.
- Light/Dark mode toggle.
- Fully responsive, React-based modern UI.
- No cloud storage — all processes run locally.
- Modular and extendable architecture.

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/TinyThinker.git
cd TinyThinker
2. Frontend Setup (React)
bash
Copy
Edit
cd frontend
npm install         # Install dependencies
npm start           # Runs on http://localhost:3000
3. Backend Setup (Node.js Server)
bash
Copy
Edit
cd ../server
npm install         # Install dependencies
node index.js       # Starts server at http://localhost:5000
4. PDF Parser Setup (Flask)
bash
Copy
Edit
cd ../pdf-parser
pip install flask pymupdf
python app.py       # Runs on http://localhost:5001
Make sure you have Python and pip installed. This microservice extracts text from PDF files.

📦 Dependencies
Frontend
React 19

React Router DOM

Axios

React Icons

React PDF

TailwindCSS

Framer Motion

Swiper.js

React Slick

Backend
Express.js

Axios

Multer

CORS

Form-Data

express-fileupload

PDF Parser
Flask

PyMuPDF (fitz)

📝 How it Works
User uploads a PDF and types a question.

The PDF is sent to the Flask API (/process) which returns extracted text.

Node.js server composes a prompt with the context and sends it to TinyLlama (or another LLM).

The response is returned and shown in the frontend UI.

