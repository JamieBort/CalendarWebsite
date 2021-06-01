// import logo from './logo.svg';
import './App.css';
import Welcome  from "./components/Welcome";
import NavButton from "./components/NavButton";

function buttonFunction(){
  console.log("button is fired");
}

const secondButt= function secondButtonFunction(){
  console.log("button is fired");
}

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Welcome name="Jamie"/>
      <NavButton abc="first page"/>
      <button onClick={()=>{console.log("yeah!"); buttonFunction();}}>A button</button>
      <NavButton abc="second page" bf={secondButt}/>
      <NavButton abc="third page"/>
    </div>
  );
}

export default App;
