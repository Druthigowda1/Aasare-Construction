import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import Home from '@mui/icons-material/Home';

const Header = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#1c1c1c', borderBottom: '3px solid #3EB2F1' }}>
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between', height: '90px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src="/logo.png" alt="ASR Constructions Logo" style={{ height: '60px', marginRight: '10px' }} />
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
            {['HOME', 'ABOUT US', 'SERVICES', 'PROJECTS', 'CONTACT US'].map((item) => (
              <Button key={item} sx={{ color: '#fff', fontWeight: 600, '&:hover': { color: '#3EB2F1', backgroundColor: 'transparent' } }}>
                {item}
              </Button>
            ))}
          </Box>

          <Button 
            variant="contained" 
            sx={{ 
                backgroundColor: '#3EB2F1', 
                color: '#000', 
                fontWeight: 700,
                borderRadius: '0px',
                px: 4,
                '&:hover': { backgroundColor: '#2796D1' }
            }}
          >
            BOOK APPOINTMENT
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;