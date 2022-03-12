import './style.css';


import React, { useState } from "react";
// import ReactDOM from "react-dom";

import "./style.css";

function Enviro() {
  // State with list of all checked item
  const [checked, setChecked] = useState([]);
  const checkList = ["Drive Less: Carbon emissions are one of the leading causes of carbon emissons.", "Unplug: Here's a shocker, your appliances and electronics suck energy.", "Conserve Water: water may appear abundant but, there are large accurances of water shortages. Turn off the faucet and take a shower instead of bathing.", "Choose to reuse instead of simply recycling", "use a reusable straw for a week", "Get outside!", "Save your leftovers","Wash your clothes with cold water", "Turn off all lights when you leave a room", "buy used books or even consider renting.", "clean up 10 pieces of trash."];

  // Add/Remove checked item from list
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  // Generate string of checked items
//   const checkedItems = checked.length
//     ? checked.reduce((total, item) => {
//         return total + ", " + item;
//       })
//     : "";

  // Return classes based on whether item is checked
  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

  return (
    <div className="app">
      <div className="checkList">
        <div className="title">Your CheckList:</div>
        <div className="list-container">
          {checkList.map((item, index) => (
            <div key={index}>
              <input value={item} type="checkbox" onChange={handleCheck} />
              <span className={isChecked(item)}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        {/* {`Items checked are: ${checkedItems}`} */}
      </div>
    </div>
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);


// const Enviro = () => {
//     return <h1>Enviro Chaallenges</h1>;
//   };
  
export default Enviro;