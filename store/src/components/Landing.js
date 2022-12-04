import React from 'react';

//Style
import style from "./Landing.module.css"

//Components
import Header from './Header';
import Products from './Produtcs';
import StudentComment from './StudentComment';

const Landing = () => {
    return (
        <main className={style.main}>
          <Header/>  
          <Products/>
          <StudentComment/>
        </main>
    );
};

export default Landing;