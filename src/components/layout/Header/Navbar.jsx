import '../../../styles/Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/shop'>Shop</Link></li>
                <li><Link to='/cart'>Cart</Link></li>
            </ul>
        </nav>
    )
}