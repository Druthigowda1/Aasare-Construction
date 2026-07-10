import React from 'react';
import './App.css';
import useSEO from './hooks/useSEO';
import { Box, ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import WhatWeDo from './components/WhatWeDo';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import PortfolioSlider from './components/PortfolioSlider';
import AboutCTA from './components/AboutCTA';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Appointment from './components/Appointment';
import ProjectDetails from './components/ProjectDetails';
import ServiceDetails from './components/ServiceDetails';
import FloatingChat from './components/FloatingChat';
import Residential from './components/Residential';
import Commercial from './components/Commercial';
import InteriorDesign from './components/InteriorDesign';
import ExteriorDesign from './components/ExteriorDesign';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import Gallery from './components/Gallery';

// Creating a theme for global consistency
const theme = createTheme({
  palette: {
    primary: {
      main: '#3EB2F1', // Light Blue ASR Color
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: ' sans-serif',
  },
});

const Home = () => {
  useSEO({
    title: 'Home',
    description: 'Aasare Constructions provides the best residential and commercial construction services in Maddur, Mysuru, and Bangalore. Explore our top turnkey solutions today.',
    keywords: 'aasare constructions, builders in maddur, residential contractors, commercial construction, turnkey construction, bangalore builders'
  });

  return (
    <>
      <Banner />
      <WhatWeDo />
      <Services />
      <WhyChooseUs />
      <PortfolioSlider />
      <Projects />
      <AboutCTA />
      <Testimonials />
    </>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="/service/:id" element={<ServiceDetails />} />
            <Route path="/residential" element={<Residential />} />
            <Route path="/commercial" element={<Commercial />} />
            <Route path="/interior-design" element={<InteriorDesign />} />
            <Route path="/exterior-design" element={<ExteriorDesign />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
          <Footer />
          <FloatingChat />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
