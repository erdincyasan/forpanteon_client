import React from 'react'
import {Link} from 'react-router-dom'
export default function LinkToUserId(props) {
    const userId=props.dataItem._id;
    //const field = props.field || "";
    return (
        <td style={{
            alignContent:"center"
        }}>
            <Link className="btn btn-primary text-white" to={`/getUserBoard/${userId}`} >Görüntüle</Link>
        </td>
    )
}
