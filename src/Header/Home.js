import React from "react";
import "../App.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-scroll";
function Home() {
  return (
    <>
      <section className="additional-section">
        <div className="greeting fadein">
          <h1>Hi, </h1>
          <h1>I am </h1>
          <h1>
            <span>Karthik</span>
          </h1>
          <div className="contact-btn">
            <Link>
              <button className="hireme-btn">Hire Me</button>
            </Link>
            <Link>
              <button type="submit">Contact Me</button>
            </Link>
            
          </div>
          <div className="icons">
            <a id="linkedin" href="https://www.linkedin.com/in/karthik-kavili/">
              <LinkedInIcon sx={{ color: "black", fontSize: 40 }} />
            </a>
            <a
              id="git"
              href="https://github.com/KAVILIKARTHIK1?tab=repositories"
            >
              <GitHubIcon sx={{ color: "black", fontSize: 40 }} />
            </a>
          </div>
        </div>
       
        <div className="profile-photo fadein">
          <img  src="karthii.jpg" alt="karthik" />
        </div>
      </section>
    </>
  );
}
export default Home;
