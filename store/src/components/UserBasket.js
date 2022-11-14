import React, { useContext } from 'react';

//React Router Dom
import { Link } from 'react-router-dom'

//Components
import UserBasketCart from './UserBasketCart';

//Context
import { CartContext } from '../context/CartContextProvider';

//Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Style
import style from "./UserBasket.module.css"

//images
import empty from "../images/empty-cart.svg"

const UserBasket = () => {
    const { state } = useContext(CartContext)

    return (
        <section className={style.UserBasketContainer}>
            <div className={style.UserBasket}>
                {
                    state.itemsCounter ?
                        state.selectedItems.map(item => <UserBasketCart key={item.id} data={item} />) :
                        <div className={style.emptyContainer}>
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

            <div className={style.UserBasketCheckout}>
                <div className={style.checkoutDetails}>
                    <span>جمع سبد خرید : {state.total.toLocaleString('en-US')}</span>
                    <span>تعداد محصولات : {state.itemsCounter}</span>
                </div>
                <div className={style.checkoutBtnContainer}>
                    <button className={style.checkoutBtn}>خرید</button>
                    <button className={style.clearBtn}>خالی کردن سبد خرید</button>
                </div>
            </div>

            <ToastContainer />
        </section>
    );
};

export default UserBasket;