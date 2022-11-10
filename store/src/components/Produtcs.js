import React , {useState , useEffect} from 'react';

//components
import Product from './Product';

//Style
import style from "./Products.module.css"

const productArray = [
    {
        id: 1,
        image: "https://fronthooks.ir/images/React.svg",
        Name: "دوره متخصص ریکت و ریداکس",
        Time: 52,
        Price: 2_400_000
    },
    {
        id: 2,
        image: "https://fronthooks.ir/images/tailwindCSS.svg",
        Name: "دوره جامع و پیشرفته TailwindCSS",
        Time: 18,
        Price: 700_000
    },
    {
        id: 3,
        image: "https://fronthooks.ir/images/javascript.svg",
        Name: "دوره متخصص جاوااسکریپت",
        Time: 90,
        Price: 1_700_000
    },
    {
        id: 4,
        image: "https://fronthooks.ir/images/html-css.svg",
        Name: "دوره HTML + CSS",
        Time: 60,
        Price: 500_000
    },
    {
        id: 5,
        image: "https://fronthooks.ir/images/nextjs.svg",
        Name: "دوره متخصص Next.js",
        Time: 40,
        Price: 2_800_000
    },
    {
        id: 6,
        image: "https://fronthooks.ir/images/git.svg",
        Name: "دوره گیت و گیت هاب",
        Time: 2,
        Price: 300_000
    },
    {
        id: 7,
        image: "https://fronthooks.ir/images/flex-grid.svg",
        Name: "دوره پروژه محور فلکس و گرید",
        Time: 4,
        Price: 100_000
    },
    {
        id: 8,
        image: "https://fronthooks.ir/images/freelancering.svg",
        Name: "دوره تجربیات فریلنسری",
        Time: 10,
        Price: 430_000
    },
    {
        id: 9,
        image: "https://fronthooks.ir/images/vs-code.svg",
        Name: "دوره متخصص کار با VS Code",
        Time: 2,
        Price: 80_000
    },
]

const Products = () => {

    const [products , setProducts] = useState([])

    useEffect(() => {
        setProducts(productArray)
    } , [])

    return (
        <section className={style.ProductsSection}>
            <div className={style.ProductTitleContainer}>
                <h1 className={style.ProductTitle}>دوره ها برنامه نویسی آکادمی</h1>
                <span className={style.ProductTitleEffect}></span>
            </div>
            <div className={style.ProductContainer}>
                {
                    products.map(product => <Product key={product.id} data={product} />)
                }
            </div>
        </section>
    );
};

export default Products;