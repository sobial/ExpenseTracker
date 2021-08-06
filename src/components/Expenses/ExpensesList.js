import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.filteredList.length === 0) {
    return (
      <Card className="empty">
        <p>No Such Expense Found!</p>
      </Card>
    );
  }
  if (props.filteredList.length > 0) {
    return props.filteredList.map((i) => (
      <ExpenseItem title={i.title} date={i.date} amount={i.amount} key={i.id} />
    ));
  }
};
export default ExpensesList;
