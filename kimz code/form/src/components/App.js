import react from "react";
import "./App.module.css";

const App = () => {
  const names = [
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

  const cards = names.map((name, idx) => (
    <div className="cardUser" key={idx}>
      <h3>Name : {name.Name}</h3>
      <h3>Age : {name.Age}</h3>
      <h3>Address : {name.Address}</h3>
      <h3>Phone: {name.Phone}</h3>
    </div>
  ));
  return <main>{cards}</main>;
};
export default App;
