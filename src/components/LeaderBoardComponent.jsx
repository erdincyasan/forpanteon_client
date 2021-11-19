import React, { Component } from "react";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import axios from "axios";
import CellWithBackGround from "./CellWithBackground";
import {io } from 'socket.io-client';
class LeaderBoardComponent extends Component {
	constructor(props) {
		super(props);
		this.state = { leaderBoard: [], userList: [] };
        this.getData=this.getData.bind(this);
	}
  
	// async setLeaderBoard() {
	//   console.log("set leader board");
	//   axios.get("http://localhost:3001/leaders").then(response => {
	//     this.setState({leaderBoard:response.data.leaderBoard});
	//   })
	// }
	 getData() {
        console.log("Fetching fata");
		 axios.get("http://localhost:3001/leaders").then(response=>{
			 console.log(response.data);
			this.setState({ leaderBoard:response.data.leaderBoard });
		 })
		
		console.log("fetched data");

	}
	async componentDidMount() {
		//  await this.setLeaderBoard();
        this.getData();
        const socket = io('ws://localhost:3001')
        socket.on('changeTable',(data)=>{
            this.getData();
        });

	}
	render() {
		return (
			<div>
				<h1>LeaderBoards</h1>
				<Grid
					style={{
						height: "400px"
					}}
					data={this.state.leaderBoard}
				>
					<GridColumn field="id" title="ID" />
					<GridColumn field="name" title="UserName" />
					<GridColumn field="country" title="Country" />
					<GridColumn field="weeklyEarnedMoney" title="Weekly Earn" />
					<GridColumn field="position" title="Position" />
          <GridColumn style={{color:"red"}} field="dailyDifference" title="Daily Change"
          cell={CellWithBackGround}
          />
				</Grid>
			</div>
		);
	}
}

export default LeaderBoardComponent;
