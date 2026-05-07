import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Container, Typography, IconButton, Grid, LinearProgress, alpha, keyframes } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { MEMBERS } from '../../const/members';
import type { Member } from '../../type/members';

const reveal = keyframes`
  from { opacity: 0; transform: translateY(20px); filter: blur(10px); }
  to { opacity: 1; transform: translateY(0); filter: blur(0); }
`;

const MemberDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const member = MEMBERS.find((m) => m.id === id) as Member | undefined;

    useEffect(() => {
        window.scrollTo(0, 0);
        if (!member) navigate('/404');
    }, [member, navigate]);

    if (!member) return null;

    return (
        <Box
            sx={{
                minHeight: '100vh',
                bgcolor: '#050505',
                position: 'relative',
                // 1. Aseguramos que el contenido empiece debajo del Navbar (aprox 64px-80px)
                pt: { xs: '80px', md: '100px' }
            }}
        >

            {/* BACKGROUND WATERMARK */}
            <Typography
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: { xs: '10rem', md: '20rem' },
                    fontFamily: 'RussoOne',
                    WebkitTextStroke: `3px ${alpha('#ffffff', 0.03)}`,
                    color: 'transparent',
                    zIndex: 0,
                    pointerEvents: 'none',
                    textTransform: 'uppercase'
                }}
            >
                {member.id}
            </Typography>

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, pt: { xs: 4, md: 10 }, pb: 5 }}>

                {/* BOTÓN VOLVER: Ahora con margen controlado para que no se pierda */}
                <Box sx={{ width: '100%', mb: { xs: 2, md: 5 }, mt: { xs: 8, md: 0 } }}>
                    <IconButton
                        onClick={() => navigate(-1)}
                        sx={{
                            color: 'white',
                            bgcolor: alpha('#fff', 0.1),
                            backdropFilter: 'blur(10px)',
                            '&:hover': { bgcolor: 'primary.main', color: 'black' },
                            transition: 'all 0.3s'
                        }}
                    >
                        <ArrowBackIosNewIcon fontSize="small" />
                    </IconButton>
                </Box>

                <Grid container spacing={{ xs: 2, md: 8 }} alignItems="center">

                    {/* SECCIÓN IMAGEN: Altura fija para evitar saltos de layout */}
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Box
                            sx={{
                                position: 'relative',
                                animation: `${reveal} 1s ease-out`,
                                height: { xs: '400px', md: '600px' }, // ALTURA FIJA PARA CONSISTENCIA
                                display: 'flex',
                                alignItems: 'flex-end',
                                justifyContent: 'center'
                            }}
                        >
                            <Box
                                sx={{
                                    position: 'absolute',
                                    width: '80%',
                                    height: '60%',
                                    background: `radial-gradient(circle, ${alpha('#00cec9', 0.2)} 0%, transparent 70%)`,
                                    filter: 'blur(60px)',
                                    zIndex: -1,
                                    bottom: '10%'
                                }}
                            />

                            <Box
                                component="img"
                                src={`/images/members/big/${member.id}.webp`}
                                alt={member.name}
                                sx={{
                                    maxHeight: '100%', // No permite que la imagen pase del contenedor
                                    maxWidth: '100%',
                                    width: 'auto',
                                    objectFit: 'contain', // Mantiene la proporción sin estirar
                                    filter: 'drop-shadow(0px 10px 30px rgba(0,0,0,0.5))',
                                    maskImage: 'linear-gradient(to top, transparent 0%, black 15%)',
                                    WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 15%)',
                                }}
                            />
                        </Box>
                    </Grid>

                    {/* SECCIÓN INFO */}
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Box sx={{ animation: `${reveal} 1.2s ease-out`, textAlign: { xs: 'center', md: 'left' } }}>
                            <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: 3, fontWeight: 'bold' }}>
                // {member.role.toUpperCase()}
                            </Typography>

                            <Typography variant="h1" sx={{
                                fontFamily: 'RussoOne',
                                fontSize: { xs: '3rem', md: '5rem' },
                                color: 'white',
                                mb: 2,
                                lineHeight: 1
                            }}>
                                {member.name}
                            </Typography>

                            <Typography variant="body1" sx={{
                                color: 'rgba(255,255,255,0.6)',
                                fontSize: '1.1rem',
                                mb: 5,
                                lineHeight: 1.8,
                                maxWidth: '500px',
                                mx: { xs: 'auto', md: '0' }
                            }}>
                                {member.description}
                            </Typography>

                            {/* STATS BENTO STYLE */}
                            <Grid container spacing={2}>
                                {[
                                    { label: 'SKILL', value: member.stats.skill, color: '#00cec9' },
                                    { label: 'TOXICITY', value: member.stats.toxicity, color: '#ff4081' },
                                    { label: 'LUCK', value: member.stats.luck, color: '#a29bfe' }
                                ].map((stat) => (
                                    <Grid size={{ xs: 12, sm: 4 }} key={stat.label}>
                                        <Box sx={{
                                            bgcolor: alpha('#fff', 0.03),
                                            p: 2,
                                            borderRadius: '8px',
                                            border: '1px solid rgba(255,255,255,0.05)',
                                            textAlign: 'left'
                                        }}>
                                            <Typography variant="caption" sx={{ fontFamily: 'RussoOne', opacity: 0.5, display: 'block', mb: 1 }}>
                                                {stat.label}
                                            </Typography>
                                            <Typography variant="h5" sx={{ fontFamily: 'RussoOne', color: stat.color }}>
                                                {stat.value}%
                                            </Typography>
                                            <LinearProgress
                                                variant="determinate"
                                                value={stat.value}
                                                sx={{
                                                    height: 3,
                                                    mt: 1,
                                                    bgcolor: alpha(stat.color, 0.1),
                                                    '& .MuiLinearProgress-bar': { bgcolor: stat.color }
                                                }}
                                            />
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default MemberDetail;