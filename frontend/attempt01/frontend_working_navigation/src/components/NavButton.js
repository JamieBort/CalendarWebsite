import React from 'react';

function NavButton(props) {
  const greeting = 'NavButton!';

  return <div>
    <h1>{greeting}</h1>
    <h2>{props.name}</h2>
    <p>{props.abc}</p>
    <p>{props.bf}</p>
  </div>;
}

export default NavButton;