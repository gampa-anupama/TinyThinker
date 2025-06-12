// App.js
// import React, { useEffect, useState } from "react";
// import Upload from "./Components/Upload";
// import Chatbot from "./Components/Chatbot";
// import "./App.css";

// function App() {
//   const [darkMode, setDarkMode] = useState(false);
//   const [pdfFile, setPdfFile] = useState(null); // store uploaded PDF

//   useEffect(() => {
//     document.body.classList.toggle("dark-theme", darkMode);
//   }, [darkMode]);

//   return (
//     <div className={`container ${darkMode ? "dark-theme" : ""}`}>
//       <div className="left-pane">
//         <div className="darkmode-toggle">
//          <span className="toggle-text">Switch to {darkMode ? "Light" : "Dark"} Mode</span>
//           <label className="switch">
//             <input
//               type="checkbox"
//               checked={darkMode}
//               onChange={() => setDarkMode(!darkMode)}
//             />
//             <span className="slider round"></span>
//           </label>
//         </div>
//         <Upload onPdfUpload={setPdfFile} />
//       </div>
//       <div className="right-pane">
//         <Chatbot pdfFile={pdfFile} />
//       </div>
//     </div>
//   );
// }

// export default App;




// App.js
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Upload from "./Components/Upload";
import Chatbot from "./Components/Chatbot";
import Home from "./Components/Home"; // Import new Home component
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [pdfFile, setPdfFile] = useState(null); // store uploaded PDF

  useEffect(() => {
    document.body.classList.toggle("dark-theme", darkMode);
  }, [darkMode]);

  return (
    <Router>
      <Routes>
        {/* Landing page */}
        <Route path="/" element={<Home />} />

        {/* Chat page */}
        <Route
          path="/chat"
          element={
            <div className={`container ${darkMode ? "dark-theme" : ""}`}>
              <div className="left-pane">
                <div className="darkmode-toggle">
                  <span className="toggle-text">
                    Switch to {darkMode ? "Light" : "Dark"} Mode
                  </span>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={darkMode}
                      onChange={() => setDarkMode(!darkMode)}
                    />
                    <span className="slider round"></span>
                  </label>
                </div>
                <Upload onPdfUpload={setPdfFile} />
              </div>
              <div className="right-pane">
                <Chatbot pdfFile={pdfFile} />
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;


// // // import React from 'react';
// // // import './App.css';

// // // const featuresList = [
// // //   'Upload PDFs easily',
// // //   'Preview your documents',
// // //   'Get instant AI answers',
// // //   'Chat history saved',
// // //   'Light & Dark mode toggle',
// // //   'Privacy first',
// // // ];

// // // const LandingPage = () => {
// // //   return (
// // //     <div className="landing-page">

// // //       {/* Top Horizontal Scroll Bar */}
// // //       <section className="feature-ticker">
// // //         <div className="ticker-wrapper">
// // //           {featuresList.map((feature, i) => (
// // //             <div key={i} className="ticker-item">
// // //               {feature}
// // //             </div>
// // //           ))}
// // //           {/* Repeat features to create infinite scroll illusion */}
// // //           {featuresList.map((feature, i) => (
// // //             <div key={'dup-' + i} className="ticker-item">
// // //               {feature}
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </section>

// // //       {/* Introduction Section */}
// // //       <section className="intro-section">
// // //         <h1>Welcome to DocuBot — Your Smart PDF Chat Assistant</h1>
// // //         <p>
// // //           DocuBot is an AI-powered chatbot designed to interact with your PDF documents seamlessly.
// // //           Upload any PDF, ask questions naturally, and get precise answers — saving you valuable time
// // //           digging through pages.
// // //         </p>
// // //       </section>

// // //       {/* Why Choose Us Section with Animation */}
// // //       <section className="why-choose-section">
// // //         <h2>Why Choose DocuBot?</h2>
// // //         <div className="animated-box">
// // //           <p>
// // //             Powered by cutting-edge AI, DocuBot understands context and delivers
// // //             relevant answers instantly. With a clean interface, privacy-first design, and lightning-fast processing,
// // //             it’s the best way to get insights from your documents.
// // //           </p>
// // //         </div>
// // //       </section>

// // //       {/* Features Cards Section */}
// // //       <section className="features-cards-section">
// // //         <h2>Key Features</h2>
// // //         <div className="cards-container">
// // //           <div className="card">
// // //             <h3>📤 Easy PDF Upload</h3>
// // //             <p>Drag and drop or browse your PDF files with ease.</p>
// // //           </div>
// // //           <div className="card">
// // //             <h3>👀 PDF Preview</h3>
// // //             <p>Quickly preview documents before you start chatting.</p>
// // //           </div>
// // //           <div className="card">
// // //             <h3>💬 Smart Q&A</h3>
// // //             <p>Ask questions in natural language and get accurate answers.</p>
// // //           </div>
// // //           <div className="card">
// // //             <h3>🌗 Dark/Light Mode</h3>
// // //             <p>Toggle between themes for a comfortable experience.</p>
// // //           </div>
// // //           <div className="card">
// // //             <h3>🔒 Privacy First</h3>
// // //             <p>Your documents and chats stay safe and private.</p>
// // //           </div>
// // //           <div className="card">
// // //             <h3>🕒 Chat History</h3>
// // //             <p>Review your past conversations anytime.</p>
// // //           </div>
// // //         </div>
// // //       </section>

// // //     </div>
// // //   );
// // // };

// // // export default LandingPage;


// // // App.js
// // import React from 'react';
// // import './App.css';
// // import { FaRobot } from 'react-icons/fa';
// // import Slider from 'react-slick';
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";

// // function App() {
// //   const sliderSettings = {
// //     dots: true,
// //     infinite: true,
// //     speed: 800,
// //     slidesToShow: 1,
// //     slidesToScroll: 1,
// //     autoplay: true,
// //     autoplaySpeed: 3000,
// //   };

// //   return (
// //     <div className="app">
// //       <div className="feature-scroll">✨ Upload PDFs · Ask Questions · Get Instant Answers · Accurate · Secure ✨</div>

// //       <section className="hero-section fade-in">
// //         <FaRobot size={40} color="#0f62fe" />
// //         <h1 className="main-title">ChatPDF Pro</h1>
// //         <p className="hero-description">Empowering documents with intelligent conversation — Upload, Ask, and Understand with AI.</p>
// //         <button className="cta-button">Try Now</button>
// //       </section>

// //       <section className="why-choose fade-in-up">
// //         <h2>Why Choose ChatPDF Pro?</h2>
// //         <div className="animated-info">
// //           <p>✔️ Fast & Accurate Responses</p>
// //           <p>✔️ Intuitive User Interface</p>
// //           <p>✔️ AI-Powered Context Understanding</p>
// //           <p>✔️ No More Skimming Long Documents</p>
// //         </div>
// //       </section>

// //       <section className="features fade-in">
// //         <h2>Core Features</h2>
// //         <div className="slider-wrapper">
// //           <Slider {...sliderSettings}>
// //             <div><img src="https://source.unsplash.com/800x400/?technology,ai" alt="feature1" /></div>
// //             <div><img src="https://source.unsplash.com/800x400/?documents,chatbot" alt="feature2" /></div>
// //             <div><img src="https://source.unsplash.com/800x400/?pdf,data" alt="feature3" /></div>
// //           </Slider>
// //         </div>
// //         <div className="card-container">
// //           <div className="feature-card">Upload Multiple PDFs</div>
// //           <div className="feature-card">Real-Time Question Answering</div>
// //           <div className="feature-card">Conversation Memory</div>
// //           <div className="feature-card">Smart Search & Summarization</div>
// //           <div className="feature-card">Preview Before Upload</div>
// //         </div>
// //       </section>

// //       <section className="how-it-works slide-up">
// //         <h2>How It Works</h2>
// //         <div className="steps">
// //           <p>1️⃣ Upload your PDF file.</p>
// //           <p>2️⃣ Ask any question related to the content.</p>
// //           <p>3️⃣ Get instant, intelligent responses.</p>
// //         </div>
// //       </section>

// //       <section className="testimonials fade-in">
// //         <h2>What Users Say</h2>
// //         <blockquote>“This chatbot saved hours of work. I could easily extract insights from 200-page reports.” — Analyst</blockquote>
// //         <blockquote>“Very intuitive and accurate. Love the preview feature!” — Student</blockquote>
// //       </section>

// //       <section className="supported-types fade-in">
// //         <h2>Supported Document Types</h2>
// //         <ul>
// //           <li>📄 PDFs</li>
// //           <li>📚 Books</li>
// //           <li>📊 Research Papers</li>
// //           <li>📈 Business Reports</li>
// //         </ul>
// //       </section>

// //       <section className="security zoom-in">
// //         <h2>Your Privacy Matters</h2>
// //         <p>All documents are processed securely and temporarily. We do not store or share any uploaded files.</p>
// //       </section>

// //       <section className="faq fade-in">
// //         <h2>Frequently Asked Questions</h2>
// //         <p><strong>Q:</strong> Is it free to use?<br /><strong>A:</strong> Yes, with usage limits. Premium plans available.</p>
// //         <p><strong>Q:</strong> Can I upload multiple PDFs?<br /><strong>A:</strong> Absolutely.</p>
// //       </section>

// //       <section className="final-cta fade-in">
// //         <h2>Get Started Today</h2>
// //         <button className="cta-button">Upload Your PDF</button>
// //       </section>

// //       <footer className="footer">© 2025 ChatPDF Pro. All rights reserved.</footer>
// //     </div>
// //   );
// // }

// // export default App;

// import React from 'react';
// import './App.css';
// import { FaRobot } from 'react-icons/fa';

// const features = [
//   { title: "Upload PDFs", desc: "Upload single or multiple PDFs instantly." },
//   { title: "Instant Q&A", desc: "Ask anything and get real-time answers." },
//   { title: "Smart Summarization", desc: "Concise and intelligent PDF summaries." },
//   { title: "Secure Uploads", desc: "Your documents are processed securely." },
//   { title: "Conversation Memory", desc: "Keeps track of your document context." },
//   { title: "Preview PDFs", desc: "View your files before asking questions." },
//   { title: "Multiple PDF Chat", desc: "Chat with more than one PDF at once." },
// ];

// function App() {
//   return (
//     <div className="app">
//       {/* Scrolling banner */}
//       <div className="feature-scroll">✨ Upload PDFs · Ask Questions · Get Answers · Secure · Smart · Accurate · Fast ✨</div>

//       {/* Hero section */}
//       <section className="hero-section">
//         <FaRobot size={50} color="#0f62fe" />
//         <h1 className="main-title">ChatPDF Pro</h1>
//         <p className="hero-description">
//           Empower your documents with intelligent conversation — Upload, Ask, and Understand with AI.
//         </p>
//         <button className="cta-button">Try Now</button>
//       </section>

//       {/* Netflix-style Auto Slider */}
//       <section className="netflix-slider-section">
//         <h2 className="slider-title">Features You’ll Love</h2>
//         <div className="slider-container">
//           <div className="slider-track">
//             {[...features, ...features].map((feature, index) => (
//               <div className="slider-card" key={index}>
//                 <h3>{feature.title}</h3>
//                 <p>{feature.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="footer">© 2025 ChatPDF Pro. All rights reserved.</footer>
//     </div>
//   );
// }

// export default App;
