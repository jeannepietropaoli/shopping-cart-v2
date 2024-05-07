import "../../../styles/Shop.css";
import NoItemsToShow from "../../shared/NoItemToShow";
import ProductCard from "../../shared/ProductCard";
import { ProductsContext } from "../../../contexts/ProductsContext";
import { useContext } from "react";

export const numberOfLoadingProducts = 8;

export default function Shop() {
  const {products, error, loading} = useContext(ProductsContext);
  const arrayOfLoadingProducts = Array(numberOfLoadingProducts).fill(null);
  const productsToDisplay = loading ? arrayOfLoadingProducts : products;

  return (
    <section className="shop">
      <div className="container">
        <h1 className="page-title">Shop</h1>
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
