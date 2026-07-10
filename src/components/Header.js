import React, { useState, useEffect, useRef } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, Menu, MenuItem, Fade, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Home from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import aasare from '../assets/aasare.png';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const open = Boolean(anchorEl);
  const timeoutRef = useRef(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handlePopoverOpen = (event) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (!anchorEl) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handlePopoverClose = () => {
    timeoutRef.current = setTimeout(() => {
      setAnchorEl(null);
    }, 200); // 200ms delay to allow moving mouse into the menu
  };

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
    {
      name: 'SERVICES',
      path: '/services',
      dropdown: [
        { name: 'Exterior Design', path: '/exterior-design' },
        { name: 'Interior Design', path: '/interior-design' },
        { name: 'Commercial', path: '/commercial' },
        { name: 'Residential', path: '/residential' }
      ]
    },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'BLOG', path: '/blog' },
    { name: 'CONTACT US', path: '/contact' }
  ];

  const isTransparent = isHome && !scrolled;

  return (
    <AppBar
      position={isHome ? "fixed" : "sticky"}
      elevation={scrolled || !isHome ? 4 : 0}
      sx={{
        backgroundColor: isTransparent ? 'transparent' : '#ffffff',
        // borderBottom: isTransparent ? 'none' : '3px solid #3EB2F1',
        transition: 'all 0.3s ease-in-out',
        paddingTop: isTransparent ? '10px' : '0px'
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between', height: '80px', minHeight: '80px', maxHeight: '80px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => navigate('/')}>
            <img src={aasare} alt="Aasare Constructions Logo" style={{ height: '120px', marginRight: '5px', transform: 'translateY(20px)', marginTop: -35 }} />
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
            {navItems.map((item) => (
              <Box
                key={item.name}
                onMouseEnter={item.dropdown ? handlePopoverOpen : undefined}
                onMouseLeave={item.dropdown ? handlePopoverClose : undefined}
                sx={{ display: 'flex', alignItems: 'center', height: '100%' }}
              >
                <Button
                  component={Link}
                  to={item.path}
                  sx={{
                    color: isTransparent ? '#ffffff' : '#0c0202ff',
                    fontWeight: 600, fontFamily: 'Manrope',
                    '&:hover': { color: '#3EB2F1', backgroundColor: 'transparent' }
                  }}
                >
                  {item.name}
                </Button>
                {item.dropdown && (
                  <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handlePopoverClose}
                    MenuListProps={{
                      onMouseEnter: handlePopoverOpen,
                      onMouseLeave: handlePopoverClose,
                    }}
                    TransitionComponent={Fade}
                    sx={{
                      pointerEvents: 'auto'
                    }}
                    disableScrollLock
                    disablePortal
                    PopoverClasses={{ root: 'header-menu-popover' }}
                    PaperProps={{
                      sx: {
                        boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
                        borderRadius: '12px',
                        border: '1px solid #eee',
                        minWidth: '200px'
                      }
                    }}
                  >
                    {item.dropdown.map((dropItem) => (
                      <MenuItem
                        key={dropItem.name}
                        component={Link}
                        to={dropItem.path}
                        onClick={handlePopoverClose}
                        sx={{
                          py: 1.5,
                          px: 3,
                          fontWeight: 600,
                          fontFamily: 'Manrope',
                          '&:hover': {
                            backgroundColor: '#f9f9f9',
                            color: '#3EB2F1'
                          }
                        }}
                      >
                        {dropItem.name}
                      </MenuItem>
                    ))}
                  </Menu>
                )}
              </Box>
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
              px: { xs: 2, sm: 3, md: 4 },
              py: { xs: 0.5, sm: 0.75, md: 1 },
              fontFamily: 'Manrope',
              fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.875rem' },
              '&:hover': { backgroundColor: '#2796D1' }
            }}
          >
            BOOK APPOINTMENT
          </Button>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' }, ml: 1, color: isTransparent ? '#ffffff' : '#0c0202ff' }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile Navigation Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 260, pt: 2 },
        }}
      >
        <List>
          {navItems.map((item) => (
            <React.Fragment key={item.name}>
              <ListItem component={Link} to={item.path} onClick={handleDrawerToggle} sx={{ color: '#000' }}>
                <ListItemText primary={item.name} primaryTypographyProps={{ fontFamily: 'Manrope', fontWeight: 800 }} />
              </ListItem>
              {item.dropdown && item.dropdown.map((dropItem) => (
                <ListItem key={dropItem.name} component={Link} to={dropItem.path} onClick={handleDrawerToggle} sx={{ pl: 4, color: '#444' }}>
                  <ListItemText primary={dropItem.name} primaryTypographyProps={{ fontFamily: 'Manrope', fontWeight: 600 }} />
                </ListItem>
              ))}
            </React.Fragment>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;