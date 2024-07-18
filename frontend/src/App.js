// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/NavBar/NavBar';
import SignUpPage from './Components/SignUp/SignUp';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/footer" element={<Footer />} />
          {/* <Route path="/navbar" element={<NavBar />} /> */}
          {/* <Route path="/navbar2" element={<NavBar2 />} /> */}
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
