import './App.css';
import Navbar from './Header/Navbar';
import Home from './Header/Home';
import About from './Header/About';
import Skills from './Header/Skills';
function App() {
  return(
  <div className="App">
    <Navbar/>   
    <Home/>
    <About/>
    <Skills/>  
  </div>
  )
}

export default App;
