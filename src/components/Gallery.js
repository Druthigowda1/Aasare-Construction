import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import useSEO from '../hooks/useSEO';

// Import existing images for the gallery
import img1 from '../assets/portfolio/exterior_1_1783712363666.png';
import img2 from '../assets/portfolio/exterior_2_1783712375771.png';
import img3 from '../assets/portfolio/kitchen_1_1783712291708.png';
import img4 from '../assets/portfolio/kitchen_2_1783712302314.png';
import img5 from '../assets/portfolio/exterior_4_1783712398666.png';
import img6 from '../assets/portfolio/kitchen_4_1783712323635.png';
import img7 from '../assets/portfolio/exterior_5_1783712412643.png';
import img8 from '../assets/portfolio/kitchen_5_1783712336229.png';

const Gallery = () => {
  useSEO({
    title: 'Gallery',
    description: 'View the stunning gallery of our past construction and interior design projects.',
    keywords: 'construction gallery, project images, home design photos, building portfolio gallery'
  });

  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  return (
    <Box sx={{ pb: 10, backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 8 }}>

          <Typography variant="h2" sx={{ fontWeight: 900, color: '#1c1c1c', mt: 2, fontSize: { xs: '2.5rem', md: '3.75rem' } }}>
            Project Gallery
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {images.map((src, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Box sx={{
                width: '100%',
                height: '300px',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                cursor: 'pointer',
                '&:hover img': {
                  transform: 'scale(1.05)'
                }
              }}>
                <img
                  src={src}
                  alt={`Aasare Construction Project ${index + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease-in-out'
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Gallery;
