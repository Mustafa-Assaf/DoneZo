import { Link } from "react-router-dom";
import { House, Info } from "lucide-react";

function Sidebar (){

    return (
        <aside id="styleSidebar">
            <nav>
                <Link to="/" className="stylesLink"><House size={22} />Home</Link>
                <Link to="/about" className="stylesLink"><Info size={22} />About</Link>
            </nav>
        </aside>
    )
}

export default Sidebar;