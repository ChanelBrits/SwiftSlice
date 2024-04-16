import React from "react";
import Pizza from "./Pizza";
import pizzaData from "../data";

export default function Menu() {
  const pizza = pizzaData.map((item) => {
    return <Pizza key={item.id} item={item} />;
  });

  return (
    <section>
      <h2 className="menu">Our Menu</h2>
      {pizza}
    </section>
  );
}
