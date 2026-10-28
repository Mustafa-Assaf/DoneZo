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
        borderRadius: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "30px"
    }

    return (
        <aside style={styleSidebar}>
            <nav style={stylesNav}>
                <a style={stylesLink} href="">Home</a>
                <a style={stylesLink} href="">About</a>
            </nav>
        </aside>
    )
}

export default Sidebar;