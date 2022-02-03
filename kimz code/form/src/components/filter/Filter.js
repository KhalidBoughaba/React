import React, { useState } from "react";
import styles from "./Filter.module.css";

const Filter = ({ filtertion }) => {
  const [filter, setFilter] = useState("");
  const filterHandler = (e) => {
    const name = e.target.value;
    setFilter(name);
    filtertion(name);
  };
  return (
    <div className={styles.input}>
      <input
        type="text"
        placeholder="filter by name"
        value={filter}
        onChange={filterHandler}
      />
    </div>
  );
};

export default Filter;
