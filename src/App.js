import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
