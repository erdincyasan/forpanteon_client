import React,{useState} from 'react'
import axios from 'axios'
export default function AddMoneyToUser(props) {
    const [userId,setUserId]=useState("");
    const [userMoney,setUserMoney]=useState(0);
    const addMoneyToUser=({userId,money})=>{
        axios.post(`http://localhost:3001/users/updateUserMoney/${userId}`,{money:money})
    }
    return (
        <div>
            <div className="form-group">
            <label className="form-control" htmlFor="userId">User ID:</label>
            <input className="form-control bg-secondary text-dark" type="text" value={userId} onChange={(e)=>setUserId(e.target.value)} id="userId"></input>
            </div>
            <div className="form-group">
            <label className="form-control" htmlFor="userMoney">Money Amount to add User</label>
            <input className="form-control bg-secondary" id="userMoney" type="number" step="0.1" value={userMoney} onChange={(e)=>setUserMoney(parseFloat(e.target.value))} />

            </div>
            <div className="form-control">
            <button className="btn btn-success form-control" onClick={()=>addMoneyToUser({userId,money:userMoney})}>Kullanıcıya ekle</button>

            </div>
        </div>
    )
}
