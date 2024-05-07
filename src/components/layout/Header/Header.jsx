import Navbar from "./Navbar"
import '../../../styles/Header.css'
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

export default function Header({numberOfProductsInCart}) {
    return(
        <header className="header">
            <div className='container header__container'>
                <Link to='/' className="header__logo">
                    fruictify.
                </Link>
                <Navbar numberOfProductsInCart={numberOfProductsInCart} />
            </div>
        </header>
    )
}

Header.propTypes = {
    numberOfProductsInCart: PropTypes.number
}