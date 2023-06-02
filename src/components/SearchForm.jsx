import { useRef, useEffect } from "react";
import { useGlobalAppContext } from "./GlobalContext";

const SearchForm = () => {
  const { setFormSearch } = useGlobalAppContext();

  const searchValue = useRef("");

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchCocktail = () => {
    setFormSearch(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="searchForm" onSubmit={handleSubmit}>
      <h2>Search Cocktails</h2>
      <input
        className="search"
        type="text"
        placeholder="Search favorite cocktails..."
        ref={searchValue}
        onChange={searchCocktail}
      />
    </form>
  );
};
export default SearchForm;
