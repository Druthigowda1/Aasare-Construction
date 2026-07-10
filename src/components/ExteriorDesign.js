import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import useSEO from '../hooks/useSEO';
import AboutCTA from './AboutCTA';
import exteriorImg from '../assets/portfolio/exterior_1_1783712363666.png'; // Using generated image

const ExteriorDesign = () => {
  useSEO({
    title: 'Exterior Design',
    description: 'Stunning exterior designs and landscaping by Aasare Constructions to boost your curb appeal.',
    keywords: 'exterior design, landscaping, building exteriors, home facade design'
  });

  return (
    <Box sx={{ pt: 12, backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" sx={{ fontWeight: 900, color: '#1c1c1c', mb: 2, fontSize: { xs: '2.5rem', md: '3.75rem' } }}>
            Exterior Design
          </Typography>
          <Typography variant="h6" sx={{ color: '#555', maxWidth: '800px', mx: 'auto', lineHeight: 1.8 }}>
            Creating striking facades and outdoor living spaces that make a lasting first impression.
          </Typography>
        </Box>

        <Grid container spacing={6} alignItems="center" sx={{ mb: 10 }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ width: '100%', height: '400px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <img src={exteriorImg} alt="Exterior Design" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ fontWeight: 800, color: '#3EB2F1', mb: 3 }}>
              Curb Appeal Perfected.
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
              The exterior of your property is its signature to the world. We specialize in designing and constructing facades that blend modern architectural trends with timeless durability, ensuring your property stands out in the neighborhood.
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', fontSize: '1.1rem', lineHeight: 1.8 }}>
              Our exterior services cover everything from complex stone cladding and weather-resistant finishing to landscape integration and outdoor patio construction, giving your home or office a complete, premium look.
            </Typography>
          </Grid>
        </Grid>

        {/* Gallery Section */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h3" sx={{ fontWeight: 800, color: '#1c1c1c', textAlign: 'center', mb: 6 }}>
            Explore Exterior Styles
          </Typography>
          <Grid container spacing={3}>
            {/* Reusing existing exterior images for the gallery */}
            {[
              { img: require('../assets/portfolio/exterior_2_1783712375771.png'), title: 'Modern Facade' },
              { img: require('../assets/portfolio/exterior_3_1783712388989.png'), title: 'Classic Villa' },
              { img: require('../assets/portfolio/exterior_4_1783712398666.png'), title: 'Tropical Minimalist' },
              { img: require('../assets/portfolio/exterior_5_1783712412643.png'), title: 'Contemporary Design' }
            ].map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box sx={{ width: '100%', height: '250px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', position: 'relative', '&:hover img': { transform: 'scale(1.1)' } }}>
                  <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} />
                  <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%', p: 2, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
                    <Typography variant="h6" sx={{ color: '#fff', fontWeight: 600 }}>{item.title}</Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <AboutCTA />
    </Box>
  );
};

export default ExteriorDesign;
