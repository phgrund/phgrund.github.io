import React from 'react';

import HamburgerMenu from '../HamburgerMenu';
import './styles.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#about-me">
            About me
          </a>
        </li>
        <li>
          <a href="#hobbies">
            Hobbies
          </a>
        </li>
        <li>
          {/*<HamburgerMenu />*/}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
