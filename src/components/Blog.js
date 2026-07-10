import React, { useState } from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, CardMedia, CardActionArea, Button, Divider } from '@mui/material';
import useSEO from '../hooks/useSEO';
import { Link } from 'react-router-dom';
import AboutCTA from './AboutCTA';
import bannerImg from '../assets/banner.png';
import interiorImg from '../assets/interiors.png';
import commercialImg from '../assets/commercial.png';

export const blogPosts = [
  {
    id: 1,
    slug: '5-essential-vastu-tips',
    title: "5 Essential Vastu Tips Before Starting Your New Home Construction",
    category: "Residential",
    date: "Jul 15 2026",
    author: "Expert Team",
    image: bannerImg,
    excerpt: "Building a new home is one of the most exciting milestones in life. For many families in India, ensuring that the new home complies with Vastu Shastra is just as important as the architectural design itself.",
    content: (
      <>
        <Typography variant="body1" paragraph>
          Building a new home is one of the most exciting milestones in life. For many families in India, ensuring that the new home complies with Vastu Shastra is just as important as the architectural design itself. Vastu helps channel positive energy, bringing peace, prosperity, and health to the residents.
        </Typography>
        <Typography variant="body1" paragraph>
          If you are planning to build your dream home in Maddur, Mysuru, or Bangalore, here are 5 essential Vastu tips you must consider before laying the foundation.
        </Typography>

        <Typography variant="h5" sx={{ mt: 4, mb: 1, fontWeight: 700, color: '#1c1c1c' }}>1. The Ideal Plot Shape and Direction</Typography>
        <Typography variant="body1" paragraph>
          Always opt for a square or rectangular plot, as they are believed to bring financial growth and stability. Plots facing North or East are considered the most auspicious. Avoid irregularly shaped plots or those with a missing corner, particularly the Northeast corner, as it represents spiritual growth.
        </Typography>

        <Typography variant="h5" sx={{ mt: 4, mb: 1, fontWeight: 700, color: '#1c1c1c' }}>2. The Main Entrance Placement</Typography>
        <Typography variant="body1" paragraph>
          The main entrance (Mahadwara) is where energy enters your home. According to Vastu, it should ideally be placed in the North, East, or Northeast direction. Ensure the entrance is well-lit, clutter-free, and uses high-quality wood. The door should always open inwards to invite positive energy.
        </Typography>

        <Typography variant="h5" sx={{ mt: 4, mb: 1, fontWeight: 700, color: '#1c1c1c' }}>3. Placement of the Pooja Room</Typography>
        <Typography variant="body1" paragraph>
          The Pooja room is the spiritual core of any Indian home. The Northeast corner (Ishan Kund) is the universally accepted best direction for the Pooja room, as it catches the early morning sun rays. Make sure you face East or North while praying, and avoid placing the Pooja room under a staircase or adjacent to a bathroom.
        </Typography>

        <Typography variant="h5" sx={{ mt: 4, mb: 1, fontWeight: 700, color: '#1c1c1c' }}>4. The Kitchen Location</Typography>
        <Typography variant="body1" paragraph>
          The kitchen represents the element of fire (Agni). The Southeast corner is the most ideal location for your kitchen. If that isn't possible, the Northwest is a secondary option. The person cooking should ideally face East. Never place the kitchen directly in front of the main door.
        </Typography>

        <Typography variant="h5" sx={{ mt: 4, mb: 1, fontWeight: 700, color: '#1c1c1c' }}>5. The Master Bedroom</Typography>
        <Typography variant="body1" paragraph>
          For the head of the family, the master bedroom should be located in the Southwest corner of the house. This direction promotes stability, strength, and longevity. When sleeping, ensure your head points towards the South or East for a restful and healthy sleep.
        </Typography>

        <Divider sx={{ my: 4 }} />

        <Typography variant="body1" paragraph sx={{ fontStyle: 'italic', fontWeight: 600 }}>
          At Aasare Constructions, our expert architects and civil engineers integrate these Vastu principles seamlessly into modern, luxurious home designs. Ready to build a harmonious home? Contact us today for a consultation!
        </Typography>
      </>
    )
  },
  {
    id: 2,
    slug: 'top-5-modern-kitchen-trends',
    title: "Top 5 Modern Kitchen Design Trends in 2026",
    category: "Interior",
    date: "Jun 22 2026",
    author: "Interior Design Team",
    image: interiorImg,
    excerpt: "The kitchen is the heart of every Indian home. From smart storage solutions to aesthetic modular setups, discover the top trends dominating kitchen designs this year.",
    content: (
      <>
        <Typography variant="body1" paragraph>The kitchen is no longer just a functional space; it has evolved into the central hub of the modern Indian home where families gather, cook, and connect. As we move through 2026, kitchen design continues to blend cutting-edge technology with warm, aesthetic appeal. If you're planning a home renovation or building a new home with Aasare Constructions, here are the top 5 modern kitchen trends you should consider.</Typography>

        <Typography variant="h5" sx={{ mt: 4, mb: 1, fontWeight: 700, color: '#1c1c1c' }}>1. Smart Appliances and Integration</Typography>
        <Typography variant="body1" paragraph>Technology is taking over the kitchen. From refrigerators that help you manage your grocery list to smart ovens that can be preheated via your smartphone on your commute home, integrated smart appliances are becoming standard.</Typography>

        <Typography variant="h5" sx={{ mt: 4, mb: 1, fontWeight: 700, color: '#1c1c1c' }}>2. Two-Tone Cabinetry</Typography>
        <Typography variant="body1" paragraph>Gone are the days of monochromatic kitchens. Combining deep, rich colors like navy blue or emerald green on lower cabinets with crisp white or light wood uppers creates stunning visual interest and makes the space feel larger.</Typography>

        <Typography variant="h5" sx={{ mt: 4, mb: 1, fontWeight: 700, color: '#1c1c1c' }}>3. Hidden Pantries and Clutter-Free Zones</Typography>
        <Typography variant="body1" paragraph>The minimalist aesthetic remains strong. Hidden walk-in pantries and deep drawers that conceal everyday appliances (like toasters and blenders) are highly requested to keep countertops pristine.</Typography>

        <Typography variant="h5" sx={{ mt: 4, mb: 1, fontWeight: 700, color: '#1c1c1c' }}>4. Sustainable Materials</Typography>
        <Typography variant="body1" paragraph>Eco-friendly materials, such as bamboo, reclaimed wood, and recycled glass countertops, are becoming incredibly popular as homeowners look to reduce their carbon footprint without sacrificing style.</Typography>

        <Typography variant="h5" sx={{ mt: 4, mb: 1, fontWeight: 700, color: '#1c1c1c' }}>5. Large Multi-functional Islands</Typography>
        <Typography variant="body1" paragraph>The kitchen island has grown into a massive, multi-functional piece of furniture. It now serves as a prep station, a dining table, a work-from-home desk, and a casual gathering spot all in one.</Typography>
      </>
    )
  },
  {
    id: 3,
    slug: 'why-turnkey-construction',
    title: "Why Turnkey Construction is the Best Choice for Your Dream Home",
    category: "Commercial",
    date: "May 08 2026",
    author: "Project Management Team",
    image: commercialImg,
    excerpt: "Building a home can be stressful if you have to manage multiple contractors. Learn how a turnkey construction solution saves you time, money, and headaches.",
    content: (
      <>
        <Typography variant="body1" paragraph>Building your dream home is a major life goal, but the process of coordinating architects, civil engineers, plumbers, electricians, and interior designers can quickly turn that dream into a stressful nightmare. This is where Turnkey Construction comes in.</Typography>

        <Typography variant="h5" sx={{ mt: 4, mb: 1, fontWeight: 700, color: '#1c1c1c' }}>What is Turnkey Construction?</Typography>
        <Typography variant="body1" paragraph>In a turnkey project, a single contractor (like Aasare Constructions) takes full responsibility for the entire project from start to finish. You simply "turn the key" and walk into your fully completed, ready-to-live-in home.</Typography>

        <Typography variant="h5" sx={{ mt: 4, mb: 1, fontWeight: 700, color: '#1c1c1c' }}>1. Single Point of Contact</Typography>
        <Typography variant="body1" paragraph>Instead of juggling phone calls with a dozen different vendors, you only communicate with your dedicated project manager. This streamlines communication and completely eliminates the "blame game" between different contractors.</Typography>

        <Typography variant="h5" sx={{ mt: 4, mb: 1, fontWeight: 700, color: '#1c1c1c' }}>2. Strict Budget and Timeline Adherence</Typography>
        <Typography variant="body1" paragraph>With a turnkey contract, the budget and timeline are finalized before construction begins. Since the contractor manages the entire workflow, there are far fewer unexpected delays or hidden costs.</Typography>

        <Typography variant="h5" sx={{ mt: 4, mb: 1, fontWeight: 700, color: '#1c1c1c' }}>3. Guaranteed Quality Control</Typography>
        <Typography variant="body1" paragraph>A dedicated firm ensures that the materials used and the craftsmanship provided meet strict quality standards across every phase of the build, from foundation to the final coat of paint.</Typography>
      </>
    )
  }
];

