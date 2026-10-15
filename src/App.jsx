import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import EnquiryModal from './components/modals/EnquiryModal';

import Home from './pages/Home';
import EdTech from './pages/EdTech';
import Schools from './pages/Schools';
import Colleges from './pages/Colleges';
import ITServices from './pages/ITServices';
import About from './pages/About';
import Enquiry from './pages/Enquiry';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [modalCategory, setModalCategory] = useState('');

  const handleOpenEnquiry = (category = '') => {
    setModalCategory(category);
    setIsEnquiryModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryModalOpen(false);
  };

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Shared Sticky Header */}
        <Navbar onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* Dynamic Route Pages */}
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/edtech" element={<EdTech onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/edtech/schools" element={<Schools onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/edtech/colleges" element={<Colleges onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/it-services" element={<ITServices onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/about" element={<About onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/enquiry" element={<Enquiry />} />
            <Route path="/contact" element={<Contact onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Shared Footer */}
        <Footer onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* Global Interactive Enquiry Modal */}
        <EnquiryModal
          isOpen={isEnquiryModalOpen}
          onClose={handleCloseEnquiry}
          initialCategory={modalCategory}
        />
      </div>
    </BrowserRouter>
  );
}
