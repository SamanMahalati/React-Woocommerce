import React, { useContext } from 'react';

//Components
import UserBasketCart from './UserBasketCart';

//Context
import { CartContext } from '../context/CartContextProvider';

//Style
import style from "./UserBasket.module.css"

const UserBasket = () => {
    const { state } = useContext(CartContext)
    return (
        <section className={style.UserBasketContainer}>
            {
                state.selectedItems.map(item => <UserBasketCart key={item.id} data={item}/>)
            }
        </section>
    );
};

export default UserBasket;