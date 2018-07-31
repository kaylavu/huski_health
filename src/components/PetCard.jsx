import React, { Component } from "react";

import { Link } from "react-router-dom";

export default function PetCard(props) {
  return (
    <div>
      <div className="col-sm-4">
        <div className="chart-wrapper">
          <div className="chart-title">
            <h1>{props.pet.name}</h1>
          </div>
          <div className="chart-stage">
            <div className="card" style={{ width: "100%" }}>
              <img
                className="card-img-top"
                style={{ width: "100%" }}
                src={props.pet.img}
                alt="Card cap"
              />
              <div className="card-body">
                <p className="card-text">Pet Notes: {props.pet.notes}</p>
                <p>Pet Weight: {props.pet.weight} lbs</p>
                {/* <p >Pet ID: {props.pet.id}</p> */}
                <p>Pet Owner: {props.pet.owner}</p>
              </div>
              {/* <ul className="list-group list-group-flush"> */}
              {/* </ul> */}
              <div className="card-body">
                <button className="btn btn-primary" href="#">
                  Feed Me
                </button>
                <button className="btn btn-primary" href="#" style={{ float: "right" }}>
                  Log Activity
                </button>
                <Link to={`/pets/${props.pet.id}`}>Details</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}











// const PetCard = ({
//   pet: {}
// }) => (
//   <div>
//     <div className="col-sm-4">
//       <div className="chart-wrapper">
//         <div className="chart-title">
//           {/* <h1>{pet.name}</h1> */}
//         </div>
//         <div className="chart-stage">
//           <div className="card" style={{ width: "100%" }}>
//             <img className="card-img-top" style={{ width: "100%" }} src="https://previews.123rf.com/images/satura86/satura861507/satura86150701142/42515335-fat-cat-lyingfat-lazy-cat-in-the-street-in-turkey.jpg"
//               alt="Card cap" ></img>
//             <div className="card-body">

//               {/* <p className="card-text">Pet Notes: {pet.notes}</p> */}
//             </div>
//             <ul className="list-group list-group-flush">
//               {/* <li className="list-group-item">Pet Weight: {pet.weight}</li> */}
//               {/* <li className="list-group-item">Pet ID: {pet.id}</li>
//               <li className="list-group-item">Pet Owner: {pet.owner}</li> */}
//             </ul>
//             <div className="card-body">
//               <button className="btn btn-primary" href="#">Feed Me</button>
//               <button className="btn btn-primary" href="#" style={{ float: "right" }}>Log Activity</button>
//               {/* <Link to={`/pets/${pet.id}`}>Details</Link> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   )

//   export default PetCard;
