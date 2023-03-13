import Categories from "./Categories";

import Price from "./Price";

import Styles from "./sidebar.module.css";

const Sidebar = () => {

    return (<div className={Styles.sidebar}>

        <Categories />

        <Price />

    </div>);

}

export default Sidebar;