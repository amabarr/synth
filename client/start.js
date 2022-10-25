import React, { useState } from "react";
import * as Tone from "tone";
import Sound from "./sound";
import Home from "./homepage";

export const Start = () => {
	const [audio, setAudio] = useState("false");

	const onStart = async () => {
		console.log("where does start come from");
		await Tone.start();
		setAudio(true);
		console.log("Audio is ready!");
	};

	return <>{audio === true ? <Sound /> : <Home onStart={() => onStart()} />}</>;
};
