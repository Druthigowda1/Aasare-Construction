import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import useSEO from '../hooks/useSEO';
import { Link } from 'react-router-dom';
import residentialImg from '../assets/residential.png';
import commercialImg from '../assets/commercial.png';
import interiorImg from '../assets/interiors.png';
import project1Img from '../assets/project1.png';

export const services = [
  {
    id: 'residential',
    title: 'RESIDENTIAL',
    description: 'Build your dream home with top quality materials and expert builders at Maddur and Bangalore.',
    img: residentialImg
  },
  {
    id: 'commercial',
    title: 'COMMERCIAL',
    description: 'Premium quality commercial building construction for offices, malls, and more.',
    img: commercialImg
  },
  {
    id: 'interior',
    title: 'INTERIOR',
    description: 'Transform your interior space with modern architectural and interior designs.',
    img: interiorImg
  },
  {
    id: 'architectural',
    title: 'ARCHITECTURAL',
    description: 'Expert architectural blueprints, 3D modeling, and design planning for structural integrity.',
    img: project1Img
  }
];

const GridItem = ({ service, height }) => (
  <Box
    component={Link}
    to={`/service/${service.id}`}
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: height,
      width: '100%',
      textDecoration: 'none',
      position: 'relative',
      overflow: 'hidden',
      cursor: 'pointer',
      '&:hover .overlay': {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
      },
      '&:hover .img': {
        transform: 'scale(1.05)'
      }
    }}
  >
    <Box
      className="img"
      sx={{
        position: 'absolute',
        top: 0, left: 0, width: '100%', height: '100%',
        backgroundImage: `url(${service.img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'transform 0.5s ease',
        zIndex: 1
      }}
    />
    <Box
      className="overlay"
      sx={{
        position: 'absolute',
        top: 0, left: 0, width: '100%', height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.55)',
        transition: 'background-color 0.3s ease',
        zIndex: 2
      }}
    />
    <Typography
      variant="h2"
      sx={{
        color: '#fff',
        fontWeight: 900,
        zIndex: 3,
        letterSpacing: '2px',
        textTransform: 'uppercase',
        textShadow: '0px 4px 12px rgba(0,0,0,0.5)',
        fontSize: { xs: '1rem', md: '2rem' }
      }}
    >
      {service.title}
    </Typography>
  </Box>
);

const Services = () => {
  useSEO({
    title: 'Our Services',
    description: 'Aasare Constructions offers premium residential, commercial, interior design, and turnkey construction services.',
    keywords: 'construction services, residential builders, commercial construction, interior design, turnkey projects'
  });

  return (
    <Box sx={{ pt: { xs: 6, md: 2 }, pb: 12, backgroundColor: '#f8f8f8ff' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h6"
          sx={{
            color: '#257dadff',
            fontWeight: 800,
            textAlign: 'center',
            letterSpacing: '1px',
            mb: 1
          }}
        >
          OUR SERVICES
        </Typography>
        <Typography
          variant="h3"
          sx={{
            color: '#0d2677ff',
            fontWeight: 900,
            textAlign: 'center',
            mb: 3
          }}
        >
          What We Offer
        </Typography>

        <Grid container spacing={2}>
          {/* Left Column (Spans 8 columns on medium screens) */}
          <Grid item xs={12} md={8} container spacing={2}>
            {/* Top Wide Block */}
            <Grid item xs={12}>
              <GridItem service={services[0]} height={{ xs: '250px', md: '350px' }} />
            </Grid>
            {/* Bottom Two Smaller Blocks */}
            <Grid item xs={12} sm={6}>
              <GridItem service={services[1]} height={{ xs: '250px', md: '300px' }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <GridItem service={services[2]} height={{ xs: '250px', md: '300px' }} />
            </Grid>
          </Grid>

          {/* Right Tall Column (Spans 4 columns on medium screens) */}
          <Grid item xs={12} md={4}>
            <GridItem service={services[3]} height={{ xs: '300px', md: '100%' }} />
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
};

export default Services;
