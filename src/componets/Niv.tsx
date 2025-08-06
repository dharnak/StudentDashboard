import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box, Button, useMediaQuery, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';

const Niv = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'rgb(2, 46, 32)' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Title */}
        <Typography variant="h6" component="div">
          Student Dashboard
        </Typography>

        {/* Desktop Links */}
        {!isMobile && (
          <Box sx={{ display: 'flex', gap: 4 }}>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/StudentEntry">Student Entry</Button>
            <Button color="inherit" component={Link} to="/studentDetails">Student Details</Button>
          </Box>
        )}

        {/* Mobile Menu */}
        {isMobile && (
          <>
            <IconButton
              size="large"
              color="inherit"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <MenuItem onClick={handleMenuClose} component={Link} to="/">Home</MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/StudentEntry">Student Entry</MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/studentDetails">Student Details</MenuItem>
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Niv