import React, { useState } from "react";
import * as Tone from "tone";

const Start = () => {
	const [audio, setAudio] = useState("false");

	const onStart = async () => {
		await Tone.start;
		console.log("audio is ready");
		setAudio(true);
	};

	return (
		<div className='start-page'>
			{/* make this a cool font somehow */}
			Welcome to my Synth, press the button to start!
			<button
				onClick={() => {
					onStart();
				}}
			>
				{" "}
				Start?
			</button>
		</div>
	);
};

export default Start;
