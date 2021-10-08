import React from "react";

const Jumbotron = () => {
	return (
		<div className="jumbotron jumbotron-fluid mb-4 p-5 bg-light border rounded-3">
			<div className="container">
				<h1 className="display-4 text-start bold">A Warm Welcome!</h1>
				<p className="lead text-center">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Integer faucibus felis vitae elit ultricies, vel tempus
					metus dapibus.
				</p>
				<a href="#" className="btn btn-primary">
					Call to action!
				</a>
			</div>
		</div>
	);
};

export default Jumbotron;
