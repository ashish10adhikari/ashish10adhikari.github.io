import {motion} from 'motion/react'
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Skill from './Components/Skill';
import Footer from './Components/Footer';

function App() {
  

  return (
    <div className="w-full">
      <Navbar/>
      <Header/>
      <About/>
      <Skill/>
      <Footer/>
      </div>
    
  );
}

export default App;
