import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Admin from './Components/Admin/Admin';
import User from './Components/User/User';
import Order from './Components/Order/Order';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';

export const UserContext = createContext();

function App() {
  const [loggedinUser , setLoggedinUser] = useState({});
  return (
  
    <div className="App">
      <UserContext.Provider value={[loggedinUser, setLoggedinUser]}>
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

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/order/:id">
            <Order></Order>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
