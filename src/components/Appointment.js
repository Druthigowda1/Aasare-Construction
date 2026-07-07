import React from 'react';
import { Box, Typography, Container, Grid, TextField, Button } from '@mui/material';

const Appointment = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: '#f9f9f9', minHeight: '60vh' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ fontWeight: 900, color: '#1c1c1c', textAlign: 'center', mb: 5 }}>
          Book Appointment
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <TextField label="Name" variant="outlined" fullWidth />
              <TextField label="Phone Number" variant="outlined" fullWidth />
              <TextField label="Preferred Date" type="date" variant="outlined" fullWidth InputLabelProps={{ shrink: true }} />
              <Button variant="contained" sx={{ backgroundColor: '#3EB2F1', color: '#000', fontWeight: 700, '&:hover': { backgroundColor: '#2796D1' } }}>
                Book Now
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Appointment;
