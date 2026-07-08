import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Home from '@mui/icons-material/Home';
import aasare from '../assets/aasare.png';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'SERVICES', path: '/services' },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'CONTACT US', path: '/contact' }
  ];

  const isTransparent = isHome && !scrolled;

  return (
    <AppBar
      position={isHome ? "fixed" : "sticky"}
      elevation={scrolled || !isHome ? 4 : 0}
      sx={{
        backgroundColor: isTransparent ? 'transparent' : '#ffffff',
        borderBottom: isTransparent ? 'none' : '3px solid #3EB2F1',
        transition: 'all 0.3s ease-in-out',
        paddingTop: isTransparent ? '10px' : '0px'
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between', height: '80px', minHeight: '80px', maxHeight: '80px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => navigate('/')}>
            <img src={aasare} alt="ASR Constructions Logo" style={{ height: '120px', marginRight: '10px', transform: 'translateY(20px)' }} />
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                component={Link}
                to={item.path}
                sx={{
                  color: isTransparent ? '#ffffff' : '#0c0202ff',
                  fontWeight: 600,
                  '&:hover': { color: '#3EB2F1', backgroundColor: 'transparent' }
                }}
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
              borderRadius: '20px',
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