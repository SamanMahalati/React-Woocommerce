import React from 'react';

//Style
import style from "./Landing.module.css"

//Components
import Header from './Header';
import Products from './Produtcs';

const Landing = () => {
    return (
        <main className={style.main}>
          <Header/>  
          <Products/>
        </main>
    );
};

export default Landing;