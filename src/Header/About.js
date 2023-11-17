import React from "react";

function About() {
  return (
    <>
      <center>
        <h1 style={{marginTop: '200px'}}>About</h1>
      </center>
      <section className="About">
        <div className="about-img">
          <img width="300px" height="300px" src="../bgImg.JPG" alt="Me" />
        </div>
        <div className="Descr">
          <h1>I'm Karthik</h1>
          <p className="Bio">
            I am a dedicated, hardworking and proactive Software Engineer with a
            strong background in design, Coding operations, offshore operations,
            and process and safety improvements. I have solid work experience in
            designing, testing and analysing processes to increase the overall
            efficiency of operations. I am currently looking for an opportunity
            to utilise my technical skills in a challenging working environment
            and become a valuable asset to the organisation that I work for.
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
