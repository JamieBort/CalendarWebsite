import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Fourth from './components/Fourth';

export default function App() {
  return (
    <div className="App">
    <button>Sign In/Sign Out</button>
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
                <Link to="/calendar">Calendar</Link>
              </li>
              <li>
                <Link to="/gym">Gym</Link>
              </li>
              <li>
                <Link to="/fourth">Fourth</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/calendar">
              <Calendar />
            </Route>
            <Route path="/gym">
              <Gym />
            </Route>
            <Route path="/fourth">
              <Fourth />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );

  function Home() {
    const div_style= {
      display: "inline-block",
      border: "1px green solid",
      width: "49%"};
    // return <h2>Home Page</h2>;
    return <div>
    <h2>Home Page</h2>

    <h3>Landing Page Brainstorm</h3>
    <div style={div_style}>
        <button>Public Side</button>
        <p>This will bring people to the publicly viewable content.</p>
        <p>Alternatively this button will not exist. And the content will already be on this page.</p>
    </div>
    <div style={div_style}>
        <button>Personal Side</button>
        <p>Log in to see personal content</p>
    </div>
    </div>
  }

  function About() {
    return <h2>About</h2>;
  }

  function Users() {
    return <h2>Users</h2>;
  }

  function Calendar() {
    return <h2>Calendar</h2>;
  }

  function Gym() {
    return <h2>Gym</h2>;
  }

}