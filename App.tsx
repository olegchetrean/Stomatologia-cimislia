import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';

// Main Pages
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { ServiceDetail } from './pages/ServiceDetail';
import { Team } from './pages/Team';
import { Contact } from './pages/Contact';
import { Transparency } from './pages/Transparency';
import { About } from './pages/About';
import { UsefulInfo } from './pages/UsefulInfo';
import { Feedback } from './pages/Feedback';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Terms } from './pages/Terms';

// New Pages
import { Gallery } from './pages/Gallery';
import { Appointments } from './pages/Appointments';
import { Prices } from './pages/Prices';
import { FAQ } from './pages/FAQ';
import { Emergency } from './pages/Emergency';
import { Pediatrics } from './pages/Pediatrics';
import { Testimonials } from './pages/Testimonials';
import { AdminPanel } from './pages/AdminPanel';

// Компонент-обертка для страниц с Layout
const LayoutWrapper = ({ children }: { children: React.ReactNode }) => (
  <Layout>{children}</Layout>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin Panel - без Layout */}
        <Route path="/admin" element={<AdminPanel />} />
        
        {/* Все остальные страницы - с Layout */}
        <Route path="/" element={<LayoutWrapper><Home /></LayoutWrapper>} />
        <Route path="/despre" element={<LayoutWrapper><About /></LayoutWrapper>} />
        <Route path="/servicii" element={<LayoutWrapper><Services /></LayoutWrapper>} />
        <Route path="/servicii/:category" element={<LayoutWrapper><ServiceDetail /></LayoutWrapper>} />
        <Route path="/echipa" element={<LayoutWrapper><Team /></LayoutWrapper>} />
        <Route path="/contact" element={<LayoutWrapper><Contact /></LayoutWrapper>} />
        <Route path="/transparenta" element={<LayoutWrapper><Transparency /></LayoutWrapper>} />
        <Route path="/informatii-utile" element={<LayoutWrapper><UsefulInfo /></LayoutWrapper>} />
        <Route path="/sugestii" element={<LayoutWrapper><Feedback /></LayoutWrapper>} />
        <Route path="/confidentialitate" element={<LayoutWrapper><PrivacyPolicy /></LayoutWrapper>} />
        <Route path="/termeni" element={<LayoutWrapper><Terms /></LayoutWrapper>} />
        <Route path="/galerie" element={<LayoutWrapper><Gallery /></LayoutWrapper>} />
        <Route path="/programare" element={<LayoutWrapper><Appointments /></LayoutWrapper>} />
        <Route path="/preturi" element={<LayoutWrapper><Prices /></LayoutWrapper>} />
        <Route path="/intrebari-frecvente" element={<LayoutWrapper><FAQ /></LayoutWrapper>} />
        <Route path="/urgente" element={<LayoutWrapper><Emergency /></LayoutWrapper>} />
        <Route path="/pediatrie" element={<LayoutWrapper><Pediatrics /></LayoutWrapper>} />
        <Route path="/testimoniale" element={<LayoutWrapper><Testimonials /></LayoutWrapper>} />
      </Routes>
    </Router>
  );
}

export default App;
