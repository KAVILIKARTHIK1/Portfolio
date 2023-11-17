import React from 'react'

function Projects() {
  return (
    <>
    <center><h1 style={{marginTop: '40px', marginBottom: '40px'}}>Projects</h1></center>
    <div className='project fadein '>
    <a href='https://flowershopping.netlify.app/'><img width='250px' height='250px' src='../flowershopping.jpg' alt='flowershopping'/></a>
        <a href='https://react-todotaskapplication.netlify.app/'><img width='250px' height='250px' src='../TodoTask.jpg' alt='todotask'/></a>
        <a href='https://javascript-texttospeechconverter.netlify.app/'><img height='250px' width='250px' src='../TextSpeech.jpg' alt='TextSpeech'/></a>
        <a href='https://js-calci1.netlify.app/'><img height='250px' width='250px' src='../jscalci.jpg' alt='Calc'/></a>
    </div>
    <div className='Project-Names'>
            <h4>Flower Shopping</h4>
            <h4>ToDo Task      </h4>
            <h4>Text-Speech    </h4>
            <h4>Calculator     </h4>
        </div>
    </>
  )
}

export default Projects