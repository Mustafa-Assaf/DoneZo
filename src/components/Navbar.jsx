import { Link } from "react-router-dom";

function Navbar() {
  const styleNav = {
    display: "flex",
    alignItems: "center",
    width: "100%",
    minHeight: "70px",
    backgroundColor: "#173B65",
    borderRadius: "30px 30px 0 0",
  };

  const imgStyles = {
    height: "70px",
    borderRadius: "30px",
  }

  return (
    <nav style={styleNav}>
        <Link to="/">
        <img style = {imgStyles} src="/src/assets/images/logo2.png" alt="" />
        </Link>
      <div>
        
      </div>
    </nav>
  );
}

export default Navbar;
