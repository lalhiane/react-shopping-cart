import Styles from "./products.module.css";

import MainStyles from "../../main.module.css";

import { Product } from "../../store/slices/productsSlice";

import { Link } from "react-router-dom";

import { useAppDispatch } from "../../store/store";

import { addToCart } from "../../store/slices/cartSlice";

interface Props {

    product: Product

}

const SingleProduct = ({ product }: Props) => {
    
    const { id, title, price, category, image } = product;

    const dispatch = useAppDispatch();

    return (

        <div className={Styles.card}>

            <div className={Styles["card-head"]}>

                <img className={Styles["card-img"]} src={image} alt={title} />

                <span className={Styles["product-category"]}>{category}</span>

            </div>

            <div className={Styles["card-body"]}>

                <h3 className={Styles["product-title"]}>{title?.substr(0, 15)}...</h3>

                <span className={Styles["product-price"]}>${price}</span>

                <div className={Styles["card-body-row"]}>

                    <Link to={`/${id}`} className={MainStyles.btn}>Detils</Link>

                    <button
                        
                        className={MainStyles.btn}

                        onClick={_ => {

                            dispatch(addToCart({ value: 1, data: product }))

                        }}
                    
                    >Add</button>

                </div>

            </div>

        </div>

    );

}

export default SingleProduct;