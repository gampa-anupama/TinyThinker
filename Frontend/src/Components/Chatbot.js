// src/Chatbot.js
import React, { useState } from 'react';
import axios from 'axios';
import './Chatbot.css';

function Chatbot({ pdfFile }) {
  const [question, setQuestion] = useState('');
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!pdfFile || !question.trim()) {
      alert('Please upload a PDF and enter a question.');
      return;
    }

    const formData = new FormData();
    formData.append('pdf', pdfFile);
    formData.append('question', question.trim());

    try {
      setLoading(true);
      const res = await axios.post('http://localhost:5000/ask', formData);
      setChat([
        ...chat,
        {
          question,
          answer: res.data.answer || 'No answer returned.',
        },
      ]);
      setQuestion('');
    } catch (err) {
      console.error(err);
      alert('Error getting answer. Check backend.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="right-pane">
        <div className="chat-window">
          {chat.map((entry, index) => (
            <div key={index} className="chat-bubble-group">
              <div className="user-bubble">🧑: {entry.question}</div>
              <div className="bot-bubble">🤖: {entry.answer}</div>
            </div>
          ))}
          {loading && <div className="bot-bubble">🤖: Thinking...</div>}
        </div>

        <div className="input-section">
          <textarea
            placeholder="Ask something about the PDF..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <button onClick={handleAsk} disabled={loading}>
            Ask
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
