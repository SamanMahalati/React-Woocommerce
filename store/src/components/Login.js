import React from 'react';

//styles
import style from "./Login.module.css"

//React Router Dom
import { Link } from "react-router-dom"

//images
import LoginImage from "../images/Login.jpg"

const Login = () => {
    return (
        <section className={style.loginSection}>
            <img className={style.loginImage} src={LoginImage} alt="background" />

            <div className={style.LoginSignInContainer} >
                <Link to="/signin" className={style.SigninLink}>ثبت نام </Link>
                <div>|</div>
                <Link to="/login" className={style.LoginLink}>ورود</Link>
            </div>
            <div className={style.logincontainer}>
                <form className={style.form}>
                    <div>
                        <h1 className={style.loginTitle}>به خانواده ما خوش آمدید</h1>
                        <h5 className={style.loginContent}>اجتماعی از هزاران دانشجو علاقه مند به یادگیری برنامه نویسی</h5>
                    </div>
                    <div className={style.loginInputContainer}>

                        <input type="text" name='username' className={style.input} placeholder="نام کاربری" />
                        <input type="password" name='password' className={style.input} placeholder="رمز عبور" />

                        <div className={style.linksContainer}>

                            <div className={style.inputCheckBoxContainer}>
                                <input type="checkbox" name='accepted' />
                                <label>مرا به خاطر بسپار</label>
                            </div>

                            <a href="#" className={style.SiginLink}>رمز عبور خود را فراموش کردید ؟</a>

                        </div>

                        <button className={style.loginBtn}>ورود</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Login;