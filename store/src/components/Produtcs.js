import React , {useState , useEffect , useContext} from 'react';

//components
import Product from './Product';
import ProductsPaginnation from './ProductsPaginnation';

//Style
import style from "./Products.module.css"

//Context
import { ThemeContext } from '../context/ThemeContextProvider';

const productArray = [
    {
        id: 1,
        image: "https://fronthooks.ir/images/React.svg",
        Name: "دوره متخصص ریکت و ریداکس",
        Time: 52,
        Price: 2_400_000 ,
        CourseName: "React" ,
    },
    {
        id: 2,
        image: "https://fronthooks.ir/images/tailwindCSS.svg",
        Name: "دوره جامع و پیشرفته TailwindCSS",
        Time: 18,
        Price: 700_000 ,
        CourseName: "Tailwind" ,
    },
    {
        id: 3,
        image: "https://fronthooks.ir/images/javascript.svg",
        Name: "دوره متخصص جاوااسکریپت",
        Time: 90,
        Price: 1_700_000 ,
        CourseName: "Js" ,
    },
    {
        id: 4,
        image: "https://fronthooks.ir/images/html-css.svg",
        Name: "دوره HTML + CSS",
        Time: 60,
        Price: 500_000 ,
        CourseName: "Html&Css" ,
    },
    {
        id: 5,
        image: "https://fronthooks.ir/images/nextjs.svg",
        Name: "دوره متخصص Next.js",
        Time: 40,
        Price: 2_800_000 ,
        CourseName: "NextJs" ,
    },
    {
        id: 6,
        image: "https://fronthooks.ir/images/git.svg",
        Name: "دوره گیت و گیت هاب",
        Time: 2,
        Price: 300_000 ,
        CourseName: "Git&Github" ,
    },
    {
        id: 7,
        image: "https://fronthooks.ir/images/flex-grid.svg",
        Name: "دوره پروژه محور فلکس و گرید",
        Time: 4,
        Price: 100_000 ,
        CourseName: "Flex&Grid" ,
    },
    {
        id: 8,
        image: "https://fronthooks.ir/images/freelancering.svg",
        Name: "دوره تجربیات فریلنسری",
        Time: 10,
        Price: 430_000 ,
        CourseName: "Freelancery" ,
    },
    {
        id: 9,
        image: "https://fronthooks.ir/images/vs-code.svg",
        Name: "دوره متخصص کار با VS Code",
        Time: 2,
        Price: 80_000 ,
        CourseName: "Vscode" ,
    },
]

const Products = () => {

    const [products , setProducts] = useState([])
    const [loading , setLoading] = useState(true)
    const [currentPage , setCurrentPage] = useState(1)
    const [productsPerPage , setProductsPerPage] = useState(6)
    
    const { themeIsLight , setThemeIsLight } = useContext(ThemeContext)

    useEffect(() => {
        setProducts(productArray)
    } , [])

    const indexOfLastPost = currentPage * productsPerPage
    const indexOfFirstPost = indexOfLastPost - productsPerPage
    const currentProducts = products.slice(indexOfFirstPost , indexOfLastPost)

    const pageinnate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <section className={style.ProductsSection}>
            <div className={style.ProductTitleContainer}>
                <h1 className={themeIsLight ? style.ProductTitle : style.ProductTitleDark}>دوره ها برنامه نویسی آکادمی</h1>
                <span className={style.ProductTitleEffect}></span>
            </div>
            <div className={style.ProductContainer}>
                {
                    currentProducts.map(product => <Product key={product.id} data={product} />)
                }
            </div>
            <ProductsPaginnation ProductsPerPage={productsPerPage} totalProducts={products.length} pageinnate={pageinnate}/>
        </section>
    );
};

export default Products;