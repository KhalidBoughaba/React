import react, { useRef, useState } from "react";
import styles from "./App.module.css";
import CardList from "../cardList/CardList";
import Filter from "../filter/Filter";
import Modal from "../modal/Modal";
const App = () => {
  const students = [
    {
      id: 1,
      Name: "Khalid",
      Age: "24",
      Address: "hay el boughaz",
      Phone: "038382922",
      type: "boy",
    },
    {
      id: 2,
      Name: "nour",
      Age: "22",
      Address: "ben diban",
      Phone: "0842368477",
      type: "girl",
    },
    {
      id: 3,
      Name: "mohamed",
      Age: "20",
      Address: "Boukhalef",
      Phone: "0286328732",
      type: "boy",
    },
    {
      id: 4,
      Name: "farah",
      Age: "21",
      Address: "branes",
      Phone: "0894017023",
      type: "girl",
    },
  ];

  const [state, setState] = useState(students);
  const [cardToggle, setCardToggle] = useState(false);
  const [filter, setFilter] = useState("");
  // const inputEL = useRef(null);

  const deleteHandler = (e, selectedID) => {
    console.log(selectedID);
    setState((prevState) => {
      return prevState.filter((el) => el.id !== selectedID);
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
  const filterName = (name) => {
    setFilter(name);
  };

  const namesHandler = () => {
    if (filter.length !== 0) {
      return state.filter((el) => el.Name.includes(filter));
    }
    return state;
  };
  return (
    <main className={styles.main}>
      <Modal />
      <h1>Data Students</h1>
      <button style={{ marginBottom: "20px" }} onClick={toggleHandler}>
        {cardToggle ? "Show Cards" : "Hide Cards"}
      </button>
      <Filter filtertion={filterName} />
      <div className={cardToggle ? `${styles.hide}` : `${styles.show}`}>
        <CardList nameList={namesHandler()} deleteHandler={deleteHandler} />
      </div>
    </main>
  );
};
export default App;
