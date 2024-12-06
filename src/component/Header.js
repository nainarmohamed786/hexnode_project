import React, { useEffect, useState } from 'react';
import Logo from '../assets/hexlogo.png';

const Header = () => {
const [isNavbarDark, setIsNavbarDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsNavbarDark(true);
        console.log(window.scrollY)
      } else {
        setIsNavbarDark(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={``}>

       <nav className={`${isNavbarDark ? 'navbar-dark' :""} navbar_main`}>
       <div className='container-fluid col-9 p-3 d-flex justify-content-between align-items-center'>
        <div>
           <img src={Logo} className='img-fluid navlogo' alt='navlogo' />
        </div>
        <div>
            <button className='trial_button'>
                14 DAY FREE TRIAL
            </button>
        </div>
        </div>
       </nav>
    </div>


    
  )
}

export default Header