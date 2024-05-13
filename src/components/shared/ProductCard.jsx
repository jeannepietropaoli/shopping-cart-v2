import Loader from "./Loader";
import addToCartIcon from '../../assets/shopping-bag.png'
import '../../styles/ProductCard.css'
import { useContext, useEffect, useState } from "react";
import { CartActionsContext } from "../../contexts/CartActionsContext";
import checkMark from '../../assets/coche.png'

export default function ProductCard({item}) {
    const [visibleCheckmark, setVisibleCheckmark] = useState(false)
    const { addProductToCart } = useContext(CartActionsContext)

    const handleAddToCart = (item) => {
        addProductToCart(item)
        setVisibleCheckmark(true)
    }

    useEffect(() => {
        if(visibleCheckmark) {
            setTimeout(() => {
                setVisibleCheckmark(false)
            }, 800)
        }
    }, [visibleCheckmark])

    return (
        <div className="product-card" data-testid="product-card">
            {!item && <Loader />}
            {item &&
                <>
                    <div style={{display: visibleCheckmark ? 'block' : 'none'}} className='product-card__checkmark'><img src={checkMark} alt="" /></div>
                    <img className="product-card__img" src={item.image} alt={`${item.name}'s emoji`} />
                    <div className="product-card__infos">
                        <p className="product-card__info">{item.name}</p>
                        <p className="product-card__info">{item.price}$</p>
                    </div>
                    <button onClick={() => handleAddToCart(item)} className="product-card__add-to-cart-btn"><img className="product-card__add-to-cart-img" src={addToCartIcon} alt="add-to-cart icon" /></button>
                </>
            }
        </div>
    )
}