import React from "react";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";

const Wrapper = () => {
	return (
		<div className="container">
			<div>
				<Jumbotron />
			</div>
			<div className="d-flex flex-row">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};

export default Wrapper;
