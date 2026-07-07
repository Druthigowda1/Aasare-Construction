import React from 'react';
import { Box, Typography, Container, Grid, Avatar, Rating } from '@mui/material';

const testimonials = [
    { name: 'Ravi Kumar', feedback: 'ASR Constructions provided excellent service for my residential project in Mysore. Highly professional and timely completion.', rating: 5 },
    { name: 'Sagar Sharma', feedback: 'Best commercial builders. They handled the complex architectural requirements of our office building with ease.', rating: 5 },
    { name: 'Ankita Reddy', feedback: 'Interiors are top notch. Their design team is very creative and pays attention to details.', rating: 4 }
];

const Testimonials = () => {
  return (
    <Box sx={{ py: 12, backgroundColor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h6" sx={{ color: '#3EB2F1', fontWeight: 800, mb: 1, letterSpacing: '4px' }}>
                CLIENT REVIEWS
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 900, color: '#1c1c1c' }}>
                What Our Clients Say
            </Typography>
        </Box>

        <Grid container spacing={4}>
          {testimonials.map((test, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box 
                sx={{ 
                    p: 4, 
                    backgroundColor: '#fff', 
                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)', 
                    position: 'relative',
                    borderTop: '5px solid #3EB2F1',
                    height: '100%'
                }}
              >
                <Rating value={test.rating} readOnly sx={{ mb: 2, color: '#3EB2F1' }} />
                <Typography variant="body1" sx={{ fontStyle: 'italic', color: '#555', mb: 4, lineHeight: 1.8 }}>
                    "{test.feedback}"
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar sx={{ backgroundColor: '#1c1c1c', fontWeight: 700 }}>{test.name[0]}</Avatar>
                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: 800 }}>{test.name}</Typography>
                        <Typography variant="body2" sx={{ color: '#888' }}>Client</Typography>
                    </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
