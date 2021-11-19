import React from "react";
import { useState } from "react";
import axios from 'axios';
function AddUserComponent() {
    const [progress,setProgress]=useState(false);
	const [ name, setName ] = useState("");
	const [ country, setCountry ] = useState("");
	const [ money, setMoney ] = useState(0);
    const addUser=async ()=>{
        setProgress(true);
            await axios.post('http://localhost:3001/users',{
                name,money,country
            }).then(x=>setProgress(false));
    }
	return (
		<div className="row">
			<div className="col-md-12">
				<div>
					<div className="form-group">
						<label className="form-control" htmlFor="userName">Kullanıcı Adı</label>
						<input
                        className="form-control"
							value={name}
							id="userName"
							onChange={(e) => setName(e.target.value)}
							type="text"
							name=""
						/>
					</div>
					<div className="form-group">
						<label htmlFor="userCountry">Ülke</label>
						<input className="form-control"
							value={country}
							id="userCountry"
							onChange={(e) => setCountry(e.target.value)}
							type="text"
						/>
					</div>
					<div className="form-group">
						<label  htmlFor="userMoney">Para</label>
						<input className="form-control"
							value={money}
							onChange={(e) => setMoney(parseFloat(e.target.value))}
							id="userMoney"
							step="0.1"
							type="number"
						/>
					</div>
                    <hr />
                    <div className="form-group">
                        <button disabled={progress} onClick={addUser} className="btn btn-success form-control">
                            Kullanıcı kaydet
                        </button>
                    </div>
                    <hr />
                    <div className="alert alert-primary" style={{display:progress?"blcok":"none"}}>
                        Lütfen bekleyin kullanıcı ekleniyor...
                    </div>
				</div>
			</div>
		</div>
	);
}

export default AddUserComponent;
