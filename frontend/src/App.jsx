import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Home from './components/Home';
import Nav from './components/Nav';
import Create from './components/forms/Create';
import Blogs from './components/Blogs';
import Blog from './components/Blog';

const App = () => {
  return (
    <Router>
      <Nav /> 
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/blog/:id" element={<Blog />}></Route>
      </Routes>
  </Router>
  )
}

export default App
