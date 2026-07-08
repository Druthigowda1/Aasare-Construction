import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import bannerVideo from '../assets/kling_20260610_VIDEO_Cinematic__3868_0 (2).mp4';

const Banner = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        color: '#fff',
        overflow: 'hidden'
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          top: 0,
          left: 0,
          zIndex: -2
        }}
      >
        <source src={bannerVideo} type="video/mp4" />
      </video>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.6)',
          zIndex: -1
        }}
      />
      <Container maxWidth="lg" sx={{ zIndex: 1, position: 'relative' }}>
        <Grid container>
          <Grid item xs={12} md={8}>
            <Typography variant="h2" sx={{ fontWeight: 800, mb: 2, lineHeight: 1.2 }}>
              Building Strong <span style={{ color: '#3EB2F1' }}>Foundations</span> <br /> for a Better <span style={{ color: '#3EB2F1' }}>Tomorrow</span>
            </Typography>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: 300, color: '#eee' }}>
              From Planning to Perfection Quality Construction with Timely Delivery.
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, fontWeight: 300, color: '#eee' }}>
              Turning your vision into durable, beautiful spaces with expert craftsmanship and timely delivery.
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
