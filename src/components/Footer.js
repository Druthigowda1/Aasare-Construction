import React from 'react';
import { Box, Typography, Container, Grid, Button, TextField, Divider, IconButton } from '@mui/material';
import Facebook from '@mui/icons-material/Facebook';
import YouTube from '@mui/icons-material/YouTube';
import Instagram from '@mui/icons-material/Instagram';
import aasareLogo from '../assets/aasare.png';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#bbd5f0ff', pt: 3, pb: 1, color: '#fff' }}>
      <Container maxWidth="lg">
        <Grid container spacing={8} sx={{ mb: 6 }}>
          <Grid item xs={12} md={4}>
            <img src={aasareLogo} alt="Aasare Constructions Logo" style={{ height: '140px', marginBottom: '4px' }} />
            <Typography variant="body1" sx={{ color: '#150b0bff', mb: 4, lineHeight: 1.8 }}>
              Leading residential and commercial construction company in Maddur. With more than 11 years of experience in creating modern living spaces and architectural wonders.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton sx={{ backgroundColor: '#bbd5f0ff', borderRadius: 0, color: '#631111ff', '&:hover': { backgroundColor: '#3EB2F1', color: '#000' } }}>
                <Facebook />
              </IconButton>
              <IconButton component="a" href="https://www.youtube.com/@AasareConstruction" target="_blank" rel="noopener noreferrer" sx={{ backgroundColor: '#bbd5f0ff', borderRadius: 0, color: '#621717ff', '&:hover': { backgroundColor: '#3EB2F1', color: '#000' } }}>
                <YouTube />
              </IconButton>
              <IconButton component="a" href="https://www.instagram.com/aasareconstruction/" target="_blank" rel="noopener noreferrer" sx={{ backgroundColor: '#bbd5f0ff', borderRadius: 0, color: '#562121ff', '&:hover': { backgroundColor: '#3EB2F1', color: '#000' } }}>
                <Instagram />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 800, color: '#1b1212ff', mb: 3 , fontFamily:'Manrope'}}>
              OUR SERVICES
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {['Residential Construction', 'Commercial Construction', 'Architectural Design', 'Interior Design', 'Project Management'].map((link) => (
                <Typography key={link} variant="body1" sx={{ color: '#1a0e0eff', cursor: 'pointer', '&:hover': { color: '#3EB2F1' } }}>
                  {link}
                </Typography>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 800, color: '#1c1111ff', mb: 3, fontFamily:'Manrope' }}>
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
            <Typography variant="body2" sx={{ color: '#161010ff', mt: 3, fontStyle: 'italic' }}>
              Subscribe for our latest updates and projects.
            </Typography>
          </Grid>
        </Grid>
        <Divider sx={{ backgroundColor: '#333', mb: 4 }} />
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
          <Typography variant="caption" sx={{ color: '#251212ff' , fontSize:"16px"}}>
            &copy; {new Date().getFullYear()} All rights reserved to aasareconstructions
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 , }}>
            <Typography variant="caption" sx={{ color: '#251212ff', cursor: 'pointer', fontSize:"16px",'&:hover': { color: '#3EB2F1', textDecoration: 'underline' } }}>
              Privacy Policy
            </Typography>
            <Typography variant="caption" sx={{ color: '#251212ff', cursor: 'pointer',fontSize:"16px", '&:hover': { color: '#3EB2F1', textDecoration: 'underline' } }}>
              Terms & Conditions
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
