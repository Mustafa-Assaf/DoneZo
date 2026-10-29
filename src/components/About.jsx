function About() {
  return (
    <div id="aboutPage">
      <h2>About</h2>
      
      <div className="aboutContainer"><h3>Project description</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias exercitationem a dolorum amet quidem doloremque, voluptatibus asperiores, explicabo expedita, non rerum totam ea? Cupiditate rem deleniti aut aliquam, ea voluptatibus!</p>
      </div>

      <h3>Meet the developers</h3>

      <div className="aboutContainer teamBox">
        <img src="/src/assets/images/picDR.jpg" alt="" width="150px"/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repudiandae atque vero reprehenderit consequuntur exercitationem odit.</p>
      </div>

      <div className="aboutContainer teamBox">
        <img src="/src/assets/images/picMA.jpg" alt="" width="150px"/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repudiandae atque vero reprehenderit consequuntur exercitationem odit.</p>
      </div>
    </div>
  );
}

export default About;
