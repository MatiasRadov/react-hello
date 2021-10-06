import React from "react";

const Cards = () => {
	return (
		<div className="d-flex justify-content-center">
			<div className="card" style={{ width: "18rem" }}>
				<img
					src="https://placekitten.com/500/325"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Some quick example text to build on the card title and
						make up the bulk of the content.
					</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
};

export default Cards;
