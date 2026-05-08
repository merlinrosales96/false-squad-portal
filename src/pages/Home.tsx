import { Box } from "@mui/material";
import Hero from "../sections/Home/HeroSection";
import AboutSection from "../sections/Home/AboutSection";
import SquadSection from "../sections/Home/SquadSection";
import Videos from "../sections/Home/VideoSection";

const Home = () => {
  return (
    <Box 
      component="main" 
      sx={{ 
        bgcolor: 'background.default', // Asegura que el fondo negro sea continuo
        display: 'flex', 
        flexDirection: 'column',
        gap: { xs: 0, md: 0 } // Puedes ajustar si quieres espacio entre secciones
      }}
    >
      <Hero />
      
      {/* Añadimos un contenedor sutil de transición para About */}
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <AboutSection />
      </Box>

      <SquadSection />

      {/* La sección de videos suele cerrar muy bien antes del footer */}
      <Videos />
    </Box>
  );
};

export default Home;