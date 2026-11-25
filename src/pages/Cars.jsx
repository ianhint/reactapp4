import React from "react";

function Cars() {
  const cars = ["Audi", "Porcshe", "Mercedez", "BMW"];
  const students = [
    { id: 123, name: "Rokon", email: "Rukon@gmail.com" },
    { id: 124, name: "Sumon", email: "Sumon@gmail.com" },
    { id: 125, name: "Ismail", email: "ismail@gmail.com" },
  ];
  return (
    <div className="cars-page">
      <h1>Our cars list</h1>
      <ol className="cars-grid">
        {cars.map((car) => (
          <li key={car} className="car-card">
            {car}
          </li>
        ))}
      </ol>
      <h1>Students Name</h1>
      <ol className="cars-grid">
        {students.map(({ name, id, email }, i) => (
          <li key={i} className="car-card">
            id:{id} <br /> Name:{name} <br /> Email:{email}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Cars;
