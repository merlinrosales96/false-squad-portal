import { useState } from 'react';
import {
  Box, AppBar, Toolbar, useScrollTrigger,
  Container, Typography, MenuItem, Drawer, IconButton
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Close } from '@mui/icons-material';
import { NavButtonsLeft, NavButtonsRight } from '../../utils/NavbarList';
import { useLocation, useNavigate } from 'react-router-dom';

function AppAppBar() {
  const [open, setOpen] = useState(false);
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 40 });
  const toggleDrawer = (v: boolean) => () => setOpen(v);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
      setOpen(false);
    }
  };

  const handleNavClick = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToSection(id), 150);
    } else {
      scrollToSection(id);
    }
  };

  const linkStyle = {
    py: '5px', px: '14px', borderRadius: '6px',
    color: 'rgba(255,255,255,0.6)',
    transition: 'all 0.25s ease',
    cursor: 'pointer',
    '&:hover': { color: '#00ffe7', bgcolor: 'rgba(0,255,231,0.06)' },
  };

  return (
    <AppBar
      position="fixed"
      sx={{ boxShadow: 0, bgcolor: 'transparent', backgroundImage: 'none', mt: trigger ? 0 : 1.5, transition: 'margin 0.3s ease' }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={() => ({
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            borderRadius: trigger ? '0 0 16px 16px' : '14px',
            bgcolor: trigger ? 'rgba(6,6,8,0.85)' : 'transparent',
            backdropFilter: trigger ? 'blur(20px) saturate(1.5)' : 'none',
            border: trigger ? `1px solid rgba(0,255,231,0.08)` : 'none',
            borderTop: trigger ? 'none' : undefined,
            transition: 'all 0.35s ease',
            px: { xs: 2, md: 3 }, py: 1,
            boxShadow: trigger ? '0 4px 30px rgba(0,0,0,0.5)' : 'none',
          })}
        >
          {/* Left nav */}
          <Box sx={{ flex: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', gap: 0.5 }}>
            {NavButtonsLeft.map((item) => (
              <MenuItem key={item.id} onClick={() => handleNavClick(item.id)} sx={linkStyle}>
                <Typography variant="button" sx={{ fontFamily: 'RussoOne', fontSize: '0.8rem', letterSpacing: 1 }}>
                  {item.name}
                </Typography>
              </MenuItem>
            ))}
          </Box>

          {/* Logo central */}
          <Box
            onClick={() => handleNavClick('home')}
            sx={{
              mx: 3, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 1.5,
              transition: 'all 0.3s', '&:hover': { opacity: 0.8 },
            }}
          >
            <Box
              component="img"
              src="/images/logo.webp"
              alt="False Squad"
              sx={{
                width: trigger ? 38 : 52, height: trigger ? 38 : 52,
                borderRadius: '50%',
                transition: 'all 0.3s',
                border: `1.5px solid ${trigger ? 'rgba(0,255,231,0.5)' : 'rgba(255,255,255,0.1)'}`,
                boxShadow: trigger ? '0 0 12px rgba(0,255,231,0.25)' : 'none',
              }}
            />
            {!trigger && (
              <Typography sx={{
                fontFamily: 'RussoOne', fontSize: '1rem', letterSpacing: 2,
                background: 'linear-gradient(90deg, #00ffe7, #ff2d78)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                display: { xs: 'none', sm: 'block' }
              }}>
                FALSE SQUAD
              </Typography>
            )}
          </Box>

          {/* Right nav */}
          <Box sx={{ flex: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-start', gap: 0.5 }}>
            {NavButtonsRight.map((item) => (
              <MenuItem key={item.id} onClick={() => handleNavClick(item.id)} sx={linkStyle}>
                <Typography variant="button" sx={{ fontFamily: 'RussoOne', fontSize: '0.8rem', letterSpacing: 1 }}>
                  {item.name}
                </Typography>
              </MenuItem>
            ))}
          </Box>

          {/* Mobile */}
          <Box sx={{ display: { md: 'none' } }}>
            <IconButton onClick={toggleDrawer(true)} sx={{ color: '#00ffe7' }}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}
        PaperProps={{ sx: { bgcolor: '#0a0a0f', borderLeft: '1px solid rgba(0,255,231,0.1)', width: 260 } }}>
        <Box sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <Typography sx={{ fontFamily: 'RussoOne', fontSize: '0.9rem', letterSpacing: 3, color: '#00ffe7' }}>
              MENÚ
            </Typography>
            <IconButton onClick={toggleDrawer(false)} sx={{ color: 'rgba(255,255,255,0.4)' }}>
              <Close fontSize="small" />
            </IconButton>
          </Box>
          {[...NavButtonsLeft, ...NavButtonsRight].map((item) => (
            <MenuItem key={item.id} onClick={() => handleNavClick(item.id)}
              sx={{
                py: 1.5, px: 2, mb: 1, borderRadius: '8px', color: 'rgba(255,255,255,0.7)',
                '&:hover': { bgcolor: 'rgba(0,255,231,0.07)', color: '#00ffe7' },
              }}>
              <Typography sx={{ fontFamily: 'RussoOne', letterSpacing: 1 }}>{item.name}</Typography>
            </MenuItem>
          ))}
          <Box sx={{ mt: 'auto', pt: 3, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <Typography sx={{ fontFamily: 'RussoOne', fontSize: '0.7rem', letterSpacing: 3, color: 'rgba(255,255,255,0.2)' }}>
              FALSE SQUAD © {new Date().getFullYear()}
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default AppAppBar;
