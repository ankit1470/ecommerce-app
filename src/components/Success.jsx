import React from "react";

const Success = () => {
  var val = Math.floor(1000 + Math.random() * 9000);

  return (
    <div className="success">
      <img
        src="https://www.clipartmax.com/png/full/179-1795386_patient-success-success-icon-png.png"
        alt="success"
        height="150"
      ></img>
      <br></br>
      <b>YOUR ORDER NO #{val} IS SUCCESSFULL AND WILL BE DELIVERED SHORTLY</b>
      <br></br>
      <b>THAN YOU FOR THE PURCHASE</b>
    </div>
  );
};

export default Success;
