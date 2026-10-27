function Sidebar (){
    const styleSidebar = {
        width: "200px",
        margin: "10px 0",
        backgroundColor: "#24558A",
        padding: "20px"
    }

    const stylesNav = {
        display: "flex",
        flexDirection: "column"
    }

    return (
        <aside style={styleSidebar}>
            <nav style={stylesNav}>
                <a href="">Home</a>
                <a href="">About</a>
            </nav>
        </aside>
    )
}

export default Sidebar;