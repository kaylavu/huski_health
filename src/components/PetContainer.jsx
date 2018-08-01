import React, { Component } from "react";
import NavBar from "./NavBar.jsx";
import PetProfile from "./PetProfile.jsx";
import Timeline from "./Timeline.jsx";
import PetChart from "./PetChart.jsx";
import StatusBar from "./StatusBar.jsx";
import NewPetForm from "./NewPetForm.jsx";
// import PetActivity from 'PetActivity.jsx';
import $ from "jquery";

class PetContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pet: null, 
      activities: null, 
    };
  }

  //   componentWillMount() {
  //     const { id } = this.props.match.params;
  //     $.ajax(`/api/pet/${id}`, pet => {
  //       this.setState({ pet });
  //     });
  //   }

  componentDidMount() {
    const { id } = this.props.match.params;
    $.ajax(`http://localhost:8080/api/pets/${id}`, {
      method: "GET",
      success: result => {
        console.log(result);
        this.setState({ pet: result });
      },
      error: function(err) {
        console.log("ERROR: Couldn't make ajax request for this single pet.");
      }
    });

    $.ajax(`http://localhost:8080/api/pets/${id}/activities`, {
      method: "GET",
      success: result => {
        console.log(result);
        this.setState({ activities: result });
      },
      error: function(err) {
        console.log("ERROR: Couldn't make ajax request for this single pet.");
      }
    })
  }

  // componentDidMount() {
  //   const {id} = this.props.match.params; 
  //   $.when(
  //     $.get(`http://localhost:8080/api/pets/${id}`),
  //     $.get(`http://localhost:8000/api/pets/${id}/activities`),
  //     )
  //     .done(function(pet, activities){
  //         this.setState({pet: pet, activities: activities })
  //         console.log(this.state)
  //     })
  //     .fail(function(){
  //         //handle errors
  //         console.log("ERROR: Could not request for activities")
  //     });
  // }

  render() {
    const {pet, activities} = this.state;
    return pet && activities ? <Pet pet={pet} activities={activities}/> : <p>Loading</p>;
    // return pet ? <Pet pet={pet} /> : <p>Loading</p>;
  }
}

const Pet = (props) => {
  return (
      <div>
    <NavBar />
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-3">
          <PetProfile pet={props.pet} />
        </div>
        <div className="col-sm-9">
          <div className="col-sm-8">
            <PetChart pet={props.pet} />
            <Timeline pet={props.pet} activities={props.activities} />
          </div>
          <StatusBar pet={props.pet} />
        </div>
      </div>
    </div>
  </div>
  );
};

export default PetContainer;


// render() {
//     return (
//         <div>
//             < NavBar />
//             <div className="container-fluid">
//                 <div className="row">
//                     <div className="col-sm-3">
//                         <PetProfile pet={this.props.pet} />
//                     </div>
//                     <div className="col-sm-9">
//                         <div className="col-sm-8">
//                             < PetChart pet={this.props.pet} />
//                             < Timeline pet={this.props.pet} />
//                         </div>
//                             < StatusBar pet={this.props.pet}/>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
