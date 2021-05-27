import React from 'react';

function Page(props) {
  const greeting = 'Hello from Page Component!';

  return <div id="page_div">
    <p>{greeting}</p>
    <p>{props.name}</p>

    <button onClick={props.aFunction}>{props.buttonName|| "Button"}</button>

    {/* <button onClick={()=>{console.log("yeah!");}}>A button</button> */}
  </div>;
}

export default Page;