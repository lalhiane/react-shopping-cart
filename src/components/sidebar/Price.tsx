import Styles from "./sidebar.module.css";

import MainStyles from "../../main.module.css";

import { useAppDispatch } from "../../store/store";

import { setPrice } from "../../store/slices/priceSlice";

import { useState } from "react";

const Price = () => {

    const dispatch = useAppDispatch();

    const [minPrice, setMinPrice] = useState(0);

    const [maxPrice, setMaxPrice] = useState(0);

    return (<div className={Styles.price}>

        <h2 className={Styles["sidebar-title"]}>Price</h2>

        <div className={Styles["price-inputs"]}>
                
            <input
                
                type="number"
                
                placeholder="Min"

                onChange={e => {

                    setMinPrice(+e.target.value);

                }}
            
            />
            
            <input
                
                type="number"
                
                placeholder="Max"

                onChange={e => {

                    setMaxPrice(+e.target.value);

                }}
            
            />

        </div>
 
        <button
        
            className={MainStyles.btn}

            onClick={_ => {

                dispatch(setPrice({ minPrice, maxPrice }));

            }}
        
        >Set Price</button>

    </div>);

}

export default Price;