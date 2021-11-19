import React from 'react'
import axios from 'axios';
export default function DealPrize() {
    const dealIt=async ()=>{
        await axios.get("http://localhost:3001/leaders/dealPrizePool").then(x=>{
            console.log(x.data);
        })
    }
    return (
        <button className="btn btn-danger" onClick={dealIt}>
           Ödül Dağıt
        </button>
    )
}
