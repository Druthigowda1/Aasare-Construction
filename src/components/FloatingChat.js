import React, { useState } from 'react';
import { Box, IconButton, Paper, Typography, Button, Fade, Divider } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import CloseIcon from '@mui/icons-material/Close';

const FloatingChat = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! Welcome to Aasare Constructions. How can we help you today?' }
  ]);

  // Options that the user can select
  const [options, setOptions] = useState([
    'Looking for Residential Construction',
    'Looking for Commercial Construction',
    'Get a Free Quote',
    'Other Inquiries'
  ]);

  const handleOptionClick = (option) => {
    // Add user's selected option to chat
    const newMessages = [...messages, { sender: 'user', text: option }];
    
    // Determine bot response
    let botResponse = '';
    let newOptions = [];

    if (option.includes('Residential') || option.includes('Commercial')) {
      botResponse = `Great! Our team specializes in ${option.includes('Residential') ? 'Residential' : 'Commercial'} projects. Would you like to schedule a free consultation?`;
      newOptions = ['Yes, schedule consultation', 'No, just browsing'];
    } else if (option === 'Get a Free Quote') {
      botResponse = 'Awesome! Please contact us via WhatsApp or leave a message on our Contact page to get a detailed quote.';
      newOptions = ['Go to Contact Page', 'Chat on WhatsApp', 'Start Over'];
    } else if (option === 'Go to Contact Page') {
      window.location.href = '/contact';
      return;
    } else if (option === 'Chat on WhatsApp') {
      window.open('https://wa.me/917338395468', '_blank');
      return;
    } else if (option === 'Start Over') {
      botResponse = 'How else can we help you?';
      newOptions = [
        'Looking for Residential Construction',
        'Looking for Commercial Construction',
        'Get a Free Quote',
        'Other Inquiries'
      ];
    } else {
      botResponse = 'Thank you for reaching out! Please use the WhatsApp button below for immediate assistance from our team.';
      newOptions = ['Start Over'];
    }

    // Update state with a slight delay for realistic feel
    setMessages(newMessages);
    setOptions([]); // Hide options while "typing"

    setTimeout(() => {
      setMessages([...newMessages, { sender: 'bot', text: botResponse }]);
      setOptions(newOptions);
    }, 600);
  };

  return (
    <Box sx={{ position: 'fixed', bottom: 20, right: 20, zIndex: 9999, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 2 }}>
      
      {/* Chat Window */}
      <Fade in={chatOpen}>
        <Paper 
          elevation={6} 
          sx={{ 
            width: 320, 
            height: 450, 
            display: chatOpen ? 'flex' : 'none', 
            flexDirection: 'column',
            borderRadius: '12px',
            overflow: 'hidden'
          }}
        >
          {/* Header */}
          <Box sx={{ backgroundColor: '#3EB2F1', color: '#fff', p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.1rem' }}>Aasare Assistant</Typography>
            <IconButton size="small" onClick={() => setChatOpen(false)} sx={{ color: '#fff' }}>
              <CloseIcon />
            </IconButton>
          </Box>
          
          {/* Chat Messages */}
          <Box sx={{ flexGrow: 1, p: 2, overflowY: 'auto', backgroundColor: '#f9f9f9', display: 'flex', flexDirection: 'column', gap: 2 }}>
            {messages.map((msg, idx) => (
              <Box 
                key={idx} 
                sx={{ 
                  alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  backgroundColor: msg.sender === 'user' ? '#1c1c1c' : '#fff',
                  color: msg.sender === 'user' ? '#fff' : '#1c1c1c',
                  p: 1.5,
                  borderRadius: '12px',
                  borderBottomRightRadius: msg.sender === 'user' ? 0 : '12px',
                  borderBottomLeftRadius: msg.sender === 'bot' ? 0 : '12px',
                  maxWidth: '85%',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
                }}
              >
                <Typography variant="body2" sx={{ lineHeight: 1.5 }}>{msg.text}</Typography>
              </Box>
            ))}
          </Box>

          <Divider />

          {/* Options Selection (No text input) */}
          <Box sx={{ p: 2, backgroundColor: '#fff', display: 'flex', flexDirection: 'column', gap: 1 }}>
            {options.map((option, idx) => (
              <Button 
                key={idx} 
                variant="outlined" 
                size="small"
                onClick={() => handleOptionClick(option)}
                sx={{ 
                  borderRadius: '20px', 
                  textTransform: 'none', 
                  justifyContent: 'flex-start',
                  borderColor: '#3EB2F1',
                  color: '#1c1c1c',
                  '&:hover': { backgroundColor: '#3EB2F1', color: '#fff' }
                }}
              >
                {option}
              </Button>
            ))}
            {options.length === 0 && (
              <Typography variant="caption" sx={{ color: '#aaa', textAlign: 'center', py: 1 }}>
                Typing...
              </Typography>
            )}
          </Box>
        </Paper>
      </Fade>

      {/* Floating Action Buttons */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <IconButton 
          component="a"
          href="https://wa.me/917338395468"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ 
            backgroundColor: '#25D366', 
            color: '#fff', 
            width: 56, 
            height: 56,
            boxShadow: '0 4px 12px rgba(37, 211, 102, 0.4)',
            '&:hover': { backgroundColor: '#1ebe57' }
          }}
        >
          <WhatsAppIcon fontSize="large" />
        </IconButton>
        
        <IconButton 
          onClick={() => setChatOpen(!chatOpen)}
          sx={{ 
            backgroundColor: '#1c1c1c', 
            color: '#fff', 
            width: 56, 
            height: 56,
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
            '&:hover': { backgroundColor: '#3EB2F1' }
          }}
        >
          {chatOpen ? <CloseIcon fontSize="large" /> : <SmartToyIcon fontSize="large" />}
        </IconButton>
      </Box>

    </Box>
  );
};

export default FloatingChat;
