import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import homepage from "./components/Homepage";
import client from "./components/_Client";
import login from "./components/_Login";
import FAQ from "./components/_FAQ";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={homepage} />
          <Route exact path="/Client" component={client} />
          <Route exact path="/FAQ" component={FAQ} />
          <Route exact path="/Login" component={login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
