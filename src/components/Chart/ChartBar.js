import "./ChartBar.css";
const ChartBar = (props) => {
  const filledHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  const notfilledHeight =
    100 - Math.round((props.value / props.maxValue) * 100) + "%";

  let notFilledStyle = {
    borderRadius: "5px 5px 0px 0px",
    height: notfilledHeight,
  };
  if (filledHeight === "0%") {
    notFilledStyle = {
      borderRadius: "5px 5px 5px 5px",
      height: notfilledHeight,
    };
  }

  return (
    <div className="bar">
      <div className="notfilled" style={notFilledStyle}></div>
      <div className="filled" style={{ height: filledHeight }}></div>
      <div className="label">{props.label}</div>
    </div>
  );
};
export default ChartBar;
