import React from 'react';
import './App.css';
import { Box, ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

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
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Banner />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
