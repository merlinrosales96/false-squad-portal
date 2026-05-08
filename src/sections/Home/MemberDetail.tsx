import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Container, Typography, Grid, alpha, keyframes } from '@mui/material';
import { MEMBERS } from '../../const/members';
import type { Member } from '../../type/members';

const reveal = keyframes`
  from { opacity: 0; transform: translateY(24px); filter: blur(8px); }
  to   { opacity: 1; transform: translateY(0);    filter: blur(0); }
`;

const glow = keyframes`
  0%   { opacity: 0.5; }
  50%  { opacity: 1; }
  100% { opacity: 0.5; }
`;

const statColors: Record<string, string> = {
  SKILL:    '#00ffe7',
  TOXICITY: '#ff2d78',
  LUCK:     '#b060ff',
};

const MemberDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const member = MEMBERS.find((m) => m.id === id) as Member | undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!member) navigate('/404');
  }, [member, navigate]);

  if (!member) return null;

  const stats = [
    { label: 'SKILL',    value: member.stats.skill },
    { label: 'TOXICITY', value: member.stats.toxicity },
    { label: 'LUCK',     value: member.stats.luck },
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#060608',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: '80px', md: '100px' },
      }}
    >
      {/* Grid lines background */}
      <Box sx={{
        position: 'absolute', inset: 0, zIndex: 0, opacity: 0.03,
        backgroundImage: `
          linear-gradient(rgba(0,255,231,1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,255,231,1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
      }} />

      {/* Member ID watermark */}
      <Typography sx={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: { xs: '8rem', md: '18rem' },
        fontFamily: 'RussoOne',
        WebkitTextStroke: `2px ${alpha('#00ffe7', 0.04)}`,
        color: 'transparent',
        zIndex: 0, pointerEvents: 'none',
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
      }}>
        {member.id}
      </Typography>

      {/* Glow behind member */}
      <Box sx={{
        position: 'absolute', top: '20%', left: { xs: '50%', md: '25%' },
        transform: 'translateX(-50%)',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(0,255,231,0.08) 0%, transparent 65%)',
        filter: 'blur(40px)', zIndex: 0, pointerEvents: 'none',
        animation: `${glow} 5s ease-in-out infinite`,
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, pt: { xs: 3, md: 8 }, pb: 8 }}>


        <Grid container spacing={{ xs: 4, md: 10 }} alignItems="flex-end">

          {/* Image */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{
              animation: `${reveal} 0.9s ease-out`,
              height: { xs: '420px', md: '620px' },
              display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
              position: 'relative',
            }}>
              <Box
                component="img"
                src={`/images/members/big/${member.id}.png`}
                alt={member.name}
                sx={{
                  maxHeight: '100%', maxWidth: '100%', width: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.8)) drop-shadow(0 0 40px rgba(0,255,231,0.1))',
                  maskImage: 'linear-gradient(to top, transparent 0%, black 12%)',
                  WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 12%)',
                }}
              />
            </Box>
          </Grid>

          {/* Info */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ animation: `${reveal} 1.1s ease-out`, textAlign: { xs: 'center', md: 'left' } }}>

              {/* Role badge */}
              <Box sx={{ mb: 2, display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                <Box component="span" className="section-tag">
                  {member.role}
                </Box>
              </Box>

              {/* Name */}
              <Typography variant="h1" sx={{
                fontFamily: 'RussoOne',
                fontSize: { xs: '3.5rem', md: '5.5rem' },
                lineHeight: 0.95, mb: 3,
                background: 'linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.7) 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>
                {member.name}
              </Typography>

              {/* Game */}
              <Box sx={{
                display: 'inline-flex', alignItems: 'center', gap: 1,
                px: 2.5, py: 1, mb: 4, borderRadius: '8px',
                bgcolor: 'rgba(255,45,120,0.07)',
                border: '1px solid rgba(255,45,120,0.2)',
              }}>
                <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#ff2d78', boxShadow: '0 0 8px #ff2d78' }} />
                <Typography sx={{ fontFamily: 'RussoOne', fontSize: '0.8rem', color: '#ff2d78', letterSpacing: 2 }}>
                  {member.favGame.toUpperCase()}
                </Typography>
              </Box>

              {/* Description */}
              <Typography sx={{
                color: 'rgba(255,255,255,0.55)',
                fontSize: '1.05rem', mb: 6,
                lineHeight: 1.85,
                maxWidth: '480px',
                mx: { xs: 'auto', md: '0' },
                fontFamily: 'system-ui, sans-serif',
              }}>
                {member.description}
              </Typography>

              {/* Stats */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, maxWidth: { xs: '100%', md: '420px' }, mx: { xs: 'auto', md: '0' } }}>
                {stats.map(({ label, value }) => {
                  const color = statColors[label] || '#00ffe7';
                  return (
                    <Box key={label}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.8 }}>
                        <Typography sx={{ fontFamily: 'RussoOne', fontSize: '0.72rem', letterSpacing: 3, color: 'rgba(255,255,255,0.35)' }}>
                          {label}
                        </Typography>
                        <Typography sx={{ fontFamily: 'RussoOne', fontSize: '0.85rem', color }}>
                          {value}
                        </Typography>
                      </Box>
                      {/* Track */}
                      <Box sx={{ height: '3px', borderRadius: '2px', bgcolor: alpha(color, 0.12), position: 'relative', overflow: 'hidden' }}>
                        <Box sx={{
                          position: 'absolute', top: 0, left: 0,
                          height: '100%', width: `${value}%`,
                          background: `linear-gradient(90deg, ${alpha(color, 0.6)}, ${color})`,
                          borderRadius: '2px',
                          boxShadow: `0 0 8px ${color}`,
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
