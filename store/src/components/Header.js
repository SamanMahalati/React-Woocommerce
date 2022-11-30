import React , { useContext } from 'react';

import style from './Header.module.css'

//Images
import HeaderVector from '../images/Header.png'

//Context 
import { ThemeContext } from '../context/ThemeContextProvider';

const Header = () => {
    const { themeIsLight , setThemeIsLight } = useContext(ThemeContext)
    return (
        <header className={style.Header}>
            <div className={style.HeaderTitle}>
                <h1 className={themeIsLight ? style.HeaderTitleText : style.HeaderTitleTextDark}>آموزش برنامه نویسی </h1>
                <h5 className={themeIsLight ? style.HeaderTitleContent : style.HeaderTitleContentDark}>آموزش درست، پروژه محور و جامع برنامه نویسی همراه با پشتیبانی دائمی جزو استاندارد های آموزشی که بدون شک باعث ورود شما به بازار کار خواهد شد.</h5>
                <div className={style.HeaderBtnContainer}>
                    <button className={style.startBtn}>
                        <span>شروع دوره</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                            <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                        </svg>
                    </button>
                    <button className={style.commentBtn}>نظرات دانشجویان</button>
                </div>
            </div>
            <div className={style.HeaderVector}>
                <img src={HeaderVector} alt="Header Image" className={style.HeaderVectorimg} />
            </div>
        </header>
    );
};

export default Header;