import React, { useContext, useState, useEffect } from 'react';
import style from "./Navbar.module.css"

//Context
import { CartContext } from '../context/CartContextProvider';
import { ThemeContext } from '../context/ThemeContextProvider';


//React Router Dom
import { Link } from 'react-router-dom';
import styled from 'styled-components'

//Logo
import Logo from '../images/Logo.jpg'
import Hamburger from "../images/hamburger.png"



const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false)
    const { state } = useContext(CartContext)
    const { themeIsLight, setThemeIsLight } = useContext(ThemeContext)

    const closeModalBtn = () => {
        setOpenMenu(false)
    }

    const openModalBtn = () => {
        setOpenMenu(true)
    }

    const Ul = styled.ul`
     list-style: none ;
     display: flex ;
     align-items: flex-start ;
     gap: 2rem ;
     padding: 1rem 2rem ; 
     li{
         
    }
    @media (max-width: 830px) {
        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
        background-color: ${themeIsLight ? "#BFDBFE" : "#6B728E"} ;
        color: #BFDBFE;
        margin: 0 ;
        flex-direction: column ;
        position: fixed ;
        width: 15rem ;
        top: 0 ;
        right: 0 ;
        height: 100vh ;
        transform: ${openMenu ? `translate(0rem)` : `translate(100rem)`};
    }

    `

    const darkModeHandler = () => {
        setThemeIsLight(!themeIsLight)
        document.body.classList.toggle("AppDark")
        if (document.body.className.includes("AppDark")) {
            localStorage.setItem("theme", "dark")
        } else {
            localStorage.setItem("theme", "light")
        }
    }

    useEffect(() => {
        let LocalStorageTheme = localStorage.getItem("theme")

        if (LocalStorageTheme === "dark") {
            setThemeIsLight(false)
            document.body.classList.toggle("AppDark")
        }
    }, [])

    return (
        <nav className={themeIsLight ? style.navbar : style.navbarDark} >

            <div className={style.navLogoContainer}>
                <img src={Logo} alt="Logo" className={style.Logo} />
            </div>

            <img onClick={openModalBtn} className={themeIsLight ? style.HamburgerContainer : style.HamburgerContainerDark} src={Hamburger} alt="Hamburger Menu" />


            <div className={style.navMenuContainer}>

                <Ul>
                    <li className={themeIsLight ? style.closeModalBtn : style.closeModalBtnDark} onClick={closeModalBtn}>
                        <svg className={style.closeModalBtn} xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                        </svg>
                    </li>
                    <li><Link className={themeIsLight ? style.navLink : style.navLinkDark} to="/">???????? ????????</Link></li>
                    <li><Link className={themeIsLight ? style.navLink : style.navLinkDark} to="/products">???????? ?????? ????????????</Link></li>
                    <li><Link className={themeIsLight ? style.navLink : style.navLinkDark} to="/blog">??????????</Link></li>
                    <li><Link className={themeIsLight ? style.navLink : style.navLinkDark} to="/aboutus">???????????? ????</Link></li>
                    <li className={themeIsLight ? style.navLinkTheme : style.navLinkThemeDark} onClick={darkModeHandler}>{themeIsLight ? "???? ????????" : "???? ??????????"}</li>
                </Ul>
            </div>

            <div className={style.navBtnContainer}>

                <div className={style.navBtnDarkMode} onClick={darkModeHandler}>
                    {
                        themeIsLight ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-brightness-high" viewBox="0 0 16 16">
                                <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-moon" viewBox="0 0 16 16">
                                <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
                            </svg>
                    }
                </div>

                <Link to='/userBasket' className={style.navBtnBasket}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                    <span className={style.navProductCounter}>{state.itemsCounter}</span>
                </Link>

                <Link to="/login" className={style.navBtn}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
                        <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                    </svg>
                    <span>????????</span>
                </Link>

            </div>
        </nav>
    );
};

export default Navbar;