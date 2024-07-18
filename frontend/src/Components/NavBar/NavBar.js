import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link as ScrollLink } from 'react-scroll';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import '../NavBar/NavBar.css'

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSignUp = (event) => {
    navigate('/signup');
  };

  return (
    <AppBar position="absolute" color="transparent" elevation={0}>
      <Toolbar disableGutters>
        <Button>
          <MenuIcon sx={{ color: 'black' }} />
        </Button>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', marginRight: '20px' }}>
          <ScrollLink to="home" smooth={true} duration={500} offset={-70}>
            <Button color="inherit">Home</Button>
          </ScrollLink>
          <ScrollLink to="how-it-works" smooth={true} duration={500} offset={-70}>
            <Button color="inherit">How it Works</Button>
          </ScrollLink>
          <ScrollLink to="subscription" smooth={true} duration={500} offset={-70}>
            <Button color="inherit">Subscription</Button>
          </ScrollLink>
          <button className="iconButton">
            <NotificationsIcon />
          </button>
          <button className="iconButton">
            <HelpOutlineIcon />
          </button>
          <button className="iconButton" onClick={handleMenuClick}>
            <AccountCircleIcon />
          </button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleMenuClose}>Login</MenuItem>
            <MenuItem onClick={handleSignUp}>Sign Up</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;