function About() {
  return (
    <div id="aboutPage">
      <h2>About</h2>

      <div className="aboutContainer">
        <p>
          Developed as part of the Ironhack Web Development Bootcamp, DoneZo is a single-page application (SPA) built with React. The project focuses on applying core React concepts, including components, state management, props, and event handling, to create a smooth and interactive user experience.
        </p>
      </div>

      <h3>Meet the developers-in-the-making</h3>

      <div className="aboutContainer teamBox">
        <img src="/src/assets/images/picDR.jpg" alt="" width="150px" />
        
        <p><i>De Waal Rossouw</i> <br />
        
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          repudiandae atque vero reprehenderit consequuntur exercitationem odit.
        </p>
        <div className="aboutImages">
          <a href="https://github.com/dwrossouw"><img src="/src/assets/images/githublogo2.png" alt="" width="50px" /></a>
          <a href="https://www.linkedin.com/in/dewaal-rossouw-b24a14301/"><img src="/src/assets/images/linkedin2.jpg" alt="" width="50px" /></a>
        </div>
      </div>

      <div className="aboutContainer teamBox">
        <img src="/src/assets/images/picMA.jpg" alt="" width="150px" />
        <p><i>Mustafa Assaf</i> <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          repudiandae atque vero reprehenderit consequuntur exercitationem odit.
        </p>
       <div className="aboutImages">
          <a href=""><img src="/src/assets/images/githublogo2.png" alt="" width="50px" /></a>
          <a href=""><img src="/src/assets/images/linkedin2.jpg" alt="" width="50px" /></a>
        </div>
      </div>
    </div>
  );
}

export default About;
