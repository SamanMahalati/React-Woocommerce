import React from 'react';

//Style
import style from "./Landing.module.css"

//Components
import Header from './Header';

const Landing = () => {
    return (
        <main className={style.main}>
          <Header/>  
        </main>
    );
};

export default Landing;