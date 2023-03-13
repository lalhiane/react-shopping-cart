import Styles from "./products.module.css";

const Search = () => {

    return (<>

        <input
            
            type="search"
            
            className={Styles["search-input"]}
            
            placeholder="Search"
        
        />

    </>);

}

export default Search;