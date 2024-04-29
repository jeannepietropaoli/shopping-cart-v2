import { useOutletContext } from "react-router-dom"
import '../../../styles/Cart.css'
import OrderSummary from "./OrderSummary"
import CartProductCard from "./CartProductCard"

export default function Cart() {
    const {cart, removeProductFromCart, incrementProductInCart, decrementProductInCart} = useOutletContext()

    return (
            <div className="container">
                <h2 className="page-title">Cart</h2>
                <div className="cart">
                    <section className="cart__products-list">
                            {
                                cart.length === 0
                                    ? <p>Your cart is empty.</p>
                                    : cart.map(product => {
                                        return <CartProductCard key={product.id} product={product} removeProductFromCart={removeProductFromCart} incrementProductInCart={incrementProductInCart} decrementProductInCart={decrementProductInCart} />
                                    })
                            }
                    </section>
                    <OrderSummary cart={cart} />
                </div>
            </div>
    )
}