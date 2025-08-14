import "./Header.css";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="header">
      <ul className="header-menu">
        <li>
          <Link to="home" smooth={true}>
            Home
          </Link>
        </li>
        <li>
          <Link to="programs" smooth={true}>
            Programs
          </Link>
        </li>
        <li>
          <Link to="reasons" smooth={true}>
            Why us
          </Link>
        </li>
        <li>
          <Link to="plans" smooth={true}>
            Plans
          </Link>
        </li>
        <li>
          <Link to="footer" span={true} smooth={true}>
            Footer
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
