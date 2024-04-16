import React from "react";

export default function Pizza(props) {
  console.log(props);
  return (
    <div className="pizza">
      <img src={props.item.photoName} alt={props.item.name} />
      <h2>{props.item.name}</h2>
      <p>{props.item.ingredients}</p>
    </div>
  );
}
