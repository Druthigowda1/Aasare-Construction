import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import bannerImg from '../assets/banner.png';

const Banner = () => {
  return (
    <Box 
      sx={{ 
        height: '80vh', 
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bannerImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        color: '#fff'
      }}
    >
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} md={8}>
            <Typography variant="h2" sx={{ fontWeight: 800, mb: 2, lineHeight: 1.2 }}>
              Best <span style={{ color: '#3EB2F1' }}>Construction Company</span> in Maddur
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, fontWeight: 300, color: '#eee' }}>
              Building your dream project with more than 11+ years of unparalleled expertise and precision.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button 
                variant="contained" 
                sx={{ 
                  backgroundColor: '#3EB2F1', 
                  color: '#000', 
                  fontSize: '1.1rem', 
                  fontWeight: 700, 
                  px: 4, 
                  py: 1.5,
                  borderRadius: 0,
                  '&:hover': { backgroundColor: '#2796D1' }
                }}
              >
                OUR PROJECTS
              </Button>
              <Button 
                variant="outlined" 
                sx={{ 
                  borderColor: '#fff', 
                  color: '#fff', 
                  fontSize: '1.1rem', 
                  fontWeight: 600, 
                  px: 4, 
                  py: 1.5,
                  borderRadius: 0,
                  borderWidth: '2px',
                  '&:hover': { borderColor: '#3EB2F1', color: '#3EB2F1', borderWidth: '2px' }
                }}
              >
                CONTACT US
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
