import React, { useState, useEffect } from 'react';

//Validate Login
import validate from '../helper/validateLogin';

//styles
import style from "./Login.module.css"

//React Router Dom
import { Link } from "react-router-dom"

// Sweet Alert
import swal from 'sweetalert';

const Login = () => {

    const [touched, setTouched] = useState({})
    const [errors, setErrors] = useState({})
    const [data, setData] = useState({
        username: "",
        password: ""
    })

    const FocusHandler = event => {
        setTouched({ ...touched, [event.target.name]: true })

    }

    const Changehandler = event => {
        setData({ ...data, [event.target.name]: event.target.value })
        validate(data)
    }

    useEffect(() => {
        setErrors(validate(data))
    } , [data])


    const logInBtn = event => {
        event.preventDefault()
        if (!Object.keys(errors).length) {
            swal({
                title: "لاگین با موفقیت انجام شد",
                text: "به خانواده برنامه نویسی ما خوش آمدید :)",
                icon: "success",
                button: "باشه",
            })
        } else {
            swal({
                title: "لاگین با شکست مواجه شد ",
                text: "اطلاعات وارد شده معتبر نیست دوباره سعی کن :(",
                icon: "error",
                button: "باشه",
            })
            setTouched({
                username: true,
                password: true
            })
        }
    }


    const { username, password } = data
    return (
        <section className={style.loginSection}>

            <div className={style.LoginSignInContainer} >
                <Link to="/signin" className={style.SigninLink}>ثبت نام </Link>
                <Link to="/login" className={style.LoginLink}>ورود</Link>
            </div>
            <div className={style.logincontainer}>
                <form className={style.form}>
                    <div>
                        <h1 className={style.loginTitle}>به خانواده ما خوش آمدید</h1>
                        <h5 className={style.loginContent}>اجتماعی از هزاران دانشجو علاقه مند به یادگیری برنامه نویسی</h5>
                    </div>
                    <div className={style.loginInputContainer}>

                        <input type="text" name='username' className={style.input} placeholder="نام کاربری" onChange={Changehandler} onFocus={FocusHandler} value={username} />
                        {errors.username && touched.username && <span className={style.errorsStyle}>{errors.username}</span>}

                        <input type="password" name='password' className={style.input} placeholder="رمز عبور" onChange={Changehandler} onFocus={FocusHandler} value={password} />
                        {errors.password && touched.password && <span className={style.errorsStyle}>{errors.password}</span>}

                        <div className={style.linksContainer}>

                            <div className={style.inputCheckBoxContainer}>
                                <input type="checkbox" name='accepted' onChange={Changehandler} onFocus={FocusHandler} />
                                <label>مرا به خاطر بسپار</label>
                            </div>

                            <a href="#" className={style.SiginLink}>رمز عبور خود را فراموش کردید ؟</a>

                        </div>

                        <button className={style.loginBtn} onClick={logInBtn}>ورود</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Login;