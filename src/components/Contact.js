import React from 'react';
import { Box, Typography, Container, Grid, TextField, Button } from '@mui/material';
import useSEO from '../hooks/useSEO';

const Contact = () => {
  useSEO({
    title: 'Contact Us',
    description: 'Get in touch with Aasare Constructions. Call us or visit our office in Maddur or Bangalore for your next construction project.',
    keywords: 'contact aasare, construction contact, builders in maddur contact, bangalore builders phone number'
  });

  return (
    <Box sx={{ py: 10, backgroundColor: '#f9f9f9', minHeight: '60vh' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ fontWeight: 900, color: '#1c1c1c', textAlign: 'center', mb: 5 }}>
          Contact Us
        </Typography>
        <Grid container spacing={6} alignItems="center">
          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3, backgroundColor: '#fff', p: 4, borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <Typography variant="h5" sx={{ fontWeight: 800, mb: 1, color: '#3EB2F1' }}>Send us a message</Typography>
              <TextField label="Name" variant="outlined" fullWidth />
              <TextField label="Email" variant="outlined" fullWidth />
              <TextField label="Message" variant="outlined" multiline rows={4} fullWidth />
              <Button variant="contained" size="large" sx={{ backgroundColor: '#3EB2F1', color: '#000', fontWeight: 700, borderRadius: '8px', mt: 1, '&:hover': { backgroundColor: '#2796D1' } }}>
                Send Message
              </Button>
            </Box>
          </Grid>
          
          {/* Google Maps Location */}
          <Grid item xs={12} md={6}>
            <Box sx={{ width: '100%', height: '450px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.161914981825!2d77.05817967483776!3d12.767994887528976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bafb76f60317339%3A0x408eedb437e1d01a!2saasare%20construtions%20%7C%20Best%20Construction%20company%20in%20maddur!5e0!3m2!1sen!2sin!4v1783713710060!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="strict-origin-when-cross-origin"
                title="Aasare Constructions Location"
              ></iframe>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
