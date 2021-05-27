import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Welcome from "./components/Welcome";
import Page from "./components/Page";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/personalSide">Personal Side</Link>
            </li>
            <li>
              <Link to="/publicSide">Public Side</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/personalSide">
            <PersonalSide />
          </Route>
          <Route path="/publicSide">
            <PublicSide />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  // myConsoleFunction(anything)
  return <Page name="Home" />;
}

function About() {
  return <Page aFunction={()=>myConsoleFunction()} name="About" />;
}

function Users() {
  return <Page name="Users" />;
}

function PersonalSide() {
  return <Page name="Personal Side" />;
}

function PublicSide() {
  return <Page name="Public Side" />;
}
// const anything = "Anything";
// function myConsoleFunction(param){
//   console.log(param)
// }

function myConsoleFunction(){
  console.log("param")
}