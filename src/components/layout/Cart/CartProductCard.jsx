import { useContext } from 'react'
import '../../../styles/CartProductCard.css'
import { CartActionsContext } from '../../contexts/CartActionsContext'

export default function CartProductCard({product}) {
    const { removeProductFromCart, incrementProductInCart, decrementProductInCart } = useContext(CartActionsContext)
    return (
        <div className="cart-item" data-testid="cart-item">
            <img className="cart-item__img" src={product.image} alt={`${product.name}'s emoji`} />
                <div className="cart-item_infos">
                    <h3 className="cart-item__title">{product.name}</h3>
                    <p>{product.price}$</p>
                    <div className="cart-item__qty">
                    <button onClick={() => decrementProductInCart(product)} className="cart-item__btn">-</button>
                    <p>{product.quantity}</p>
                    <button onClick={() => incrementProductInCart(product)} className="cart-item__btn">+</button>
                </div>
                </div>
            
            <p className="cart-item_total">{product.price * product.quantity}$</p>
            <button onClick={() => removeProductFromCart(product)} className="cart-item__btn cart-item__btn-remove">x</button>
        </div>
    )
}