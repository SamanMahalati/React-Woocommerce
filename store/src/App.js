import React from 'react';

//Components
import Navbar from './components/Navbar';
import Landing from './components/Landing';

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
      </Routes>
    </div>
  );
}

export default App;