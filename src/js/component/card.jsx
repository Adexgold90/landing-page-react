import React from "react";

const Card = () => {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img
				src="https://dummyimage.com/500x325/000/fff"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Sapiente esse necessitatibus neque.
				</p>
				<a href="#" className="btn btn-primary">
					Find out more!
				</a>
			</div>
		</div>
	);
};

export default Card;
