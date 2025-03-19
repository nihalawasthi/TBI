import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import AdvisoryBoard from './pages/AdvisoryBoard';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About'
import Events from './pages/Events';
import Apply from './pages/Apply';
import Facilities from './pages/Facalities';
import Fundings from './pages/Fundings';
import Incubation from './pages/incubation';
import Startups from './pages/Startups';
import Industry from './pages/Industry';

const ContactPage = () => {
  return(
    <div>
      <Header />
      <Contact />
      <Footer />
    </div>
  )
}

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/advisory-board" element={<AdvisoryBoard />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/application" element={<Apply />} />
        <Route path="/partners" element={<Fundings />} />
        <Route path="/incubation" element={<Incubation />} />
        <Route path="/industry" element={<Industry />} />
        <Route path="/startups" element={<Startups />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default App;