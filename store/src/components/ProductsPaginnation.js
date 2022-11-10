import React from 'react';

//style
import style from './ProductsPaginnation.module.css'

const ProductsPaginnation = ({ProductsPerPage , totalProducts , pageinnate}) => {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalProducts / ProductsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div>
            <ul className={style.pageinnationContainer}>
                {
                    pageNumbers.map(number => <li onClick={() => pageinnate(number)} key={number} className={style.pageinnationNumber}>{number}</li>)
                }
            </ul>
        </div>
    );
};

export default ProductsPaginnation;