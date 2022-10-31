import React, { useState, useEffect } from "react";
import * as Tone from "tone";
import Sound from "./sound";
import { Home } from "./homepage";
import { useNavigate } from "react-router-dom";

export const Start = () => {
	const [audio, setAudio] = useState(false);

	const onStart = async () => {
		await Tone.start();
		setAudio(true);
		console.log("Audio is ready!");
	};

	return <>{audio === true ? <Sound /> : <Home onStart={onStart} />}</>;
};
