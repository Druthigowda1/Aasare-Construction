import React from 'react';
import { Box, Typography, Container, Grid, Button } from '@mui/material';
import useSEO from '../hooks/useSEO';
import exteriorImg from '../assets/project1.png';

const About = () => {
  useSEO({
    title: 'About Us',
    description: 'Learn more about Aasare Constructions, the top-rated construction experts in Maddur. We build trust and structural integrity in every project.',
    keywords: 'about aasare constructions, construction experts, trusted builders, best construction company'
  });

  return (
    <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#f9f9f9' }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 4 }} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ borderLeft: '6px solid #3EB2F1', pl: 3, mb: 4 }}>
              <Typography variant="h6" sx={{ color: '#3EB2F1', fontWeight: 800, mb: 1, letterSpacing: '2px' }}>
                ABOUT OUR COMPANY
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 900, color: '#1c1c1c', fontFamily:'system-ui', fontSize: { xs: '2rem', md: '3rem' } }}>
                Top Rated Construction Experts
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ color: '#555', fontSize: '1.1rem', mb: 3, lineHeight: 1.8 }}>
              Looking for the best residential contractors in Maddur or a top-rated construction company near me? Aasare Constructions is here to turn your architectural vision into reality. Whether you're searching for premium near me construction services, commercial builders, or need a comprehensive home building cost guide for Kunigal and Maddur, our expertly managed team provides top-tier execution. We uphold the highest standards of trust and structural integrity in every building project.
            </Typography>

            <Button
              variant="contained"
              sx={{
                backgroundColor: '#1c1c1c',
                color: '#fff',
                px: 5,
                py: 2,
                borderRadius: 0,
                fontWeight: 700,
                fontSize: '0.9rem',
                '&:hover': { backgroundColor: '#3EB2F1', color: '#000' }
              }}
            >
              LEARN MORE
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative', height: '450px', backgroundColor: '#e0e0e0' }}>
              <Box
                sx={{
                  position: 'absolute',
                  top: '-20px',
                  left: '-20px',
                  width: '100%',
                  height: '100%',
                  border: '10px solid #3EB2F1',
                  zIndex: 0
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url(${exteriorImg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  zIndex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column'
                }}
              >
                <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(28, 28, 28, 0.65)' }} />

              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
