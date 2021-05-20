import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from'../UI/Card';

function Expenses() {

    const expenses = [
        { title: "Car Insurance", amount: 347.68, date: new Date(2021, 2, 8) },
        { title: "Car Insurance", amount: 347.68, date: new Date(2021, 2, 8) },
        { title: "Car Insurance", amount: 347.68, date: new Date(2021, 2, 8) },
        { title: "Car Insurance", amount: 347.68, date: new Date(2021, 2, 8) },
      ];

    return (
        <Card className="expenses">
            <ExpenseItem 
                title={expenses[0].title}
                amount={expenses[0].amount}
                date={expenses[0].date}
            ></ExpenseItem>
            <ExpenseItem
                title={expenses[1].title}
                amount={expenses[1].amount}
                date={expenses[1].date}
            ></ExpenseItem>
            <ExpenseItem
                title={expenses[2].title}
                amount={expenses[2].amount}
                date={expenses[2].date}
            ></ExpenseItem>
            <ExpenseItem
                title={expenses[3].title}
                amount={expenses[3].amount}
                date={expenses[3].date}
            ></ExpenseItem>
        </Card>
    );
}

export default Expenses;