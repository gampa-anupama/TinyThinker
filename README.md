# TinyThinker – AI-Powered PDF Q&A Chatbot

TinyThinker is an AI-powered chatbot that allows users to upload PDF files and ask questions based on the content within. It uses a modern React frontend, a Node.js backend for handling requests and integrating with a lightweight LLM, and a Flask-based PDF parser for extracting text from documents.

---

##  Project Structure

TinyThinker/
├── frontend/ # React app for user interface
├── server/ # Node.js server to handle user requests and communicate with LLM
├── pdf-parser/ # Flask app to parse PDFs and return text
│ └── temp/ # Temporary folder to store uploaded PDFs

yaml
Copy
Edit

---

##  Features

- Upload PDF documents and receive contextual answers.
- Real-time chat interface.
- Dark mode and light mode toggle.
- React-based modern UI.
- No cloud storage: everything processes locally.
- Extendable and modular design.

---

##  Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/TinyThinker.git
cd TinyThinker
   Installation & Setup
➤ Frontend Setup (React)
bash
Copy
Edit
cd frontend
npm install        # Install dependencies
npm start          # Starts on http://localhost:3000
➤ Backend Setup (Node.js Server)
bash
Copy
Edit
cd ../server
npm install        # Install dependencies
node index.js      # Starts on http://localhost:5000
➤ PDF Parser Setup (Flask)
bash
Copy
Edit
cd ../pdf-parser
pip install flask pymupdf
python app.py      # Starts on http://localhost:5001
➤ Running TinyLlama with Ollama
Make sure Ollama is installed and running locally:

bash
Copy
Edit
ollama run tinyllama
  Tech Stack
➤ Frontend (React)
ReactJS: SPA framework

Axios: API communication

React-PDF: Preview PDF content

Tailwind CSS: Styling

Framer Motion: UI Animations

React Router: Routing

➤ Backend (Node.js)
Express: Server framework

Multer: File uploads

Axios: Inter-service API calls

CORS: Enable cross-origin requests

➤ PDF Parser (Flask)
Flask: Web server for parsing

PyMuPDF (fitz): Extract text from PDF pages

🗂 Dependencies
➤ Frontend (frontend/package.json)
json
Copy
Edit
{
  "dependencies": {
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "react-icons": "^5.5.0",
    "axios": "^1.9.0",
    "react-pdf": "^9.2.1",
    "tailwindcss": "^4.1.7",
    "react-router-dom": "^7.6.1",
    "framer-motion": "^12.15.0"
  }
}
➤ Backend (server/package.json)
json
Copy
Edit
{
  "dependencies": {
    "express": "^5.1.0",
    "cors": "^2.8.5",
    "axios": "^1.9.0",
    "multer": "^1.4.5-lts.2",
    "express-fileupload": "^1.5.1"
  }
}
 Future Enhancements
Vector search using FAISS or ChromaDB

LangChain integration for better context handling

Support for multi-document chat

Session memory to hold context

Full Docker containerization and deployment on Render/Azure

 Security
Uploaded PDFs are not stored permanently.

Files are stored temporarily in pdf-parser/temp and deleted afterward (recommended).

No external cloud API is used to store personal data.

 Contribution
Feel free to fork, improve, or extend the functionality by submitting a pull request.

