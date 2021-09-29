import React from "react";
import Nav from "./component/Nav";
import About from "./component/About";
import Experience from "./component/Experience";
import Service from "./component/Service";
import Home from "./component/Home";


import {BrowserRouter as Router,Switch , Route } from "react-router-dom";

function App() {
  return (
    <Router> 
        <Nav />
          <Switch>
          <Route path="/" exact component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/experience" component={Experience}/>
            <Route path="/service" component={Service} />
          </Switch>
    </Router>
  
  );
}  



export default App;