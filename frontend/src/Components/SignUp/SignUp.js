import React from 'react';
import { Container, Typography, TextField, Button, Link, Box } from '@mui/material';
import PrimarySearchAppBar from '../NavBar2/NavBar2';

const SignUpPage = () => {
  return (
    <>
      <PrimarySearchAppBar/>
    <Container maxWidth="xs">
      <Box 
        display="flex" 
        flexDirection="column" 
        alignItems="center" 
        justifyContent="center" 
        minHeight="100vh"
      >
        <Typography 
          variant="h5" 
          component="h1" 
          sx={{ fontSize: '25px', fontWeight: 600, mb: 1, lineHeight: '100px' }}
        >
          Get started with LawLinks
        </Typography>

        <Box sx={{ width: '100%', mb: 2 }}>
          <Typography sx={{ fontSize: '15px', fontWeight: 500, mb: 1 }}>
            Email Address
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
          />
        </Box>

        <Box sx={{ width: '100%', mb: 2 }}>
          <Typography sx={{ fontSize: '15px', fontWeight: 500, mb: 1 }}>
            Password
          </Typography>
          <TextField
            fullWidth
            type="password"
            variant="outlined"
          />
        </Box>

        <Typography 
          variant="body2" 
          sx={{ fontSize: '15px', fontWeight: 400, mt: 2, mb: 2, textAlign: 'left' }}
        >
          By clicking Sign Up, I agree to LawLinks terms and privacy policy.
        </Typography>
        
        <Box sx={{ width: '100%', textAlign: 'left' }}>
          <Button 
            variant="contained" 
            sx={{ width: '140px', height: '44px', borderRadius: '6px', mt: 3, mb: 2, background: '#622BEF' }}
          >
            Sign Up
          </Button>
          
          <Typography sx={{ fontSize: '12px', fontWeight: 400, mt: 2 }}>
            Already have an account?
            <Link 
              href="/login" 
              sx={{ fontSize: '12px', fontWeight: 400, ml: 1 }}
            >
              Log In
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
    </>
  );
};

export default SignUpPage;
