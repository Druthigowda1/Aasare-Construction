import React, { useState } from 'react';
import { Box, Typography, Container, IconButton, Fade, Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Kitchen Images
import k1 from '../assets/portfolio/kitchen_1_1783712291708.png';
import k2 from '../assets/portfolio/kitchen_2_1783712302314.png';
import k3 from '../assets/portfolio/kitchen_3_1783712314054.png';
import k4 from '../assets/portfolio/kitchen_4_1783712323635.png';
import k5 from '../assets/portfolio/kitchen_5_1783712336229.png';

// Exterior Images
import e1 from '../assets/portfolio/exterior_1_1783712363666.png';
import e2 from '../assets/portfolio/exterior_2_1783712375771.png';
import e3 from '../assets/portfolio/exterior_3_1783712388989.png';
import e4 from '../assets/portfolio/exterior_4_1783712398666.png';
import e5 from '../assets/portfolio/exterior_5_1783712412643.png';

const portfolioData = {
  Kitchen: [
    { img: k1, caption: 'Luxury Modern Kitchen' },
    { img: k2, caption: 'Premium Minimalist Kitchen' },
    { img: k3, caption: 'U-Shaped Modular Kitchen' },
    { img: k4, caption: 'Open Plan Island Kitchen' },
    { img: k5, caption: 'Classic Teak Wood Kitchen' }
  ],
  Exterior: [
    { img: e1, caption: 'Modern Luxury House' },
    { img: e2, caption: 'Contemporary 3-Floor Building' },
    { img: e3, caption: 'Premium Evening Villa' },
    { img: e4, caption: 'Tropical Minimalist House' },
    { img: e5, caption: 'Classic Residential Estate' }
  ],
  Bathroom: [
    { img: k1, caption: 'Luxury Bathroom Placeholder' },
    { img: e2, caption: 'Modern Bathroom Placeholder' },
    { img: k3, caption: 'Premium Bathroom Placeholder' },
    { img: e4, caption: 'Classic Bathroom Placeholder' },
    { img: k5, caption: 'Minimalist Bathroom Placeholder' }
  ],
  'Living Hall': [
    { img: e1, caption: 'Living Hall Placeholder 1' },
    { img: k2, caption: 'Living Hall Placeholder 2' },
    { img: e3, caption: 'Living Hall Placeholder 3' },
    { img: k4, caption: 'Living Hall Placeholder 4' },
    { img: e5, caption: 'Living Hall Placeholder 5' }
  ],
  Balcony: [
    { img: k1, caption: 'Balcony Placeholder 1' },
    { img: e2, caption: 'Balcony Placeholder 2' },
    { img: k3, caption: 'Balcony Placeholder 3' },
    { img: e4, caption: 'Balcony Placeholder 4' },
    { img: k5, caption: 'Balcony Placeholder 5' }
  ],
  Interior: [
    { img: e1, caption: 'Interior Placeholder 1' },
    { img: k2, caption: 'Interior Placeholder 2' },
    { img: e3, caption: 'Interior Placeholder 3' },
    { img: k4, caption: 'Interior Placeholder 4' },
    { img: e5, caption: 'Interior Placeholder 5' }
  ],
  'Pooja Room': [
    { img: k1, caption: 'Pooja Room Placeholder 1' },
    { img: e2, caption: 'Pooja Room Placeholder 2' },
    { img: k3, caption: 'Pooja Room Placeholder 3' },
    { img: e4, caption: 'Pooja Room Placeholder 4' },
    { img: k5, caption: 'Pooja Room Placeholder 5' }
  ]
};

const PortfolioSlider = () => {
  const [activeTab, setActiveTab] = useState('Kitchen');
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = portfolioData[activeTab];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentIndex(0);
  };

  return (
    <Box sx={{ py: { xs: 1, md: 4 }, backgroundColor: '#fff' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ fontWeight: 900, color: '#203168ff', textAlign: 'center', mb: 2 , fontFamily:'system-ui'}}>
          Our Aasare Portfolio
        </Typography>
        <Typography variant="body1" sx={{ color: '#555', textAlign: 'center', mb: 6, maxWidth: '800px', mx: 'auto', fontSize: '1.1rem' }}>
          Browse our comprehensive portfolio of homes - stunning kitchen interiors, breathtaking exteriors, luxury bathrooms, living halls, balconies, and pooja rooms, all thoughtfully designed to blend style and functionality.
        </Typography>

        {/* Tabs */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 6, flexWrap: 'wrap' }}>
          {Object.keys(portfolioData).map((tab) => (
            <Button
              key={tab}
              onClick={() => handleTabChange(tab)}
              sx={{
                borderRadius: '30px',
                px: 4,
                py: 1,
                border: activeTab === tab ? 'none' : '1px solid #e0e0e0',
                backgroundColor: activeTab === tab ? '#5888f2ff' : '#fff',
                color: activeTab === tab ? '#fff' : '#777',
                fontWeight: activeTab === tab ? 700 : 500,
                textTransform: 'none',
                boxShadow: activeTab === tab ? '0 4px 14px rgba(244, 123, 32, 0.3)' : 'none',
                '&:hover': {
                  backgroundColor: activeTab === tab ? '#566ee7ff' : '#f9f9f9'
                }
              }}
            >
              {tab}
            </Button>
          ))}
        </Box>

        {/* Slider */}
        <Box sx={{ position: 'relative', width: '100%', height: { xs: '300px', md: '450px' }, borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
          {images.map((item, index) => (
            <Fade in={currentIndex === index} timeout={500} key={index}>
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  display: currentIndex === index ? 'block' : 'none',
                }}
              >
                <img
                  src={item.img}
                  alt={item.caption}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>
            </Fade>
          ))}

          {/* Navigation Arrows */}
          <IconButton
            onClick={handlePrev}
            sx={{
              position: 'absolute',
              top: '50%',
              left: 16,
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(255,255,255,0.8)',
              color: '#333',
              '&:hover': { backgroundColor: '#fff' },
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>

          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              top: '50%',
              right: 16,
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(255,255,255,0.8)',
              color: '#333',
              '&:hover': { backgroundColor: '#fff' },
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>

        <Typography variant="h5" sx={{ fontWeight: 800, color: '#1c1c1c', textAlign: 'center', mt: 4 }}>
          {images[currentIndex].caption}
        </Typography>

      </Container>
    </Box>
  );
};

export default PortfolioSlider;
