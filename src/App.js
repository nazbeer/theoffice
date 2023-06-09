import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
//import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import logo from './logo.svg';
import logosmall from './logo-small.svg';
import './custom.css';
import { Navbar } from 'react-bootstrap';
const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
    <Router>
      {/* <div className='row'>
        <div className='container'>
        <Navbar/>
        </div>
      </div> */}

        <div className="row">
          <div className='container '>
              <div className="d-flex justify-content-between align-items-center pl-4 pr-4 ">
                
                <Link to="/"><img src={logo} width={129} height={33} alt="The Office" className="img-responsive desktopicon"></img>
                <img src={logosmall} width={129} height={33} alt="The Office" className="img-responsive mobileicon"></img>
                </Link>
                    
              <div >
      <div className="navbar-nav  desktopicon">
     
        <nav className="navbar navbar-expand-lg navbar-light  p-4 custom-header ">
          <ul className='navbar-nav gap-7 pl-4 d-inline-flex justify-content-around align-items-center '>
          
          
            <li className='nav-item'>
              <Link to="/about" className='no-underline'>About</Link>
            </li>
            <li className='nav-item'>
              <Link to="/services" className='no-underline' onClick={() => setModalVisible(true)}>Solutions</Link>
            </li>
            <li className='nav-item'>
              <Link to="/Contact" className='no-underline'>FAQs</Link>
            </li>
            <li className='nav-item'>
              <Link to="/Contact"><button className='btn btn-danger border-none' type='button'>Book Your Space</button></Link>
            </li>
         
         
          </ul>
        </nav>

        </div>   
      </div>
      </div>
        <main>
       
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>

       
        </main>

    
      </div>
      </div>
    </Router>
 
    </>
  );
}

export default App;
