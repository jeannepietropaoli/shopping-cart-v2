import { useOutletContext } from "react-router-dom"
import '../../../styles/Cart.css'
import OrderSummary from "./OrderSummary"
import CartProductCard from "./CartProductCard"
import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"

export default function Cart() {
    const {cart} = useContext(CartContext)

    return (
            <div className="container">
                <h1 className="page-title">Cart</h1>
                <div className="cart">
                    <section className="cart__products-list">
                            {
                                cart.length === 0
                                    ? <p>Your cart is empty.</p>
                                    : cart.map(product => {
                                        return <CartProductCard key={product.id} product={product} />
                                    })
                            }
                    </section>
                    <OrderSummary cart={cart} />
                </div>
            </div>
    )
}