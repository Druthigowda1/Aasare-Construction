import React, { useEffect } from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import AboutCTA from './AboutCTA';
import { blogPosts } from './Blog';
import useSEO from '../hooks/useSEO';

const BlogPost = () => {
  const { id: slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.slug === slug);

  useSEO({
    title: post ? post.title : 'Blog Post',
    description: post ? post.excerpt : 'Read our latest blog post on construction insights.',
    keywords: `aasare blog, ${post ? post.category : 'construction'}`
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <Box sx={{ pt: 15, pb: 10, textAlign: 'center', minHeight: '60vh' }}>
        <Typography variant="h4">Blog post not found.</Typography>
        <Button variant="contained" onClick={() => navigate('/blog')} sx={{ mt: 3, backgroundColor: '#3EB2F1', color: '#000', fontWeight: 700 }}>
          Back to Blog
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ backgroundColor: '#fff', minHeight: '100vh', pb: 10 }}>
      {/* Hero Image */}
      <Box sx={{ width: '100%', height: { xs: '300px', md: '500px' }, position: 'relative' }}>
        <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.8))' }} />
        
        {/* Back Button */}
        <Button 
          onClick={() => navigate('/blog')} 
          sx={{ 
            position: 'absolute', 
            top: { xs: 80, md: 96 }, 
            left: { xs: 16, md: 48 }, 
            color: '#fff', 
            fontWeight: 700, 
            zIndex: 10, 
            backgroundColor: 'rgba(0,0,0,0.4)',
            px: 2,
            py: 1,
            borderRadius: 8,
            fontFamily: 'Manrope',
            '&:hover': { backgroundColor: '#3EB2F1', color: '#000' } 
          }}
        >
          &larr; BACK TO ALL ARTICLES
        </Button>

        <Container maxWidth="md" sx={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', pb: 8, px: { xs: 3, md: 0 } }}>
          <Typography variant="overline" sx={{ color: '#3EB2F1', fontWeight: 800, letterSpacing: 2 }}>
            {post.date} &middot; BY {post.author.toUpperCase()}
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 900, color: '#fff', mt: 1, fontSize: { xs: '2rem', md: '3.5rem' }, lineHeight: 1.2 }}>
            {post.title}
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ pt: 6 }}>

        <Box sx={{ 
          '& p': { color: '#444', fontSize: '1.2rem', lineHeight: 1.9, mb: 4 },
          '& h5': { fontWeight: 800, color: '#1c1c1c', mt: 6, mb: 2 }
        }}>
          {post.content}
        </Box>
      </Container>
      
      <Box sx={{ mt: 10 }}>
        <AboutCTA />
      </Box>
    </Box>
  );
};

export default BlogPost;
