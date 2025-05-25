import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <Link>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3214/3214679.png"
          alt="trimmer logo"
          className="h-15"
        />
      </Link>
    </nav>
  );
};

export default Header;
