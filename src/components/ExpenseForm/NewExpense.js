import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const NewExpenseHandler = (newExpenseData) => {
    const expenseData = {
      ...newExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.addNewExpense(expenseData);
  };

  return (
    <div>
      <ExpenseForm onNewExpense={NewExpenseHandler} />
    </div>
  );
};
export default NewExpense;
