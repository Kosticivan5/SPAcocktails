import { useGlobalAppContext } from "./GlobalContext";
import Loading from "./Loading";
import Cocktail from "./Cocktail";
const DrinksList = () => {
  const { cocktails, loading } = useGlobalAppContext();

  if (loading) {
    return <Loading />;
  }

  if (cocktails.length < 1) {
    return <h2>No results</h2>;
  }

  return (
    <section className="section-center">
      {cocktails.map((cocktail) => {
        const { drinkID } = cocktail;
        return (
          <div key={drinkID} className="singleDrink">
            <Cocktail {...cocktail} />
          </div>
        );
      })}
    </section>
  );
};
export default DrinksList;
