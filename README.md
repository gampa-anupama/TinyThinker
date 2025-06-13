# TinyThinker – AI-Powered PDF Q&A Chatbot

**TinyThinker** is an AI-powered chatbot that allows users to upload PDF documents and ask questions based on their content.

It integrates:
- A modern React frontend for the user interface  
- A Node.js backend for request handling and LLM communication  
- A lightweight Flask microservice to parse PDF files and extract text

---

##  Project Structure

```

TinyThinker/
├── frontend/ # React app for the user interface
│ ├── public/
│ └── src/
│ ├── components/ # Reusable UI components
│ └── App.js # Main application file
│
├── server/ # Node.js server for handling API requests
│ └── index.js # Entry point for server logic
│
├── pdf-parser/ # Flask service to extract text from PDFs
│ ├── app.py # Main Flask application
│ └── temp/ # Temporary storage for uploaded PDFs
│
└── README.md # Project overview and setup instructions

```
---

##  Features

- Upload PDF files and ask questions about their contents  
- Real-time chat-based interface  
- Dark mode and Light mode toggle  
- Clean, responsive React UI  
- No cloud storage — everything runs locally  
- Modular and easily extendable design

---

##  Getting Started

### 1. Clone the Repository


git clone https://github.com/your-username/TinyThinker.git
cd TinyThinker

## 2. Frontend Setup (React)
- bash
- Copy
- Edit
- cd frontend
- npm install
- npm start

## 3. Backend Setup (Node.js)

- cd ../server
- npm install
- node index.js

## 4. PDF Parser Setup (Flask)
- cd ../pdf-parser
- pip install flask pymupdf
  
python app.py
Make sure Python 3 and pip are installed on your system.

# Dependencies

# 1. Frontend
- react
- react-router-dom
- axios
- react-pdf
- framer-motion
- react-icons
- react-slick
- slick-carousel
- swiper

# 2.Backend
- express
- axios
- cors
- multer
- express-fileupload
- PDF Parser (Python)

# 3.flask
- pymupdf (fitz)


# How It Works
- User uploads a PDF via the frontend
- The PDF is sent to the Flask parser, which extracts raw text
- The Node.js backend formats the prompt using the text and sends it to an LLM (e.g., TinyLlama)
- The response is returned and displayed in the chat interface

# Author
Developed by Anupama G

yaml
Copy
Edit

---






