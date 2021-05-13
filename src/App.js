import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Admin from './Components/Admin/Admin';
import User from './Components/User/User';
import Order from './Components/Order/Order';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/admin">
            <Admin></Admin>
          </Route>

          <Route path="/user">
            <User></User>
          </Route>

          <Route path="/order">
            <Order></Order>
          </Route>
        </Switch>
      </Router>
  
    </div>
  );
}

export default App;
