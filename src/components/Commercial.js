import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import useSEO from '../hooks/useSEO';
import AboutCTA from './AboutCTA';
import commercialImg from '../assets/commercial.png';

const Commercial = () => {
  useSEO({
    title: 'Commercial Construction',
    description: 'High-quality commercial construction services for offices, retail, and industrial buildings.',
    keywords: 'commercial construction, office builders, retail construction, commercial contractors'
  });

  return (
    <Box sx={{ pt: 12, backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" sx={{ fontWeight: 900, color: '#1c1c1c', mb: 2, fontSize: { xs: '2.5rem', md: '3.75rem' } }}>
            Commercial Construction
          </Typography>
          <Typography variant="h6" sx={{ color: '#555', maxWidth: '800px', mx: 'auto', lineHeight: 1.8 }}>
            Developing state-of-the-art workspaces, retail environments, and industrial facilities.
          </Typography>
        </Box>

        <Grid container spacing={6} alignItems="center" sx={{ mb: 10 }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ width: '100%', height: '400px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <img src={commercialImg} alt="Commercial Construction" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ fontWeight: 800, color: '#3EB2F1', mb: 3 }}>
              Engineered for Success.
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
              Commercial projects require a unique blend of speed, efficiency, and strict adherence to structural codes. Aasare Constructions brings decades of experience to building commercial properties that are robust, aesthetic, and functional.
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', fontSize: '1.1rem', lineHeight: 1.8 }}>
              Whether you need a modern corporate office, a spacious retail outlet, or a heavy-duty industrial warehouse, our team executes with precision to minimize downtime and maximize your return on investment.
            </Typography>
          </Grid>
        </Grid>

        {/* Gallery Section */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h3" sx={{ fontWeight: 800, color: '#1c1c1c', textAlign: 'center', mb: 6 }}>
            Commercial Projects
          </Typography>
          <Grid container spacing={3}>
            {/* Reusing existing exterior/commercial images for the gallery */}
            {[
              { img: require('../assets/portfolio/exterior_2_1783712375771.png'), title: 'Corporate Offices' },
              { img: require('../assets/portfolio/exterior_3_1783712388989.png'), title: 'Retail Spaces' },
              { img: require('../assets/portfolio/exterior_4_1783712398666.png'), title: 'Industrial Warehouses' },
              { img: require('../assets/portfolio/exterior_5_1783712412643.png'), title: 'Hospitality Venues' }
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

export default Commercial;
