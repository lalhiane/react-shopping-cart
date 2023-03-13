import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faMeteor, faBagShopping, faUser } from '@fortawesome/free-solid-svg-icons'

import MainStyles from "../../main.module.css";

import Styles from "./header.module.css";
import { useAppSelector } from "../../store/store";

const Header = () => {

    const cartProducts = useAppSelector(state => state.cart.cartProducts);

    return (

        <header className={Styles.header}>

            <div className={MainStyles.container}>

                <div className={Styles.row}>

                    <Link to="/" className={Styles.logo}>

                        <FontAwesomeIcon
                            
                            icon={faMeteor}

                            className={Styles["logo-icon"]}
                        
                        />

                        Alhiane

                    </Link>

                    <nav className={Styles.navbar}>

                        <Link to="cart" className={Styles["nav-link"]}>

                            <FontAwesomeIcon
                                
                                icon={faBagShopping}
                            
                                className={Styles["header-icon"]}
                            
                            />

                            <span className={Styles.count}>
                                
                                {cartProducts.length}
                            
                            </span>

                        </Link>

                        <Link to="/" className={Styles["nav-link"]}>

                            <FontAwesomeIcon
                                
                                icon={faUser}
                                
                                className={Styles["header-icon"]}

                            />

                        </Link>
                        
                    </nav>

                </div>

            </div>

        </header>

    );

}

export default Header;