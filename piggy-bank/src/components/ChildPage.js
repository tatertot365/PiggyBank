/* eslint-disable no-template-curly-in-string */
import React, { useState } from "react";
import "./ChildPage.css"
import "./ParentPage"

function ChildPage() {
 // const savings = 53; // hardcoded savings value
 // const savingsGoal = 60; // hardcoded savings goal value

  const [savingsGoal, setSavingsGoal] = useState(1); // Initial savings goal value
  const [savings, setSavings] = useState(0);
  const [catName, setCatName] = useState('Hello');


  const savingsPercent = ((savings / savingsGoal) * 100).toFixed(0);




  function handleSavingsGoalChange(event) {
    // Update the savings goal when the input field changes
    setSavingsGoal(Number(event.target.value));
  }

  function handleSavingsChange(event) {
    // Update the savings when the input field changes
    setSavings(Number(event.target.value));
  }

  function handleCatName(event) {
    // Update the savings goal when the input field changes
    setCatName(event.target.value);
  }

  const [newElements, setNewElements] = useState([]);


  function newCategory() {
    const newElement = (<div key={newElements.length} class="container"><h1>{catName}</h1><p>Savings Goal: ${savingsGoal}</p>
    <p>Savings: ${savings}</p> <div class="progress2 progress-moved" style={{ width: `100%` }}>
    <div class="progress-bar2" style={{  width: `${savingsPercent}` >= 100 ? `100%` : `${savingsPercent}%` }}></div></div>
    <h1 class="centeredPercent">{savingsPercent}%</h1></div>
    );


    setNewElements([...newElements, newElement])
  }

  return (

    <div>
      {newElements.map((element, index) => (
        <div key={index}>{element}</div>
      ))}
      <div class="container">
        <h1>Savings Goal</h1>
        <p>Savings: ${savings}</p>
        <p>Name of Category: <input type="text" value={catName} onChange={handleCatName}/></p>



        <h4>Savings Goal</h4>
        <p>Enter how much to save: <input
          type="number"
          value={savingsGoal}
          onChange={handleSavingsGoalChange}
        />
        </p>
        <h4>Savings</h4>

        <p>Enter actual saved amount: <input type="number" value={savings} onChange={handleSavingsChange} /></p>

        

        <div class="progress2 progress-moved" style={{ width: `100%` }}>
          <div class="progress-bar2" style={{ width: `${savingsPercent}` >= 100 ? `100%` : `${savingsPercent}%` }}>
          </div>
        </div>
        <h1 class="centeredPercent">{savingsPercent}%</h1>
      </div>
      <div class="container">
        {/* <button class="addCategory" onClick={saveCategory}>Save Category</button> */}
        <button class="addCategory" onClick={newCategory}>Save and Add New Category</button>

      </div>
      
    </div>
  );
}

export default ChildPage;
