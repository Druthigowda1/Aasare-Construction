import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import GroupsIcon from '@mui/icons-material/Groups';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <VerifiedUserIcon sx={{ fontSize: 60, color: '#3EB2F1', mb: 2 }} />,
      title: 'Uncompromising Quality',
      description: 'We use premium materials and rigorous quality checks to ensure your home stands the test of time.'
    },
    {
      icon: <AccessTimeIcon sx={{ fontSize: 60, color: '#3EB2F1', mb: 2 }} />,
      title: 'On-Time Delivery',
      description: 'We respect your time. Our project management ensures every milestone is met on schedule without delays.'
    },
    {
      icon: <MonetizationOnIcon sx={{ fontSize: 60, color: '#3EB2F1', mb: 2 }} />,
      title: 'Transparent Pricing',
      description: 'No hidden costs or surprise fees. We provide detailed estimates and maintain financial transparency throughout.'
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 60, color: '#3EB2F1', mb: 2 }} />,
      title: 'Expert Team',
      description: 'Our experienced architects, engineers, and builders work together to bring your dream home to life seamlessly.'
    }
  ];

  return (
    <Box sx={{ py: { xs: 8}, backgroundColor: '#f9f9f9', color: '#1c1c1c', mt:'-80px' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h6"
          sx={{ color: '#3EB2F1', fontWeight: 800, textAlign: 'center', letterSpacing: '1px', mb: 1 }}
        >
          OUR COMMITMENT
        </Typography>
        <Typography
          variant="h3"
          sx={{ fontWeight: 900, color: '#0d2677ff', textAlign: 'center', mb: 8 }}
        >
          Why Homeowners Choose Aasare Constructions
        </Typography>

        <Grid container spacing={6}>
          {reasons.map((reason, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} sx={{ textAlign: 'center' }}>
              <Box
                sx={{
                  p: 3,
                  height: '100%',
                  border: '1px solid #eaeaea',
                  borderRadius: '8px',
                  backgroundColor: '#ffffff',
                  transition: '0.3s',
                  '&:hover': {
                    borderColor: '#3EB2F1',
                    transform: 'translateY(-8px)',
                    boxShadow: '0 10px 20px rgba(62, 178, 241, 0.1)'
                  }
                }}
              >
                {reason.icon}
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#1c1c1c' }}>
                  {reason.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#555', lineHeight: 1.6 }}>
                  {reason.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;
