import "./App.css";
import UserInput from "./components/UserInput";
import CarList from "./components/CarList";
import { useState } from "react";

function App() {
  const [carList, setCarList] = useState([]);
  return (
    <div className="App">
      <UserInput carList={carList} setCarList={setCarList} />
      <CarList carList={carList} />
    </div>
  );
}

export default App;
