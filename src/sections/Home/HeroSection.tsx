import { Box, Stack, Typography, Button } from '@mui/material';
//import banner from '../../assets/images/banner2.avif';

const Banner = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        //backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
        ¡Bienvenidos a Nuestro Canal!
      </Typography>
      <Typography variant="h5" sx={{ mb: 4 }}>
        Momentos graciosos y épicas jugadas mientras jugamos juntos.
      </Typography>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">TikTok</Button>
        <Button variant="contained" color="secondary">YouTube</Button>
        <Button variant="contained" color="info">Discord</Button>
      </Stack>
    </Box>
  );
};

const Hero = () => {
  return (
    <>

        <Banner />
    </>
  );
};

export default Hero;

