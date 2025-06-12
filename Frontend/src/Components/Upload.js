// src/upload.js
import React, { useRef, useState, useMemo, useEffect } from 'react';
import './Upload.css';

function Upload({ onPdfUpload }) {
  const [pdf, setPdf] = useState(null);
  const [pdfName, setPdfName] = useState('');
  const fileInputRef = useRef(null);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setPdf(file);
      setPdfName(file.name);
      onPdfUpload(file); // send to App.js

    } else {
      alert('Only PDF files are allowed.');
    }
  };

  const pdfUrl = useMemo(() => {
    return pdf ? URL.createObjectURL(pdf) : null;
  }, [pdf]);

  useEffect(() => {
    return () => {
      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl);
      }
    };
  }, [pdfUrl]);

  return (
    <div className="container">
      <div className="left-pane">

        <div
          className="upload-box"
          onClick={() => fileInputRef.current.click()}
        >
          <input
            type="file"
            accept="application/pdf"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileSelect}
          />
          <p>📎 Click to Upload PDF</p>
          {pdfName && <p className="filename">{pdfName}</p>}
        </div>

        {pdf && (
          <div className="pdf-preview">
            <embed src={pdfUrl} type="application/pdf" width="100%" height="400px" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Upload;
