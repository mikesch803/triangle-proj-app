import "./styles.css";
import twitter from "./images/twitter3.png";
import git from "./images/git.png";
import linkedin from "./images/link.png";
import AreaOfTriangle from "./components/AreaOfTriangle/AreaOfTriangle";
import AnglesOfTriangle from "../src/components/AnglesOfTriangle/AnglesOfTriangle";
import Hypotenus from "../src/components/Hypotenus/Hypotenus";
import Quiz from "../src/components/Quiz/Quiz";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <h1 className="header">Practice triangle</h1>
      <main>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/areaoftriangle">Area of Triangle</Link>
              </li>
              <li>
                <Link to="/anglesoftriangle">Angles of Triangle</Link>
              </li>
              <li>
                <Link to="/hypotenus">Find Hypotenus</Link>
              </li>
              <li>
                <Link to="/quiz">Fun Quiz</Link>
              </li>
            </ul>

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
      </main>
      <footer>
        <div>
          <h2>connect with me</h2>
          <ul>
            <li>
              <a href="https://twitter.com/mikesch_34">
                <img
                  alt=""
                  src={twitter}
                  width="50%"
                  style={{ background: "white", borderRadius: "50%" }}
                />
              </a>
            </li>

            <li>
              <a href="https://www.linkedin.com/in/mahendra-chauhan-b111561b1/">
                <img
                  src={linkedin}
                  alt=""
                  width="50%"
                  style={{ background: "white", borderRadius: "50%" }}
                />
              </a>
            </li>

            <li>
              <a href="https://github.com/mikesch803">
                <img src={git} alt="" width="50%" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
