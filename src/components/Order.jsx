import React from "react";

export default function Order(props) {
  return (
    <div className="order">
      <p>
        We're currently open until {props.closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order Now</button>
    </div>
  );
}
