import { HashRouter, Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from "./pages/home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./App.css";
import WhyUs from './pages/why us/WhyUs';
import Membership from './pages/membership/Membership';
import OurBranches from './pages/our branches/OurBranches';
import Contact from './pages/contact/Contact';
import ThanksYou from './pages/thanks you/ThanksYou';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/why-us' element={<WhyUs />} />
        <Route path='/membership' element={<Membership />} />
        <Route path='/our-branches' element={<OurBranches />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/thank-you' element={<ThanksYou />} />
      </Routes>
    </div>
  );
}

const Root = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default Root; 
