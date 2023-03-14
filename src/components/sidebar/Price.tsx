import Styles from "./sidebar.module.css";

import MainStyles from "../../main.module.css";

import { useAppDispatch } from "../../store/store";

import { setPrice } from "../../store/slices/priceSlice";

import { useRef, useState } from "react";

const Price = () => {

    const dispatch = useAppDispatch();

    const [minPrice, setMinPrice] = useState("");

    const [maxPrice, setMaxPrice] = useState("");

    const minInputRef = useRef<HTMLInputElement>(null);

    return (<div className={Styles.price}>

        <h2 className={Styles["sidebar-title"]}>Price</h2>

        <div className={Styles["price-inputs"]}>
                
            <input
                
                ref={minInputRef}
                
                type="number"
                
                placeholder="Min"

                value={minPrice}

                onChange={e => {

                    setMinPrice(e.target.value);

                }}
            
            />
            
            <input
                
                type="number"
                
                placeholder="Max"

                value={maxPrice}

                onChange={e => {

                    setMaxPrice(e.target.value);

                }}
            
            />

        </div>
 
        <button
        
            className={MainStyles.btn}

            onClick={_ => {

                dispatch(setPrice({ minPrice, maxPrice }));

                setMinPrice("");

                setMaxPrice("");

                minInputRef.current?.focus();

            }}
        
        >Set Price</button>

    </div>);

}

export default Price;