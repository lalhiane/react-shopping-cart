import { setSearchTerm } from "../../store/slices/searchSlice";

import { useAppDispatch, useAppSelector } from "../../store/store";

import Styles from "./products.module.css";

const Search = () => {
    
    const searchTerm = useAppSelector(state => state.searchTerm.term);

    const dispatch = useAppDispatch();

    return (<>

        <input
            
            type="search"
            
            className={`${Styles["search-input"]}`}
            
            placeholder="Search"

            value={searchTerm}

            onChange={e => dispatch(setSearchTerm(e.target.value))}
        
        />

    </>);

}

export default Search;