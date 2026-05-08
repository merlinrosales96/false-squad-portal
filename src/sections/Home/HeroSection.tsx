import { Box, Typography, Button, Container } from '@mui/material';
import { keyframes } from '@mui/material';

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-14px); }
`;
const glowPulse = keyframes`
  0%, 100% { filter: drop-shadow(0 0 16px rgba(0,255,231,0.6)) drop-shadow(0 0 40px rgba(255,45,120,0.2)); }
  50%       { filter: drop-shadow(0 0 32px rgba(0,255,231,0.9)) drop-shadow(0 0 70px rgba(255,45,120,0.5)); }
`;
const flicker = keyframes`
  0%, 95%, 100% { opacity: 1; }
  96%           { opacity: 0.4; }
  97%           { opacity: 1; }
  98%           { opacity: 0.6; }
`;

const Hero = () => (
  <Box
    id="home"
    sx={{
      position: 'relative', minHeight: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden', bgcolor: '#04040a',
      backgroundImage: 'url(/images/banner2.webp)',
      backgroundSize: 'cover', backgroundPosition: 'center',
    }}
  >
    {/* Overlays */}
    <Box sx={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(180deg, rgba(4,4,10,0.5) 0%, rgba(4,4,10,0.75) 60%, #04040a 100%)' }} />
    <Box className="grid-bg" sx={{ position: 'absolute', inset: 0, zIndex: 1, opacity: 1 }} />
    <Box className="scanlines-overlay" sx={{ zIndex: 2 }} />

    {/* Glows */}
    <Box sx={{ position: 'absolute', bottom: '-5%', left: '50%', transform: 'translateX(-50%)', width: '900px', height: '350px', zIndex: 1, background: 'radial-gradient(ellipse, rgba(0,255,231,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
    <Box sx={{ position: 'absolute', top: '15%', left: '-10%', width: '500px', height: '500px', borderRadius: '50%', zIndex: 1, background: 'radial-gradient(circle, rgba(155,93,229,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
    <Box sx={{ position: 'absolute', top: '20%', right: '-10%', width: '400px', height: '400px', borderRadius: '50%', zIndex: 1, background: 'radial-gradient(circle, rgba(255,45,120,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

    {/* Corner HUD */}
    {[
      { id: 'corner-1', top: 24, left: 24, borderTop: '1.5px solid', borderLeft: '1.5px solid', borderColor: 'rgba(0,255,231,0.4)', w: 32, h: 32 },
      { id: 'corner-2', top: 24, right: 24, borderTop: '1.5px solid', borderRight: '1.5px solid', borderColor: 'rgba(0,255,231,0.4)', w: 32, h: 32 },
      { id: 'corner-3', bottom: 24, left: 24, borderBottom: '1.5px solid', borderLeft: '1.5px solid', borderColor: 'rgba(255,45,120,0.4)', w: 32, h: 32 },
      { id: 'corner-4', bottom: 24, right: 24, borderBottom: '1.5px solid', borderRight: '1.5px solid', borderColor: 'rgba(255,45,120,0.4)', w: 32, h: 32 },
    ].map((c) => (
      <Box key={`corner-${c.id}`} sx={{ position: 'absolute', zIndex: 3, width: c.w, height: c.h, top: c.top, left: c.left, bottom: c.bottom, right: c.right, borderTop: c.borderTop, borderLeft: c.borderLeft, borderBottom: c.borderBottom, borderRight: c.borderRight, borderColor: c.borderColor, pointerEvents: 'none' }} />
    ))}

    <Container maxWidth="md" sx={{ position: 'relative', zIndex: 4, textAlign: 'center', pt: { xs: '120px', md: '100px' }, pb: { xs: 6, md: 8 } }}>

      {/* HUD tag */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
        <Box sx={{
          display: 'inline-flex', alignItems: 'center', gap: 1.5,
          px: 2, py: 0.8,
          border: '1px solid rgba(0,255,231,0.2)',
          borderRadius: '3px',
          bgcolor: 'rgba(0,255,231,0.04)',
          backdropFilter: 'blur(10px)',
        }}>
          <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#00ffe7', boxShadow: '0 0 8px #00ffe7', animation: `${flicker} 6s infinite` }} />
          <Typography sx={{ fontFamily: 'RussoOne', fontSize: '0.65rem', letterSpacing: 4, color: '#00ffe7' }}>
            ONLINE // EST. 2022 // VEN 🇻🇪
          </Typography>
        </Box>
      </Box>

      {/* Logo */}
      <Box sx={{ animation: `${float} 5s ease-in-out infinite`, mb: 4, display: 'flex', justifyContent: 'center' }}>
        <Box
          component="img" src="/images/slogan.webp" alt="False Squad"
          sx={{
            animation: `${glowPulse} 4s ease-in-out infinite`,
            width: '100%', maxWidth: { xs: '260px', sm: '360px', md: '520px' },
            '&:hover': { transform: 'scale(1.03)', transition: 'transform 0.3s' }
          }}
        />
      </Box>

      {/* Headline con glitch */}
      <Typography
        variant="h2"
        className="glitch"
        data-text="GRITADERA, CLIPS Y HERMANDAD."
        sx={{
          fontFamily: 'RussoOne',
          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.8rem' },
          mb: 1, letterSpacing: '1px', lineHeight: 1.15,
          color: 'rgba(255,255,255,0.95)',
        }}
      >
        GRITADERA, CLIPS Y{' '}
        <Box component="span" className="neon-cyan">HERMANDAD.</Box>
      </Typography>

      {/* Subtitle */}
      <Typography sx={{
        color: 'rgba(255,255,255,0.45)', maxWidth: '500px', mx: 'auto',
        mb: { xs: 5, md: 6 }, fontSize: { xs: '0.9rem', md: '1rem' },
        lineHeight: 1.9, fontFamily: 'system-ui', fontStyle: 'italic',
        mt: 2,
      }}>
        Fails épicos y frases que solo nosotros entendemos.{' '}
        11 venezolanos dándolo todo{' '}
        <Box component="span" className="neon-magenta" sx={{ fontFamily: 'RussoOne', fontStyle: 'normal' }}>
          SIN ASCO.
        </Box>
      </Typography>

      {/* CTA */}
      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
        <Button
          href="https://www.youtube.com/@falsesquadtalks" target="_blank"
          variant="contained"
          sx={{
            background: 'linear-gradient(135deg, #ff2d78, #b0003a)',
            color: 'white', px: { xs: 3.5, md: 5 }, py: 1.6,
            borderRadius: '4px', fontFamily: 'RussoOne',
            fontSize: { xs: '0.82rem', md: '0.9rem' }, letterSpacing: 1.5,
            boxShadow: '0 0 20px rgba(255,45,120,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,45,120,0.5)',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-3px)',
              boxShadow: '0 0 35px rgba(255,45,120,0.65), inset 0 1px 0 rgba(255,255,255,0.15)',
              background: 'linear-gradient(135deg, #ff4d8e, #cc0044)',
              color: 'white',
            },
          }}
        >
          ▶ VER CLIPS
        </Button>

        <Button
          href="https://www.tiktok.com/@false.squad" target="_blank"
          variant="outlined"
          sx={{
            borderColor: 'rgba(0,255,231,0.35)', color: '#00ffe7',
            px: { xs: 3.5, md: 5 }, py: 1.6,
            borderRadius: '4px', fontFamily: 'RussoOne',
            fontSize: { xs: '0.82rem', md: '0.9rem' }, letterSpacing: 1.5,
            borderWidth: '1px', backdropFilter: 'blur(10px)',
            bgcolor: 'rgba(0,255,231,0.03)',
            boxShadow: '0 0 10px rgba(0,255,231,0.08)',
            transition: 'all 0.3s ease',
            '&:hover': {
              borderColor: '#00ffe7', bgcolor: 'rgba(0,255,231,0.08)',
              transform: 'translateY(-3px)',
              boxShadow: '0 0 25px rgba(0,255,231,0.25)',
            },
          }}
        >
          ◈ TIKTOK
        </Button>
      </Box>

      {/* Scroll hint */}
      <Box sx={{ mt: { xs: 6, md: 8 }, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5, opacity: 0.25 }}>
        <Box sx={{ width: '1px', height: '36px', background: 'linear-gradient(to bottom, transparent, #00ffe7)', animation: `${float} 2.5s ease-in-out infinite` }} />
        <Typography sx={{ fontSize: '0.58rem', letterSpacing: 4, fontFamily: 'RussoOne', color: '#00ffe7' }}>SCROLL</Typography>
      </Box>
    </Container>
  </Box>
);

export default Hero;
