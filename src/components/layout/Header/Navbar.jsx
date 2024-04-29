import '../../../styles/Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar({numberOfProductsInCart}) {
    return (
        <nav className='nav'>
            <ul className='nav__list'>
                <li className='nav__item'><Link className='nav__link' to='/'>Home</Link></li>
                <li className='nav__item'><Link className='nav__link' to='/shop'>Shop</Link></li>
                <li className='nav__item'>
                    <Link className='nav__link' to='/cart'>Cart</Link>
                    <span className='nav__cart-count'>{numberOfProductsInCart}</span>
                </li>
            </ul>
        </nav>
    )
}