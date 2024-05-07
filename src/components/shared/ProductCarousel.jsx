import "../../styles/ProductCarousel.css";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import Loader from "./Loader";
import NoItemsToShow from "./NoItemToShow";

function ProductCarouselItem({item}) {
  return (
    <>
        {!item && <Loader />}
        {item &&
            <>
                <img className="carousel__img" src={item.image} alt={`${item.name}'s emoji`} />
                <p className="carousel__infos">{item.name}</p>
            </>
        }
    </>
)
}

function ProductCarouselSlider({itemsToDisplay}) {
  return (
    <div className="carousel__slider">
        {itemsToDisplay.map((item, index) => {
          return (
            <div key={index} className="carousel__item" data-testid='carousel-item'>
              <ProductCarouselItem item={item} />
            </div>
          )
        })}
    </div>
  )
}

export default function ProductCarousel() {
  const { products, error, loading } = useContext(ProductsContext)
  const numberOfLoadingProducts = 5;
  const arrayOfLoadingProducts = Array(numberOfLoadingProducts).fill(null);
  const excractNFirstProducts = (products, n) => {
    return products.slice(0, n);
  };
  const itemsToDisplay = loading ? arrayOfLoadingProducts : excractNFirstProducts(products, numberOfLoadingProducts);

  if (error) {
    return <NoItemsToShow />;
  }
  return (
    <div className="carousel" data-testid="carousel">
      {/* duplication of slider allows to create an infinite carousel of items */}
      <ProductCarouselSlider itemsToDisplay={itemsToDisplay} />
      <ProductCarouselSlider itemsToDisplay={itemsToDisplay} />
    </div>
  );
}