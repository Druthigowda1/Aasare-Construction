import React from 'react';
import { Box, Typography, Container, Grid, Button, TextField, Divider, IconButton } from '@mui/material';
import Facebook from '@mui/icons-material/Facebook';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Instagram from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#1c1c1c', pt: 10, pb: 4, color: '#fff' }}>
      <Container maxWidth="lg">
        <Grid container spacing={8} sx={{ mb: 6 }}>
          <Grid item xs={12} md={4}>
            <img src="/logo.png" alt="ASR Constructions Logo" style={{ height: '60px', marginBottom: '24px' }} />
            <Typography variant="body1" sx={{ color: '#aaa', mb: 4, lineHeight: 1.8 }}>
              Leading residential and commercial construction company in Mysore. With more than 11 years of experience in creating modern living spaces and architectural wonders.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton sx={{ backgroundColor: '#2c2c2c', borderRadius: 0, color: '#fff', '&:hover': { backgroundColor: '#3EB2F1', color: '#000' } }}>
                <Facebook />
              </IconButton>
              <IconButton sx={{ backgroundColor: '#2c2c2c', borderRadius: 0, color: '#fff', '&:hover': { backgroundColor: '#3EB2F1', color: '#000' } }}>
                <LinkedIn />
              </IconButton>
              <IconButton sx={{ backgroundColor: '#2c2c2c', borderRadius: 0, color: '#fff', '&:hover': { backgroundColor: '#3EB2F1', color: '#000' } }}>
                <Instagram />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 800, color: '#fff', mb: 3 }}>
              OUR SERVICES
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {['Residential Construction', 'Commercial Construction', 'Architectural Design', 'Interior Design', 'Project Management'].map((link) => (
                <Typography key={link} variant="body1" sx={{ color: '#aaa', cursor: 'pointer', '&:hover': { color: '#3EB2F1' } }}>
                  {link}
                </Typography>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 800, color: '#fff', mb: 3 }}>
              GET A FREE QUOTE
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <TextField 
                variant="outlined" 
                placeholder="Your Email" 
                size="small" 
                sx={{ 
                    backgroundColor: '#fff', 
                    borderRadius: 0, 
                    flexGrow: 1, 
                    '& .MuiOutlinedInput-root': { border: 'none' } 
                }} 
              />
              <Button 
                variant="contained" 
                sx={{ 
                    backgroundColor: '#3EB2F1', 
                    color: '#000', 
                    fontWeight: 700, 
                    borderRadius: 0,
                    '&:hover': { backgroundColor: '#2796D1' }
                }}
              >
                JOIN
              </Button>
            </Box>
            <Typography variant="body2" sx={{ color: '#888', mt: 3, fontStyle: 'italic' }}>
              Subscribe for our latest updates and projects.
            </Typography>
          </Grid>
        </Grid>
        <Divider sx={{ backgroundColor: '#333', mb: 4 }} />
        <Typography variant="caption" sx={{ color: '#666', textAlign: 'center', display: 'block' }}>
          &copy; {new Date().getFullYear()} ASR Constructions. All rights reserved. Created with care for Construction Projects.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
