import React from 'react';
 
function Welcome(props) {
  const greeting = 'Hello Welcome Component!';
 
  return <div>
  <p>{greeting}</p>
  <p>{props.name}</p>
  </div>;
}
 
export default Welcome;