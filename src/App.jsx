import {motion} from 'motion/react'
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Skill from './Components/Skill';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Project from './Components/Project';

function App() {
  

  return (
    <div className="w-full">
      <Navbar/>
      <Header/>
      <About/>
      <Skill/>
      <Experience/>
      {/* <Project/> */}
      <Contact/>
      <Footer/>
      </div>
    
  );
}

export default App;
