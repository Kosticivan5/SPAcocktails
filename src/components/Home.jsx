import DrinksList from "./DrinksList";
import SearchForm from "./SearchForm";

const Home = () => {
  return (
    <div className="homePage">
      <SearchForm />
      <DrinksList />
    </div>
  );
};
export default Home;
