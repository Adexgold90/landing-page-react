//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Navbar from "./component/navbar.jsx";
import Wrapper from "./component/wrapper.jsx";
import Footer from "./component/footer.jsx";

//render your react application
ReactDOM.render(
	<div>
		<Navbar />
		<Wrapper />
		<Footer />
	</div>,
	document.querySelector("#app")
);
