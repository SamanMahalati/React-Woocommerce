import React, { useState , useEffect } from 'react';

//Components
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import NotFound from './components/NotFound';
import Products from './components/Produtcs';
import UserBasket from './components/UserBasket';
import DetailProduct from './components/DetailProduct';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import Login from './components/Login';
import Loading from './components/Loading';

//Context
import CartContextProvider from './context/CartContextProvider';
import ThemeContextProvider from './context/ThemeContextProvider';

//Style
import "./App.css"

//React Router Dom
import { Route, Routes, Navigate } from 'react-router-dom'


const App = () => {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  } , [])

  return (
    isLoading ?
      <Loading />
      :
      <div className="App">
        <ThemeContextProvider>
          <CartContextProvider>
            <Navbar />
            <Routes>
              <Route path='/' element={<Landing />} />
              <Route path='/userBasket' element={<UserBasket />} />
              <Route path='/signin' element={<SignIn />} />
              <Route path='/login' element={<Login />} />
              <Route path='/products' element={<Products />} />
              <Route path='/products/:Name' element={<DetailProduct />} />
              <Route path='/NotFound' element={<NotFound />} />
              <Route path='/*' element={<Navigate to='/NotFound' />} />
            </Routes>
            <Footer />
          </CartContextProvider>
        </ThemeContextProvider>
      </div>
  );
}

export default App;