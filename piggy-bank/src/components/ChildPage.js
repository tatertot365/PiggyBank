import React from "react";

function ChildPage() {
  const savings = 50; // hardcoded savings value
  const savingsGoal = 100; // hardcoded savings goal value

  return (
    <div>
      <div class="container">
        <h2>Child's Savings</h2>
        <p>Savings: ${savings}</p>
        <p>Savings Goal: ${savingsGoal}</p>

        <div class="progress2 progress-moved">
          <div class="progress-bar2"></div>
        </div>
      </div>
    </div>
  );
}

export default ChildPage;
