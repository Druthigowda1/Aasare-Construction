import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import useSEO from '../hooks/useSEO';
import AboutCTA from './AboutCTA';
import interiorImg from '../assets/interiors.png';

const InteriorDesign = () => {
  useSEO({
    title: 'Interior Design',
    description: 'Modern and elegant interior design services by Aasare Constructions. Transform your living spaces today.',
    keywords: 'interior design, home interiors, modern interior design, interior decorators'
  });

  return (
    <Box sx={{ pt: 12, backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" sx={{ fontWeight: 900, color: '#1c1c1c', mb: 2, fontSize: { xs: '2.5rem', md: '3.75rem' } }}>
            Interior Design
          </Typography>
          <Typography variant="h6" sx={{ color: '#555', maxWidth: '800px', mx: 'auto', lineHeight: 1.8 }}>
            Transforming bare spaces into stunning, highly functional living and working environments.
          </Typography>
        </Box>

        <Grid container spacing={6} alignItems="center" sx={{ mb: 10 }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ width: '100%', height: '400px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <img src={interiorImg} alt="Interior Design" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ fontWeight: 800, color: '#3EB2F1', mb: 3 }}>
              Aesthetics Meets Utility.
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
              Our interior design services go beyond just choosing the right colors. We focus on spatial planning, lighting dynamics, and custom furniture curation to create atmospheres that truly reflect your personality and needs.
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', fontSize: '1.1rem', lineHeight: 1.8 }}>
              From modular luxury kitchens to opulent living rooms and productive office layouts, our award-winning designers work closely with our construction teams to ensure flawless execution of every single detail.
            </Typography>
          </Grid>
        </Grid>

        {/* Gallery Section */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h3" sx={{ fontWeight: 800, color: '#1c1c1c', textAlign: 'center', mb: 6 }}>
            Interior Inspirations
          </Typography>
          <Grid container spacing={3}>
            {/* Reusing existing kitchen/interior images for the gallery */}
            {[
              { img: require('../assets/portfolio/kitchen_2_1783712302314.png'), title: 'Modular Kitchens' },
              { img: require('../assets/portfolio/kitchen_3_1783712314054.png'), title: 'Luxury Living' },
              { img: require('../assets/portfolio/kitchen_4_1783712323635.png'), title: 'Cozy Bedrooms' },
              { img: require('../assets/portfolio/kitchen_5_1783712336229.png'), title: 'Elegant Bathrooms' }
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

export default InteriorDesign;
