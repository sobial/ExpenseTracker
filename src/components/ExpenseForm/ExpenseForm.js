import { useState } from "react";

import "./ExpenseForm.css";
import Card from "../UI/Card";
import "./NewExpense";

const ExpenseForm = (props) => {
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");
  const [modalState, setModalState] = useState({
    buttonStyle: { display: "flex" },
    formStyle: { display: "none" },
  });

  const titleChangeHandler = (event) => {
    // console.log(event.target.value);
    setTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onNewExpense(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
    setModalState({
      buttonStyle: { display: "flex" },
      formStyle: { display: "none" },
    });
  };
  const addExpenseModalHandler = () => {
    setModalState({
      buttonStyle: { display: "none" },
      formStyle: { display: "flex" },
    });
  };

  return (
    <Card className="add-expense-card">
      <div className="add-expense-button" style={modalState.buttonStyle}>
        <button
          type="button"
          className="modal"
          onClick={addExpenseModalHandler}
        >
          Add Expense
        </button>
      </div>
      <form onSubmit={submitHandler}>
        <div className="form-wrapper" style={modalState.formStyle}>
          <div className="row">
            <div className="col">
              <input
                type="text"
                placeholder="Title"
                onChange={titleChangeHandler}
                value={enteredTitle}
              />
            </div>
            <div className="col">
              <input
                type="number"
                min="0.01"
                step="0.01"
                placeholder="Amount"
                onChange={amountChangeHandler}
                value={enteredAmount}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input
                type="date"
                min="2019-01-01"
                max="2022-12-31"
                placeholder="Date"
                onChange={dateChangeHandler}
                value={enteredDate}
              />
            </div>
            <div className="col">
              <button type="submit">Add Expense</button>
            </div>
          </div>
        </div>
      </form>
    </Card>
  );
};
export default ExpenseForm;
