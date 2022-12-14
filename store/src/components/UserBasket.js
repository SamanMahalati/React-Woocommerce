import React, { useContext } from 'react';

//React Router Dom
import { Link } from 'react-router-dom'

//Components
import UserBasketCart from './UserBasketCart';

//Context
import { CartContext } from '../context/CartContextProvider';
import { ThemeContext } from '../context/ThemeContextProvider';

//Style
import style from "./UserBasket.module.css"

//images
import empty from "../images/empty-cart.svg"

//Sweet Alert
import swal from "sweetalert"

//toastify
import { ToastContainer } from 'react-toastify';

const UserBasket = ({ data }) => {
    const { state, dispatch } = useContext(CartContext)
    const { themeIsLight , setThemeIsLight } = useContext(ThemeContext)

    return (
        <section className={themeIsLight ? style.UserBasketContainer : style.UserBasketContainerDark}>
            <div className={themeIsLight ? style.UserBasket : style.UserBasketDark}>
                {
                    state.itemsCounter ?
                        state.selectedItems.map(item => <UserBasketCart key={item.id} data={item} />) :
                        <div className={themeIsLight ? style.emptyContainer : style.emptyContainerDark}>
                            <img src={empty} alt="empty" />
                            <h2> سبد خرید شما خالی است ! </h2>
                            <h5>می‌توانید برای مشاهده محصولات بیشتر به صفحات زیر بروید:</h5>
                            <div className={style.emptyLinkContainer}>
                                <Link className={style.emptyLink} to="/">صفحه اصلی</Link>
                                |
                                <Link className={style.emptyLink} to="/products">صفحه محصولات</Link>
                            </div>
                        </div>
                }
            </div>

            <div className={themeIsLight ? style.UserBasketCheckout : style.UserBasketCheckoutDark}>
                <div className={style.checkoutDetails}>
                    <span>جمع سبد خرید : {state.total.toLocaleString('en-US')}</span>
                    <span>تعداد محصولات : {state.itemsCounter}</span>
                </div>
                <div className={state.itemsCounter === 0 ? style.checkoutBtnRemove : style.checkoutBtnContainer}>
                    <button className={style.checkoutBtn} onClick={() => {
                        dispatch({ type: "CHECKOUT", payload: data })
                        swal({
                            title: "خرید شما تکمیل شد",
                            text: "محصول شما در حال آماده سازی برای ارسال است..",
                            icon: "success",
                            button: "باشه",
                        })
                    }}>خرید</button>
                    <button className={style.clearBtn} onClick={() => {
                        dispatch({ type: "CLEAR", payload: data })
                        swal({
                            title: "سبد خرید خالی شد",
                            text: "",
                            icon: "success",
                            button: "باشه",
                        }) 
                    }}>خالی کردن سبد خرید</button>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
};

export default UserBasket;