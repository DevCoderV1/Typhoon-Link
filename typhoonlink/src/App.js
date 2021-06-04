import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import homepage from "./components/Homepage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={homepage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
