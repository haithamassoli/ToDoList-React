import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/nav/Navbar";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import ToDoList from "./components/ToDO/ToDoList";
// import Expense from "./components/expenseTracker/Expense";
import ExpenseTracker from "./components/UI/ExpenseTrackerUI/ExpenseTrackerUI";

function App() {
  // Expenses State
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [total, setTotal] = useState(expense + income);
  const [amount, setAmount] = useState(0);
  return (
    <div className="app_container">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ToDoList />} />
          {/* <Route exact path="/expenses" element={<Expense />} /> */}
          <Route
            exact
            path="/ExpenseTrackerUI"
            element={
              <ExpenseTracker
                income={income}
                expense={expense}
                total={total}
                setTotal={setTotal}
                setIncome={setIncome}
                setExpense={setExpense}
                transactions={transactions}
                setTransactions={setTransactions}
                amount={amount}
                setAmount={setAmount}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
