import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="styleNav">
      <Link to="/">
        <img src="/src/assets/images/logo2.png" alt="DoneZo logo" />
      </Link>
    </nav>
  );
}

export default Navbar;
