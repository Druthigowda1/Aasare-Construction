import React from 'react';
import { Box, Typography, Container, Grid, TextField, Button } from '@mui/material';

const Contact = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: '#f9f9f9', minHeight: '60vh' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ fontWeight: 900, color: '#1c1c1c', textAlign: 'center', mb: 5 }}>
          Contact Us
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <TextField label="Name" variant="outlined" fullWidth />
              <TextField label="Email" variant="outlined" fullWidth />
              <TextField label="Message" variant="outlined" multiline rows={4} fullWidth />
              <Button variant="contained" sx={{ backgroundColor: '#3EB2F1', color: '#000', fontWeight: 700, '&:hover': { backgroundColor: '#2796D1' } }}>
                Send Message
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
