function Footer() {
  const styleFooter = {
    width: "100%",
    minHeight: "50px",
    backgroundColor: "#173B65",
    borderRadius: "0 0 30px 30px",
    display: "flex",
    justifyContent: "center"
  };
  
  return (
  <footer style={styleFooter}>
    <div>
      <a href="https://github.com/Mustafa-Assaf/DoneZo">
        <img src="/src/assets/images/githublogo2.png" alt="" height="50px"/>
      </a>
    </div>
  </footer>
  )
}

export default Footer;
