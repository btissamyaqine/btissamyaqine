import React from "react";
import Nav from "./component/Nav";
import About from "./component/About";
import Experience from "./component/Skills";
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
            <Route path="/experience" component={Experience}/>
          </Switch>
    </Router>
  
  );
}  



export default App;