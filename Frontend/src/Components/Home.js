import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "./Home.css";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const features = [
  "Ask Questions on PDFs",
  "Lightning Fast Responses",
  "No Data Leaves Browser",
  "Supports Research Papers",
  "Built with AI",
  "Beautiful Chat Interface",
  "No Sign Up Required",
  "Secure & Private",
];

const faqs = [
  "Is my PDF data stored online?",
  "What types of PDFs are supported?",
  "How is the PDF analyzed?",
  "Can I use this without signing up?",
  "Is it mobile compatible?",
];

const testimonials = [
  "TinyThinker saves me so much time by instantly answering my PDF questions!",
  "This tool is a game-changer — intuitive, fast, and very accurate.",
  "I love how TinyThinker makes understanding complex documents easy and efficient.",
  "The chatbot really understands my PDFs and provides relevant answers every time.",
  "An essential assistant for anyone working with large documents. Highly recommended!",
];


export default function LandingPage() {
  return (
    <div className="landing-wrapper">
      {/* 1. Intro */}
      <section className="intro">
        <h1>TinyThinker</h1>
        <p>Chat with your documents. Smarter. Faster. Private.</p>
        <a href="/chat" className="try-now">Try Now</a>
      </section>
      <section className="description-section">
  <div className="description-content">
    <p className="intro-description">
      TinyThinker is your intelligent reading companion. 📚✨ Simply upload any PDF, and our AI-powered chatbot dives deep into the content — ready to answer your questions instantly.
    </p>
    <p className="intro-masala">
      No more CTRL+F searches or endless scrolling. Just upload, ask, and learn — the smart way. 💡
    </p>
  </div>
</section>

      {/* 2. Why Use */}
      <section className="why-section" id="why-us">
  <h2 className="why-title">Why Choose TinyThinker? 💡</h2>
  <p className="why-text slide-fade-scale">
    TinyThinker transforms your PDF reading experience by letting you ask questions directly from your uploaded documents — fast, accurate, and effortlessly. Designed for students, researchers, and professionals alike, it saves you time and keeps your workflow smooth with smart answers, a sleek interface, and a seamless dark mode for comfortable long sessions.
  </p>
</section>


      {/* 3. Slider */}
      <section className="feature-slider">
        <h2>Features</h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          loop
          autoplay={{ delay: 2000 }}
          navigation
          pagination={{ clickable: true }}
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index}>
              <div className="feature-card">{feature}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* 4. How It Works */}
      <section className="how-section" id="how-it-works">
  <h2 className="section-title">How It Works</h2>
  <div className="how-cards">
    {[
      "Upload your PDF document easily.",
      "TinyThinker reads and understands the content.",
      "Ask any question related to your PDF.",
      "Get answers instantly.",
    ].map((step, i) => (
      <div key={i} className="how-card fade-slide-up" style={{ animationDelay: `${i * 0.3}s` }}>
        <div className="step-number">{i + 1}</div>
        <p>{step}</p>
      </div>
    ))}
  </div>
</section>


      {/* 5. Preview */}
      <section className="preview-section">
  <h2 className="preview-title">Preview</h2>
  <div className="video-wrapper">
    <video src="/chatbot_demo.mp4" controls />
  </div>
</section>


      {/* 6. Testimonials */}
      <section className="testimonials-section">
      <h2>How Users Say</h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500 }}
      >
        {testimonials.map((text, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <p className="testimonial-text">“{text}”</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>

      {/* 7. Supported Types */}
      <section className="supported">
        <h2>Supported Types</h2>
        <p>Books, Research Papers, Notes, Reports, Invoices, and more.</p>
      </section>

      {/* 8. Security */}
      <section className="security">
        <h2>Security First</h2>
        <p>No upload. No cloud. Everything stays on your machine.</p>
      </section>

      {/* 9. FAQs */}
      <section className="faqs">
        <h2>FAQs</h2>
        {faqs.map((q, i) => (
          <div key={i} className="faq-block">
            <h4>{q}</h4>
            <p>This will be answered here.</p>
          </div>
        ))}
      </section>

      {/* 10. Footer */}
      <footer className="footer1">
        <p>© 2025 TinyThinker</p>
        <a href="/chat" className="try-now">Try Now</a>
      </footer>
    </div>
  );
}
