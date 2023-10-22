import React from 'react';


function Header(props) {

  return (
    <header className="flex-row space-between px-3">
      <h1>Evelyn Curran</h1>
      
      {props.children}
    </header>
  );
}

export default Header;