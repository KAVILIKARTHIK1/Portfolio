import './App.css';
import Navbar from './Header/Navbar';
import Home from './Header/Home';
import About from './Header/About';
import Skills from './Header/Skills';
import Projects from './Header/Projects';
import Contact from './Header/Contact';
import Footer from './Header/Footer';
function App() {
  return(
  <div className="App">
    <Navbar/>   
    <Home/>
    <About/>
    <Skills/>  
    <Projects/>
    <Contact/>
    <Footer/>
  </div>
  )
}

export default App;
