const CellWithBackGround = (props) => {
	const itsZero = props.dataItem.dailyDifference === 0;
	const examplePrice = props.dataItem.dailyDifference < 0;
	const icon = itsZero ? (
		<span className="k-icon" />
	) : examplePrice ? (
		<span className="k-icon k-i-sort-desc-sm" />
	) : (
		<span className="k-icon k-i-sort-asc-sm" />
	);
	const style = {
		backgroundColor: itsZero ? "rgb(245, 210, 86,0.32)" : examplePrice ? "rgb(243, 23, 0, 0.32)" : "rgb(55, 180, 0,0.32)"
	};
	const field = props.field || "";
	return (
		<td style={style}>
			{props.dataItem[field]} {icon}
		</td>
	);
};
export default CellWithBackGround;
