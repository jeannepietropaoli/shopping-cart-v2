import ProductCard from "./ProductCard";
import NoItemsToShow from "./NoItemToShow";
import Carousel from "./Carousel";

export default function ProductCarousel({products, error, loading}) {
  const numberOfLoadingProducts = 5;
  const arrayOfLoadingProducts = Array(numberOfLoadingProducts).fill(null);
  const excractNFirstProducts = (products, count) => {
    return products.slice(0, count);
  };
  const productsToDisplay = loading ? arrayOfLoadingProducts : excractNFirstProducts(products, numberOfLoadingProducts);
  const renderProdcut = (item) => <ProductCard item={item} fullyDetailed={false}/>

  if (error) {
    return <NoItemsToShow />;
  }

  return(
    <Carousel itemsToDisplay={productsToDisplay} renderItem={renderProdcut} />
  )
}