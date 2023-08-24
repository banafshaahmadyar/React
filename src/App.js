import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Students from "./components/Students";
import Manage from "./components/Manage";
import { BrowserRouter as Router, Switch,  Route } from "react-router-dom";



function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
       <Switch>
         <Route exact path="/"> <Home/> </Route>
         <Route path="/students"><Students/></Route>
         <Route path="/manage"><Manage/></Route>
         </Switch>
         </Switch>
    </Router>
  );
};

export default App;