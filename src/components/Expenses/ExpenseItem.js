import "./ExpenseItem.css";
import "./ExpenseDate";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <div className="title-item">{props.title}</div>
      <div className="date-container">
        <div className="price-item">
          <p>${props.amount}</p>
        </div>
        <ExpenseDate date={props.date} />
      </div>
    </Card>
  );
};

export default ExpenseItem;
