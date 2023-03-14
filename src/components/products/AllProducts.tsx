import { useEffect } from "react";

import { fetchProducts } from "../../store/slices/productsSlice";

import { setSearchTerm } from "../../store/slices/searchSlice";

import { useAppDispatch, useAppSelector } from "../../store/store";

import Styles from "./products.module.css";

import SingleProduct from "./SingleProduct";

const AllProducts = () => {

    const products = useAppSelector(state => state.product.products);

    const optionCategory = useAppSelector(state => state.selectOption.option);

    const settingPrice = useAppSelector(state => state.settinPrice.price);

    const searchTerm = useAppSelector(state => state.searchTerm.term);

    const dispatch = useAppDispatch();

    useEffect(() => {

        if (optionCategory === "All" || optionCategory === "") {

            dispatch(fetchProducts("https://fakestoreapi.com/products"));

        } else {

            dispatch(fetchProducts(
                
                `https://fakestoreapi.com/products/category/${optionCategory}`
            
            ));

        }

    }, [optionCategory]);

    let cardsEl = products.map(product => {

        if (searchTerm !== "") {

            if (product.title?.toLowerCase().startsWith(searchTerm.toLowerCase())) {

                if (settingPrice.minPrice && settingPrice.maxPrice) {

                    if (product.price) {

                        if ((product.price >= +settingPrice.minPrice) &&
                            (product.price < +settingPrice.maxPrice)) {

                            return <SingleProduct key={product.id} product={product} />

                        }

                    }
        
                } else {

                    return <SingleProduct key={product.id} product={product} />

                }

            }

        } else {

            if (settingPrice.minPrice && settingPrice.maxPrice) {

                if (product.price) {

                    if ((product.price >= +settingPrice.minPrice) &&
                        (product.price < +settingPrice.maxPrice)) {

                        return <SingleProduct key={product.id} product={product} />

                    }

                }
    
            } else {

                return <SingleProduct key={product.id} product={product} />

            }

        }

    });

    return (
        
        <div className={Styles["all-products"]}>{ cardsEl }</div>
    
    );

}

export default AllProducts;