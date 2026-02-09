import { Typography, Container, Grid, Box, Paper, alpha } from "@mui/material";

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
                py: 10,
                backgroundImage: `url(/images/about-banner.webp)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                backgroundBlendMode: 'darken',
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={6} alignItems="center">

                    {/* Columna de Imagen con efecto de marco */}
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Box sx={{ position: 'relative' }}>
                            <Box
                                component="img"
                                src="/images/sections/nosotros.webp"
                                alt="False Squad Group"
                                sx={{
                                    width: '100%',
                                    borderRadius: '20px',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    position: 'relative',
                                    zIndex: 2
                                }}
                            />
                            {/* Decoración geométrica de fondo */}
                            <Box sx={{
                                position: 'absolute',
                                top: -20,
                                left: -20,
                                width: '100px',
                                height: '100px',
                                borderLeft: '4px solid #00cec9',
                                borderTop: '4px solid #00cec9',
                                zIndex: 1
                            }} />
                        </Box>
                    </Grid>

                    {/* Columna de Texto con Glassmorphism */}
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Paper
                            elevation={0}
                            sx={{
                                p: { xs: 3, md: 5 },
                                bgcolor: alpha('#1a1a1a', 0.6),
                                backdropFilter: 'blur(10px)',
                                borderRadius: '24px',
                                border: '1px solid rgba(255,255,255,0.05)',
                            }}
                        >
                            <Typography
                                variant="h3"
                                sx={{
                                    fontFamily: 'RussoOne',
                                    color: 'primary.main',
                                    mb: 2,
                                    fontSize: { xs: '2rem', md: '3rem' },
                                    letterSpacing: 1
                                }}
                            >
                                ¿SI MANO, SI?
                            </Typography>

                            <Typography
                                variant="h6"
                                sx={{
                                    fontFamily: 'RussoOne',
                                    color: '#f48fb1',
                                    mb: 3,
                                    textTransform: 'uppercase'
                                }}
                            >
                                No somos solo gamers, somos una hermandad.
                            </Typography>

                            <Box sx={{ color: 'rgba(255,255,255,0.8)', '& p': { mb: 2, fontSize: '1.1rem', lineHeight: 1.8 } }}>
                                <Typography variant="body1">
                                    En <strong>False Squad</strong>, la jugada épica es secundaria. Lo que importa es la habladera de paja, las risas hasta la madrugada y ese <i>brotherhood</i> que se forja entre gritos y fails.
                                </Typography>

                                <Typography variant="body1">
                                    Aquí jugamos <strong>SIN ASCO</strong>. Construimos lazos, forjamos historias y mantenemos la buena vibra por encima de cualquier marcador.
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    mt: 4,
                                    display: 'inline-block',
                                    px: 3, py: 1,
                                    bgcolor: alpha('#00cec9', 0.1),
                                    borderRadius: '50px',
                                    border: '1px solid #00cec9'
                                }}
                            >
                                <Typography variant="subtitle2" sx={{ color: '#00cec9', fontWeight: 'bold' }}>
                                    #FalseSquadSINASCO
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}