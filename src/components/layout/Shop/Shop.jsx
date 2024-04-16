import "../../../styles/Shop.css";
import { useContext } from "react";
import { FetchDataContext } from "../../../contexts/FetchDataContext";
import NoItemsToShow from "../../shared/NoItemToShow";
import ProductCard from "../../shared/ProductCard";

export default function Shop() {
  const { products, error, loading } = useContext(FetchDataContext);
  const numberOfLoadingProducts = 8;
  const arrayOfLoadingProducts = Array(numberOfLoadingProducts).fill(null);
  const productsToDisplay = loading ? arrayOfLoadingProducts : products;

  return (
    <section>
      <div className="container">
        <h2>Shop</h2>
        <ul className="products-list">
          {productsToDisplay.map((product, index) => {
            return (
              <li key={product ? product.id : index}>
                <ProductCard
                  item={product}
                  showPrice={true}
                  showAddToCartBtn={true}
                />
              </li>
            );
          })}
        </ul>
        {error && <NoItemsToShow />}
      </div>
    </section>
  );
}
