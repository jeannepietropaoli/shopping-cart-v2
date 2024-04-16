import ProductCard from "./ProductCard";
import { FetchDataContext } from "../../contexts/FetchDataContext";
import NoItemsToShow from "./NoItemToShow";
import { useContext } from "react";
import Carousel from "./Carousel";

export default function ProductCarousel() {
  const { products, error, loading } = useContext(FetchDataContext);
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