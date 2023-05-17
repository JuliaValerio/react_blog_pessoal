import { Container } from '@mui/material';
import Home from './pages/home/Home';
import Navbar from './components/static/navbar/Navbar';
import Footer from './components/static/footer/Footer';


function App() {

  return (
    <Container style={{width:"100%", height:"100vh", padding:"0", margin:0, maxWidth: '1500px'}}>
      <Navbar />
      <Home />
      <Footer />
    </Container>
  );
}

export default App
