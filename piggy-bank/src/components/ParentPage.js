import React, { useState } from "react";

function ParentPage() {
  const [selectedChild, setSelectedChild] = useState("child1");
  const [newBalance, setNewBalance] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [pastTransactions, setPastTransactions] = useState([
    {
      date: "2021-10-01",
      description: "Allowance",
      amount: 10,
      child: "child2",
    },
    {
      date: "2021-10-08",
      description: "Birthday gift",
      amount: 25,
      child: "child3",
    },
    {
      date: "2021-10-15",
      description: "Chores",
      amount: 5,
      child: "child1",
    },
  ]);

  const [children, setChildren] = useState([
    { name: "Child 1", balance: 5 },
    { name: "Child 2", balance: 10 },
    { name: "Child 3", balance: 25 },
    { name: "Child 4", balance: 0 },
  ]);

  const selectChild = (event) => {
    setSelectedChild(event.target.value);
    setNewBalance("");
    setNewDate("");
    setNewDescription("");
  };

  const handleBalanceChange = () => {
    const updatedPastTransactions = [...pastTransactions];
    const childBalanceIndex =
      parseInt(selectedChild.charAt(selectedChild.length - 1)) - 1;

    if (!isNaN(newBalance)) {
      const amountChange =
        parseInt(newBalance) - children[childBalanceIndex].balance;

      updatedPastTransactions.push({
        date: newDate,
        description: newDescription,
        amount: amountChange,
        child: selectedChild,
      });

      children[childBalanceIndex].balance = parseInt(newBalance);
      setPastTransactions(updatedPastTransactions);
      setChildren(children);
    }
  };

  return (
    <div className="container">
      <h1 className="mt-4">Parent's Page</h1>
      <h2 className="mt-4">Past Transactions</h2>
      <ul className="list-group">
        {pastTransactions
          .filter((transaction) => transaction.child === selectedChild)
          .map((transaction, index) => (
            <li key={index} className="list-group-item">
              {transaction.date} - {transaction.description}: $
              {transaction.amount}
            </li>
          ))}
      </ul>
      <select
        className="form-select mt-4"
        onChange={selectChild}
        value={selectedChild}
      >
        {children.map((child, index) => (
          <option key={index} value={`child${index + 1}`}>
            {child.name}
          </option>
        ))}
      </select>
      <div className="mt-4">
        <h2>{selectedChild}'s Balance</h2>
        <p>
          Balance: ${" "}
          {
            children.find(
              (child) =>
                child.name ===
                `Child ${selectedChild.charAt(selectedChild.length - 1)}`
            ).balance
          }
        </p>
        <div className="input-group mt-3">
          <input
            type="number"
            className="form-control"
            placeholder="New Balance"
            value={newBalance}
            onChange={(e) => setNewBalance(e.target.value)}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Date (YYYY-MM-DD)"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Description"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleBalanceChange}>
            Record Transaction
          </button>
        </div>
      </div>
    </div>
  );
}

export default ParentPage;
