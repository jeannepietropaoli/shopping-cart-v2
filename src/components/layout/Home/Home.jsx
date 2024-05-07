import { useContext } from "react";
import "../../../styles/Home.css";
import ProductCarousel from "../../shared/ProductCarousel";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../contexts/ProductsContext";

export default function Home() {
return (
    <section className="home">
      <div className="container home__container">
        <h1 className="home__title">Pack your fruits.</h1>
        <div className="home__text-container">
          <p>Remember to eat your fruits by packing them for the day. Start collecting them in your cart and earn rewards when you go to check out and actually eat them !</p>
          <p>Please note that prices follow the market fluctuations and can change when you hit refresh.</p>
        </div>
        <button className="button--link"><Link to='/shop'>Shop now</Link></button>
        <ProductCarousel/> 
      </div>
    </section>
  );
}
