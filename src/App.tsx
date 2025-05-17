import { ThemeProviderWrapper } from './theme/ThemeProvider';
import Navbar from './components/layout/NavBar';
import Home from './pages/Home';
import Footer from './components/layout/Footer';
import './App.css';

function App() {

  return (
    <ThemeProviderWrapper>
      <Navbar />
      <Home />
      <Footer />
    </ThemeProviderWrapper>
  )
}

export default App
