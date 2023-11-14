import React from 'react'

function Skills() {
  return (
    <>
    <div className='Skills' style={{height: '400px'}}>
        <div>
            <center><h1 style={{margin: '200px'}}>Skills</h1></center>
        </div>
        <div className='skillsbio' style={{paddingTop: '30px',margin: '70px 0px 0px 70px', position: 'relative', top:'-250px', display:'inline-block', width: '50%'}}>
            <h1><b>Professional Skills</b></h1>
            <p style={{paddingTop: '10px'}}>
            HTML, CSS, and JavaScript are considered the foundational building blocks of the web. 
            All interactive, dynamic, and viewable elements on the web are constructed by using these 
            three languages in tandem.and I also have Coding knowledge on programming languages like 
            C,C++,JAVA,PYTHON.
            </p>
        </div>
        <section style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', position: 'relative', top: '-100px'}}>
              <ol>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>React Js</li>
                <li>NodeJs</li>
                <li>MongoDb</li>
              </ol>
    </section>
        <div style={{marginRight: '20px',position: 'relative', top: '-400px', display: 'flex', justifyContent: 'flex-end', }}>
          <img width='500px' src='professionalskills.jpeg' alt='professional skills'/>
        </div>
    </div>
    
    </>
  )
}

export default Skills