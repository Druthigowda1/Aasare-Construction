import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import interiorImg from '../assets/interiors.png';

const AboutCTA = () => {
  const location = useLocation();
  if (location.pathname !== '/') {
    return null;
  }
  return (
    <Box sx={{ width: '100%', overflow: 'hidden', my: { xs: 4, md: 4} }}>
      <Grid container>
        {/* Left Side: Solid Color with Text & CTA */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            backgroundColor: '#78bcf3ff', // Vibrant orange matching the reference image
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: { xs: 6, md: 10 }
          }}
        >
          <Box maxWidth="500px">
            <Typography
              variant="h3"
              sx={{
                color: '#0c0c86ff',
                fontWeight: 800,
                mb: 3,
                lineHeight: 1.2, fontFamily: 'system-ui'
              }}
            >
              Get your quick, tailored estimate for your Maddur, Kunigal Home.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#100e0eff',
                mb: 5,
                fontSize: '1.1rem',
                lineHeight: 1.6,
                opacity: 0.95
              }}
            >
              As the <strong>best builders and civil contractors in Maddur</strong>, Aasare Constructions delivers top-rated residential and commercial turnkey projects. We guarantee structural integrity, premium materials, and flawless architectural vision for every space.
            </Typography>
            <Button
              component={Link}
              to="/contact"
              sx={{
                backgroundColor: '#ffffff',
                color: '#f47b20',
                fontWeight: 700,
                borderRadius: '30px',
                px: 5,
                py: 1.5,
                textTransform: 'none',
                fontSize: '1.1rem',
                boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
                '&:hover': {
                  backgroundColor: '#f9f9f9',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.15)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              Get Free Quote
            </Button>
          </Box>
        </Grid>

        {/* Right Side: Image */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            minHeight: { xs: '300px', md: '100%' },
            backgroundImage: `url(${interiorImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </Grid>
    </Box>
  );
};

export default AboutCTA;
