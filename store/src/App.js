import React from 'react';

//Components
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import NotFound from './components/NotFound';
import Products from './components/Produtcs';

//Style
import "./App.css" 

//React Router Dom
import { Route , Routes , Navigate } from 'react-router-dom'


const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/NotFound' element={<NotFound/>}/>
        <Route path='/*' element={<Navigate to='/NotFound' />}/>
      </Routes>
    </div>
  );
}

export default App;