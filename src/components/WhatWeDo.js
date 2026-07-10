import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import FoundationIcon from '@mui/icons-material/Foundation';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import HandymanIcon from '@mui/icons-material/Handyman';

const WhatWeDo = () => {
  const features = [
    {
      icon: <FoundationIcon sx={{ fontSize: 50, color: '#3EB2F1' }} />,
      title: 'Solid Construction',
      description: 'We build robust residential and commercial structures with premium materials and precise engineering.'
    },
    {
      icon: <ArchitectureIcon sx={{ fontSize: 50, color: '#3EB2F1' }} />,
      title: 'Architectural Design',
      description: 'Our expert architects create modern, aesthetic, and highly functional spaces tailored to your vision.'
    },
    {
      icon: <HandymanIcon sx={{ fontSize: 50, color: '#3EB2F1' }} />,
      title: 'End-to-End Management',
      description: 'From planning and permitting to the final finishing touches, we handle the entire project lifecycle.'
    }
  ];

  return (
    <Box sx={{ pt: { xs: 4, md: 7}, pb: { xs: 4, md: 6 }, backgroundColor: '#fff' }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h6" 
          sx={{ color: '#2375a0ff', fontWeight: 800, textAlign: 'center', letterSpacing: '1px', mb: 1 }}
        >
          OUR EXPERTISE
        </Typography>
        <Typography 
          variant="h3" 
          sx={{ fontWeight: 900, color: '#0d2677ff', textAlign: 'center', mb: 3 }}
        >
          What We Do
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ color: '#555', textAlign: 'center', maxWidth: '800px', mx: 'auto', mb: 8, fontSize: '1.1rem', lineHeight: 1.8 }}
        >
          At Aasare Constructions, recognized as the best builders and civil contractors in Kunigal, Mandya, and Maddur, we bring your dreams to life through exceptional craftsmanship. As top-rated residential and commercial construction experts near you, we specialize in transforming ideas into tangible realities, ensuring every turnkey project is delivered on time, within budget, and with the highest structural quality.
        </Typography>

        <Grid container spacing={6}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box 
                sx={{ 
                  textAlign: 'center', 
                  p: 4, 
                  backgroundColor: '#f9f9f9', 
                  border: '1px solid #e0e0e0',
                  borderRadius: '12px',
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': { 
                    transform: 'translateY(-10px)', 
                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                    borderColor: '#3EB2F1'
                  }
                }}
              >
                <Box sx={{ mb: 3 }}>
                  {feature.icon}
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 800, color: '#1c1c1c', mb: 2 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.6 }}>
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhatWeDo;
