import React, { useState } from 'react';
import { Box, Typography, Container, Grid, TextField, Button, Alert, CircularProgress } from '@mui/material';
import useSEO from '../hooks/useSEO';

// TODO: Replace this URL with your deployed Google Apps Script Web App URL
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxRJ0wkSyMXVa4VKy4aEKM4HjesoaMQeUykGboOPC5qItK9nZNJg26gbTLs2KH5xbGFXg/exec';

const Appointment = () => {
  useSEO({
    title: 'Book an Appointment',
    description: 'Schedule a free consultation with Aasare Constructions to discuss your dream home or commercial building project.',
    keywords: 'book appointment construction, free consultation builders, schedule a meeting aasare'
  });

  const [formData, setFormData] = useState({
    Name: '',
    Phone: '',
    Date: ''
  });
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });

    const formBody = new URLSearchParams();
    for (const key in formData) {
      formBody.append(key, formData[key]);
    }

    fetch(SCRIPT_URL, {
      method: 'POST',
      body: formBody,
      mode: 'no-cors'
    })
      .then(() => {
        // With no-cors, the response is opaque, so we assume success if no error is thrown
        setStatus({ loading: false, success: true, error: '' });
        setFormData({ Name: '', Phone: '', Date: '' });
      })
      .catch(error => {
        console.error('Error!', error.message);
        setStatus({ loading: false, success: false, error: 'Failed to send request. Please ensure you are connected to the internet.' });
      });
  };

  return (
    <Box sx={{ py: 10, backgroundColor: '#f9f9f9', minHeight: '60vh' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ fontWeight: 900, color: '#1c1c1c', textAlign: 'center', mb: 5 }}>
          Book Appointment
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {status.success && <Alert severity="success">Your appointment request has been sent successfully!</Alert>}
              {status.error && <Alert severity="error">{status.error}</Alert>}

              <TextField
                label="Name"
                name="Name"
                value={formData.Name}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
              />
              <TextField
                label="Phone Number"
                name="Phone"
                value={formData.Phone}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
              />
              <TextField
                label="Preferred Date"
                name="Date"
                type="date"
                value={formData.Date}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
                InputLabelProps={{ shrink: true }}
              />
              <Button
                type="submit"
                disabled={status.loading}
                variant="contained"
                sx={{ backgroundColor: '#3EB2F1', color: '#000', fontWeight: 700, '&:hover': { backgroundColor: '#2796D1' } }}
              >
                {status.loading ? <CircularProgress size={24} color="inherit" /> : 'Book Now'}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Appointment;
