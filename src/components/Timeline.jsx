import React, { Component } from "react";
import ActivityItem from "./ActivityItem.jsx"

// class Timeline extends Component {

//   constructor(props) {
//     super(props);
//     console.log("TIMELINE PROPS:", props)
//     console.log("ACTIVITY PROPS:", this.props.activities)
//   }

//   render() {
//     return (
//       <div>
//         <div className="chart-wrapper">
//           <div className="chart-stage" id="chart-02">
//             <h2>Activity Timeline</h2>
//             <button type="button" className="btn btn-success">Add Activity</button>
//             <div className="page">
//               <div className="page__demo">
//                 <div className="main-container page__container">
//                   <div className="timeline">
//                     <div className="timeline__group">
//                       <span className="timeline__year">2013</span>
//                       <div className="timeline__box">
//                         <div className="timeline__date">
//                           <span className="timeline__day">2</span>
//                           <span className="timeline__month">Jun</span>
//                         </div>
//                         <div className="timeline__post">
//                           <div className="timeline__content">
//                             <p>New Activity Notes</p>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="timeline__box">
//                         <div className="timeline__date">
//                           <span className="timeline__day">4</span>
//                           <span className="timeline__month">Jun</span>
//                         </div>
//                         <div className="timeline__post">
//                           <div className="timeline__content">
//                             <p>Bought a new red laser and played with Leonard for an hour</p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="timeline__group">
//                       <span className="timeline__year">2016</span>
//                       <div className="timeline__box">
//                         <div className="timeline__date">
//                           <span className="timeline__day">14</span>
//                           <span className="timeline__month">Jul</span>
//                         </div>
//                         <div className="timeline__post">
//                           <div className="timeline__content">
//                             <p>Went on a trip and Leonard was DEFINITELY overfed. Time to start a diet!</p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="timeline__group">
//                       <span className="timeline__year">2018</span>
//                       <div className="timeline__box">
//                         <div className="timeline__date">
//                           <span className="timeline__day">28</span>
//                           <span className="timeline__month">Aug</span>
//                         </div>
//                         <div className="timeline__post">
//                           <div className="timeline__content">
//                             <p>Leonard is down 3 lbs!</p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

// }
// export default Timeline;

export default function Timeline(props) {
  const activities = props.activities.map(activity => {
    return <ActivityItem key={activity.id} notes={activity.notes} date={activity.created_at}/>;
  });

  return <div>
  <div className="chart-wrapper">
    <div className="chart-stage" id="chart-02">
      <h2>Activity Timeline</h2>
      <button type="button" className="btn btn-activity">Add Activity</button>
      <div className="page">
        <div className="page__demo">
          <div className="main-container page__container">
            <div className="timeline">
              {activities}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
}
