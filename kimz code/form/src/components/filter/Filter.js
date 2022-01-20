import React, { useState } from "react";
import styles from "./Filter.module.css";

const Filter = () => {
  const [filter, setFilter] = useState("");
  const filterHandler = (e) => {
      const name = e.target.value;
          setFilter(name);
    console.log(name);
  };
  return (
    <div className={styles.input}>
      <input
        type="text"
        placeholder="filter by name"
        value={filter}
        onChange={filterHandler}
      />

      <button onClick={onclick}>click Me</button>
    </div>
  );
};

export default Filter;
