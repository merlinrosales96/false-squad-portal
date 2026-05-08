import { Typography, Container, Grid, Box } from "@mui/material";
import { keyframes } from "@mui/material";

const flicker = keyframes`
  0%, 94%, 100% { opacity: 1; }
  95% { opacity: 0.3; }
  96% { opacity: 1; }
  97% { opacity: 0.5; }
`;

const stats = [
  { value: '7', label: 'Agentes', color: '#00ffe7' },
  { value: '3+', label: 'Años', color: '#ff2d78' },
  { value: '∞',  label: 'Gritadera', color: '#9b5de5' },
];

export default function AboutSection() {
  return (
    <Box component="section" id="about" sx={{
      position: 'relative', minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      py: 14, bgcolor: '#04040a', overflow: 'hidden',
    }}>
      {/* Grid bg */}
      <Box className="grid-bg" sx={{ position: 'absolute', inset: 0 }} />

      {/* Glow left */}
      <Box sx={{ position: 'absolute', top: '20%', left: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,255,231,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
      {/* Glow right */}
      <Box sx={{ position: 'absolute', bottom: '10%', right: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,45,120,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

      {/* Vertical accent line */}
      <Box sx={{ position: 'absolute', left: 0, top: '15%', bottom: '15%', width: '1px', background: 'linear-gradient(to bottom, transparent, rgba(0,255,231,0.3), transparent)', pointerEvents: 'none' }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">

          {/* LEFT */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ position: 'relative' }}>
              {/* HUD frame corners */}
              {[
                { id: 'corner-1', top: -8, left: -8, borderTop: '2px solid #00ffe7', borderLeft: '2px solid #00ffe7' },
                { id: 'corner-2', top: -8, right: -8, borderTop: '2px solid rgba(0,255,231,0.3)', borderRight: '2px solid rgba(0,255,231,0.3)' },
                { id: 'corner-3', bottom: -8, left: -8, borderBottom: '2px solid rgba(255,45,120,0.3)', borderLeft: '2px solid rgba(255,45,120,0.3)' },
                { id: 'corner-4', bottom: -8, right: -8, borderBottom: '2px solid #ff2d78', borderRight: '2px solid #ff2d78' },
              ].map((s) => (
                <Box key={`corner-img-${s.id}`} sx={{ position: 'absolute', width: 28, height: 28, zIndex: 3, ...s }} />
              ))}

              {/* Glow behind */}
              <Box sx={{ position: 'absolute', inset: '5%', zIndex: 0, background: 'radial-gradient(circle, rgba(0,255,231,0.1) 0%, transparent 70%)', filter: 'blur(30px)' }} />

              <Box
                component="img" src="/images/sections/nosotros.webp" alt="False Squad"
                sx={{
                  width: '100%', borderRadius: '6px', position: 'relative', zIndex: 2,
                  border: '1px solid rgba(0,255,231,0.1)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.9), 0 0 0 1px rgba(0,255,231,0.05)',
                  filter: 'brightness(0.9) contrast(1.05)',
                  transition: 'all 0.4s',
                  '&:hover': { filter: 'brightness(1) contrast(1.1)', boxShadow: '0 20px 60px rgba(0,0,0,0.9), 0 0 30px rgba(0,255,231,0.08)' }
                }}
              />

              {/* Stats bar */}
              <Box sx={{ display: 'flex', mt: 1.5, border: '1px solid rgba(255,255,255,0.05)', borderRadius: '4px', overflow: 'hidden' }}>
                {stats.map((s, i) => (
                  <Box key={s.label} sx={{
                    flex: 1, py: 2, textAlign: 'center',
                    bgcolor: 'rgba(10,10,18,0.95)',
                    borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                    position: 'relative',
                    '&::after': { content: '""', position: 'absolute', bottom: 0, left: '15%', right: '15%', height: '1px', background: s.color, opacity: 0.7, boxShadow: `0 0 6px ${s.color}` }
                  }}>
                    <Typography sx={{ fontFamily: 'RussoOne', fontSize: '1.6rem', color: s.color, lineHeight: 1, textShadow: `0 0 12px ${s.color}` }}>
                      {s.value}
                    </Typography>
                    <Typography sx={{ fontSize: '0.6rem', letterSpacing: 2.5, color: 'rgba(255,255,255,0.3)', mt: 0.5, fontFamily: 'RussoOne' }}>
                      {s.label.toUpperCase()}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* RIGHT */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box>
              <Box component="span" className="section-tag">Quiénes somos</Box>

              {/* System ID line */}
              <Typography sx={{ fontFamily: 'RussoOne', fontSize: '0.62rem', letterSpacing: 3, color: 'rgba(0,255,231,0.4)', mb: 1.5 }}>
                // SISTEMA: FALSE_SQUAD.EXE — CARGANDO...
              </Typography>

              <Typography variant="h2" sx={{
                fontFamily: 'RussoOne', mb: 1,
                fontSize: { xs: '2.6rem', md: '4rem' },
                lineHeight: 0.95, letterSpacing: '-1px',
              }}>
                ¿SI MANO,{' '}
                <Box component="span" className="neon-cyan">SI?</Box>
              </Typography>

              <Typography sx={{
                fontFamily: 'RussoOne', color: '#ff2d78',
                mb: 4, fontSize: '0.85rem', letterSpacing: 3,
                textTransform: 'uppercase', opacity: 0.9,
                animation: `${flicker} 8s infinite`,
              }}>
                No somos solo gamers — somos una hermandad.
              </Typography>

              <Box sx={{ '& p': { mb: 3, fontSize: '1rem', lineHeight: 1.9, color: 'rgba(255,255,255,0.55)', fontFamily: 'system-ui', fontWeight: 400 } }}>
                <Typography variant="body1">
                  En <strong style={{ color: '#00ffe7' }}>False Squad</strong>, la jugada épica es secundaria.
                  Lo que importa es la habladera de paja, las risas hasta la madrugada y ese{' '}
                  <em>brotherhood</em> que se forja entre gritos y fails.
                </Typography>
                <Typography variant="body1">
                  7 venezolanos regados por el mundo,{' '}
                  <strong style={{ color: '#ff2d78' }}>conectados por el squad.</strong>{' '}
                  Sin fronteras, sin filtro, sin asco.
                </Typography>
              </Box>

              {/* Tags */}
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
                {['#FalseSquad', '#SinAsco', '#Venezuela', '#Gaming', '#Brotherhood'].map((tag) => (
                  <Box key={tag} sx={{
                    px: 1.8, py: 0.7,
                    bgcolor: 'rgba(0,255,231,0.04)',
                    border: '1px solid rgba(0,255,231,0.12)',
                    borderRadius: '3px',
                    color: 'rgba(0,255,231,0.7)', fontSize: '0.75rem',
                    fontFamily: 'RussoOne', letterSpacing: 0.5,
                    transition: 'all 0.2s', cursor: 'default',
                    '&:hover': { bgcolor: 'rgba(0,255,231,0.09)', borderColor: 'rgba(0,255,231,0.35)', color: '#00ffe7' }
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
