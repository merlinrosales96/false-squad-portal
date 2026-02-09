import { useState } from 'react';
import { Box, AppBar, Toolbar, useScrollTrigger, Avatar, Container, Typography, MenuItem, Drawer, IconButton, alpha } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Close } from '@mui/icons-material';
import Logo from '/images/logo.webp';
import { NavButtonsLeft, NavButtonsRight } from '../../utils/NavbarList';

function AppAppBar() {
    const [open, setOpen] = useState(false);
    const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 50 });

    const toggleDrawer = (newOpen: boolean) => () => setOpen(newOpen);

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

    // Estilo común para los links
    const navLinkStyle = {
        py: '6px',
        px: '12px',
        borderRadius: '8px',
        transition: 'all 0.3s ease',
        '&:hover': {
            bgcolor: alpha('#00cec9', 0.1), // Usando el color primario de tu tema
            color: '#00cec9',
            transform: 'translateY(-2px)',
        },
    };

    return (
        <AppBar
            position="fixed"
            sx={{
                boxShadow: 0,
                bgcolor: 'transparent',
                backgroundImage: 'none',
                mt: trigger ? 0 : 2, // Se pega arriba al hacer scroll
                transition: 'margin 0.3s ease',
            }}
        >
            <Container maxWidth="lg">
                <Toolbar
                    sx={(theme) => ({
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        borderRadius: trigger ? '0 0 20px 20px' : '16px',
                        bgcolor: trigger ? alpha(theme.palette.background.default, 0.7) : 'transparent',
                        backdropFilter: trigger ? 'blur(12px)' : 'none',
                        border: trigger ? `1px solid ${alpha(theme.palette.primary.main, 0.1)}` : 'none',
                        transition: 'all 0.3s ease',
                        py: 1,
                    })}
                >
                    {/* Navegación Izquierda */}
                    <Box sx={{ flex: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', gap: 1 }}>
                        {NavButtonsLeft.map((item) => (
                            <MenuItem key={item.id} onClick={() => scrollToSection(item.id)} sx={navLinkStyle}>
                                <Typography variant="button" sx={{ fontFamily: 'RussoOne', fontSize: '0.9rem' }}>
                                    {item.name}
                                </Typography>
                            </MenuItem>
                        ))}
                    </Box>

                    {/* Logo Central */}
                    <Box sx={{ mx: 4, display: 'flex', justifyContent: 'center' }}>
                        <Avatar 
                            alt="Logo" 
                            src={Logo} 
                            sx={{ 
                                width: trigger ? 50 : 70, 
                                height: trigger ? 50 : 70, 
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                border: `2px solid ${trigger ? '#00cec9' : 'transparent'}`,
                                '&:hover': { transform: 'scale(1.1)' }
                            }} 
                            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                        />
                    </Box>

                    {/* Navegación Derecha */}
                    <Box sx={{ flex: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-start', gap: 1 }}>
                        {NavButtonsRight.map((item) => (
                            <MenuItem key={item.id} onClick={() => scrollToSection(item.id)} sx={navLinkStyle}>
                                <Typography variant="button" sx={{ fontFamily: 'RussoOne', fontSize: '0.9rem' }}>
                                    {item.name}
                                </Typography>
                            </MenuItem>
                        ))}
                    </Box>

                    {/* Mobile Menu Button */}
                    <Box sx={{ display: { md: 'none' } }}>
                        <IconButton onClick={toggleDrawer(true)} color="primary">
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>

            {/* Drawer corregido para el tema Dark */}
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box sx={{ width: 250, p: 3, bgcolor: 'background.default', height: '100%' }}>
                    <IconButton onClick={toggleDrawer(false)} sx={{ mb: 2 }}><Close /></IconButton>
                    {[...NavButtonsLeft, ...NavButtonsRight].map((item) => (
                        <MenuItem key={item.id} onClick={() => scrollToSection(item.id)} sx={{ my: 1, borderRadius: '8px' }}>
                            <Typography variant="h6" sx={{ fontFamily: 'RussoOne' }}>{item.name}</Typography>
                        </MenuItem>
                    ))}
                </Box>
            </Drawer>
        </AppBar>
    );
}

export default AppAppBar;