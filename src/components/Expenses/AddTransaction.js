import React, { useState } from "react";

const AddTransaction = ({
  setTotal,
  setTransactions,
  setIncome,
  setExpense,
  amount,
  setAmount,
}) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Date.now().toString(36) + Math.random().toString(36).substring(2),
      text: text,
      amount: +amount,
    };

    if (amount > 0) setIncome((c) => +c + +amount);
    else setExpense((c) => c - amount);

    setTotal((c) => +c + +amount);

    setTransactions((c) => [...c, newTransaction]);
    setText("");
    setAmount("");
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            id="input-expense-text"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            id="input-expense-number"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
            required
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
