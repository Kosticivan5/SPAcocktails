import { Link } from "react-router-dom";

const Cocktail = ({ img, drinkID, name, glass, alcoholic }) => {
  return (
    <article>
      <img src={img} alt={name} />
      <div className="singleDrinkDesc">
        <h2>{name}</h2>
        <h4>Glass: {glass}</h4>
        <h5>Type: {alcoholic}</h5>
        <Link to={`singleDrink/${drinkID}`} className="info-btn">
          More info
        </Link>
      </div>
    </article>
  );
};
export default Cocktail;
