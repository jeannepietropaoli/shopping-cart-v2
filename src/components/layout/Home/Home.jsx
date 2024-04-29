import "../../../styles/Home.css";
import ProductCarousel from "../../shared/ProductCarousel";
import { Link, useOutletContext } from "react-router-dom";

export default function Home() {
  const {products, error, loading} = useOutletContext()

  return (
    <section className="home">
      <div className="container home__container">
        <h1 className="home__title">Pack you fruits.</h1>
        <div className="home__text-container">
          <p>Remember to eat your fruits by packing them for the day. Start collecting them in your cart and earn rewards when you go to check out and actually eat them !</p>
          <p>Please note that prices follow the market fluctuations and can change when you hit refresh.</p>
        </div>
        <button><Link to='/shop'>Shop now</Link></button>
        <ProductCarousel products={products} error={error} loading={loading}/> 
      </div>
    </section>
  );
}
