import React, { useState, useEffect } from 'react';
// import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/home/Home";
// Import these at the top of your main JavaScript file (index.js or App.js)
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./App.css";
import { HashRouter } from "react-router-dom";
import AlertBox from './components/alertBox/AlertBox';
import WhyUs from './pages/why us/WhyUs';

function App() {


  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    // Website load hone par alert auto-show hoga
    setShowAlert(true);
  }, []);

  const handleClose = () => setShowAlert(false);

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/why-us' element={<WhyUs />} />
        </Routes>
      </HashRouter>
      <AlertBox
        show={showAlert}
        message="Welcome to my website!"
        onClose={handleClose}
      />
    </div>

  );
}

export default App;
