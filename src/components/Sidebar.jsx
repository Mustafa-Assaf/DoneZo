import { Link } from "react-router-dom";
import { House, Info } from "lucide-react";

function Sidebar (){
    const styleSidebar = {
        width: "200px",
        margin: "10px 0",
        backgroundColor: "#24558A",
        padding: "20px",
        borderRadius: "0 30px 30px 0"
    }

    const stylesNav = {
        display: "flex",
        flexDirection: "column"
    }

    const stylesLink = {
        backgroundColor: " #fff3dc",
        margin: "10px",
        borderRadius: "30px",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "40px",
        textDecoration: "none"
    }

    return (
        <aside style={styleSidebar}>
            <nav style={stylesNav}>
                <Link to="/" style={stylesLink} href=""><House size={22} />Home</Link>
                <Link to="/About" style={stylesLink} href=""><Info size={22} />About</Link>
            </nav>
        </aside>
    )
}

export default Sidebar;