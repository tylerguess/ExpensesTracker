import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 347.68, date: new Date(2021, 2, 8) },
    { title: "Car Insurance", amount: 347.68, date: new Date(2021, 2, 8) },
    { title: "Car Insurance", amount: 347.68, date: new Date(2021, 2, 8) },
    { title: "Car Insurance", amount: 347.68, date: new Date(2021, 2, 8) },
  ];

  const addExpenseHandler = (expense) => {
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
