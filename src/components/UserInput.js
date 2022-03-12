import React from "react";
import { useState } from "react";
import styles from "./userInput.module.css";

const UserInput = (props) => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");

  const brandHandler = (e) => setBrand(e.target.value);
  const modelHandler = (e) => setModel(e.target.value);
  const yearHandler = (e) => setYear(e.target.value);

  const addCarBtnHandler = () => {
    if (!brand || !model || !year) {
      return;
    }

    let carList = [...props.carList];
    if (carList.length > 0) {
      for (let i = 0; i < carList.length; i++) {
        console.log(i, carList[i].brand, brand, carList[i].model, model);
        if (carList[i].brand === brand && carList[i].model === model) {
          carList[i].count++;
          props.setCarList([...carList]);
          setBrand("");
          setModel("");
          setYear("");
          return;
        }
      }
      const newCar = {
        brand,
        model,
        year,
        count: 1,
        id: new Date().getTime().toString(),
      };
      carList.push(newCar);
      props.setCarList([...carList]);
      setBrand("");
      setModel("");
      setYear("");
      return;
    } else {
      const newCar = {
        brand,
        model,
        year,
        count: 1,
        id: new Date().getTime().toString(),
      };
      carList.push(newCar);
      props.setCarList([...carList]);
      setBrand("");
      setModel("");
      setYear("");
    }
    props.setAddCar((prev) => !prev);
  };

  return (
    <div className={styles.mainDiv}>
      <h4 id={styles.title}>Please Enter The Car details: </h4>
      <span>Brand</span>
      <br />
      <input onChange={brandHandler} value={brand} />
      <br />
      <span>Modal</span>
      <br />
      <input onChange={modelHandler} value={model} />
      <br />
      <span>Year of Manufacture</span>
      <br />
      <input
        onChange={yearHandler}
        value={year}
        type="number"
        placeholder="2015"
        min={2015}
        max={new Date().getFullYear()}
      />
      <button onClick={addCarBtnHandler} id={styles.addCarBtn}>
        Add Car
      </button>
    </div>
  );
};

export default UserInput;
