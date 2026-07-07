import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Home from '@mui/icons-material/Home';
import aasare from '../assets/aasare.png';

const Header = () => {
  const navigate = useNavigate();

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'SERVICES', path: '/services' },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'CONTACT US', path: '/contact' }
  ];

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#f9f4f4ff', borderBottom: '3px solid #3EB2F1' }}>
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between', height: '90px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => navigate('/')}>
            <img src={aasare} alt="ASR Constructions Logo" style={{ height: '90px', marginRight: '10px' }} />
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                component={Link}
                to={item.path}
                sx={{ color: '#0c0202ff', fontWeight: 600, '&:hover': { color: '#3EB2F1', backgroundColor: 'transparent' } }}
              >
                {item.name}
              </Button>
            ))}
          </Box>

          <Button
            variant="contained"
            component={Link}
            to="/appointment"
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