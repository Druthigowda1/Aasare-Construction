import React from 'react';
import { Box, Typography, Container, Grid, Button } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: '#f9f9f9' }}>
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ borderLeft: '6px solid #3EB2F1', pl: 3, mb: 4 }}>
              <Typography variant="h6" sx={{ color: '#3EB2F1', fontWeight: 800, mb: 1, letterSpacing: '2px' }}>
                ABOUT OUR COMPANY
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 900, color: '#1c1c1c' }}>
                Top Rated Construction Experts
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ color: '#555', fontSize: '1.1rem', mb: 3, lineHeight: 1.8 }}>
              Looking for the best residential contractors in Maddur or a construction company near me? ASR Constructions is here to turn your vision into reality. Whether you're searching for near me construction services or need a comprehensive home building cost guide bangalore, our expertly managed team provides top-tier guidance and execution. We uphold the highest standards of trust and integrity in every project.
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
                  backgroundColor: '#1c1c1c',
                  zIndex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column'
                }}
              >
                <Typography variant="h1" sx={{ color: '#3EB2F1', fontWeight: 900, fontSize: '6rem' }}>
                  TOP
                </Typography>
                <Typography variant="h6" sx={{ color: '#fff', fontWeight: 700, textAlign: 'center', mt: 1 }}>
                  RATED <br /> CONSTRUCTION
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
