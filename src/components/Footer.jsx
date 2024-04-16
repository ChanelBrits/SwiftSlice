import React from "react";

export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  /* if (hour >= openHour && hour <= closeHour) {
    return (
      <footer className="footer">
        <p>Sorry, we're currently closed</p>
      </footer>
    );
  } */

  return (
    <footer className="footer">
      <p>{hour} We're currently open</p>
    </footer>
  );
}
