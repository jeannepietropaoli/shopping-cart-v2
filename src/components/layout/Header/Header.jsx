import Navbar from "./Navbar"
import '../../../styles/Header.css'
import { Link } from "react-router-dom"

export default function Header({numberOfProductsInCart}) {
    return(
        <header>
            <div className='container'>
                <Link to='/'>
                    <h1>fruictify.</h1>
                </Link>
                <Navbar numberOfProductsInCart={numberOfProductsInCart} />
            </div>
        </header>
    )
}