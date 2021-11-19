import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TopLeaders from "./components/TopLeaders";
import AllUsers from './components/AllUsers';
import IncludedUserLeaderBoard from './components/IncludedUserLeaderBoard';
import {  Routes, Route } from "react-router-dom";
import AddUserComponent from "./components/AddUserComponent";
class App extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<div className="container">
						<Routes>
							<Route path="/" element={<TopLeaders/>} />
              <Route path="/allUsers" element={<AllUsers/>}/>
              <Route path='/getUserBoard/:id' element={<IncludedUserLeaderBoard />}></Route>
              <Route path='/addUser' element={<AddUserComponent/>}></Route>
						</Routes>
				</div>
			</div>
		);
	}
}

export default App;
