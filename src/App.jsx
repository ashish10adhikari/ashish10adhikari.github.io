import {motion} from 'motion/react'
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Skill from './Components/Skill';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Experience from './Components/Experience';

function App() {
  

  return (
    <div className="w-full">
      <Navbar/>
      <Header/>
      <About/>
      <Skill/>
      <Experience/>
      <Contact/>
      <Footer/>
      </div>
    
  );
}

export default App;
