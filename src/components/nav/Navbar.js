import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <span className="navbar__logo__title">React-Task</span>
      </div>
      <input type="checkbox" className="navbar__btn" id="navbar__btn" />
      <label htmlFor="navbar__btn" className="navbar__icon">
        <span className="navbar__icon__line"></span>
      </label>
      <ul className="navbar__links">
        <li className="navbar__links--li">
          <Link to="/">to do</Link>
        </li>
        <li className="navbar__links--li">
          <Link to="/ExpenseTrackerUI">expenses</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
