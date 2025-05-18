import { ThemeProviderWrapper } from './theme/ThemeProvider';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/NavBar';
import Home from './pages/Home';
import Footer from './components/layout/Footer';
import './App.css';

function App() {

  return (
    <ThemeProviderWrapper>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </ThemeProviderWrapper>
  )
}

export default App
