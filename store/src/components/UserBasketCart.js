import React, { useContext } from 'react';

//Context
import { CartContext } from '../context/CartContextProvider';
import { ThemeContext } from '../context/ThemeContextProvider';

//functions
import { quantityCount } from '../helper/functions';

//Toast 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Style 
import style from "./UserBasketCart.module.css"


const UserBasketCart = ({ data }) => {
    const { state, dispatch } = useContext(CartContext)
    const { themeIsLight , setThemeIsLight } = useContext(ThemeContext)

    const { id, image, Name, Time, Price, quantity } = data

    return (
        <>
            <div className={themeIsLight ? style.CartContainer : style.CartContainerDark}>
                <div className={style.cartImageContainer}>
                    <img src={image} alt="product" className={style.cartImage} />
                </div>
                <div className={style.cartDetailsContainer}>
                    <h3 className={style.cartName}>{Name}</h3>

                    <div className={style.cartBenefitsContainer}>
                        <h6 className={themeIsLight ? style.cartBenefits : style.cartBenefitsDark}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                            </svg>
                            <span>پشتیبانی</span>
                        </h6>
                        <h6 className={themeIsLight ? style.cartBenefits : style.cartBenefitsDark}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                            </svg>
                            <span>دوره پروژه محور</span>
                        </h6>
                        <h6 className={themeIsLight ? style.cartBenefits : style.cartBenefitsDark}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                            </svg>
                            <span>زمان نامحدود دانلود</span>
                        </h6>
                        <h6 className={themeIsLight ? style.cartBenefits : style.cartBenefitsDark}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                            </svg>
                            <span>آپدیت دائمی</span>
                        </h6>
                    </div>

                    <h4 className={style.cartPrice}>
                        <span>{Price.toLocaleString('en-US')}</span>
                        <span>تومان</span>
                    </h4>
                    <div className={style.cartBtnContainer}>

                        <button className={style.increaseBtn} onClick={() => dispatch({ type: "INCREASE", payload: data })}>

                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                            </svg>

                        </button>

                        {quantityCount(state, id) > 0 && <span className={style.quantity}>{quantityCount(state, id)}</span>}

                        {
                            quantity > 1 ?

                                <button className={style.decreaseBtn} onClick={() => dispatch({ type: "DECREASE", payload: data })}>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                    </svg>

                                </button>
                                :
                                <button className={style.removeBtn} onClick={() => {
                                    dispatch({ type: "REMOVE_ITEM", payload: data })
                                    toast.error("محصول مورد نظر حذف شد")
                                }}>حذف</button>
                        }

                        {
                            
                        }

                    </div>
                </div>
            </div>
            <hr />
        </>
    );
};

export default UserBasketCart;