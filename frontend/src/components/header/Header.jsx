import { NavLink, useNavigate } from "react-router-dom";
import "./styles.css";
import AuthTokenManager from "../../global/AuthTokenManager";
const Header = () => {
  const authManager = AuthTokenManager.getInstance();
  const navigate = useNavigate()
  const isLoggedIn = authManager.hasToken();
  console.log(isLoggedIn);

  const logout = () => {
    authManager.removeToken();
    navigate("/login");
  };
  return (
    <header>
      <ul>
        {isLoggedIn ? (
          <>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
          </>
        )}
      </ul>
    </header>
  );
};

export default Header;
