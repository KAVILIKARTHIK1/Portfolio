import React from "react";
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function LinearProgressWithLabel(props) {
  return (
    <Box>
      <Box sx={{ padding: '5PX', width: '90%', mr: 1}}>
        <LinearProgress variant="determinate" {...props} />
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}
function Skills() {
  const HtmlProgess=95;
  const CssProgress=80;
  const ReactProgress=80;
  const JsProgress=90;
  // const MongoDbprogress=70;
  const Cprogress=70;
  const JavaProgress=85;
  const PythonProgress=95;
  return (
    <>
        <center>
          <h1>Skills</h1>
        </center>
      <div className="Skills">
        <div
          className="skillsbio" 
        >
          <h1>
            <b>Professional Skills</b>
          </h1>
          <p>
            HTML, CSS, and JavaScript are considered the foundational building
            blocks of the web. All interactive, dynamic, and viewable elements
            on the web are constructed by using these three languages in
            tandem.and I also have Coding knowledge on programming languages
            like C,JAVA,PYTHON.
          </p>
        </div>
        <div
          style={{
            marginRight: "20px",
          }}
        >
          <img
            width="500px"
            src="professionalskills.jpeg"
            alt="professional skills"
          />
        </div>
      </div>
          <h2 style={{marginLeft: '80px'}}>WEB TECHNOLOGIES :</h2>
      <div className="List">
        <div className="Data progress">
      <h3><img style={{paddingTop: '4px', paddingRight: '3px', paddingLeft: '2px'}} width='13px' src="../htmlicon.jpg" alt="HTML"/>HTML5</h3>
      <LinearProgressWithLabel value={HtmlProgess} />
      </div>
      <div className="Data progress">
      <h3><img style={{paddingTop: '4px', paddingRight: '3px', paddingLeft: '2px'}} width='13px' src="../cssicon.jpg" alt="CSS"/>CSS3</h3>
      <LinearProgressWithLabel value={CssProgress}/>
      </div>
      <div className="Data progress">
      <h3><img style={{paddingTop: '4px', paddingRight: '3px', paddingLeft: '2px'}} width='16px' src="../jsicon.jpg" alt="JS"/>JAVASCRIPT</h3>
      <LinearProgressWithLabel value={JsProgress}/>
      </div>
      <div className="Data progress" style={{marginTop: '10px'}}>
      <h3><img style={{paddingTop: '4px', paddingRight: '3px', paddingLeft: '2px'}} width='16px' src="../reacticon.jpg" alt="React"/>REACT JS</h3>
      <LinearProgressWithLabel value={ReactProgress}/>
      </div>
      {/* <div className="Data progress">
      <h3>MongoDB</h3>
      <LinearProgressWithLabel value={MongoDbprogress}/>
      </div> */}
      </div>
      <h2 style={{marginLeft: '80px'}}>PROGRAMMING LANGUAGES :</h2>
      <div className="List">
        <div className="Data progress">
          <h3><img style={{paddingTop: '4px', paddingRight: '3px', paddingLeft: '2px'}} width='14px' src="../Cicon.jpg" alt="C"/>C</h3>
          <LinearProgressWithLabel value={Cprogress} />
        </div>
        <div className="Data progress">
          <h3><img style={{paddingTop: '4px', paddingRight: '3px', paddingLeft: '2px'}} width='12px' src="../javaicon.jpg" alt="java"/>JAVA</h3>
          <LinearProgressWithLabel value={JavaProgress} />
        </div>
        <div className="Data progress">
          <h3><img style={{paddingTop: '4px', paddingRight: '3px', paddingLeft: '2px'}} width='14px' src="../Pyicon.jpg" alt="Python"/>PYTHON</h3>
          <LinearProgressWithLabel value={PythonProgress} />
        </div>
      </div>
    </>
  );
}

export default Skills;