const Blog = () => {
  useSEO({
    title: 'Blog',
    description: 'Read the latest construction insights, vastu tips, and architecture trends on the Aasare Blog.',
    keywords: 'construction blog, vastu tips for home, interior design trends, turnkey construction guide'
  });

  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', 'Interior', 'Exterior', 'Commercial', 'Residential'];
  
  const filteredPosts = activeFilter === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeFilter);

  return (
    <Box sx={{ pt: 4, pb: 10, backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        {/* Blog Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 4 } }}>
          <Typography variant="overline" sx={{ color: '#3EB2F1', fontWeight: 800, letterSpacing: { xs: 1, md: 2 }, fontSize: { xs: '0.85rem', md: '1.25rem' } }}>
            CONSTRUCTION INSIGHTS
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 900, color: '#1c1c1c', fontSize: { xs: '2.5rem', md: '3.75rem' } }}>
            Aasare Blog
          </Typography>
        </Box>

        {/* Filter Buttons */}
        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2, mb: 8 }}>
          {categories.map((cat) => (
            <Button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              variant={activeFilter === cat ? 'contained' : 'outlined'}
              sx={{
                borderRadius: 20,
                textTransform: 'none',
                fontWeight: 700,
                fontFamily: 'Manrope',
                px: 3,
                py: 1,
                borderColor: activeFilter === cat ? 'transparent' : '#3EB2F1',
                color: activeFilter === cat ? '#fff' : '#3EB2F1',
                backgroundColor: activeFilter === cat ? '#3EB2F1' : 'transparent',
                '&:hover': {
                  backgroundColor: '#2796D1',
                  color: '#fff',
                  borderColor: 'transparent'
                }
              }}
            >
              {cat}
            </Button>
          ))}
        </Box>

        {/* Blog Grid */}
        <Grid container spacing={4}>
          {filteredPosts.length === 0 ? (
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ textAlign: 'center', color: '#666', mt: 4, mb: 8 }}>
                No blog posts found for this category yet. Check back soon!
              </Typography>
            </Grid>
          ) : (
            filteredPosts.map((post) => (
            <Grid item xs={12} md={4} key={post.id}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4 }}>
                {/* Image */}
                <Box 
                  component={Link}
                  to={`/blog/${post.slug}`}
                  sx={{ 
                    width: '100%', 
                    height: '220px', 
                    borderRadius: '8px', 
                    overflow: 'hidden',
                    display: 'block',
                    transition: 'transform 0.3s',
                    '&:hover img': { transform: 'scale(1.05)' }
                  }}
                >
                  <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }} />
                </Box>

                {/* Content */}
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <Typography 
                    component={Link}
                    to={`/blog/${post.slug}`}
                    variant="h6" 
                    sx={{ 
                      fontFamily: 'Manrope, sans-serif',
                      fontWeight: 800, 
                      color: '#1c1c1c', 
                      lineHeight: 1.3, 
                      mb: 1,
                      fontSize: { xs: '1.1rem', md: '1.25rem' },
                      textDecoration: 'none',
                      display: '-webkit-box',
                      WebkitLineClamp: 1,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      '&:hover': { color: '#3EB2F1' }
                    }}
                  >
                    {post.title}
                  </Typography>
                  <Typography variant="body2" sx={{ fontFamily: 'Manrope, sans-serif', color: '#666', mb: 1, fontWeight: 600, fontSize: '0.8rem' }}>
                    {post.date}
                  </Typography>
                  <Typography variant="body2" sx={{ fontFamily: 'Manrope, sans-serif', color: '#444', mb: 2, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {post.excerpt}
                  </Typography>
                  <Button 
                    variant="contained" 
                    component={Link}
                    to={`/blog/${post.slug}`}
                    sx={{ 
                      fontFamily: 'Manrope, sans-serif',
                      backgroundColor: '#3EB2F1', 
                      color: '#fff', 
                      textTransform: 'none',
                      fontWeight: 600,
                      borderRadius: '0',
                      px: 3,
                      py: 1,
                      '&:hover': { backgroundColor: '#2796D1' }
                    }}
                  >
                    Read More
                  </Button>
                </Box>
              </Box>
            </Grid>
            ))
          )}
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box sx={{ mt: 10 }}>
        <AboutCTA />
      </Box>
    </Box>
  );
};

export default Blog;
