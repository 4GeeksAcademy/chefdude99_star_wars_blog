import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar-principal navbar navbar-light">
			<div className="container">
				<Link to="/">
					<img src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-emblema.jpg"
						alt="" style={{ width: "100px", height: "auto" }}></img>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<div className="dropdown">
							<button className="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
								Favoritos <span className="badge text-bg-secondary">0</span>
							</button>
							<ul className="dropdown-menu">
								<li><a className="dropdown-item" href="#">Action</a></li>
								<li><a className="dropdown-item" href="#">Another action</a></li>
								<li><a className="dropdown-item" href="#">Something else here</a></li>
							</ul>
						</div>
					</Link>
				</div>
			</div>
		</nav>
	);
};