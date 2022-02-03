import React from "react";
import Card from "../Card/Card";

const CardList = ({ nameList, deleteHandler }) => {
  const cards = nameList.map(({id, ...otherProps}) => (
    <Card key={id} {...otherProps} id={id} deleteHandler={deleteHandler} />
  ));
  return <div>{cards}</div>;
};

export default CardList;
