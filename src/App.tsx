import { ThemeProviderWrapper } from './theme/ThemeProvider';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar2';
import Home from './pages/Home';
import Footer from './components/layout/Footer';
import './App.css';
import { Box } from '@mui/material';
import NotFound from './pages/NotFound';

function App() {

  return (
    <ThemeProviderWrapper>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Navbar />
        <Box sx={{ flex: 1 }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </ThemeProviderWrapper>
  )
}

export default App
