import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { title: "Book 1", amount: 347.68, date: new Date(2021, 2, 8), id: Math.random().toString()},
  { title: "Item A", amount: 69.99, date: new Date(2021, 2, 8), id: Math.random().toString()},
  { title: "Item B", amount: 347.68, date: new Date(2021, 2, 8), id: Math.random().toString()},
  { title: "Item C", amount: 347.68, date: new Date(2021, 2, 8), id: Math.random().toString()},
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
