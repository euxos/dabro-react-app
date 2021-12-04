import React, { useEffect, useState } from 'react';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
// import MobileNav from "../MobileNav/MobileNav";
import './header.scss';
import "../../utils/containers.scss";


const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const f = () => {
      if (isMobile) {
        setIsMobile(false);
      };
    };
    document.addEventListener("click", f)
    return () => { document.removeEventListener('click', f) }
  }, [isMobile])

  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__nav">
        
          <Nav />
          <button
            className={
              isMobile
                ? "toggle__btn toggle__btn--close"
                : "toggle__btn"
            }
            onClick={() => setIsMobile(!isMobile)}
          >
            <span className="toggle__span"></span>
          </button>
          
         
         
          {/* <MobileNav isVisible={isMobile} /> */}
          </div>
     </div>
    </header>
  );
};

export default Header;
