import React from "react";

export default function Pizza(props) {
  const { photoName, name, ingredients, price, soldOut } = props;

  /* if (props.item.soldOut) {
    return (

    );
  } */

  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img className="pizza-img" src={photoName} alt={name} />
      <div className="pizza-container">
        <h3 className="pizza-title">{name}</h3>
        <p className="pizza-ingredients">{ingredients}</p>
        <span className="pizza-price">
          {soldOut ? "SOLD OUT" : `$ ${price}`}
        </span>
      </div>
    </li>
  );
}
