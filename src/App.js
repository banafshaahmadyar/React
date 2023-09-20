import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Students from "./components/Students";
import Manage from "./components/Manage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Auth, { useAuthActions } from "use-eazy-auth"
import { AuthRoute, GuestRoute } from "use-eazy-auth/routes"
import { ConfigureRj } from "react-rocketjump"
import Login from "./components/Login"
import { login, me, refresh } from './services/AuthService'

function ConfigureAuth({ children }) {
  const { callAuthApiObservable } = useAuthActions()
  return (
    <ConfigureRj effectCaller={callAuthApiObservable}>{children}</ConfigureRj>
  )
}

function App() {
  return (
    <Auth loginCall={login} meCall={me} refreshTokenCall={refresh}>
      <ConfigureAuth>
        <Router>
          <Switch>
            <Switch>
              <AuthRoute path="/" exact redirectTo="/login">
                <Navigation />
                <Route exact path="/"> <Home /> </Route>
                <Route path="/students"><Students /></Route>
                <Route path="/manage"><Manage /></Route>
              </AuthRoute>
              <GuestRoute path="/login" redirectTo="/"><Login /></GuestRoute>
            </Switch>
          </Switch>
        </Router>
      </ConfigureAuth>
    </Auth>
  );

};

export default App;