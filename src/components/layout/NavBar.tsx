/*import { useState, useEffect } from 'react';
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

        <Avatar
          alt="Remy Sharp"
          src={logo}
          sx={{ width: 64, height: 64 }}
        />

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
*/

/*import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, Box, Avatar, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/images/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Avatar alt="Logo" src={logo} sx={{ width: 64, height: 64, mx: 'auto', my: 2 }} />
      <List>
        {['Inicio', 'Videos', 'Contacto', 'Discord'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      elevation={scrolled ? 4 : 0}
      sx={{
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
        color: scrolled ? 'black' : 'white',
        transition: 'background-color 0.3s ease, color 0.3s ease',
        px: 4,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
          <IconButton color="inherit" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
          {['Inicio', 'Videos'].map((text) => (
            <Button key={text} color="inherit">{text}</Button>
          ))}
        </Box>
        <Avatar alt="Logo" src={logo} sx={{ width: 64, height: 64 }} />
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
          {['Contacto', 'Discord'].map((text) => (
            <Button key={text} color="inherit">{text}</Button>
          ))}
        </Box>
      </Toolbar>
      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle} sx={{ width: '60%' }}>
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
*/


import * as React from 'react';
import { Box, AppBar, Avatar, Toolbar, useScrollTrigger, Container, Divider, Typography, MenuItem, Drawer, IconButton, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Logo from '/images/logo.png';
import { NavButtonsLeft, NavButtonsRight } from '../../utils/NavbarList';
import { useLocation, useNavigate } from 'react-router-dom';
/*import LanguageSwitcher from '../molecules/LanguageSwitcher';
import SocialButtons from '../molecules/SocialButton';*/
//import { useTranslation } from 'react-i18next';

/*const logoStyle = {
  width: '120px',
  height: '120px',
  cursor: 'pointer',
};*/

function NavBar() {


  const location = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const [open, setOpen] = React.useState(false);
  //const { t } = useTranslation();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setOpen(false);
    }
  };

  const goHome = () => {
    if (location.pathname === '/') {
      scrollToSection("home");
    }
    else {
      window.location.href = '/';
    }
  };

  const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 1
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={() => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: '15px',
              bgcolor: trigger ? 'rgba(255,0,255,0.11)' : 'transparent',
              maxHeight: 40,
              border: '0',
              borderColor: 'divider',
            })}
          >

            {/* Left Container */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
              {location.pathname === "/" ?
                NavButtonsLeft.map((item) => (
                  <MenuItem
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    sx={{ py: '6px', px: '12px' }}
                  >
                    <Typography variant="h6" color="text.primary">
                      {item.name}
                    </Typography>
                  </MenuItem>
                ))
                :
                <></>
              }
            </Box>

            {/* Center Logo */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
              {/*<Typography onClick={() => goHome()} component="div">
                                <img
                                    src={
                                        Logo
                                    }
                                    style={logoStyle}
                                    alt="logo of sitemark"
                                />
                            </Typography>*/}
              <Avatar alt="Logo" onClick={() => goHome()} src={Logo} sx={{ width: 72, height: 72, mx: 'auto', my: 2, p: 1 }} />
            </Box>

            {/* Right Container */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-start' }}>
              {location.pathname === "/" ?
                NavButtonsRight.map((item) => (
                  <MenuItem
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    sx={{ py: '6px', px: '12px' }}
                  >
                    <Typography variant="h6" color="text.primary">
                      {item.name}
                    </Typography>
                  </MenuItem>
                ))
                :
                <>
                </>
              }
            </Box>

            {
              location.pathname === '/' ?
                <Stack sx={{
                  display: { sm: '', md: 'none' }, justifyContent: "flex-end",
                  alignItems: "flex-start"
                }}>
                  <IconButton
                    aria-label="menu"
                    onClick={toggleDrawer(true)}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                    <Box
                      sx={{
                        minWidth: '60dvw',
                        p: 2,
                        backgroundColor: 'background.paper',
                        flexGrow: 1,
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'end',
                          flexGrow: 1,
                        }}
                      >
                      </Box>
                      {NavButtonsLeft.map((item) => (
                        <MenuItem
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                        >
                          {item.name}
                        </MenuItem>
                      ))}
                      {NavButtonsRight.map((item) => (
                        <MenuItem
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                        >
                          {item.name}
                        </MenuItem>
                      ))}
                      <Divider />
                    </Box>
                  </Drawer>
                </Stack>
                :
                <Box sx={{ display: { sm: '', md: '' } }}>
                  <IconButton
                    aria-label="menu"
                    onClick={() => handleGoBack()}
                  >
                    <KeyboardBackspaceIcon />
                  </IconButton>
                </Box>
            }
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default NavBar;