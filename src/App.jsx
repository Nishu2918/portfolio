import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar.jsx';
import { Footer } from './components/layout/Footer.jsx';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

// Simple wrapper to scroll to top on route change
const RouteWrapper = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return children;
};

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[var(--color-background)]">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<RouteWrapper><Projects /></RouteWrapper>} />
            <Route path="/about" element={<RouteWrapper><About /></RouteWrapper>} />
            <Route path="/contact" element={<RouteWrapper><Contact /></RouteWrapper>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
