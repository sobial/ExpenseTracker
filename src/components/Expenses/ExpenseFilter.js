import "./ExpenseFilter.css";
import Card from "../UI/Card";

const ExpenseFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onFilterChange(event.target.value);
  };

  return (
    <Card className="color">
      <div className="filter_container">
        <div className="onethird">Filter:</div>
        <div className="onethird"></div>
        <form className="onethird">
          <select
            onChange={dropdownChangeHandler}
            value={props.selectedYear}
            id="year"
            name="year"
            className="color shadow"
          >
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </form>
      </div>
    </Card>
  );
};

export default ExpenseFilter;
