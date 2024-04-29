import "../../styles/Carousel.css";

export default function Carousel({ itemsToDisplay, renderItem }) {
  return (
    <div className="carousel">
      {/* duplication of slider allows to create an infinite carousel of items */}
      <div className="carousel__slider">
        {itemsToDisplay.map((item, index) => <div key={index} className="carousel__item">{renderItem(item)}</div>)}
      </div>
      <div className="carousel__slider">
        {itemsToDisplay.map((item, index) => <div key={index} className="carousel__item">{renderItem(item)}</div>)}
      </div>
    </div>
  );
}
