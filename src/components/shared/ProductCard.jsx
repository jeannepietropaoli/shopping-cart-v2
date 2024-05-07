import Loader from "./Loader";
import addToCartIcon from '../../assets/shopping-bag.png'
import '../../styles/ProductCard.css'
import { useContext } from "react";
import { CartActionsContext } from "../../contexts/CartActionsContext";

export default function ProductCard({item}) {
    const { addProductToCart } = useContext(CartActionsContext)
    return (
        <div className="product-card" data-testid="product-card">
            {!item && <Loader />}
            {item &&
                <>
                    <img className="product-card__img" src={item.image} alt={`${item.name}'s emoji`} />
                    <div className="product-card__infos">
                        <p className="product-card__info">{item.name}</p>
                        <p className="product-card__info">{item.price}$</p>
                    </div>
                    <button onClick={() => addProductToCart(item)} className="product-card__add-to-cart-btn"><img className="product-card__add-to-cart-img" src={addToCartIcon} alt="add-to-cart icon" /></button>
                </>
            }
        </div>
    )
}