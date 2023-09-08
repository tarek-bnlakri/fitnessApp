import React from 'react';
import {Box} from '@mui/material';
import AboutMe from './Pages/AboutMe';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css';
import Home from './Pages/Home';

import Exercises from './Pages/Exercises';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
function App() {

  return (
  
    
        <Box with='400px' sx={{width:{xl:'1488px'}} } m='auto'>
          <Router>
            <Navbar/> 
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/Exercises/:id' element={<Exercises/>} />
              <Route path='/AboutMe' element={<AboutMe/>}/>
            </Routes>
            </Router>
            
          
          <Footer/>
        </Box>
  )
      
}

export default App;
