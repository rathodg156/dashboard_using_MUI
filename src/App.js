import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Setting  from './pages/Setting';

function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/setting' element={<Setting/>}/>
    </Routes>
   </Router>
   </>
  );
}

export default App;
