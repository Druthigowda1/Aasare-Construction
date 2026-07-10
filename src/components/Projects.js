import React from 'react';
import { Box, Typography, Container, Grid, Button } from '@mui/material';
import useSEO from '../hooks/useSEO';
import { Link } from 'react-router-dom';
import project1 from '../assets/project1.png';
import residential from '../assets/residential.png';
import commercial from '../assets/commercial.png';

export const projects = [
  { id: '1', title: 'Modern Villa, Kunigal', img: residential, type: 'Residential', description: 'A beautifully crafted modern villa with spacious interiors and a luxurious touch, built to offer the perfect residential experience.' },
  { id: '2', title: 'Cloud-9 Offices, Bangalore', img: commercial, type: 'Commercial', description: 'A state-of-the-art commercial building designed for productivity and aesthetics, located in the heart of the IT hub.' },
  { id: '3', title: 'The Aasare Residency', img: project1, type: 'Residential', description: 'An elegant residential project focusing on community living and eco-friendly design in Maddur.' }
];

const Projects = () => {
  useSEO({
    title: 'Our Projects',
    description: 'Explore our portfolio of completed residential and commercial construction projects.',
    keywords: 'construction portfolio, completed projects, Aasare past work, building portfolio'
  });

  return (
    <Box sx={{ py: 2, backgroundColor: '#fff' , mt:'-60px'}}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography variant="h6" sx={{ color: '#2094d2ff', fontWeight: 800, mb: 1, letterSpacing: '1px' , fontFamily:'Manrope'}}>
            PROJECT GALLERY
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 900, color: '#0d2677ff', fontSize: { xs: '2rem', md: '3rem' } }}>
            Unveiling Our Latest Achievements
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item xs={12} md={4} key={project.id}>
              <Box
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  height: '400px',
                  '&:hover .overlay': { opacity: 1 },
                  '&:hover img': { transform: 'scale(1.1)' }
                }}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: '0.5s' }}
                />
                <Box
                  className="overlay"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    opacity: 0,
                    transition: '0.3s',
                    p: 3,
                    textAlign: 'center'
                  }}
                >
                  <Typography variant="h5" sx={{ color: '#3EB2F1', fontWeight: 900, mb: 1 }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#fff', mb: 3 }}>
                    {project.type}
                  </Typography>
                  <Button
                    component={Link}
                    to={`/project/${project.id}`}
                    variant="outlined"
                    sx={{ borderColor: '#3EB2F1', color: '#3EB2F1', borderRadius: 0, fontWeight: 700, '&:hover': { backgroundColor: '#3EB2F1', color: '#000' } }}
                  >
                    VIEW PROJECT
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button variant="contained" sx={{  backgroundColor: '#2796D1', color: '#1c1313ff', px: 4, py: 2, borderRadius: 10, fontWeight: 700 , fontFamily:'Manrope'}}>
            ALL PROJECTS
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
