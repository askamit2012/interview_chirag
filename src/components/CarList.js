import React, { useState } from "react";

const CarList = (props) => {
  const carList = [...props.carList];
  console.log(carList);
  return (
    <div>
      {carList.map((car) => (
        <div key={car.id}>
          <span>{car.brand}</span>
          <span>{car.model}</span>
          <span>{car.year}</span>
          <span>{car.count}</span>
        </div>
      ))}
    </div>
  );
};

export default CarList;
