
import './App.css'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/header"
import Footer from "./components/footer"
import Home from "./pages/home"
import Contact from "./pages/contact"
import ProjectGallery from "./pages/projectGallery"
import { Link } from 'react-router-dom';
import React from 'react';


function App() {

  return (
    <Router>
      <Header/>
      {/* Wrap Route elements in a Routes component */}
      <Routes>
        {/* Define routes using the Route component to render different page components at different paths */}
        {/* Define a default route that will render the Home component */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/projectGallery" element={<ProjectGallery />} />
        {/* Define a route that will have descendant routes */}
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
