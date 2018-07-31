import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import $ from "jquery";

import "./css/keen-static.css";
import "./css/timeline.css";
import "./css/keen-dashboards.css";

import PetContainer from "./components/PetContainer";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import NewPetForm from "./components/NewPetForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
      currentUser: {
        userId: 1,
        name: "Lexi"
      },
      pets: [
        {
          id: "1",
          name: "Leonard",
          birthday: "April 8, 2012",
          age: 6,
          weight: "22",
          breed: "Egyptian Mau",
          owner: "Lexi",
          notes: "These are some notes about my fat cat named Leonard."
        }
      ]
    };
  }

  // Make Ajax call to retrieve list of pets belonging to user 1. 
  // *!TO BE IMPLEMENTED!!* User currently hardcoded, needs to be dynamic with login. 
  componentDidMount() {
    $.ajax("http://localhost:8080/api/pets", {
      method: "GET",
      data: {
        userId: 1
      },
      success: result => {
        this.setState({ pets: result });
        console.log("New Pet State after ajax call", this.state.pets)
      },
      error: function(err) {
        console.log("Can not make an ajax request for user's pets");
      }
    })
  }

  // *!TO BE IMPLEMENTED!* User Authentication through secure method such as API Keys. 
  render() {
    if (this.state.loggedIn) {
      return (
        <BrowserRouter>
          <Switch>
            <Route path="/" exact render={props => <Home {...props} pets={this.state.pets}/>}/>
            <Route path="/new" exact component={NewPetForm} />
            <Route path="/pets/:id" exact component={PetContainer} />
          </Switch>
        </BrowserRouter>
      );
    } else {
      return <h1> Please Login </h1>;
    }
  }

}

export default App;
