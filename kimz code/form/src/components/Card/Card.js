import React from "react";
import styles from "./Card.module.css"; 

const Card = ({ id, Name, Age, Address, Phone, type, deleteHandler }) => {
  return (
    <div
      className={styles.cardUser}
      style={{ backgroundColor: type === "boy" ? "#87dfe9" : "pink" }}
    >
      <h3>Name : {Name}</h3>
      <h3>Age : {Age}</h3>
      <h3>Address : {Address}</h3>
      <h3>Phone: {Phone}</h3>
      <button
        className={styles.btnDelete}
        onClick={(e) => deleteHandler(e, id)}
      >
        X
      </button>
    </div>
  );
};

export default Card;
