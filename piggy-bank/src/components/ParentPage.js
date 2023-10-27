import React from "react";

function ParentPage() {
  const pastTransactions = [
    { date: "2021-10-01", description: "Allowance", amount: 10 },
    { date: "2021-10-08", description: "Birthday gift", amount: 25 },
    { date: "2021-10-15", description: "Chores", amount: 5 },
  ];

  const currentSavings = 40;

  return (
    <div>
      <h1>Parent's Page</h1>
      <h2>Past Transactions</h2>
      <ul>
        {pastTransactions.map((transaction, index) => (
          <li key={index}>
            {transaction.date} - {transaction.description}: $
            {transaction.amount}
          </li>
        ))}
      </ul>
      <h2>Current Savings</h2>
      <p>${currentSavings}</p>
    </div>
  );
}

export default ParentPage;
