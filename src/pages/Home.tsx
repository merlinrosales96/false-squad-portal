import Hero from "../sections/Home/HeroSection";
import Videos from "../sections/Home/VideoSection";
import MemberSection from "../sections/Home/MemberSection";
import AboutSection from "../sections/Home/AboutSection";
import { Box } from "@mui/material";

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

      <MemberSection />

      {/* La sección de videos suele cerrar muy bien antes del footer */}
      <Videos />
    </Box>
  );
};

export default Home;