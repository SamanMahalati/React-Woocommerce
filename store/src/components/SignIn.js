import React from 'react';

//Style
import style from "./SignIn.module.css"

//React Router Dom
import { Link } from 'react-router-dom';

//Images
import signinImage from "../images/Login.jpg"

const SignIn = () => {
    return (
        <>
            <section className={style.signinSection}>
                
                    <div className={style.LoginSignInContainer} >
                        <Link to="/signin" className={style.SigninLink}>ثبت نام </Link>
                        <div>|</div>
                        <Link to="/login" className={style.LoginLink}>ورود</Link>
                    </div>
                    <div className={style.signincontainer}>
                        <form className={style.form}>
                            <div>
                                <h1 className={style.signinTitle}>به خانواده ما خوش آمدید</h1>
                                <h5 className={style.signinContent}>اجتماعی از هزاران دانشجو علاقه مند به یادگیری برنامه نویسی</h5>
                            </div>
                            <div className={style.signinInputContainer}>

                                <input type="text" name='username' className={style.input} placeholder="نام کاربری" />
                                <input type="text" name='email' className={style.input} placeholder="ایمیل" />
                                <input type="phone" name='phone' className={style.input} placeholder="شماره موبایل" />
                                <input type="password" name='password' className={style.input} placeholder="رمز عبور" />

                                <div className={style.linksContainer}>

                                    <div className={style.inputCheckBoxContainer}>
                                        <input type="checkbox" name='accepted' />
                                        <label>مرا به خاطر بسپار</label>
                                    </div>

                                    <a href="#" className={style.ForgotpasswordLink}>رمز عبور خود را فراموش کردید ؟</a>

                                </div>

                                <button className={style.signinBtn}>ثبت نام</button>
                            </div>
                        </form>
                    </div>
            </section>
        </>
    );
};

export default SignIn;