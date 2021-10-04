import React from "react";
import Nav from "./component/Nav";
import About from "./component/About";
import Skills from "./component/Skills";
import Project from "./component/Project";
import Home from "./component/Home";


import {BrowserRouter as Router,Switch , Route } from "react-router-dom";

function App() {
  return (
    <Router> 
        <Nav />
          <Switch>
          <Route path="/" exact component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/Project" component={Project} />
            <Route path="/skills" component={Skills}/>
          </Switch>
    </Router>
  
  );
}  



export default App;