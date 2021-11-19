import React from "react";
import axios from "axios";

export default function CalculateDailyDiffManually() {
	const calculateManually = () => {
		 axios.get("http://localhost:3001/users/sd/dailydiff");
	};
	return (
		<div>
			<button className="btn btn-primary" onClick={()=>calculateManually()}>Calculate Manually</button>
		</div>
	);
}
