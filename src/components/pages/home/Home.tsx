import ProductsPart from "../../products/ProductsPart";

import Sidebar from "../../sidebar/Sidebar";

import Styles from "./home.module.css";

const Home = () => {

    return (<>

        <div className={Styles.content}>

            <Sidebar />

            <ProductsPart />

        </div>

    </>);

}

export default Home;