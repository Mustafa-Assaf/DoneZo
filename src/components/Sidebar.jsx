import { Link } from "react-router-dom";
import { House, Info } from "lucide-react";

function Sidebar (){

    return (
        <aside id="styleSidebar">
            <nav id="stylesNav">
                <Link to="/" id="stylesLink"><House size={22} />Home</Link>
                <Link to="/About" id="stylesLink"><Info size={22} />About</Link>
            </nav>
        </aside>
    )
}

export default Sidebar;