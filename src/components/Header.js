import React from 'react';
import MegaMenu from './MegaMenu';

const Header = () => {
  return (
    <header>
      <div className="logo">Your Logo</div>
      <nav>
        <MegaMenu />
      </nav>
    </header>
  );
}

export default Header;
