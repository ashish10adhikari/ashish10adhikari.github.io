import {motion} from 'motion/react'
import Header from './assets/Components/Header';
import Navbar from './assets/Components/Navbar';
import About from './assets/Components/About';
import Skill from './assets/Components/Skill';

function App() {
  

  return (
    <div className="w-full">
      <Navbar/>
      <Header/>
      <About/>
      <Skill/>
      </div>
    
  );
}

export default App;
