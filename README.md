TinyThinker – AI-Powered PDF Q&A Chatbot
TinyThinker is an AI-powered chatbot that allows users to upload PDF documents and ask questions based on their content.
It integrates:

A modern React frontend for the user interface

A Node.js backend for request handling and LLM communication

A lightweight Flask microservice to parse PDF files and extract text

Project Structure
php
Copy
Edit
TinyThinker/
├── frontend/             # React app for the user interface
│   ├── public/
│   └── src/
│       ├── components/   # Reusable UI components
│       └── App.js        # Main application file
│
├── server/               # Node.js server for handling API requests
│   └── index.js          # Entry point for server logic
│
├── pdf-parser/           # Flask service to extract text from PDFs
│   ├── app.py            # Main Flask application
│   └── temp/             # Temporary storage for uploaded PDFs
│
└── README.md             # Project overview and setup instructions
Features
Upload PDF files and ask questions about their contents

Real-time chat-based interface

Dark mode and Light mode toggle

Clean, responsive React UI

No cloud storage — everything runs locally

Modular and easily extendable design

Getting Started
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/TinyThinker.git
cd TinyThinker
2. Frontend Setup (React)
bash
Copy
Edit
cd frontend
npm install
npm start
Starts the frontend at http://localhost:3000

3. Backend Setup (Node.js)
bash
Copy
Edit
cd ../server
npm install
node index.js
Starts the backend server at http://localhost:5000

4. PDF Parser Setup (Flask)
bash
Copy
Edit
cd ../pdf-parser
pip install flask pymupdf
python app.py
Runs the Flask server at http://localhost:5001

Make sure Python 3 and pip are installed on your system.

Dependencies
Frontend
react

react-router-dom

axios

react-pdf

framer-motion

tailwindcss

react-icons

react-slick

slick-carousel

swiper

Backend
express

axios

cors

multer

express-fileupload

PDF Parser (Python)
flask

PyMuPDF (fitz)

How It Works
User uploads a PDF via the frontend

The PDF is sent to the Flask parser, which extracts raw text

Node.js backend formats the prompt using the text and sends it to the LLM (e.g., TinyLlama)

The response from the LLM is sent back to the frontend and displayed in the chat interface

License
This project is licensed under the MIT License.
You are free to use and modify it as needed.

Author
Developed by Anupama G
