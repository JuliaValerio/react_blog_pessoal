import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Navbar from './components/static/navbar/Navbar';
import Footer from './components/static/footer/Footer';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />}/>
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
