import { Typography, Container, Grid, Box } from "@mui/material";
import { Image } from "../../components/Image";

export default function AboutSection() {

    return (
        <Box component="section" id="about" sx={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', px: 6, backgroundImage: `url(/images/about-banner.png)`, height: '100vh',
            width: '100%', backgroundSize: 'cover', // Escala para cubrir todo el Box
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            backgroundBlendMode: 'darken',
            justifyContent: 'center',
        }}>
            <Container component="main" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pb: 16, gap: 3 }}>
                <Box component="div">
                    <Box component="div" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Image image='/images/sections/nosotros.png' alt="" className="mx-auto overflow-hidden rounded-xl object-cover object-center" />
                        <Grid container spacing={3} alignItems="center">
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Typography variant="body1" paragraph align="justify">
                                    🎮 Welcome to False Squad! 🎮
                                </Typography>
                                <Typography variant="body1" paragraph align="justify">
                                    ¿SI MANO, SI? We're not just gamers, somos un grupo de hermanos que juegan y difrutan de una buena BROTHERHOOD. ¡Únete a la movida SIN ASCO! Sesiones de gaming, habladera de paja, pero con buena vibra! Construyendo lazos, forjando historisas!
                                </Typography>
                                <Typography variant="body1" paragraph align="justify">
                                    Join the laughter! #FalseSquad SIN ASCO!!!
                                </Typography>
                            </Grid>


                            <Grid alignItems="center" alignContent="center" size={{ xs: 12, md: 6 }}>
                                <Box alignItems="center">
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}