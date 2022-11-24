import React, { useState, useEffect } from 'react';

//Validate data function
import Validate from "../helper/validateSignin"

//Style
import style from "./SignIn.module.css"

//React Router Dom
import { Link } from 'react-router-dom';


const SignIn = () => {

    const [touched, setTouched] = useState({})
    const [errors, setErrors] = useState({})
    const [data, setData] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
        accepted: false,
    })

    const FocusHandler = event => {
        setTouched({ ...touched, [event.target.name]: true })
        console.log(touched);
    }

    const Changehandler = event => {
        if (event.target.name === "accepted") {
            setData({ ...data, [event.target.name]: event.target.checked })
        } else {
            setData({ ...data, [event.target.name]: event.target.value })
            Validate(data)
        }
    }

    useEffect(() => {
        setErrors(Validate(data))
    }, [data])



    const { username, email, phone, password, accepted } = data

    return (
        <>
            <section className={style.signinSection}>

                <div className={style.LoginSignInContainer} >
                    <Link to="/signin" className={style.SigninLink}>ثبت نام </Link>
                    <Link to="/login" className={style.LoginLink}>ورود</Link>
                </div>
                <div className={style.signincontainer}>
                    <form className={style.form}>
                        <div>
                            <h1 className={style.signinTitle}>به خانواده ما خوش آمدید</h1>
                            <h5 className={style.signinContent}>اجتماعی از هزاران دانشجو علاقه مند به یادگیری برنامه نویسی</h5>
                        </div>
                        <div className={style.signinInputContainer}>

                            <input type="text" value={username} name='username' className={style.input} placeholder="نام کاربری" onChange={Changehandler} onFocus={FocusHandler} />
                            {errors.username && touched.username && <span className={style.errorsStyle}>{errors.username}</span>}

                            <input type="text" value={email} name='email' className={style.input} placeholder="ایمیل" onChange={Changehandler} onFocus={FocusHandler} />
                            {errors.email && touched.email && <span className={style.errorsStyle}>{errors.email}</span>}

                            <input type="phone" value={phone} name='phone' className={style.input} placeholder="شماره موبایل" onChange={Changehandler} onFocus={FocusHandler} />
                            {errors.phone && touched.phone && <span className={style.errorsStyle}>{errors.phone}</span>}

                            <input type="password" value={password} name='password' className={style.input} placeholder="رمز عبور" onChange={Changehandler} onFocus={FocusHandler} />
                            {errors.password && touched.password && <span className={style.errorsStyle}>{errors.password}</span>}

                            <div className={style.linksContainer}>

                                <div className={style.inputCheckBoxContainer}>
                                    <input type="checkbox" value={accepted} name='accepted' onChange={Changehandler} onFocus={FocusHandler} />
                                    {errors.accepted && touched.accepted && <span className={style.errorsStyle}>{errors.accepted}</span>}
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