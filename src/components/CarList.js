import styles from "./carList.module.css";

const CarList = (props) => {
  const carList = [...props.carList];
  console.log(carList);
  return (
    <div className={styles.mainDiv}>
      <h4>-: Car List :-</h4>
      {carList.map((car) => (
        <div key={car.id} className={styles.singleCar}>
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
