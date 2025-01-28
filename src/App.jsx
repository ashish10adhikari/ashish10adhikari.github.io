import {motion} from 'motion/react'
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Skill from './Components/Skill';
import Footer from './Components/Footer';
import Contact from './Components/Contact';

function App() {
  

  return (
    <div className="w-full">
      <Navbar/>
      <Header/>
      <About/>
      <Skill/>
      <Contact/>
      <Footer/>
      </div>
    
  );
}

export default App;
