import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="container">
      <h2>404 Page Not Found</h2>
      <Link className="link" to="/">
        back home
      </Link>
    </div>
  );
};
export default Error;
