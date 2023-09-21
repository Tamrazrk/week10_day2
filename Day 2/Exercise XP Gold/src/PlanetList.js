import React from "react";

const planets = ["Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune"];

function PlanetList() {
  // Use the map method to create a list of <li> elements
  const planetItems = planets.map((planet, index) => (
    <li key={index} className="list-group-item">
      {planet}
    </li>
  ));

  return (
    <div className="container col-4 m-5">
      <ul className="list-group">{planetItems}</ul>
    </div>
  );
}

export default PlanetList;
