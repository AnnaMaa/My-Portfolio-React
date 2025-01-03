import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home"
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MentionsLegales from "./components/MentionsLegales";




function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
