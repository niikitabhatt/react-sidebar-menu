import React, {Fragment} from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Trips from "./pages/Trips";
import Flights from "./pages/Flights";
import ThingsToDo from "./pages/ThingsToDo";
import Hotels from "./pages/Hotels";
import VacationRentals from "./pages/VacationRentals";


function App() {
  return (
    <Fragment>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Trips}></Route>
          <Route  path="/things-to-do" component={ThingsToDo}></Route>
          <Route  path="/flights" component={Flights}></Route>
          <Route  path="/hotel" component={Hotels}></Route>
          <Route  path="/vacation-rentals" component={VacationRentals}></Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
