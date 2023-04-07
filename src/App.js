
import React from 'react';
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import ImageGallery from './pages/ImageGallery';
import Contact from './pages/Contact';
import About from './pages/About';
import NoPage from './pages/NoPage';

function App() {
  return (
    <BrowserRouter>
      <div className="header">
        <h1 className="header--title">NATURE AND BRANG</h1>
        <div className="header--right">
          <Link className="home" to="/">Home</Link>
          <Link className="image-gallery"  to="/image-gallery">Image Gallery</Link>
          <Link className="about-me" to="/about">About Me</Link>
          <Link className="contact" to="/contact">Contact</Link>
        </div>        
      </div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/image-gallery" exact element={<ImageGallery />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="*" exact element={<NoPage />} />
      </Routes>
    </BrowserRouter> 
  )
}

export default App;

