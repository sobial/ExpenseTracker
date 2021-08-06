import { useState } from "react";

import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const [yearFilter, setYearFilter] = useState("2020");
  const onFilterChangeHandler = (newYear) => {
    setYearFilter(newYear);
  };
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === yearFilter;
  });

  return (
    <div>
      <ExpenseFilter
        onFilterChange={onFilterChangeHandler}
        selectedYear={yearFilter}
      />
      <ExpensesChart chartData={filteredExpenses} />
      <ExpensesList filteredList={filteredExpenses} />
    </div>
  );
};
export default Expenses;
