import { Box, Container, Grid, IconButton, Typography } from "@mui/material"
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
}