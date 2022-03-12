import "./App.css";
import UserInput from "./components/UserInput";
import CarList from "./components/CarList";
import { useState } from "react";

function App() {
  const [addCar, setAddCar] = useState(false);
  const [carList, setCarList] = useState([]);

  const addCarHandler = () => {
    setAddCar((prev) => !prev);
  };

  return (
    <div className="App">
      <h3 style={{ margin: "10px", color: "purple" }}>Add a Car</h3>
      <button onClick={addCarHandler}>+</button>
      {addCar && (
        <UserInput
          carList={carList}
          setCarList={setCarList}
          setAddCar={setAddCar}
        />
      )}

      {carList.length > 0 ? (
        <CarList carList={carList} />
      ) : (
        <h3 style={{ margin: "10px", color: "purple" }}>No Cars in the List</h3>
      )}
    </div>
  );
}

export default App;
