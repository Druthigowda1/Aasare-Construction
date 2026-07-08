import React from 'react';
import { Box, Typography, Grid, Container, Card, CardMedia, CardContent, Divider } from '@mui/material';
import residentialImg from '../assets/residential.png';
import commercialImg from '../assets/commercial.png';
import interiorImg from '../assets/interiors.png';

const services = [
  {
    title: 'RESIDENTIAL CONSTRUCTION',
    description: 'Build your dream home with top quality materials and expert builders at Mysore and Bangalore.',
    img: residentialImg
  },
  {
    title: 'COMMERCIAL CONSTRUCTION',
    description: 'Premium quality commercial building construction for offices, malls, and more.',
    img: commercialImg
  },
  {
    title: 'INTERIOR DESIGN',
    description: 'Transform your interior space with modern architectural and interior designs.',
    img: interiorImg
  }
];

const Services = () => {
  return (
    <Box sx={{ py: 12, backgroundColor: '#f8f8f8ff' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h6"
          sx={{
            color: '#3EB2F1',
            fontWeight: 800,
            textAlign: 'center',
            letterSpacing: '5px',
            mb: 1
          }}
        >
          OUR SERVICES
        </Typography>
        <Typography
          variant="h3"
          sx={{
            color: '#0d0707ff',
            fontWeight: 900,
            textAlign: 'center',
            mb: 8
          }}
        >
          What We Offer
        </Typography>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  borderRadius: 0,
                  backgroundColor: '#1c1c1c',
                  color: '#fff',
                  height: '100%',
                  borderBottom: '4px solid transparent',
                  transition: '0.3s',
                  '&:hover': { borderBottom: '4px solid #3EB2F1', transform: 'translateY(-10px)' }
                }}
              >
                <CardMedia
                  component="img"
                  height="250"
                  image={service.img}
                  alt={service.title}
                />
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" sx={{ fontWeight: 800, mb: 2, color: '#3EB2F1' }}>
                    {service.title}
                  </Typography>
                  <Divider sx={{ backgroundColor: '#444', mb: 2 }} />
                  <Typography variant="body1" sx={{ color: '#ccc', lineHeight: 1.6 }}>
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
