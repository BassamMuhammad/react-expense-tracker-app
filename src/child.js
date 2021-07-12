import React, { useContext, useState } from "react";
import "./App.css";
import { TransactionContext } from "./transContext";

function Child() {
  let { transactions, addTransaction, deleteTransaction } = useContext(
    TransactionContext
  );
  let [newAmount, setAmount] = useState(0);
  let [newDesc, setDesc] = useState("");
  const handleAddition = (event) => {
    event.preventDefault();
    addTransaction({
      amount: newAmount,
      desc: newDesc,
    });
  };
  function getIncome() {
    let income = 0;
    for (var i = 0; i < transactions.length; i++)
      if (transactions[i].amount > 0) income += Number(transactions[i].amount);
    return income;
  }

  function getExpense() {
    let expense = 0;
    for (var i = 0; i < transactions.length; i++)
      if (transactions[i].amount < 0) expense += Number(transactions[i].amount);
    return expense;
  }
  return (
    <React.Fragment>
      <div className="container">
        <h1 className="text-align">Expense Tracker</h1>
        <h3>
          Your Balance <br /> $260
        </h3>

        <div className="expense-container">
          <h3>
            INCOME <br /> ${getIncome()}
          </h3>
          <h3>
            EXPENSE <br /> ${Math.abs(getExpense())}
          </h3>
        </div>

        <h3>History</h3>
        <hr />

        <ul className="transaction-list">
          {transactions.map((transaction, ind) => {
            return (
              <li key={ind}>
                <span>{transaction.desc}</span>
                <span>{transaction.amount}</span>
                <button onClick={() => deleteTransaction(ind)}>X</button>
              </li>
            );
          })}
        </ul>

        <h3>Add new transaction</h3>
        <hr />

        <form className="transaction-form" onSubmit={handleAddition}>
          <label>
            Enter Description <br />
            <input
              type="text"
              onChange={(ev) => setDesc(ev.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Enter Amount <br />
            <input
              type="number"
              onChange={(ev) => setAmount(ev.target.value)}
              required
            />
          </label>
          <br />
          <input type="submit" value="Add Transaction" />
        </form>
      </div>
    </React.Fragment>
  );
}

export default Child;
