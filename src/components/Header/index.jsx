import React from 'react';
import coloradoImage from '../../assets/colorado.jpg';

function Header(props) {

  return (
    <header className="flex-row space-between px-3">
      <h1>Evelyn Curran</h1>
      <img src={coloradoImage} alt="wooden background"></img>
      {props.children}
    </header>
  );
}

export default Header;