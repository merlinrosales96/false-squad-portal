import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, Box, Avatar } from '@mui/material';
import logo from '../../assets/images/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      elevation={scrolled ? 4 : 0}
      sx={{
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
        color: scrolled ? 'black' : 'white',
        transition: 'background-color 0.3s ease, color 0.3s ease',
        px: 4, // padding horizontal para que no quede pegado a los bordes
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Botones izquierda */}
        <Box sx={{ display: 'flex', gap: 3 }}>
          <Button
            color="inherit"
            sx={{
              '&:hover': {
                backgroundColor: scrolled ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)',
              },
            }}
          >
            Inicio
          </Button>
          <Button
            color="inherit"
            sx={{
              '&:hover': {
                backgroundColor: scrolled ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)',
              },
            }}
          >
            Videos
          </Button>
        </Box>

        {/* Logo centrado */}
        <Avatar
          alt="Remy Sharp"
          src={logo}
          sx={{ width: 64, height: 64 }}
        />

        {/* Botones derecha */}
        <Box sx={{ display: 'flex', gap: 3 }}>
          <Button
            color="inherit"
            sx={{
              '&:hover': {
                backgroundColor: scrolled ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)',
              },
            }}
          >
            Contacto
          </Button>
          <Button
            color="inherit"
            sx={{
              '&:hover': {
                backgroundColor: scrolled ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)',
              },
            }}
          >
            Discord
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
