import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useGlobalAppContext } from "../components/GlobalContext";

const urlID = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleDrink = () => {
  const [drink, setDrink] = useState([]);
  const { loading } = useGlobalAppContext();
  const { id } = useParams();

  const fetchSingleDrink = async () => {
    try {
      const resp = await fetch(`${urlID}${id}`);
      const data = await resp.json();
      const {
        strDrink: name,
        strDrinkThumb: img,
        strGlass: glass,
        strInstructions: recipe,
        strAlcoholic: alcoholic,
      } = data.drinks[0];
      if (data) {
        setDrink({ name, img, glass, recipe, alcoholic });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSingleDrink();
  }, []);
  console.log(drink);
  return (
    <article>
      <div className="drink-item-container">
        <div className="drink-item-img">
          <img src={drink.img} alt={drink.name} />
        </div>

        <div className="drink-item-info">
          <h2>name: {drink.name}</h2>
          <h4>{drink.glass}</h4>
          <h1>{drink.alcoholic}</h1>

          <p className="recipe">{drink.recipe}</p>
        </div>
      </div>
      <Link to="/" className="btn">
        back to drinks
      </Link>
    </article>
  );
};
export default SingleDrink;
