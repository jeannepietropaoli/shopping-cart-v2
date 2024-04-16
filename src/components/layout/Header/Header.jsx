import Navbar from "./Navbar"
import '../../../styles/Header.css'
import { Link } from "react-router-dom"

export default function Header() {
    return(
        <header>
            <div className='container'>
                <Link to='/home'>
                    <h1>fruictify.</h1>
                </Link>
                <Navbar />
            </div>
        </header>
    )
}