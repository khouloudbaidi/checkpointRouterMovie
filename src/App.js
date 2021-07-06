import "./App.css";
import MovieApp from "./components/MovieApp";
import Movies from "./components/Movies";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MovieApp} />
        <Route path="/movies/:id" component={Movies} />
      </Switch>
    </div>
  );
}

export default App;
