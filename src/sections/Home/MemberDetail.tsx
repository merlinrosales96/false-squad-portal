import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Container, Typography, Grid, keyframes } from '@mui/material';
import { MEMBERS } from '../../const/members';
import type { Member } from '../../type/members';

const reveal = keyframes`
  from { opacity: 0; transform: translateY(20px); filter: blur(6px); }
  to   { opacity: 1; transform: translateY(0); filter: blur(0); }
`;
const flicker = keyframes`
  0%, 94%, 100% { opacity: 1; }
  95% { opacity: 0.3; }
  97% { opacity: 0.7; }
`;

const statConfig: Record<string, { color: string; label: string }> = {
  skill:    { color: '#00ffe7', label: 'SKILL' },
  toxicity: { color: '#ff2d78', label: 'TOXICITY' },
  luck:     { color: '#9b5de5', label: 'LUCK' },
};

const MemberDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const member = MEMBERS.find((m) => m.id === id) as Member | undefined;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log('MemberDetail mounted with id:', id);
    if (!member) navigate('/404');
  }, [member, navigate]);

  if (!member) return null;

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#04040a', position: 'relative', overflow: 'hidden', pt: { xs: '80px', md: '100px' } }}>
      {/* Grid bg */}
      <Box className="grid-bg" sx={{ position: 'absolute', inset: 0 }} />
      <Box className="scanlines-overlay" />

      {/* ID watermark */}
      <Typography sx={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        fontSize: { xs: '7rem', md: '16rem' }, fontFamily: 'RussoOne',
        color: 'transparent', WebkitTextStroke: '1px rgba(0,255,231,0.03)',
        zIndex: 0, pointerEvents: 'none', textTransform: 'uppercase', whiteSpace: 'nowrap',
        animation: `${flicker} 10s infinite`,
      }}>
        {member.id}
      </Typography>

      {/* Glow behind member */}
      <Box sx={{
        position: 'absolute', top: '15%', left: { xs: '50%', md: '22%' }, transform: 'translateX(-50%)',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(0,255,231,0.07) 0%, rgba(155,93,229,0.04) 50%, transparent 70%)',
        filter: 'blur(40px)', zIndex: 0, pointerEvents: 'none',
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, pt: { xs: 3, md: 6 }, pb: 8 }}>

        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="flex-end">

          {/* Image */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ animation: `${reveal} 0.8s ease-out`, height: { xs: '400px', md: '580px' }, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', position: 'relative' }}>
              {/* Glow under feet */}
              <Box sx={{
                position: 'absolute', bottom: 0, left: '10%', right: '10%', height: '40%',
                background: 'radial-gradient(ellipse, rgba(0,255,231,0.12) 0%, transparent 70%)',
                filter: 'blur(20px)',
              }} />
              <Box
                component="img" src={`/images/members/cards/${member.id}.webp`} alt={member.name}
                sx={{
                  maxHeight: '100%', width: 'auto', objectFit: 'contain', position: 'relative', zIndex: 1,
                  filter: 'drop-shadow(0 0 30px rgba(0,255,231,0.12)) drop-shadow(0 30px 50px rgba(0,0,0,0.9))',
                  maskImage: 'linear-gradient(to top, transparent 0%, black 10%)',
                  WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 10%)',
                }}
              />
            </Box>
          </Grid>

          {/* Info */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ animation: `${reveal} 1s ease-out`, textAlign: { xs: 'center', md: 'left' } }}>

              {/* System tag */}
              <Typography sx={{ fontFamily: 'RussoOne', fontSize: '0.6rem', letterSpacing: 3, color: 'rgba(0,255,231,0.35)', mb: 2 }}>
                // AGENTE_ID: {member.id.toUpperCase()} — PERFIL CARGADO
              </Typography>

              {/* Role badge */}
              <Box sx={{
                display: 'inline-flex', alignItems: 'center', gap: 1,
                px: 2, py: 0.7, mb: 2,
                bgcolor: 'rgba(255,45,120,0.06)',
                border: '1px solid rgba(255,45,120,0.2)',
                borderRadius: '3px',
              }}>
                <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: '#ff2d78', boxShadow: '0 0 6px #ff2d78', animation: `${flicker} 4s infinite` }} />
                <Typography sx={{ fontFamily: 'RussoOne', fontSize: '0.72rem', color: '#ff2d78', letterSpacing: 2 }}>
                  {member.role.toUpperCase()}
                </Typography>
              </Box>

              {/* Name */}
              <Typography variant="h1" sx={{
                fontFamily: 'RussoOne',
                fontSize: { xs: '3.5rem', md: '5.5rem' },
                lineHeight: 0.9, mb: 2,
                color: 'rgba(255,255,255,0.95)',
                letterSpacing: '-2px',
              }}>
                {member.name}
              </Typography>

              {/* Game */}
              <Box sx={{
                display: 'inline-flex', alignItems: 'center', gap: 1,
                px: 2, py: 0.8, mb: 4,
                bgcolor: 'rgba(0,255,231,0.04)',
                border: '1px solid rgba(0,255,231,0.12)',
                borderRadius: '3px',
              }}>
                <Typography sx={{ fontFamily: 'RussoOne', fontSize: '0.72rem', color: 'rgba(0,255,231,0.7)', letterSpacing: 2 }}>
                  ▶ {member.favGame.toUpperCase()}
                </Typography>
              </Box>

              {/* Description */}
              <Typography sx={{
                color: 'rgba(255,255,255,0.5)', fontSize: '1rem', mb: 6,
                lineHeight: 1.9, maxWidth: '460px', mx: { xs: 'auto', md: 0 },
                fontFamily: 'system-ui', borderLeft: '2px solid rgba(0,255,231,0.15)',
                pl: 2,
              }}>
                {member.description}
              </Typography>

              {/* Stats */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, maxWidth: { xs: '100%', md: '400px' }, mx: { xs: 'auto', md: 0 } }}>
                {Object.entries(member.stats).map(([key, value]) => {
                  const cfg = statConfig[key] || { color: '#00ffe7', label: key.toUpperCase() };
                  return (
                    <Box key={key}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.8 }}>
                        <Typography sx={{ fontFamily: 'RussoOne', fontSize: '0.65rem', letterSpacing: 3, color: 'rgba(255,255,255,0.3)' }}>
                          {cfg.label}
                        </Typography>
                        <Typography sx={{ fontFamily: 'RussoOne', fontSize: '0.8rem', color: cfg.color, textShadow: `0 0 8px ${cfg.color}` }}>
                          {value}<Box component="span" sx={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.65rem' }}>/100</Box>
                        </Typography>
                      </Box>
                      {/* Track */}
                      <Box sx={{ height: '2px', bgcolor: 'rgba(255,255,255,0.06)', borderRadius: '2px', position: 'relative', overflow: 'hidden' }}>
                        <Box sx={{
                          position: 'absolute', top: 0, left: 0, height: '100%',
                          width: `${value}%`,
                          background: `linear-gradient(90deg, ${cfg.color}60, ${cfg.color})`,
                          boxShadow: `0 0 10px ${cfg.color}`,
                          borderRadius: '2px',
                        }} />
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MemberDetail;
