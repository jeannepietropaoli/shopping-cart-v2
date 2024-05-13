import '../../../styles/Navbar.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import burgerBtn from '../../../assets/menu.png'
import { useState } from 'react'

export default function Navbar({numberOfProductsInCart}) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMobileMenuOpen(prevState => !prevState)
    }

    const clsoeMenu = () => setMobileMenuOpen(false)

    return (
        <>
        <nav className={`nav ${mobileMenuOpen ? 'nav--mobile' : 'nav--desktop'}`}>
            <ul className='nav__list'>
                <li onClick={clsoeMenu} className='nav__item'><Link className='nav__link' to='/'>Home</Link></li>
                <li onClick={clsoeMenu} className='nav__item'><Link className='nav__link' to='/shop'>Shop</Link></li>
                <li onClick={clsoeMenu} className='nav__item'>
                    <Link className='nav__link' to='/cart'>Cart</Link>
                    <span data-testid='nav-cart-count' className='nav__cart-count'>{numberOfProductsInCart}</span>
                </li>
            </ul>
        </nav>
        <nav className='nav nav--mobile-burger'>
            <button onClick={toggleMenu} className='nav__burger-btn'>
                <img className='nav__img' src={burgerBtn} alt="collapsed menu icon" />
            </button>
        </nav>
        </>
    )
}

Navbar.propTypes = {
    numberOfProductsInCart: PropTypes.number
}

Navbar.defaultProps = {
    numberOfProductsInCart: 0
}