import { useEffect } from 'react'
import AOS from 'aos';
import "aos/dist/aos.css";
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';


function App() {
          
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: 'ease-in',
      delay: 100,
    });
  });
  return (
    <div className='overflow-x-hidden'>
     <Navbar />
     <Main />
    </div>
    
  )
}

export default App
