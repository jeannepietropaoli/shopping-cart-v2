import "../../../styles/Home.css";
import Carousel from "../../shared/Carousel";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="home">
      <div className="container">
        <h1 className="title">Pack you fruits.</h1>
        <p>Remember to eat your fruits by packing them for the day. Start collecting them in your cart and earn rewards when you go to check out and actually eat them !</p>
        <button><Link to='/shop'>Shop now</Link></button>
        <Carousel/> 
      </div>
    </section>
  );
}