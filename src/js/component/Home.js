import React, { useState } from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Cards from "./Cards";
import Form from "./Form";
import Footer from "./Footer";

const Home = () => {
	const [width, setWidth] = useState(50);
	const [height, setHeight] = useState(50);

	const handleWidthChange = event => {
		setWidth(event.target.value);
	};

	const handleHeightChange = event => {
		setHeight(event.target.value);
	};

	return (
		<div>
			<Navbar />
			<div className="mx-3 px-3 col-md-12 ">
				<Jumbotron />
				<Cards />
				<Form
					width={width}
					height={height}
					handleWidthChange={() => handleWidthChange}
					handleHeightChange={() => handleHeightChange}
				/>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
