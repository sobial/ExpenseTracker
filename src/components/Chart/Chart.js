import ChartBar from "./ChartBar";
import Card from "../UI/Card";
import "./Chart.css";
const Chart = (props) => {
  const values = props.chartData.map((expense) => expense.value);
  console.log(props.chartData);
  const totalMaxValue = Math.max(...values);
  return (
    <Card className="chart">
      {props.chartData.map((data) => (
        <ChartBar
          label={data.label}
          value={data.value}
          maxValue={totalMaxValue}
          key={data.label}
        />
      ))}
    </Card>
  );
};

export default Chart;
