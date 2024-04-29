import "../../../styles/Shop.css";
import NoItemsToShow from "../../shared/NoItemToShow";
import ProductCard from "../../shared/ProductCard";
import { useOutletContext } from "react-router-dom";

export default function Shop() {
  const {products, error, loading, addProductToCart} = useOutletContext();
  const numberOfLoadingProducts = 8;
  const arrayOfLoadingProducts = Array(numberOfLoadingProducts).fill(null);
  const productsToDisplay = loading ? arrayOfLoadingProducts : products;

  return (
    <section className="shop">
      <div className="container">
        <h2 className="page-title">Shop</h2>
        {
          !error && 
            <ul className="shop__products-list">
            {productsToDisplay.map((product, index) => {
              return (
                <li className="shop__product" key={product ? product.id : index}>
                  <ProductCard
                    item={product}
                    showPrice={true}
                    showAddToCartBtn={true}
                    addProdcutToCart={addProductToCart}
                  />
                </li>
              );
            })}
          </ul>
        }
        {error && <NoItemsToShow />}
      </div>
    </section>
  );
}
