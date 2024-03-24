import { Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Home from './components/home';
import Footer from './components/Footer';
import Requirements from './components/Requierements';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/uberPythones/build" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/requirements" element={<Requirements/>}/>
      </Routes>
      <Footer/>
    </>

  );
}

export default App;
