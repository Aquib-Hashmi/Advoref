import React from 'react';
import { Grid, Button, Typography, Link } from '@mui/material';
import { styled } from '@mui/system';
import './Footer.css';

const FooterContainer = styled('footer')({
  width: '100%',
});

const TopSection = styled(Grid)({
  backgroundColor: '#EAE8E1',
  textAlign: 'center',
  padding: '32px 0',
  height: '220px'
});

const BottomSection = styled(Grid)({
  backgroundColor: '#444444',
  color: '#FFFFFF',
  textAlign: 'center',
  padding: '16px 0',
});

const FooterText = styled(Typography)({
  fontSize: '28px',
  fontWeight: 600,
});

const FooterButton = styled(Button)({
  marginTop: '32px',
  width: '200px',
  borderRadius: '40px',
  fontSize: '16px',
  fontWeight: 500,
  background: '#FCFCFE',
  color: 'black',
  '&:hover': {
    backgroundColor: '#FCFCFE', // Ensure background color stays the same
    color: 'black', // Ensure text color stays the same
    boxShadow: 'none', // Remove any hover-specific box shadow if applied
  },
});

const FooterLink = styled(Link)({
  color: '#FFFFFF',
  fontSize: '14px',
  fontWeight: 400,
  margin: '0 8px',
});

const Footer = () => {
  return (
    <FooterContainer>
      <TopSection container justifyContent="center" alignItems="center" direction="column">
        <FooterText variant="h2" id="footer-main-title">
          Get your Client Solutions built with LawLinks
        </FooterText>
        <FooterButton variant="contained">
          Get Started
        </FooterButton>
      </TopSection>
      <BottomSection container justifyContent="space-between" alignItems="center">
        <Grid item xs={6} style={{ textAlign: 'left', paddingLeft: '76px' }}>
          <Typography variant="body2">
            © Altum Infotech | All rights reserved. Altum Infotech Confidential. For internal use only.
          </Typography>
        </Grid>
        <Grid item xs={6} style={{ textAlign: 'right', paddingRight: '55px' }}>
          <FooterLink href="#">Terms of Use</FooterLink>
          <FooterLink href="#">Data Privacy Statement</FooterLink>
          <FooterLink href="#">Contact Us</FooterLink>
        </Grid>
      </BottomSection>
    </FooterContainer>
  );
};

export default Footer;
