import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, Typography, Container, Button, Grid } from '@mui/material';
import { services } from './Services';
import useSEO from '../hooks/useSEO';

const ServiceDetails = () => {
  const { id } = useParams();
  const service = services.find(s => s.id === id);

  useSEO({
    title: service ? service.title : 'Service Not Found',
    description: service ? service.description : 'Details about our construction service.',
    keywords: `aasare services, construction ${service ? service.title : ''}`
  });

  if (!service) {
    return (
      <Box sx={{ py: 10, textAlign: 'center', minHeight: '60vh' }}>
        <Typography variant="h4">Service Not Found</Typography>
        <Button component={Link} to="/services" sx={{ mt: 3 }} variant="contained">Back to Services</Button>
      </Box>
    );
  }

  return (
    <Box sx={{ py: 12, backgroundColor: '#f9f9f9', minHeight: '60vh' }}>
      <Container maxWidth="lg">
        <Button component={Link} to="/services" sx={{ mb: 4, color: '#1c1c1c', fontWeight: 600 }}>
          &larr; BACK TO SERVICES
        </Button>
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6}>
            <img 
              src={service.img} 
              alt={service.title} 
              style={{ width: '100%', borderRadius: '12px', boxShadow: '0 15px 40px rgba(0,0,0,0.1)' }} 
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ color: '#3EB2F1', fontWeight: 800, mb: 1, letterSpacing: '2px' }}>
              OUR SERVICES
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 900, color: '#1c1c1c', mb: 3 }}>
              {service.title}
            </Typography>
            <Typography variant="body1" sx={{ color: '#555', fontSize: '1.15rem', lineHeight: 1.8, mb: 4 }}>
              {service.description} We specialize in providing comprehensive and top-tier execution for every step of this process. From initial planning to final delivery, our expert team ensures the highest standard of quality and durability.
            </Typography>
            <Button 
              variant="contained" 
              component={Link}
              to="/appointment"
              sx={{ 
                backgroundColor: '#1c1c1c', 
                color: '#fff', 
                borderRadius: 0, 
                px: 5, 
                py: 2, 
                fontWeight: 700, 
                '&:hover': { backgroundColor: '#3EB2F1', color: '#000' } 
              }}
            >
              BOOK APPOINTMENT
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ServiceDetails;
