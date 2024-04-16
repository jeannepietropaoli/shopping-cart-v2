import Loader from "./Loader";
import addToCartIcon from '../../assets/shopping-bag.png'
import '../../styles/ProductCard.css'

export default function ProductCard({item, showPrice=false, showAddToCartBtn=false }) {
    return (
        <div className="product-card">
            {!item && <Loader />}
            {item &&
                <>
                    <img className="product-img" src={item.image} alt={`${item.name}'s emoji`} />
                    <div className="product-infos">
                        <p>{item.name}</p>
                        {showPrice && <p>{item.price}$</p>}
                    </div>
                    {showAddToCartBtn && <button className="add-to-cart-btn"><img src={addToCartIcon} alt="add-to-cart icon" /></button>}
                </>
            }
        </div>
    )
}