/* eslint-disable no-template-curly-in-string */
import React from "react";
import "./ChildPage.css"

function ChildPage() {
  const savings = 34; // hardcoded savings value
  const savingsGoal = 60; // hardcoded savings goal value
  const savingsPercent = ((savings / savingsGoal) * 100).toFixed(0);



  return (
    <div>
      <div class="container">
        <h1>Child's Savings</h1>
        <p>Savings Goal: ${savingsGoal}</p>
        <p>Savings: ${savings}</p>
        

        <div class="progress2 progress-moved" style={{ width: `100%` }}>
          <div class="progress-bar2" style={{ width: `${savingsPercent}%` }}>
          </div>
        </div>
        <h1 class="centeredPercent">{savingsPercent}%</h1>
      </div>
    </div>
  );
}

export default ChildPage;
