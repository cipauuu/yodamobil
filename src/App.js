import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Dealer from "./pages/Homepage/Dealer";
import Login from "./pages/RegisterLogin/Login";
import Register from "./pages/RegisterLogin/Register";
import SearchPage from "./pages/SearchPage/SearchPage";

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
        <Route path="/search" exact component={SearchPage} />
        <Route path="/dealer" exact component={Dealer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
