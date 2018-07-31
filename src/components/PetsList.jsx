import React, { Component } from "react";
import PetCard from "./PetCard.jsx";

export default function PetsList(props) {
  const pets = props.pets.map(pet => {
    return <PetCard key={pet.id} pet={pet} petName={pet.name} />;
  });

  return <main className="PetsList">{pets}</main>;
  
}
