import { Container, Typography, Stack, Button } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { FaTiktok, FaDiscord } from 'react-icons/fa';

const Contact = () => {
  return (
    <Container sx={{ mt: 6, mb: 6, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Contáctanos
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Síguenos en nuestras redes o únete a nuestro Discord para estar al día.
      </Typography>
      <Stack spacing={2} direction="row" justifyContent="center">
        <Button
          variant="contained"
          color="error"
          startIcon={<FaTiktok />}
          href="https://www.tiktok.com/@tu_usuario"
          target="_blank"
          rel="noopener"
        >
          TikTok
        </Button>
        <Button
          variant="contained"
          color="error"
          startIcon={<YouTubeIcon />}
          href="https://www.youtube.com/c/tu_canal"
          target="_blank"
          rel="noopener"
        >
          YouTube
        </Button>
        <Button
          variant="contained"
          color="info"
          startIcon={<FaDiscord />}
          href="https://discord.gg/tu_invitacion"
          target="_blank"
          rel="noopener"
        >
          Discord
        </Button>
      </Stack>
    </Container>
  );
};

export default Contact;
