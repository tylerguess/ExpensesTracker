import "./NewExpense.css";
import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const setEditingModeHandler = (event) => {
    setIsEditing(true);
  };

  const cancelEditing = (event) => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={setEditingModeHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onCancelEditing={cancelEditing}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
