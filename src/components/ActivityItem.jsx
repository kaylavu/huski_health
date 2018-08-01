import React, { Component } from "react";

export default function ActivityItem(props) {
    console.log(props.date.length);
  return (
    //     <div className="timeline__group">
    //    <p>Activity</p>
    //   </div>
    <div className="timeline__box">
      <div className="timeline__date">{props.date.slice(0,10)}</div>
      <div className="timeline__post">
        <div className="timeline__content">{props.notes}</div>
      </div>
    </div>
  );
}
