/*import { Box, Container, Grid, IconButton, Typography } from "@mui/material"
import { Instagram, YouTube, Email } from "@mui/icons-material"
import { FaTiktok, FaDiscord } from "react-icons/fa"


export default function Footer() {

    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[500]
                        : theme.palette.grey[900],
            }}
        >
            <Container component="div" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 3 }}>
                <Grid container spacing={3} alignItems="flex-start">
                    <Grid alignItems="center" alignContent="center" size={{ xs: 12, md: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            Merlín Rosales
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {(`footer:Description`)}
                        </Typography>
                    </Grid>
                    <Grid alignItems="center" alignContent="center" size={{ xs: 12, md: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            {('experience:Education')}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                            {`La Universidad del Zulia | ${('experience:DegreeYear')}`}
                        </Typography>

                        <Typography variant="body1" color="text.primary" gutterBottom>
                            {('experience:Degree')}
                        </Typography>
                    </Grid>
                    <Grid alignItems="center" alignContent="center" size={{ xs: 12, md: 3 }}>
                        <Typography variant="h6" gutterBottom className="text-lg font-semibold">{('footer:SocialNetwork')}</Typography>
                        <div className="flex items-center space-x-4">
                            <IconButton href="" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary" color="inherit">
                                <FaTiktok />
                            </IconButton>
                            <IconButton href="" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary" color="primary">
                                <FaDiscord />
                            </IconButton>
                            <IconButton href="" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary" color="primary">
                                <Instagram />
                            </IconButton>
                            <IconButton href="" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary" color="primary">
                                <YouTube />
                            </IconButton>
                        </div>
                    </Grid>
                    <Grid alignItems="center" alignContent="center" size={{ xs: 12, md: 3 }}>
                        <Typography variant="h6" gutterBottom className="text-lg font-semibold">{('footer:Contact')}</Typography>
                        <div className="flex items-center space-x-4">
                            <IconButton href={`mailto:${(`emailButton:Email`)}?subject=${encodeURIComponent((`emailButton:Subject`))}&body=${encodeURIComponent((`emailButton:Message`))}`} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary" color="primary">
                                <Email />
                            </IconButton>
                        </div>
                    </Grid>
                </Grid>
                <Typography variant="subtitle1" className="text-center">{('footer:Copyright')}</Typography>
            </Container>
        </Box>
    )
}*/

import { Box, IconButton, Typography, Container, Grid, Divider, alpha } from "@mui/material";
import { Instagram, YouTube } from "@mui/icons-material";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
    const year = new Date().getFullYear();

    // Estilo para los iconos con efecto de brillo
    const iconStyle = (color: string) => ({
        color: 'text.secondary',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
            color: color,
            transform: 'translateY(-5px)',
            filter: `drop-shadow(0px 0px 8px ${alpha(color, 0.6)})`,
        },
    });

    return (
        <Box
            component="footer"
            sx={{
                py: 6,
                mt: 'auto',
                bgcolor: 'background.default',
                borderTop: '1px solid',
                borderColor: alpha('#00cec9', 0.1), // Borde sutil cian
                position: 'relative',
                overflow: 'hidden',
                // Un pequeño degradado radial para dar profundidad
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '100%',
                    height: '1px',
                    background: 'radial-gradient(circle, #00cec9 0%, transparent 70%)',
                }
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="space-between" alignItems="center">
                    {/* Branding / Nombre del Grupo */}
                    <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                        <Typography
                            variant="h5"
                            sx={{
                                fontFamily: 'RussoOne',
                                letterSpacing: 2,
                                color: 'primary.main',
                                mb: 1
                            }}
                        >
                            FALSE SQUAD
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Clips, juegos y buen ambiente. <br />
                            Más que un grupo, una familia.
                        </Typography>
                    </Grid>

                    {/* Redes Sociales con Efectos */}
                    <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: 'center' }}>
                        <Typography variant="overline" sx={{ display: 'block', mb: 1, opacity: 0.6 }}>
                            Nuestras Redes
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                            <IconButton
                                href="https://www.tiktok.com/@false.squad"
                                target="_blank"
                                sx={iconStyle('#ff0050')}
                            >
                                <FaTiktok size={22} />
                            </IconButton>
                            <IconButton
                                href="https://www.instagram.com/false.squad/"
                                target="_blank"
                                sx={iconStyle('#e1306c')}
                            >
                                <Instagram />
                            </IconButton>
                            <IconButton
                                href="https://www.youtube.com/@falsesquadtalks"
                                target="_blank"
                                sx={iconStyle('#ff0000')}
                            >
                                <YouTube />
                            </IconButton>
                        </Box>
                    </Grid>

                    {/* Espacio para Links rápidos o Stats */}
                    <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
                        <Typography variant="body2" color="text.secondary">
                            ¿Quieres jugar con nosotros? <br />
                            Únete a nuestro Discord
                        </Typography>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 4, opacity: 0.1 }} />

                <Typography
                    variant="caption"
                    display="block"
                    sx={{ textAlign: 'center', opacity: 0.5, letterSpacing: 1 }}
                >
                    © {year} FALSE SQUAD • TODOS LOS DERECHOS RESERVADOS
                </Typography>
            </Container>
        </Box>
    );
}