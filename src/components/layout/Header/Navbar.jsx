import '../../../styles/Navbar.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Navbar({numberOfProductsInCart}) {
    return (
        <nav className='nav'>
            <ul className='nav__list'>
                <li className='nav__item'><Link className='nav__link' to='/'>Home</Link></li>
                <li className='nav__item'><Link className='nav__link' to='/shop'>Shop</Link></li>
                <li className='nav__item'>
                    <Link className='nav__link' to='/cart'>Cart</Link>
                    <span data-testid='nav-cart-count' className='nav__cart-count'>{numberOfProductsInCart}</span>
                </li>
            </ul>
        </nav>
    )
}

Navbar.propTypes = {
    numberOfProductsInCart: PropTypes.number
}

Navbar.defaultProps = {
    numberOfProductsInCart: 0
}