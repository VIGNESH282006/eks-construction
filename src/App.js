import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import AutoScrollToTop from './components/AutoScrollToTop';
import ChatWidget from './components/ChatWidget';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import PackagesPage from './pages/PackagesPage';
import TeamPage from './pages/TeamPage';
import CareersPage from './pages/CareersPage';
import InteriorPage from './pages/InteriorPage';
import CompletedProjectsPage from './pages/CompletedProjectsPage';
import OngoingProjectsPage from './pages/OngoingProjectsPage';
import UpcomingProjectsPage from './pages/UpcomingProjectsPage';
import WhyChooseUsPage from './pages/WhyChooseUsPage';
import OurWorks from './components/OurWorks';

import './styles/globals.css';

function App() {
  return (
    <Router>
      <div className="App">
        <AutoScrollToTop />
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/interior" element={<InteriorPage />} />
          <Route path="/our-team" element={<TeamPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/our-works" element={<OurWorks />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
          <Route path="/our-works" element={<OurWorks />} />
        </Routes>

        <ChatWidget
          whatsappNumber="919876543210"
          emailAddress="hello@example.com"
          phoneNumber="+919876543210"
        />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
