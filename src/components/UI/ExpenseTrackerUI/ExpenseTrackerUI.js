import React, { useEffect } from "react";
import { Header } from "../../Expenses/Header";
import IncomeExpenses from "../../Expenses/IncomeExpenses";
import TransactionList from "../../Expenses/TransactionList";
import AddTransaction from "../../Expenses/AddTransaction";
import Balance from "../../Expenses/Balance";
import "./ExpenseTrackerUI.css";

function ExpenseTracker({
  income,
  expense,
  total,
  setTotal,
  transactions,
  setTransactions,
  setIncome,
  setExpense,
  setAmount,
  amount,
}) {
  useEffect(() => {
    getLocalExpenses();
  }, []);

  useEffect(() => {
    saveToLocalExpnses();
  }, [transactions, total]);

  const saveToLocalExpnses = () => {
    localStorage.setItem("expenses", JSON.stringify(transactions));
  };

  const getLocalExpenses = () => {
    if (!localStorage.getItem("expenses")) {
      localStorage.setItem("expenses", JSON.stringify([]));
    } else {
      let toLocal = JSON.parse(localStorage.getItem("expenses"));
      setTransactions(toLocal);
    }
  };

  return (
    <div className="holderExpensesUI">
      <div className="ExpenseTrackerBody">
        <Header />
        <Balance total={total} />
        <IncomeExpenses income={income} expense={expense} />
        <TransactionList
          setTransactions={setTransactions}
          transactions={transactions}
        />
        <AddTransaction
          setTotal={setTotal}
          setIncome={setIncome}
          setExpense={setExpense}
          setTransactions={setTransactions}
          setAmount={setAmount}
          amount={amount}
        />
      </div>
    </div>
  );
}

export default ExpenseTracker;
