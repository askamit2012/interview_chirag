import React from "react";
import { useState, useEffect } from "react";

const UserInput = (props) => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    console.log("Hello");
  }, [props.carList]);

  const brandHandler = (e) => setBrand(e.target.value);
  const modelHandler = (e) => setModel(e.target.value);
  const yearHandler = (e) => setYear(e.target.value);
  const addCarHandler = () => {
    if (!brand || !model || !year) {
      return;
    }
    console.log("Inside add Car handler");
    let carList = [...props.carList];
    if (carList.length > 0) {
      carList.forEach((car) => {
        console.log("Inside ForEacg");
        if (car.brand === brand && car.model === model) {
          car.count++;
          props.setCarList([...carList]);
          console.log("inside if");
        } else {
          console.log("inside else");
          const newCar = {
            brand,
            model,
            year,
            count: 0,
            id: new Date().getTime().toString(),
          };
          carList.push(newCar);
          props.setCarList([...carList]);
        }
      });
    } else {
      console.log("Inside main else");
      const newCar = {
        brand,
        model,
        year,
        count: 0,
        id: new Date().getTime().toString(),
      };
      carList.push(newCar);
      props.setCarList([...carList]);
    }
    setBrand("");
    setModel("");
    setYear("");
  };

  return (
    <div>
      <h4>Please Enter The Car details: </h4>
      <span>Brand</span>
      <br />
      <input onChange={brandHandler} value={brand} />
      <br />
      <span>Modal</span>
      <br />
      <input onChange={modelHandler} value={model} />
      <br />
      <span>Year of Manufacture</span> <br />
      <input onChange={yearHandler} value={year} />
      <button onClick={addCarHandler}>Add Car</button>
    </div>
  );
};

export default UserInput;
