import React from "react";
import LeaderBoardComponent from "./LeaderBoardComponent";
import CalculateDailyDiffManually from "./CalculateDailyDiffManually";
import AddMoneyToUser from "./AddMoneyToUser";
import DealPrize from "./DealPrize";
export default class TopLeaders extends React.Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-md-12">
						<LeaderBoardComponent />
					</div>
				</div>
				<div className="row">
					<div className="col-md-3">
						<h6>Calculate daily diff by manually</h6>
						<CalculateDailyDiffManually />
                        <hr />
                        <h6><DealPrize/></h6>
                        <div className="alert alert-danger">
                            Ödülü dağıtırsanız haftalık veri sıfırlanır!
                        </div>
					</div>
					<div className="col-md-3">
						<AddMoneyToUser />
					</div>
				</div>
			</div>
		);
	}
}
