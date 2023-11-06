import React, { useState } from "react";
import confetti from "https://esm.run/canvas-confetti@1";
import "./ChildPage.css";

function ChildPage() {
  const [savingsGoal, setSavingsGoal] = useState(1);
  const [savings, setSavings] = useState(0);
  const [catName, setCatName] = useState("Hello");

  const savingsPercent = ((savings / savingsGoal) * 100).toFixed(0);

  function handleSavingsGoalChange(event) {
    setSavingsGoal(Number(event.target.value));
  }

  function handleSavingsChange(event) {
    setSavings(Number(event.target.value));
  }

  function handleCatName(event) {
    setCatName(event.target.value);
  }

  const [newElements, setNewElements] = useState([]);

  function newCategory() {
    const newElement = (
      <div key={newElements.length} className="container">
        <h1>{catName}</h1>
        <p>Savings Goal: ${savingsGoal}</p>
        <p>Savings: ${savings}</p>
        <div className="progress2 progress-moved" style={{ width: `100%` }}>
          <div
            className="progress-bar2"
            style={{
              width: `${savingsPercent >= 100 ? 100 : savingsPercent}%`,
            }}
          ></div>
        </div>
        <h1 className="centeredPercent">{savingsPercent}%</h1>
      </div>
    );

    setNewElements([...newElements, newElement]);
  }

  function onClick() {
    confetti({
      particleCount: 150,
      spread: 60,
    });
  }

  return (
    <div>
      {newElements.map((element, index) => (
        <div key={index}>{element}</div>
      ))}
      <div className="container">
        <h1>Savings Goal</h1>
        <p>Savings: ${savings}</p>
        <p>
          Name of Category:{" "}
          <input type="text" value={catName} onChange={handleCatName} />
        </p>
        <h4>Savings Goal</h4>
        <p>
          Enter how much to save:{" "}
          <input
            type="number"
            value={savingsGoal}
            onChange={handleSavingsGoalChange}
          />
        </p>
        <h4>Savings</h4>
        <p>
          Enter actual saved amount:{" "}
          <input type="number" value={savings} onChange={handleSavingsChange} />
        </p>
        <div className="progress2 progress-moved" style={{ width: `100%` }}>
          <div
            className="progress-bar2"
            style={{
              width: `${savingsPercent >= 100 ? 100 : savingsPercent}%`,
            }}
          ></div>
        </div>
        <div onClick={onClick}>
          <h1 className="centeredPercent">{savingsPercent}%</h1>
        </div>
      </div>
      <div className="container">
        <button className="addCategory" onClick={newCategory}>
          Save and Add New Category
        </button>
      </div>
    </div>
  );
}

export default ChildPage;
