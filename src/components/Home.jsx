import React, { Component } from "react";
import NavBar from "./NavBar.jsx";
import PetCard from "./PetCard.jsx";
import PetsList from "./PetsList";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("Home component NEW Pet State:",this.props.pets);
    return (
      <div>
        <NavBar />
        <PetsList pets={this.props.pets} />
      </div>
    );
  }

}

export default Home;
