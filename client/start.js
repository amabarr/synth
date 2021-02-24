import React, { useState } from "react";
import * as Tone from "tone";
import Sound from "./sound";
import Home from "./homepage";

const Start = () => {
	const [audio, setAudio] = useState("false");

	const onStart = async () => {
		await Tone.start();
		setAudio(true);
		console.log("Audio is ready!");
	};

	return <>{audio === true ? <Sound /> : <Home onStart={onStart} />}</>;
};

export default Start;
