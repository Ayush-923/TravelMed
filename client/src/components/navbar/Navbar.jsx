import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">TravelMed</span>
        </Link>
        {user ? user.username : (
          <div className="navItems">
            <Link to="/login" style={{ color: "inherit", textDecoration: "none" }}>
            <button className="navButton">Login</button>
            </Link>
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            <button className="navButton">Register</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
