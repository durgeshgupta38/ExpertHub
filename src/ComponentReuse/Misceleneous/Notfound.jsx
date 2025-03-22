import { Link } from "react-router-dom";
import "./misceleneous.css";
const NotFound = () => {
  return (
    <div className="notFound">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="linkRedirect">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
