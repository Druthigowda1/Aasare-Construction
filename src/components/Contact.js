import React, { useState } from 'react';
import { Box, Typography, Container, Grid, TextField, Button, Alert, CircularProgress } from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });

    fetch("https://formsubmit.co/ajax/jeevan.11.12.99@gmail.com", {
      method: "POST",
      headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      if (data.success === 'true' || data.success) {
        setStatus({ loading: false, success: true, error: '' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ loading: false, success: false, error: 'Something went wrong. Please try again.' });
      }
    })
    .catch(error => {
      console.log(error);
      setStatus({ loading: false, success: false, error: 'Failed to send message. Please ensure you are connected to the internet.' });
    });
  };

  return (
    <Box sx={{ py: 10, backgroundColor: '#f9f9f9', minHeight: '60vh' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ fontWeight: 900, color: '#1c1c1c', textAlign: 'center', mb: 5 }}>
          Contact Us
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {status.success && <Alert severity="success">Message sent successfully!</Alert>}
              {status.error && <Alert severity="error">{status.error}</Alert>}
              
              <TextField 
                label="Name" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                variant="outlined" 
                fullWidth 
                required 
              />
              <TextField 
                label="Email" 
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined" 
                fullWidth 
                required 
              />
              <TextField 
                label="Message" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                variant="outlined" 
                multiline 
                rows={4} 
                fullWidth 
                required 
              />
              <Button 
                type="submit" 
                disabled={status.loading}
                variant="contained" 
                sx={{ backgroundColor: '#3EB2F1', color: '#000', fontWeight: 700, '&:hover': { backgroundColor: '#2796D1' } }}
              >
                {status.loading ? <CircularProgress size={24} color="inherit" /> : 'Send Message'}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
