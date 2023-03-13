import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { fetchSingleProduct } from "../../store/slices/singleProductSlice";

import { useAppDispatch, useAppSelector } from "../../store/store";

import Styles from "./details.module.css";

import MainStyles from "../../main.module.css";

import { addToCart } from "../../store/slices/cartSlice";

function Details() {

  const singleProduct = useAppSelector(state => state.singleProduct.product);

  const dispatch = useAppDispatch();

  const { id } = useParams();

  const [detailQuantity, setDetailQuantity] = useState(1);

  useEffect(() => {

    dispatch(fetchSingleProduct(id));

  }, []);

  return (<div className={MainStyles.container}>

    <div className={Styles.row}>

      <div className={Styles["product-img"]}>
    
        <img src={singleProduct.image} alt={singleProduct.title} />

      </div>

      <div className={Styles["right-part"]}>

        <div className={Styles["product-info"]}>

          <h4 className={Styles["product-category"]}>

            Category: {singleProduct.category}

          </h4>

          <h3 className={Styles["product-title"]}>{singleProduct.title}</h3>

          <p className={Styles["product-desc"]}>{singleProduct.description}</p>

          <span className={Styles["product-price"]}>${singleProduct.price}</span>

        </div>

        <div className={Styles["cart-info"]}>

          <div className={Styles["product-quantity"]}>

            <span onClick={() => {

              if (detailQuantity === 1) return;

              setDetailQuantity(detailQuantity - 1);
              
            }}>-</span>

            <span>{detailQuantity}</span>

            <span onClick={() => {

              setDetailQuantity(detailQuantity + 1);
              
            }}>+</span>

          </div>

          <div className={Styles["total-price"]}>
            
            Total: ${singleProduct.price ?
              (singleProduct.price * detailQuantity).toFixed(2) : 0}
          
          </div>

        </div>

        <div className={Styles["add-to-cart-btn"]}>

          <button
            
            className={MainStyles.btn}

            onClick={_ => {

              dispatch(addToCart({ value: detailQuantity, data: singleProduct }));

            }}
          
          >Add To Cart</button>

        </div>

      </div>

    </div>

  </div>)
}

export default Details
