import React from 'react';
 
function Welcome(props) {
  const greeting = 'Hello Function Component!';
 
  return <div>
  <h1>{greeting}</h1>
  <h2>{props.name}</h2>
  </div>;
}
 
export default Welcome;