import React from 'react'
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
function Footer() {
  return (
    <>
    <div className='Footer'>
        <div className='copyright'>
        <h2>KARTHIK K</h2>
        <p>©{new Date().getFullYear()} - All rights reserved</p>
        </div>
        <div className="footericons">
            <a id="linkedin" href="https://www.linkedin.com/in/karthik-kavili/">
              <LinkedInIcon sx={{ color: "white", fontSize: 40 }} />
            </a>
            <a
              id="git"
              href="https://github.com/KAVILIKARTHIK1?tab=repositories"
            >
              <GitHubIcon sx={{ color: "white", fontSize: 40 }} />
            </a>
          </div>
    </div>
    </>
  )
}

export default Footer