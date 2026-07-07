import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, Typography, Container, Button, Grid } from '@mui/material';
import { projects } from './Projects';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <Box sx={{ py: 10, textAlign: 'center', minHeight: '60vh' }}>
        <Typography variant="h4">Project Not Found</Typography>
        <Button component={Link} to="/projects" sx={{ mt: 3 }} variant="contained">Back to Projects</Button>
      </Box>
    );
  }

  return (
    <Box sx={{ py: 10, backgroundColor: '#f9f9f9', minHeight: '60vh' }}>
      <Container maxWidth="lg">
        <Button component={Link} to="/projects" sx={{ mb: 4, color: '#1c1c1c', fontWeight: 600 }}>
          &larr; BACK TO PROJECTS
        </Button>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <img src={project.img} alt={project.title} style={{ width: '100%', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ fontWeight: 900, color: '#1c1c1c', mb: 2 }}>
              {project.title}
            </Typography>
            <Typography variant="h6" sx={{ color: '#3EB2F1', fontWeight: 600, mb: 4, letterSpacing: '2px' }}>
              {project.type.toUpperCase()} PROJECT
            </Typography>
            <Typography variant="body1" sx={{ color: '#555', fontSize: '1.1rem', lineHeight: 1.8, mb: 4 }}>
              {project.description}
            </Typography>
            <Button 
              variant="contained" 
              component={Link}
              to="/contact"
              sx={{ 
                backgroundColor: '#3EB2F1', 
                color: '#000', 
                borderRadius: 0, 
                px: 5, 
                py: 1.5, 
                fontWeight: 700, 
                '&:hover': { backgroundColor: '#1c1c1c', color: '#fff' } 
              }}
            >
              ENQUIRE NOW
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectDetails;
