import React, { useState } from 'react';
import { Box, Typography, Container, Grid, Avatar, Rating, IconButton, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const testimonials = [
  { name: 'Ravi Kumar', feedback: 'Aasare Constructions provided excellent service for my residential project in Maddur. Highly professional and timely completion.', rating: 5 },
  { name: 'Sagar Sharma', feedback: 'Best commercial builders. They handled the complex architectural requirements of our office building with ease.', rating: 5 },
  { name: 'Ankita Reddy', feedback: 'Interiors are top notch. Their design team is very creative and pays attention to details.', rating: 4 },
  { name: 'Vikas Gowda', feedback: 'The turnkey construction package was a lifesaver. Kept everything under budget without compromising quality.', rating: 5 },
  { name: 'Priya Desai', feedback: 'Their team was incredibly responsive and transparent throughout the entire building process. We love our new home!', rating: 5 },
  { name: 'Manish Patel', feedback: 'Great structural design and execution. They really know their materials and have a fantastic eye for detail.', rating: 4 }
];

const Testimonials = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsToShow = isMobile ? 1 : 3;
  const maxIndex = Math.max(0, testimonials.length - itemsToShow);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsToShow);

  return (
    <Box sx={{ py: 4, backgroundColor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h6" sx={{ color: '#3EB2F1', fontWeight: 800, mb: 1, letterSpacing: '4px' }}>
            CLIENT REVIEWS
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 900, color: '#1c1c1c' }}>
            What Our Clients Say
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {visibleTestimonials.map((test, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box
                sx={{
                  p: 4,
                  backgroundColor: '#fff',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                  position: 'relative',
                  borderTop: '5px solid #3EB2F1',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <Rating value={test.rating} readOnly sx={{ mb: 2, color: '#3EB2F1' }} />
                <Typography variant="body1" sx={{ fontStyle: 'italic', color: '#555', mb: 4, lineHeight: 1.8, flexGrow: 1 }}>
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

        {/* Carousel Navigation Arrows */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6, gap: 2 }}>
          <IconButton 
            onClick={handlePrev} 
            sx={{ 
              backgroundColor: '#fff', 
              color: '#1c1c1c', 
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)', 
              '&:hover': { backgroundColor: '#3EB2F1', color: '#fff' },
              width: 50,
              height: 50
            }}
          >
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>
          <IconButton 
            onClick={handleNext} 
            sx={{ 
              backgroundColor: '#fff', 
              color: '#1c1c1c', 
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)', 
              '&:hover': { backgroundColor: '#3EB2F1', color: '#fff' },
              width: 50,
              height: 50
            }}
          >
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;
