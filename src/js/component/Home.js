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
			<div className="mx-3 col-md-6">
				<Jumbotron />
				<Cards />
				<Form />
			</div>
			<Footer />
		</div>
	);
};

export default Home;
