// const express = require('express');
// const multer = require('multer');
// const cors = require('cors');
// const axios = require('axios');
// const FormData = require('form-data');
// const fs = require('fs');
// const path = require('path');

// const app = express();
// app.use(cors());

// const upload = multer({ dest: 'uploads/' });

// app.post('/ask', upload.single('pdf'), async (req, res) => {
//   console.log("Received request");

//   if (!req.file || !req.body.question) {
//     return res.status(400).json({ error: 'Missing file or question' });
//   }

//   const formData = new FormData();
//   formData.append('pdf', fs.createReadStream(req.file.path));
//   formData.append('question', req.body.question);

//   try {
//     const response = await axios.post('http://localhost:5001/process', formData, {
//       headers: formData.getHeaders(),
//     });
//     res.json(response.data);
//   } catch (error) {
//     console.error('Error from Flask:', error.message);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });


// app.listen(5000, () => console.log('Node.js backend running on http://localhost:5000'));

const express = require('express');
const multer = require('multer');
const cors = require('cors');
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

const app = express();
app.use(cors());

const upload = multer({ dest: 'uploads/' });

app.post('/ask', upload.single('pdf'), async (req, res) => {
  const question = req.body.question;
  const formData = new FormData();
  formData.append('pdf', fs.createReadStream(req.file.path));
  formData.append('question', question);

  try {
    const flaskRes = await axios.post('http://localhost:5001/process', formData, {
      headers: formData.getHeaders()
    });

    const { context, question } = flaskRes.data;

    const prompt = `You are a helpful assistant. Based on the document below, answer the question.

Document:
${context}

Question: ${question}
Answer:`;

    const ollamaResponse = await axios.post('http://localhost:11434/api/generate', {
      model: 'tinyllama',
      prompt: prompt,
      stream: false
    });

    res.json({ answer: ollamaResponse.data.response.trim() });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Failed to process the request.' });
  }
});

app.listen(5000, () => console.log('Node server running on http://localhost:5000'));
