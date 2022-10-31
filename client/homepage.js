import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import Footer from "./footer";

export const Home = ({ onStart }) => {
	console.log("in the homepage");
	return (
		<div id='start-page'>
			<h1>AMB Synth</h1>
			<div>
				<FontAwesomeIcon icon={faMusic} /> Press the button to start!{" "}
				<FontAwesomeIcon icon={faMusic} />
			</div>
			<br />
			<button onClick={onStart}> Start!</button>

			<Footer />
		</div>
	);
};
