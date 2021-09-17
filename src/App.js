import React from "react";
import "./App.css";
import Nav from "./component/Nav";
import About from "./component/About";
import Contact from "./component/Contact";
import {BrowserRouter as Router,Switch , Route } from "react-router-dom";
import "animate.css";
import BtissamImage from "./BtissamImage.jpg";

function App() {
  return (
    <Router> 
      <div className="App">
        <Nav />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" exact component={Contact}/>
          </Switch>
      </div>
    </Router>
  );
}
const Home = () => (
  <div className="home">
       <div className="image">
      {/* <img src="btissamImage.jpg" alt="btissam"/> */}
      <img src={BtissamImage} alt="avatar" width="600" height="600" />
      <h1 class="animate__animated animate__slideInLeft"> Hi I'm Btissam YAQINE</h1>
      <h2 class="animate__animated animate__slideInRight">WEB DEVELOPMENT</h2>
    </div>
 
  </div>

);

export default App;