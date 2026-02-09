import { Box, Typography, Button, Container, alpha, keyframes } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { VideogameAssetOff } from '@mui/icons-material'; // Cambié el icono por uno más gamer

// Animación de parpadeo tipo "Insert Coin" o error de sistema
const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`;

const NotFound = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <Container
            maxWidth="md"
            sx={{
                minHeight: '80vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                textAlign: 'center',
                position: 'relative'
            }}
        >
            {/* Decoración de fondo: Un 404 gigante y sutil */}
            <Typography
                sx={{
                    position: 'absolute',
                    fontSize: { xs: '12rem', md: '20rem' },
                    fontWeight: 900,
                    color: alpha('#fff', 0.03),
                    zIndex: 0,
                    userSelect: 'none',
                    fontFamily: 'RussoOne'
                }}
            >
                404
            </Typography>

            <Box sx={{ zIndex: 1 }}>
                {/* Icono con Glow */}
                <VideogameAssetOff
                    sx={{
                        fontSize: 100,
                        color: 'primary.main',
                        mb: 2,
                        filter: 'drop-shadow(0px 0px 15px rgba(0, 206, 201, 0.5))',
                        animation: `${blink} 2s infinite`
                    }}
                />

                <Typography
                    variant='h2'
                    sx={{
                        fontFamily: 'RussoOne',
                        color: 'primary.main',
                        mb: 1,
                        fontSize: { xs: '2.5rem', md: '4rem' },
                        textShadow: '0px 0px 10px rgba(0, 206, 201, 0.3)'
                    }}
                >
                    PÁGINA NO ENCONTRADA
                </Typography>

                <Typography
                    variant='h5'
                    sx={{
                        fontFamily: 'RussoOne',
                        color: 'secondary.main',
                        mb: 3,
                        letterSpacing: 1
                    }}
                >
                    ¡TE FUISTE DE MAPA, MANO!
                </Typography>

                <Typography
                    variant='body1'
                    sx={{
                        color: 'text.secondary',
                        mb: 5,
                        maxWidth: '500px',
                        mx: 'auto',
                        lineHeight: 1.6
                    }}
                >
                    Parece que tiraste un flash donde no era o te saliste del servidor.
                    Esta zona no existe en el universo de <strong>False Squad</strong>.
                </Typography>

                <Button
                    variant='contained'
                    size="large"
                    onClick={handleGoHome}
                    sx={{
                        fontFamily: 'RussoOne',
                        px: 6,
                        py: 1.5,
                        borderRadius: '12px',
                        fontSize: '1.1rem',
                        boxShadow: (theme) => `0 0 20px ${alpha(theme.palette.primary.main, 0.4)}`,
                        '&:hover': {
                            transform: 'scale(1.05)',
                            bgcolor: 'primary.dark'
                        },
                        transition: 'all 0.3s'
                    }}
                >
                    REAPARECER EN HOME
                </Button>
            </Box>
        </Container>
    );
};

export default NotFound;