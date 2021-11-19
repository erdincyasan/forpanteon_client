import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import { io } from "socket.io-client";
import CellWithBackGround from "./CellWithBackground";

export default function IncludedUserLeaderBoard(props) {
	const { id } = useParams();
	//const [ leaderBoardId, setleaderBoardId ] = useState([]);
	//const [ leaderBoard, setLeaderBoard ] = useState([]);
	const [ userList, setUserList ] = useState([]);
	const getLeaders = async () => {
        const response=await axios.get(`http://localhost:3001/leaders/user/${id}`);
        console.log("Hi guys")
        console.log(response.data);
        setUserList([...response.data.leaderBoard,...response.data.userPosition])
	};
   
	useEffect(() => {
       
        console.log("Hook çalıştı")
		getLeaders();
        const socket = io('ws://localhost:3001')
        socket.on('changeTable',(data)=>{
            this.getData();
        });
        console.log("Fonksiyon bitti");
	});
	return (
		<div>
			<Grid 
            style={{
                height:"400px"
            }}
            data={userList}>
				<GridColumn field="id" title="ID" />
				<GridColumn field="name" title="UserName" />
				<GridColumn field="country" title="Country" />
				<GridColumn field="weeklyEarnedMoney" title="Weekly Earn" />
				<GridColumn field="position" title="Position" />
				<GridColumn style={{ color: "red" }} field="dailyDifference" title="Daily Change" cell={CellWithBackGround} />
			</Grid>
		</div>
	);
}
