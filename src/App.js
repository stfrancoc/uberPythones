import { Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Home from './components/home';



function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Se pueden manejar rutas anidadas y no encontradas de manera más intuitiva */}
      </Routes>
    </>

  );
}

export default App;
