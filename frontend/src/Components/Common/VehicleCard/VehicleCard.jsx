import React from "react";
import "./VehicleCard.styles.css";
import { useHistory } from "react-router-dom";

function VehicleCard(props) {
  let history = useHistory();
  const clickHandler = (e) => {
    console.log(props);
    localStorage.setItem("vehicleId", props._id);
    // const userType = localStorage.getItem("userType");
    // let userType = "admin";
    // if (userType === "admin") {
    //   history.push("/admin/vehicle");
    // } else {
    history.push("/users/reservations");
    //}
  };

  return (
    <div className="vehicleCard" onClick={clickHandler}>
      <img alt="cardimage" src={props.IMAGE_URL} className="cardImage"></img>
      <div className="cardText">
        <h4>
          {props.MAKE} {props.MODEL}
        </h4>
        <p>{props.MILEAGE}</p>
      </div>
    </div>
  );
}

export default VehicleCard;
