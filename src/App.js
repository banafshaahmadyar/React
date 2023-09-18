import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Students from "./components/Students";
import Manage from "./components/Manage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from 'axios';
import Auth, { useAuthActions } from "use-eazy-auth"
import { AuthRoute, GuestRoute } from "use-eazy-auth/routes"
import { ConfigureRj } from "react-rocketjump"
import Login from "./components/Login"

const login = (credentials = {}) =>
  axios.post(
    "/api/token/",
    credentials,
    {
      headers: { "Content-Type": "application/json" },
    },
  ).then(
    response => ({
      accessToken: response.access,
      refreshToken: response.refresh,
    })
  )
const me = token =>
  axios.get("/api/me/", {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })

const refresh = refreshToken =>
  axios.post(
    "/api/token/refresh/",
    { refresh: refreshToken },
    {
      headers: { "Content-Type": "application/json" },
    },
  ).then(response => ({
    refreshToken,
    accessToken: response.access,
  }))

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
          <Navigation />
          <Switch>
            <Switch>
              <AuthRoute path="/" exact redirectTo="/login">
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