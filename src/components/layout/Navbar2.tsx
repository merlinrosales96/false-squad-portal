import { useState } from 'react';
import { Box, AppBar, Toolbar, useScrollTrigger, Container, Typography, MenuItem, Drawer, IconButton, keyframes } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Close } from '@mui/icons-material';
import { NavButtonsLeft, NavButtonsRight } from '../../utils/NavbarList';
import { useLocation, useNavigate } from 'react-router-dom';

const flicker = keyframes`
  0%, 94%, 100% { opacity: 1; }
  95% { opacity: 0.3; }
  97% { opacity: 0.6; }
`;

function AppAppBar() {
  const [open, setOpen] = useState(false);
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 40 });
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    const offset = 128;
    if (el) {
      const targetScroll = el.offsetTop - offset;
      el.scrollIntoView({ behavior: 'smooth' });
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

  const linkSx = {
    py: '4px', px: '12px', borderRadius: '3px',
    color: 'rgba(255,255,255,0.45)',
    transition: 'all 0.2s ease', cursor: 'pointer',
    '&:hover': { color: '#00ffe7', bgcolor: 'rgba(0,255,231,0.05)' },
  };

  return (
    <AppBar position="fixed" sx={{ boxShadow: 0, bgcolor: 'transparent', backgroundImage: 'none', mt: trigger ? 0 : 1.5, transition: 'margin 0.3s ease' }}>
      <Container maxWidth="lg">
        <Toolbar sx={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          borderRadius: trigger ? '0 0 8px 8px' : '8px',
          bgcolor: trigger ? 'rgba(4,4,10,0.92)' : 'transparent',
          backdropFilter: trigger ? 'blur(20px)' : 'none',
          border: trigger ? '1px solid rgba(0,255,231,0.07)' : 'none',
          borderTop: trigger ? 'none' : undefined,
          transition: 'all 0.35s ease',
          px: { xs: 2, md: 3 }, py: 0.8,
          boxShadow: trigger ? '0 4px 30px rgba(0,0,0,0.7), 0 1px 0 rgba(0,255,231,0.05)' : 'none',
        }}>

          {/* Left */}
          <Box sx={{ flex: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', gap: 0.5 }}>
            {NavButtonsLeft.map((item) => (
              <MenuItem key={item.id} onClick={() => handleNavClick(item.id)} sx={linkSx}>
                <Typography variant="button" sx={{ fontFamily: 'RussoOne', fontSize: '0.75rem', letterSpacing: 1.5 }}>
                  {item.name}
                </Typography>
              </MenuItem>
            ))}
          </Box>

          {/* Logo */}
          <Box onClick={() => handleNavClick('home')} sx={{
            mx: 3, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 1.5,
            transition: 'all 0.3s', '&:hover': { opacity: 0.75 },
          }}>
            <Box sx={{ position: 'relative' }}>
              <Box component="img" src="/images/logo.webp" alt="False Squad" sx={{
                width: trigger ? 36 : 48, height: trigger ? 36 : 48,
                borderRadius: '50%', transition: 'all 0.3s',
                border: `1px solid ${trigger ? 'rgba(0,255,231,0.4)' : 'rgba(255,255,255,0.08)'}`,
                boxShadow: trigger ? '0 0 10px rgba(0,255,231,0.2)' : 'none',
              }} />
              {/* Online dot */}
              <Box sx={{
                position: 'absolute', bottom: 1, right: 1,
                width: 8, height: 8, borderRadius: '50%',
                bgcolor: '#00ffe7', border: '1.5px solid #04040a',
                boxShadow: '0 0 6px #00ffe7',
                animation: `${flicker} 5s infinite`,
              }} />
            </Box>
            {!trigger && (
              <Typography sx={{
                fontFamily: 'RussoOne', fontSize: '0.9rem', letterSpacing: 3,
                background: 'linear-gradient(90deg, #00ffe7, #ff2d78)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                display: { xs: 'none', sm: 'block' }
              }}>
                FALSE SQUAD
              </Typography>
            )}
          </Box>

          {/* Right */}
          <Box sx={{ flex: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-start', gap: 0.5 }}>
            {NavButtonsRight.map((item) => (
              <MenuItem key={item.id} onClick={() => handleNavClick(item.id)} sx={linkSx}>
                <Typography variant="button" sx={{ fontFamily: 'RussoOne', fontSize: '0.75rem', letterSpacing: 1.5 }}>
                  {item.name}
                </Typography>
              </MenuItem>
            ))}
          </Box>

          {/* Mobile */}
          <Box sx={{ display: { md: 'none' } }}>
            <IconButton onClick={() => setOpen(true)} sx={{ color: 'rgba(0,255,231,0.7)', '&:hover': { color: '#00ffe7' } }}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}
        PaperProps={{ sx: { bgcolor: '#07070f', borderLeft: '1px solid rgba(0,255,231,0.08)', width: 260 } }}>
        <Box sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 5 }}>
            <Typography sx={{ fontFamily: 'RussoOne', fontSize: '0.65rem', letterSpacing: 4, color: 'rgba(0,255,231,0.6)' }}>
              // MENÚ
            </Typography>
            <IconButton onClick={() => setOpen(false)} sx={{ color: 'rgba(255,255,255,0.3)', '&:hover': { color: '#ff2d78' } }}>
              <Close fontSize="small" />
            </IconButton>
          </Box>
          {[...NavButtonsLeft, ...NavButtonsRight].map((item) => (
            <MenuItem key={item.id} onClick={() => handleNavClick(item.id)} sx={{
              py: 1.5, px: 2, mb: 0.5, borderRadius: '4px',
              color: 'rgba(255,255,255,0.5)',
              border: '1px solid transparent',
              '&:hover': { bgcolor: 'rgba(0,255,231,0.05)', color: '#00ffe7', borderColor: 'rgba(0,255,231,0.1)' },
            }}>
              <Typography sx={{ fontFamily: 'RussoOne', fontSize: '0.85rem', letterSpacing: 1.5 }}>{item.name}</Typography>
            </MenuItem>
          ))}
          <Box sx={{ mt: 'auto', pt: 3, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <Typography sx={{ fontFamily: 'RussoOne', fontSize: '0.58rem', letterSpacing: 3, color: 'rgba(255,255,255,0.15)' }}>
              FALSE SQUAD © {new Date().getFullYear()}
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default AppAppBar;
