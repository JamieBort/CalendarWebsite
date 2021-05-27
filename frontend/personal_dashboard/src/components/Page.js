import React from 'react';

function Page(props) {
  const greeting = 'Hello from Page Component!';

  return <div>
    <h1>{greeting}</h1>
    <h2>{props.name}</h2>

    <button onClick={props.aFunction}>A button</button>

    {/* <button onClick={()=>{console.log("yeah!");}}>A button</button> */}
  </div>;
}

export default Page;