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
                More than 11+ Years of Experience
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ color: '#555', fontSize: '1.1rem', mb: 3, lineHeight: 1.8 }}>
              ASR Constructions, recognized as the Best Contractors in Mysore and Bangalore, boasts over 11+ years of unparalleled expertise. We are professionally managed, strictly avoiding conflicts of interest, maintaining a zero-tolerance policy towards bribery, and upholding the highest standards of trust and integrity.
            </Typography>
            <Typography variant="body1" sx={{ color: '#555', fontSize: '1.1rem', mb: 4, lineHeight: 1.8 }}>
              Our mission is to understand and fulfill our clients’ needs, delivering residential and commercial projects that embody excellence in construction and design.
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
                    justifyContent: 'center'
                }}
               >
                 <Typography variant="h1" sx={{ color: '#3EB2F1', fontWeight: 900, fontSize: '8rem' }}>
                    11+
                 </Typography>
                 <Typography variant="h6" sx={{ color: '#fff', fontWeight: 700, textAlign: 'center', mt: 3, ml: 2 }}>
                    YEARS OF <br/> EXPERIENCE
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
