import React from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Educational from "./pages/Educational";
import RepairTroubleshoot from "./pages/RepairTroubleshoot";
import Softwares from "./pages/Softwares";
import WebApp from "./pages/WebApp";
import Navbar from "./includes/Navbar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Footer from "./includes/Footer";

function App() {
  return (
    <Router>
    <div>
    <Navbar/>
    <Switch>
      <Route exact path="/">
      <Home/>
      </Route>
      <Route path="/services">
      <Services/>
      </Route>
      <Route path="/aboutus">
      <About/>
      </Route>
      <Route path="/contactus">
      <Contact/>
      </Route>
      <Route path="/educational-material">
      <Educational/>
      </Route>
      <Route path="/repair-troubleshooting">
      <RepairTroubleshoot/>
      </Route>
      <Route path="/softwares">
      <Softwares/>
      </Route>
      <Route path="/web-app-development">
      <WebApp/>
      </Route>
    </Switch>
    <Footer/>
    </div>
    </Router>
  );

}

export default App;
