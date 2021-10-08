import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Cards from "./Cards";
import Form from "./Form";
import Footer from "./Footer";

const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="row mt-5 py-4">
				<div className="col-1"></div>
				<div className="d-flex flex-column justify-content-center align-item-center col-10">
					<Jumbotron />
					<Cards />
					<Form />
				</div>
				<div className="col-1"></div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
