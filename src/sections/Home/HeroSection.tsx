//import { Box, Stack, Typography, Button } from '@mui/material';
//import banner from '../../assets/images/banner2.avif';

/*const Banner = () => {
  return (
    <Box
      component="section"
      id='home'
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

*/

// Hero.tsx
/*import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          🎮 Jugamos mal, pero nos reímos bien
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Fails, gritos, jugadas absurdas y pura risa entre panas. Mira nuestros mejores momentos.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="https://www.tiktok.com/@tunombre"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition"
          >
            🔥 Ver en TikTok
          </a>
          <a
            href="#videos"
            className="border border-white hover:bg-white hover:text-black text-white font-bold py-3 px-6 rounded-xl transition"
          >
            🎬 Ver clips
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
*/

// Hero.tsx
import { Box } from '@mui/material';

const Hero = () => {
  return (
    <Box component="div" id='home' className="min-h-screen flex items-center justify-center px-6 py-12" sx={{
      backgroundImage: `url(/images/banner2.avif)`, height: '100vh',
      width: '100%', backgroundSize: 'cover', // Escala para cubrir todo el Box
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      backgroundBlendMode: 'darken',
      justifyContent: 'center',
    }}>
      <div className="max-w-4xl flex flex-col items-center text-center">
        <div className="relative z-0">
          <img
            src="/images/slogan.png"
            alt="False Squad"
            className="relative z-20 h-full w-full sm:w-72 md:w-80 lg:w-96 animate-fade-in"
          />

        </div>
        <p className="text-xl md:text-2xl text-pink-400 font-semibold mb-6">
          Bienvenido a <span className="text-cyan-400">False Squad</span> — gaming con sabor a hermandad, gritos y vacilón.
        </p>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Fails, risas, jugadas épicas y frases internas que nadie entiende pero todos repiten.
          10 panas, muchos juegos, y todo <span className="text-pink-500 font-bold">SIN ASCO</span>.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="https://www.youtube.com/@falsesquadtalks"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition"
          >
            🔥 Mira los clips
          </a>
          <a
            href="https://www.tiktok.com/@false.squad"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black text-cyan-400 font-bold py-3 px-6 rounded-xl transition"
          >
            🎥 TikTok: @false.squad
          </a>
        </div>
      </div>
    </Box>
  );
};

export default Hero;
