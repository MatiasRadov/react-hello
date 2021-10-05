import React from "react";

const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-dark bg-dark fixed-top ">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						Start Bootstrap
					</a>
					<button
						className="navbar-toggler border-0 ms-5 float-end"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarToggleExternalContent"
						aria-controls="navbarToggleExternalContent"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
				</div>
			</nav>
			<div className="collapse" id="navbarToggleExternalContent">
				<div className="bg-dark p-4">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0 mt-4">
						<li className="nav-item">
							<a className="nav-link" href="#">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Services
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
