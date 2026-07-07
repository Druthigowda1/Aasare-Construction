import React from 'react';
import { Box, Typography, Container, Grid, Button } from '@mui/material';
import project1 from '../assets/project1.png';
import residential from '../assets/residential.png';
import commercial from '../assets/commercial.png';

const projects = [
    { title: 'Modern Villa, Mysore', img: residential, type: 'Residential' },
    { title: 'Cloud-9 Offices, Bangalore', img: commercial, type: 'Commercial' },
    { title: 'The ASR Residency', img: project1, type: 'Residential' }
];

const Projects = () => {
  return (
    <Box sx={{ py: 12, backgroundColor: '#fff' }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography variant="h6" sx={{ color: '#3EB2F1', fontWeight: 800, mb: 1, letterSpacing: '4px' }}>
            PROJECT GALLERY
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 900, color: '#1c1c1c' }}>
            Unveiling Our Latest Achievements
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={4} key={index}>
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
                  <Button variant="outlined" sx={{ borderColor: '#3EB2F1', color: '#3EB2F1', borderRadius: 0, fontWeight: 700 }}>
                    VIEW PROJECT
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
        
        <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Button variant="contained" sx={{ backgroundColor: '#1c1c1c', color: '#fff', px: 6, py: 2, borderRadius: 0, fontWeight: 700 }}>
                ALL PROJECTS
            </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
