import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
const Header = () => {
  const navigate = useNavigate();
  const user = false;

  return (
    <nav className="flex justify-between items-center">
      <Link to="/">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3214/3214679.png"
          alt="trimmer logo"
          className="h-15"
        />
      </Link>
      <div>
        {
          
        }
        <Button onClick={() => navigate("/auth")}>Login</Button>
      </div>
    </nav>
  );
};

export default Header;
