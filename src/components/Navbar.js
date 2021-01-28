import React, { useState, useEffect } from 'react';

import '../styles/Navbar.css';
import { IconContext } from 'react-icons';
import { BsArrowReturnRight } from "react-icons/bs";


function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
     setSidebar(!sidebar);
  }

  useEffect(() => {
    const handleEsc = (event) => {
       if (event.keyCode === 27) {
        setSidebar(false)
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar p-0'>
          <div onClick={showSidebar}>
             <img src="assets/Menu.svg" />
          
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <div>
               <h5 className="colore">X</h5>
              </div>
            </li>
           
                <div>
                    <h5 className="colore pt-2 pb-2">
                     <span><BsArrowReturnRight /></span> Home
                      </h5>
                      <h5 className="colore  pt-2 pb-2">
                      About
                      </h5>
                      <h5 className="colore  pt-2 pb-2">
                      Work
                      </h5>
                </div>
             
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;