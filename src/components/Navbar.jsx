import { Link } from "react-router-dom";
import { FaCocktail } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="header-container">
      <header className="header">
        <Link to="/">
          <div className="logo">
            <FaCocktail style={{ width: "100%", height: "100%" }} />
          </div>
        </Link>

        <nav>
          <ul>
            <Link className="link" to="/">
              Home
            </Link>
            <Link className="link" to="about">
              About
            </Link>
          </ul>
        </nav>
      </header>
    </div>
  );
};
export default Navbar;
