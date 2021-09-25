import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Login from "./pages/RegisterLogin/Login";
import Register from "./pages/RegisterLogin/Register";
import "./bootstrap.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/login" exact component={Login} />
        <Route path="/forgot-password" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/register/2" exact component={Register} />
        <Route path="/register/3" exact component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
