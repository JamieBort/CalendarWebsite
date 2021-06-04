import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function fetchFunction() {
  console.log("fetch!!!")
  try {
      fetch('http://localhost:8085/topics')
          .then(response => response.json())
          .then(data => {
              console.log(data);
              const ul = document.getElementById("ul");
              var li;
              for (let index = 0; index < data.length; index++) {
                  li = document.createElement("li");
                  li.innerHTML = data[index].id;
                  ul.appendChild(li);
              }
              li.innerHTML = "hey";
              ul.appendChild(li);
          });
  } catch (error) {
      console.log("there was an error!!!")
      console.log("the error: ", error)
  }
}

// function App() {
//   return (
//     <div className="App">
//     <h2>Hello!</h2>
//       <button onClick={()=>fetchFunction()}>My Fetch Button</button>
//       <button onClick={()=>console.clear()}>My Clear Button</button>
//       <ul id="ul"></ul>
//     </div>
//   );
// }

// export default App;

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
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}