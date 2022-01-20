import react, { useRef, useState } from "react";
import styles from "./App.module.css";
import Card from "../Card/Card";
import Filter from "../filter/Filter";
const App = () => {
  const students = [
    {
      Name: "Khalid",
      Age: "24",
      Address: "hay el boughaz",
      Phone: "038382922",
    },
    {
      Name: "anas",
      Age: "24",
      Address: "ben diban",
      Phone: "0842368477",
    },
    {
      Name: "mohamed",
      Age: "20",
      Address: "Boukhalef",
      Phone: "0286328732",
    },
  ];

  const [state, setState] = useState(students);
  const [cardToggle, setCardToggle] = useState(false);
  // const inputEL = useRef(null);

  const deleteHandler = (e, clickedIndex) => {
    console.log(clickedIndex);
    setState((prevState) => {
      return prevState.filter((el, idx) => idx !== clickedIndex);
    });
    // const deleteOperation = state.filter((el, idx) => idx !== clickedIndex);
    // setState(deleteOperation);
  };

  const toggleHandler = () => {
    setCardToggle(!cardToggle);
  };
  // const changeHandler = () => {
  //   console.log(inputEL.current.value);
  // };

  // const onclick = () => {
  //   inputEL.current.focus();
  // };
  return (
    <main className={styles.main}>
      <h1>Data Boys</h1>
      <button style={{ marginBottom: "20px" }} onClick={toggleHandler}>
        {cardToggle ? "Show Cards" : "Hide Cards"}
      </button>
      <Filter />
      <div className={cardToggle ? `${styles.hide}` : `${styles.show}`}>
        <Card nameList={state} deleteHandler={deleteHandler} type="boys" />
      </div>
    </main>
  );
};
export default App;
