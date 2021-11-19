import React from "react";
import {Link} from 'react-router-dom'
export default function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light mx-5">
            <Link className="navbar-brand" to='/'>Home</Link>
			

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					
					<li className="nav-item">
						<Link className="nav-link" to='/allUsers'>
                            Tüm Kullanıcıları Görüntüle
                        </Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to='/addUser'>
                           Kullanıcı Ekle
                        </Link>
					</li>
					
					
				</ul>
			</div>
		</nav>
	);
}
