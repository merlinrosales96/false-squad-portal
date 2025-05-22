import { useState } from 'react';
import { Box, AppBar, Toolbar, useScrollTrigger, Avatar, Container, Divider, Typography, MenuItem, Drawer, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Close } from '@mui/icons-material';
import Logo from '/images/logo.png';
import { NavButtonsLeft, NavButtonsRight } from '../../utils/NavbarList';
function AppAppBar() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };
    const goHome = () => {
        if (location.pathname === '/') {
            scrollToSection("home");
        }
        else {
            window.location.href = '/';
        }
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
                    mt: 2,
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
                            bgcolor:
                                trigger ? 'rgba(255,0,255,0.11)' : 'transparent',
                            backdropFilter: 'blur(24px)',
                            maxHeight: 40,
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
                        <Box
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                gap: 0.5,
                                alignItems: 'center',
                            }}
                        >
                        </Box>
                        <Box
                            sx={{
                                display: { xs: 'flex' },
                                gap: 0.5,
                                alignItems: 'center',
                            }}
                        >
                        </Box>
                        <Box sx={{ display: { sm: '', md: 'none' } }}>
                            <IconButton
                                aria-label="menu"
                                onClick={toggleDrawer(true)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Drawer
                                anchor="right"
                                open={open}
                                onClose={toggleDrawer(false)}
                                variant="temporary"
                                PaperProps={{
                                    sx: {
                                        width: '60%',
                                        height: '100%',
                                        backgroundColor: 'white',
                                    }
                                }}>
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
                                        <Box component="div" className="grid">
                                            <IconButton
                                                aria-label="close"
                                                onClick={toggleDrawer(false)}
                                            >
                                                <Close />
                                            </IconButton>
                                        </Box>
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
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}

export default AppAppBar;