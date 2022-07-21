import React from "react";
import Light from "../component/Light.jsx";

import TrafficLight from "../component/TrafficLight.jsx"

//create your first component
const Home = () => {
	return (
		<>
		<div className="container-fluid d-flex flex-column justify-content-center">
			<TrafficLight/>
		</div>
		</>
	);
};

export default Home;
