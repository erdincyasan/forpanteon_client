import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import LinkToUserId from "./LinkToUserId";
export default function AllUsers() {
    const [users,setUsers]=useState();
    useEffect(()=>{
        async function getUserData(){
            const userResponse=await axios.get("http://localhost:3001/users");
            console.log(userResponse)
            setUsers(userResponse.data);
        } 
        getUserData();
    },[]);
    return (
        <div>
            <h1>
                All users in here
            </h1>
            <Grid
                style={{
                    height:"400px"
                }}
                data={users}
            >
                <GridColumn field="_id" title="User ID" />
                <GridColumn field="name" title="User Name" />
                <GridColumn field="money" title="User Total Money" />
                <GridColumn field="country" title="User Country" />
                <GridColumn field="_id" title="Kullanıcı hedefle" cell={LinkToUserId} />
            </Grid>
        </div>
    )
}
