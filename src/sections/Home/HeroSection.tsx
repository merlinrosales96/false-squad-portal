import { Box, Typography, Button, Container, alpha, keyframes } from '@mui/material';

// Animación de flotado con un ligero cambio de escala
const float = keyframes`
  0% { transform: translateY(0px) scale(1); }
  50% { transform: translateY(-20px) scale(1.02); }
  100% { transform: translateY(0px) scale(1); }
`;

// Pulso sutil para el brillo del logo
const glowPulse = keyframes`
  0% { filter: drop-shadow(0px 0px 15px rgba(255, 64, 129, 0.4)); }
  50% { filter: drop-shadow(0px 0px 30px rgba(255, 64, 129, 0.7)); }
  100% { filter: drop-shadow(0px 0px 15px rgba(255, 64, 129, 0.4)); }
`;

const Hero = () => {
  return (
    <Box
      id="home"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        bgcolor: '#030000',
        backgroundImage: `url(/images/banner2.webp)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', 
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.85) 90%)',
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>

        {/* Logo de False Squad con Animación Dual */}
        <Box
          sx={{
            animation: `${float} 5s ease-in-out infinite, ${glowPulse} 4s ease-in-out infinite`,
            mb: 5,
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Box
            component="img"
            src="/images/slogan.webp"
            alt="False Squad"
            sx={{ 
              width: '100%', 
              maxWidth: { xs: '320px', md: '550px' }, 
              height: 'auto',
              transition: 'transform 0.3s ease',
              '&:hover': { transform: 'scale(1.05)' }
            }}
          />
        </Box>

        {/* Título Principal */}
        <Typography
          variant="h4"
          sx={{
            fontFamily: 'RussoOne',
            color: '#f48fb1',
            mb: 2,
            letterSpacing: '1px',
            textShadow: '0px 4px 10px rgba(0,0,0,0.5)',
            fontSize: { xs: '1.8rem', md: '2.8rem' }
          }}
        >
          Gritadera, clips y <span style={{ color: '#00cec9', textShadow: '0px 0px 15px rgba(0, 206, 201, 0.5)' }}>HERMANDAD</span>.
        </Typography>

        {/* Descripción */}
        <Typography
          variant="body1"
          sx={{
            color: 'rgba(255,255,255,0.7)',
            maxWidth: '650px',
            mx: 'auto',
            mb: 6,
            fontSize: { xs: '1rem', md: '1.25rem' },
            lineHeight: 1.7,
            fontStyle: 'italic'
          }}
        >
          Fails épicos y frases que solo nosotros entendemos. <br />
          10 panas dándolo todo <span style={{ color: '#ff4081', fontWeight: 'bold', textDecoration: 'underline' }}>SIN ASCO</span>.
        </Typography>

        {/* Botones Gaming */}
        <Box sx={{ display: 'flex', gap: { xs: 2, md: 3 }, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            href="https://www.youtube.com/@falsesquadtalks"
            target="_blank"
            variant="contained"
            sx={{
              bgcolor: '#ff4081',
              color: 'white',
              px: { xs: 3, md: 5 },
              py: 1.8,
              borderRadius: '14px',
              fontFamily: 'RussoOne',
              fontSize: '1rem',
              boxShadow: '0px 8px 20px rgba(255, 64, 129, 0.3)',
              '&:hover': { 
                bgcolor: '#c2185b', 
                transform: 'translateY(-3px)',
                boxShadow: '0px 12px 25px rgba(255, 64, 129, 0.5)'
              },
              transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}
          >
            🔥 Mira los clips
          </Button>

          <Button
            href="https://www.tiktok.com/@false.squad"
            target="_blank"
            variant="outlined"
            sx={{
              borderColor: '#00cec9',
              color: '#00cec9',
              px: { xs: 3, md: 5 },
              py: 1.8,
              borderRadius: '14px',
              fontFamily: 'RussoOne',
              fontSize: '1rem',
              borderWidth: '2px',
              '&:hover': {
                borderColor: '#00cec9',
                borderWidth: '2px',
                bgcolor: alpha('#00cec9', 0.08),
                transform: 'translateY(-3px)'
              },
              transition: 'all 0.3s'
            }}
          >
            🎥 TikTok
          </Button>
        </Box>
      </Container>

      {/* Decoración: Rayo de luz inferior cian */}
      <Box sx={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '150px',
        background: 'linear-gradient(to top, rgba(0, 206, 201, 0.15), transparent)',
        zIndex: 1
      }} />
    </Box>
  );
};

export default Hero;