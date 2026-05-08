import { Typography, Container, Grid, Box, alpha } from "@mui/material";

const stats = [
  { value: '10', label: 'Integrantes', color: '#00ffe7' },
  { value: '3+', label: 'Años juntos', color: '#ff2d78' },
  { value: '∞', label: 'Gritadera', color: '#b060ff' },
];

export default function AboutSection() {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        py: 14,
        bgcolor: '#060608',
        overflow: 'hidden',
      }}
    >
      {/* Background image with strong overlay */}
      <Box sx={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(/images/about-banner.webp)`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        opacity: 0.08,
      }} />

      {/* Diagonal stripe accent */}
      <Box sx={{
        position: 'absolute', top: 0, right: 0, width: '40%', height: '100%',
        background: 'linear-gradient(135deg, transparent 0%, rgba(0,255,231,0.03) 100%)',
        borderLeft: '1px solid rgba(0,255,231,0.05)',
        pointerEvents: 'none',
      }} />

      {/* Dot grid */}
      <Box sx={{
        position: 'absolute', inset: 0, opacity: 0.04,
        backgroundImage: 'radial-gradient(rgba(0,255,231,0.8) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={8} alignItems="center">

          {/* LEFT: Image */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ position: 'relative' }}>
              {/* Corner accents */}
              {[
                { top: -12, left: -12, borderLeft: '3px solid #00ffe7', borderTop: '3px solid #00ffe7' },
                { bottom: -12, right: -12, borderRight: '3px solid #ff2d78', borderBottom: '3px solid #ff2d78' },
              ].map((style, i) => (
                <Box key={i} sx={{ position: 'absolute', width: 40, height: 40, zIndex: 3, ...style }} />
              ))}

              {/* Glow behind image */}
              <Box sx={{
                position: 'absolute', inset: '10%', zIndex: 0,
                background: 'radial-gradient(circle, rgba(0,255,231,0.12) 0%, transparent 70%)',
                filter: 'blur(30px)',
              }} />

              <Box
                component="img"
                src="/images/sections/nosotros.webp"
                alt="False Squad Group"
                sx={{
                  width: '100%', borderRadius: '12px', position: 'relative', zIndex: 2,
                  border: '1px solid rgba(255,255,255,0.07)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.8), 0 0 0 1px rgba(0,255,231,0.05)',
                  transition: 'all 0.4s',
                  '&:hover': { transform: 'scale(1.01)', boxShadow: '0 24px 70px rgba(0,0,0,0.9), 0 0 30px rgba(0,255,231,0.08)' }
                }}
              />

              {/* Stats row below image */}
              <Box sx={{
                display: 'flex', gap: 0, mt: 2, borderRadius: '10px', overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.06)',
              }}>
                {stats.map((s, i) => (
                  <Box key={i} sx={{
                    flex: 1, py: 2, textAlign: 'center',
                    bgcolor: alpha('#0e0e12', 0.9),
                    borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                    position: 'relative', overflow: 'hidden',
                    '&::after': {
                      content: '""', position: 'absolute', bottom: 0, left: '10%', right: '10%',
                      height: '2px', background: s.color, opacity: 0.6,
                    }
                  }}>
                    <Typography sx={{ fontFamily: 'RussoOne', fontSize: '1.6rem', color: s.color, lineHeight: 1 }}>
                      {s.value}
                    </Typography>
                    <Typography sx={{ fontSize: '0.65rem', letterSpacing: 2, color: 'rgba(255,255,255,0.35)', mt: 0.5, fontFamily: 'RussoOne' }}>
                      {s.label.toUpperCase()}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* RIGHT: Text */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box>
              <Box component="span" className="section-tag">Quiénes somos</Box>

              <Typography
                variant="h2"
                sx={{
                  fontFamily: 'RussoOne', mb: 1,
                  fontSize: { xs: '2.4rem', md: '3.5rem' },
                  lineHeight: 1,
                  letterSpacing: '-0.5px',
                }}
              >
                ¿SI MANO,{' '}
                <Box component="span" className="neon-text-cyan">SI?</Box>
              </Typography>

              <Typography
                sx={{
                  fontFamily: 'RussoOne', color: '#ff2d78',
                  mb: 4, fontSize: '1rem', letterSpacing: 2,
                  textTransform: 'uppercase', opacity: 0.9,
                }}
              >
                No somos solo gamers. Somos una hermandad.
              </Typography>

              <Box sx={{ '& p': { mb: 3, fontSize: '1.05rem', lineHeight: 1.9, color: 'rgba(255,255,255,0.65)', fontFamily: 'system-ui, sans-serif', fontWeight: 400 } }}>
                <Typography variant="body1">
                  En <strong style={{ color: '#00ffe7' }}>False Squad</strong>, la jugada épica es secundaria.
                  Lo que importa es la habladera de paja, las risas hasta la madrugada
                  y ese <em>brotherhood</em> que se forja entre gritos y fails.
                </Typography>
                <Typography variant="body1">
                  Aquí jugamos <strong style={{ color: '#ff2d78' }}>SIN ASCO</strong>. Construimos
                  lazos, forjamos historias y mantenemos la buena vibra por encima de
                  cualquier marcador.
                </Typography>
              </Box>

              {/* Tags */}
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mt: 2 }}>
                {['#FalseSquadSINASCO', '#SiMano', '#Gaming', '#Brotherhood'].map((tag) => (
                  <Box key={tag} sx={{
                    px: 2, py: 0.8,
                    bgcolor: 'rgba(0,255,231,0.05)',
                    border: '1px solid rgba(0,255,231,0.15)',
                    borderRadius: '6px',
                    color: '#00ffe7', fontSize: '0.8rem',
                    fontFamily: 'RussoOne', letterSpacing: 1,
                    transition: 'all 0.2s',
                    cursor: 'default',
                    '&:hover': { bgcolor: 'rgba(0,255,231,0.1)', borderColor: 'rgba(0,255,231,0.4)' }
                  }}>
                    {tag}
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
