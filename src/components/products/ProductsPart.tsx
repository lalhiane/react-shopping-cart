import AllProducts from "./AllProducts";

import Search from "./Search";

import Styles from "./products.module.css"

const ProductsPart = () => {

    return (<div className={Styles.product}>

        <Search />

        <AllProducts />

    </div>);

}

export default ProductsPart;