import React from "react";
import "./Store.css";
const Detail = (props) => {
  return (
    <div>
      <img src={props.imageSource} alt="tacconnect" className="imageSource1" />
      <label className="StoreTitle">{props.title}</label>
      <label className="StorePrice">{props.price}</label>
    </div>
  );
};

export default Detail;
