import { createContext, useContext, useState, useEffect } from "react";
import customFetch from "./CustomURL";
const Context = createContext();
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const useGlobalAppContext = () => useContext(Context);

const GlobalContext = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [cocktails, setCocktails] = useState([]);
  const [formSearch, setFormSearch] = useState("m");

  const fetchCocktails = async () => {
    setLoading(true);
    if (formSearch === "") {
      setFormSearch("m");
    }
    try {
      const resp = await fetch(`${url}${formSearch}`);
      const data = await resp.json();
      const { drinks } = data;
      if (drinks) {
        setLoading(false);
        const newCocktails = drinks.map((cocktail) => {
          const {
            idDrink: drinkID,
            strAlcoholic: alcoholic,
            strDrink: name,
            strDrinkThumb: img,
            strGlass: glass,
          } = cocktail;
          return { drinkID, alcoholic, name, img, glass };
        });

        setCocktails(newCocktails);
      } else {
        setLoading(false);
        setCocktails([]);
      }
    } catch (error) {
      setLoading(false);
      console.log(error.Context);
    }
  };

  useEffect(() => {
    fetchCocktails();
  }, [formSearch]);

  return (
    <Context.Provider
      value={{
        cocktails,
        loading,
        formSearch,
        setFormSearch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default GlobalContext;
