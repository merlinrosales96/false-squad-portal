import { Box, Typography, Button, Container, keyframes } from '@mui/material';

const float = keyframes`
  0%   { transform: translateY(0px); }
  50%  { transform: translateY(-14px); }
  100% { transform: translateY(0px); }
`;

const glowPulse = keyframes`
  0%   { filter: drop-shadow(0 0 18px rgba(0,255,231,0.5)) drop-shadow(0 0 40px rgba(255,45,120,0.2)); }
  50%  { filter: drop-shadow(0 0 35px rgba(0,255,231,0.8)) drop-shadow(0 0 70px rgba(255,45,120,0.4)); }
  100% { filter: drop-shadow(0 0 18px rgba(0,255,231,0.5)) drop-shadow(0 0 40px rgba(255,45,120,0.2)); }
`;

const scanline = keyframes`
  0%   { transform: translateY(-100%); }
  100% { transform: translateY(100vh); }
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
        bgcolor: '#060608',
        backgroundImage: `url(/images/banner2.webp)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // backgroundAttachment: 'fixed' causa problemas en mobile, mejor quitarlo
      }}
    >
      {/* Dark overlay */}
      <Box sx={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'radial-gradient(ellipse 80% 60% at 50% 60%, rgba(0,0,0,0.4) 0%, rgba(6,6,8,0.92) 100%)',
      }} />

      {/* Grid pattern */}
      <Box sx={{
        position: 'absolute', inset: 0, zIndex: 1, opacity: 0.06,
        backgroundImage: `
          linear-gradient(rgba(0,255,231,0.5) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,255,231,0.5) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />

      {/* Scanline */}
      <Box sx={{
        position: 'absolute', inset: 0, zIndex: 2, overflow: 'hidden', pointerEvents: 'none',
        '&::after': {
          content: '""', position: 'absolute', left: 0, right: 0, height: '3px',
          background: 'linear-gradient(90deg, transparent, rgba(0,255,231,0.15), transparent)',
          animation: `${scanline} 8s linear infinite`,
        }
      }} />

      {/* Cyan glow bottom */}
      <Box sx={{
        position: 'absolute', bottom: '-10%', left: '50%', transform: 'translateX(-50%)',
        width: '800px', height: '400px', zIndex: 1,
        background: 'radial-gradient(ellipse, rgba(0,255,231,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Magenta glow left */}
      <Box sx={{
        position: 'absolute', top: '20%', left: '-5%', zIndex: 1,
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,45,120,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <Container
        maxWidth="md"
        sx={{
          position: 'relative', zIndex: 3, textAlign: 'center',
          // pt grande para compensar el navbar fijo, pb normal
          pt: { xs: '120px', sm: '140px', md: '100px' },
          pb: { xs: 6, md: 8 },
        }}
      >
        {/* Tag */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <Box component="span" className="section-tag">
            {/*Est. 2022 • Venezuela pa' el mundo*/}
          </Box>
        </Box>

        {/* Logo */}
        <Box sx={{ animation: `${float} 5s ease-in-out infinite`, mb: 5, display: 'flex', justifyContent: 'center' }}>
          <Box
            component="img"
            src="/images/slogan.webp"
            alt="False Squad"
            sx={{
              animation: `${glowPulse} 4s ease-in-out infinite`,
              width: '100%',
              maxWidth: { xs: '240px', sm: '320px', md: '500px' },
              height: 'auto',
              transition: 'transform 0.3s ease',
              '&:hover': { transform: 'scale(1.04)' }
            }}
          />
        </Box>

        {/* Headline */}
        <Typography
          variant="h3"
          sx={{
            fontFamily: 'RussoOne',
            fontSize: { xs: '1.4rem', sm: '1.8rem', md: '2.6rem' },
            mb: 2,
            letterSpacing: '1px',
            lineHeight: 1.2,
          }}
        >
          Gritadera, clips y{' '}
          <Box component="span" className="neon-text-cyan">
            HERMANDAD
          </Box>
          .
        </Typography>

        {/* Subtitle */}
        <Typography
          variant="body1"
          sx={{
            color: 'rgba(255,255,255,0.55)',
            maxWidth: '560px', mx: 'auto', mb: { xs: 5, md: 7 },
            fontSize: { xs: '0.9rem', md: '1.15rem' },
            lineHeight: 1.8,
            fontFamily: 'system-ui, sans-serif',
            fontStyle: 'italic',
          }}
        >
          Fails épicos y frases que solo nosotros entendemos.{' '}
          <br />
          10 panas dándolo todo{' '}
          <Box component="span" className="neon-text-magenta" sx={{ fontFamily: 'RussoOne', fontStyle: 'normal' }}>
            SIN ASCO
          </Box>
          .
        </Typography>

        {/* CTA Buttons */}
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            href="https://www.youtube.com/@falsesquadtalks"
            target="_blank"
            variant="contained"
            sx={{
              background: 'linear-gradient(135deg, #ff2d78, #c2185b)',
              color: 'white',
              px: { xs: 3.5, md: 6 }, py: 1.6,
              borderRadius: '10px',
              fontFamily: 'RussoOne', fontSize: { xs: '0.85rem', md: '0.95rem' },
              letterSpacing: 1,
              boxShadow: '0 8px 24px rgba(255,45,120,0.35)',
              border: '1px solid rgba(255,45,120,0.3)',
              transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              '&:hover': {
                transform: 'translateY(-3px)',
                boxShadow: '0 14px 32px rgba(255,45,120,0.5)',
                background: 'linear-gradient(135deg, #ff4d8e, #e91e63)',
                color: 'white',
              },
            }}
          >
            🔥 Ver clips
          </Button>

          <Button
            href="https://www.tiktok.com/@false.squad"
            target="_blank"
            variant="outlined"
            sx={{
              borderColor: 'rgba(0,255,231,0.4)',
              color: '#00ffe7',
              px: { xs: 3.5, md: 6 }, py: 1.6,
              borderRadius: '10px',
              fontFamily: 'RussoOne', fontSize: { xs: '0.85rem', md: '0.95rem' },
              letterSpacing: 1,
              borderWidth: '1.5px',
              backdropFilter: 'blur(10px)',
              bgcolor: 'rgba(0,255,231,0.04)',
              transition: 'all 0.3s ease',
              '&:hover': {
                borderColor: '#00ffe7',
                bgcolor: 'rgba(0,255,231,0.1)',
                transform: 'translateY(-3px)',
                boxShadow: '0 8px 24px rgba(0,255,231,0.2)',
              },
            }}
          >
            🎥 TikTok
          </Button>
        </Box>

        {/* Scroll hint */}
        <Box sx={{ mt: { xs: 6, md: 10 }, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, opacity: 0.3 }}>
          <Box sx={{
            width: '1px', height: '40px',
            background: 'linear-gradient(to bottom, transparent, #00ffe7)',
            animation: `${float} 2s ease-in-out infinite`,
          }} />
          <Typography sx={{ fontSize: '0.65rem', letterSpacing: 3, fontFamily: 'RussoOne', color: '#00ffe7' }}>
            SCROLL
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
