import "../../styles/Carousel.css";
import ProductCard from "./ProductCard";
import { FetchDataContext } from "../../contexts/FetchDataContext";
import NoItemsToShow from "../shared/NoItemToShow";
import { useContext } from "react";

function CarouselSlider({items}) {
  return (
    <div className="slider">
      {items.map((item, index) => {
        return (
          <ProductCard
            key={item ? item.id : index}
            item={item}
            fullyDetailed={false}
          />
        );
      })}
    </div>
  );
}

export default function Carousel() {
  const { products, error, loading } = useContext(FetchDataContext);
  const numberOfLoadingProducts = 5;
  const arrayOfLoadingProducts = Array(numberOfLoadingProducts).fill(null);
  const excractNFirstProducts = (products, count) => {
    return products.slice(0, count);
  };
  const productsToDisplay = loading ? arrayOfLoadingProducts : excractNFirstProducts(products, numberOfLoadingProducts);

  if (error) {
    return <NoItemsToShow />;
  }

  return (
    <div className="carousel">
      {/* duplication of CarouselSlider allows to create an infinite carousel of items */}
      <CarouselSlider items={productsToDisplay} />
      <CarouselSlider items={productsToDisplay} />
    </div>
  );
}
