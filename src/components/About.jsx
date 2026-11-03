function About() {
  return (
    <div id="aboutPage">
      <h2>About</h2>

      <div className="listContainer">
        <p>
          Developed as part of the Ironhack Web Development Bootcamp, DoneZo is
          a single-page application (SPA) built with React. The project focuses
          on applying core React concepts, including components, state
          management, props, and event handling, to create a smooth and
          interactive user experience.
        </p>
      </div>

      <h3>Meet the developers-in-the-making</h3>

      <div className="listContainer teamBox">
        <div className="profileSection">
          <img
            className="profilePicture"
            src="/src/assets/images/picDR.jpg"
            alt="Image DWR"
          />
          <div className="aboutImages">
            <a href="https://github.com/dwrossouw">
              <img
                src="/src/assets/images/githublogo2.png"
                alt="github logo"
                width="50px"
              />
            </a>
            <a href="https://www.linkedin.com/in/dewaal-rossouw-b24a14301/">
              <img src="/src/assets/images/linkedin2.png" alt="LinkedIn logo" width="50px" />
            </a>
          </div>
        </div>

        <p>
          <span className="developerName">De Waal Rossouw</span> <br />A world traveller turned aspiring web
          developer! After years of teaching English abroad, I'm now based in
          Lisbon, developing my skills in JavaScript, React, HTML, and CSS. My
          goal is to become a full-stack developer, building responsive,
          user-friendly applications that solve real-world problems.
        </p>
      </div>

      <div className="listContainer teamBox">
        <div className="profileSection">
          <img
            className="profilePicture"
            src="/src/assets/images/linkedin3.jpeg"
            alt="Image Mustafa"
          />
          <div className="aboutImages">
            <a href="https://github.com/Mustafa-Assaf">
              <img
                src="/src/assets/images/githublogo2.png"
                alt="Github logo"
                width="50px"
              />
            </a>
            <a href="https://www.linkedin.com/in/mustafaassaf/">
              <img src="/src/assets/images/linkedin2.png" alt="LinkedIn logo" width="50px" />
            </a>
          </div>
        </div>

        <p>
          <span className="developerName">Mustafa Assaf</span> <br />
          Originally Lebanese, born in Dublin, based in Amsterdam! After 8 years of working in tech across Big Tech, 
          scale-ups and startups, I decided to take a step back to upskill technically, travel, and find a deeper sense of passion 
          for my work. Will continue interviewing for Solution Engineering roles post-bootcamp.
        </p>
      </div>
    </div>
  );
}

export default About;
