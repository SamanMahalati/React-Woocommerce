import React, { useContext } from 'react';

//Context
import { CartContext } from '../context/CartContextProvider'
import { ThemeContext } from '../context/ThemeContextProvider';

//Functions
import { isInCart, quantityCount } from '../helper/functions';

//Style
import style from "./Product.module.css"

//Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Product = ({ data }) => {

    const { id, image, Name, Time, Price , CourseName } = data

    const { state, dispatch } = useContext(CartContext)
    const { themeIsLight , setThemeIsLight } = useContext(ThemeContext)

    return (
        <div className={themeIsLight ? style.ProductCart : style.ProductCartDark}>
            <div className={style.ProductImageContainer}>
                <img src={image} alt="Product" className={style.ProductImage} />
            </div>
            <div className={style.ProductContent}>
                <h2 className={style.ProductName}>{Name}</h2>
                <div className={themeIsLight ? style.ProductTimeContainer : style.ProductTimeContainerDark}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock-history" viewBox="0 0 16 16">
                        <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" />
                        <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" />
                        <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
                    </svg>
                    <span className={themeIsLight ? style.ProductTime : ""}>{`?????? :  ${Time}  ????????`}</span>
                </div>

                <div className={themeIsLight ? style.ProductLinkContainer : style.ProductLinkContainerDark}>
                    <Link to={`/products/${CourseName}`}>???????????? ???????? </Link>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg>
                </div>

                <div className={style.ProductBtnContainer}>
                    <div className={style.ProductBtns}>
                        {
                            isInCart(state, id) ?

                                <button className={style.ProductBtnAdd} onClick={() => dispatch({ type: "INCREASE", payload: data })}>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                    </svg>

                                </button>
                                :
                                <>
                                    <button
                                        className={style.ProductBtnBuy}
                                        onClick={() => {
                                            dispatch({ type: "ADD_ITEM", payload: data })
                                            toast.success("?????????? ???? ?????? ???????? ?????????? ????");
                                        }
                                        }>
                                        ?????? ??????
                                    </button>
                                </>
                        }


                        {quantityCount(state, id) > 0 && <span className={style.quantity}>{quantityCount(state, id)}</span>}


                        {quantityCount(state, id) > 1 && <button className={style.ProductBtnMinus} onClick={() => dispatch({ type: "DECREASE", payload: data })}>

                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                            </svg>

                        </button>}


                        {quantityCount(state, id) === 1 && <button
                            className={style.ProductBtnRemove}
                            onClick={() => {
                                dispatch({ type: "REMOVE_ITEM", payload: data })
                                toast.error("?????????? ???????? ?????? ?????? ????")
                            } }>
                            ??????
                        </button>}

                    </div>

                    <span>{Price.toLocaleString('en-US')} ??????????</span>

                </div>
            </div>
            <ToastContainer />
        </div>
    );
};


export default Product;