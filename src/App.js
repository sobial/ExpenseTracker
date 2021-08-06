import { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/ExpenseForm/NewExpense";
import "./App.css";
const dummyData = [
  {
    id: "e1",
    title: "Car insurance",
    amount: 465.74,
    date: new Date(2022, 3, 23),
  },
  {
    id: "e2",
    title: "Caffee",
    amount: 2.43,
    date: new Date(2022, 3, 23),
  },
  {
    id: "e3",
    title: "Gas",
    amount: 45.56,
    date: new Date(2021, 3, 23),
  },
  {
    id: "e4",
    title: "Dinner",
    amount: 86.72,
    date: new Date(2020, 3, 23),
  },
  {
    id: "e5",
    title: "Dinner",
    amount: 86.72,
    date: new Date(2020, 4, 23),
  },
  {
    id: "e6",
    title: "Dinner",
    amount: 86.72,
    date: new Date(2020, 4, 23),
  },
  {
    id: "e7",
    title: "Dinner",
    amount: 86.72,
    date: new Date(2020, 4, 23),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(dummyData);
  const addNewExpenseHandler = (newExpense) => {
    setExpenses((prevState) => {
      return [newExpense, ...prevState];
    });
  };
  return (
    <div className="wrapper">
      <div className="maincontainer">
        <NewExpense addNewExpense={addNewExpenseHandler} />
        <Expenses expenses={expenses} />
      </div>
    </div>
  );
};

export default App;
