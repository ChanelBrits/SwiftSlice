import React from "react";
import Pizza from "./Pizza";
import pizzaData from "../data";

export default function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  const pizza = pizzas.map((item) => {
    return <Pizza key={item.id} {...item} />;
  });

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative pizzas to choose from. Made
            with love from our stone oven. All organic, all delicious.
          </p>

          <ul className="pizzas">{pizza}</ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later.</p>
      )}
    </main>
  );
}
