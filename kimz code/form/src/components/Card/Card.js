import React, { Fragment } from "react";
import styles from "./Card.module.css";

const Card = ({ nameList, type, deleteHandler }) => {
  const cards = nameList.map(({ Name, Age, Address, Phone }, indx) => (
    <div
      className={(styles.cardUser)}
      key={indx}
      style={{ backgroundColor: type === "boys" ? "#87dfe9" : "pink" }}
    >
      <h3>Name : {Name}</h3>
      <h3>Age : {Age}</h3>
      <h3>Address : {Address}</h3>
      <h3>Phone: {Phone}</h3>
      <button
        className={styles.btnDelete}
        onClick={(e) => deleteHandler(e, indx)}
      >
        X
      </button>
    </div>
  ));
  return (
    <Fragment>
      <div>{cards}</div>
    </Fragment>
  );
};

export default Card;
