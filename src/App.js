import "./styles.css";
import AreaOfTriangle from "./AreaOfTriangle";
import AnglesOfTriangle from "./AnglesOfTriangle";
import Hypotenus from "./Hypotenus";
import Quiz from "./Quiz";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <h1>welcome to triangle</h1>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/areaoftriangle">Areaoftriangle</Link>
            </li>
            <li>
              <Link to="/anglesoftriangle">AnglesOfTriangle</Link>
            </li>
            <li>
              <Link to="/hypotenus">Hypotenus</Link>
            </li>
            <li>
              <Link to="/quiz">quiz</Link>
            </li>
          </ul>

          <hr />

          {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
          <Switch>
            <Route path="/areaoftriangle">
              <AreaOfTriangle />
            </Route>
            <Route path="/anglesoftriangle">
              <AnglesOfTriangle />
            </Route>
            <Route path="/hypotenus">
              <Hypotenus />
            </Route>
            <Route path="/quiz">
              <Quiz />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
