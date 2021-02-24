import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import Footer from "./footer";

const Home = ({ onStart }) => {
	return (
		<div id='start-page'>
			<h1>AMB Synth</h1>
			{/* Place screenshot here once it's all updated */}
			<div>
				<FontAwesomeIcon icon={faMusic} /> Press the button to start!{" "}
				<FontAwesomeIcon icon={faMusic} />
			</div>
			<br />
			<button
				onClick={() => {
					onStart();
				}}
			>
				{" "}
				Start!
			</button>

			<Footer />
		</div>
	);
};

export default Home;
