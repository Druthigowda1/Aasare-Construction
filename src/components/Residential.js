import React from 'react';
import { Box, Typography, Container, Button, Grid } from '@mui/material';
import useSEO from '../hooks/useSEO';
import AboutCTA from './AboutCTA';
import residentialImg from '../assets/residential.png'; // Reusing an existing image

const Residential = () => {
  useSEO({
    title: 'Residential Construction',
    description: 'We build beautiful, durable, and luxurious residential homes in Maddur and Bangalore.',
    keywords: 'residential construction, home builders, residential contractors, custom homes'
  });

  return (
    <Box sx={{ pt: 12, backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        {/* Page Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" sx={{ fontWeight: 900, color: '#1c1c1c', mb: 2, fontSize: { xs: '2.5rem', md: '3.75rem' } }}>
            Residential Construction
          </Typography>
          <Typography variant="h6" sx={{ color: '#555', maxWidth: '800px', mx: 'auto', lineHeight: 1.8 }}>
            Building your dream home with structural integrity, premium materials, and unparalleled craftsmanship.
          </Typography>
        </Box>

        {/* Content Section */}
        <Grid container spacing={6} alignItems="center" sx={{ mb: 10 }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ width: '100%', height: '400px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <img src={residentialImg} alt="Residential Construction" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ fontWeight: 800, color: '#3EB2F1', mb: 3 }}>
              Your Dream Home, Realized.
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
              At Aasare Constructions, we understand that building a home is one of the most significant investments of your life. We specialize in custom residential projects, ranging from contemporary villas to classic family homes. 
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', fontSize: '1.1rem', lineHeight: 1.8 }}>
              Our turnkey solutions mean we handle everything from architectural planning and foundation pouring to the final coat of paint and interior finishes. We guarantee transparent pricing, on-time delivery, and the highest quality standards in the industry.
            </Typography>
          </Grid>
        </Grid>

        {/* Gallery Section */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h3" sx={{ fontWeight: 800, color: '#1c1c1c', textAlign: 'center', mb: 6 }}>
            Residential Showcases
          </Typography>
          <Grid container spacing={3}>
            {/* Reusing existing exterior/interior images for the gallery */}
            {[
              { img: require('../assets/portfolio/exterior_1_1783712363666.png'), title: 'Luxury Villas' },
              { img: require('../assets/portfolio/exterior_3_1783712388989.png'), title: 'Modern Duplexes' },
              { img: require('../assets/portfolio/kitchen_1_1783712291708.png'), title: 'Bespoke Kitchens' },
              { img: require('../assets/portfolio/kitchen_5_1783712336229.png'), title: 'Cozy Interiors' }
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
      
      {/* CTA Section */}
      <AboutCTA />
    </Box>
  );
};

export default Residential;
