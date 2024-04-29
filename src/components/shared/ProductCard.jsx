import Loader from "./Loader";
import addToCartIcon from '../../assets/shopping-bag.png'
import '../../styles/ProductCard.css'

export default function ProductCard({item, showPrice=false, showAddToCartBtn=false, addProdcutToCart }) {
    return (
        <div className="product-card">
            {!item && <Loader />}
            {item &&
                <>
                    <img className="product-card__img" src={item.image} alt={`${item.name}'s emoji`} />
                    <div className="product-card__infos">
                        <p className="product-card__info">{item.name}</p>
                        {showPrice && <p className="product-card__info">{item.price}$</p>}
                    </div>
                    {showAddToCartBtn && <button onClick={() => addProdcutToCart(item)} className="product-card__add-to-cart-btn"><img className="product-card__add-to-cart-img" src={addToCartIcon} alt="add-to-cart icon" /></button>}
                </>
            }
        </div>
    )
}