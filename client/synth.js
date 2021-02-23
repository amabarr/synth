import React, { useState } from "react";
import * as Tone from "tone";
import Piano from "./piano";

const Synth = (props) => {
	const synth = props.synth;
	const dist = new Tone.Distortion(0.5).toDestination();
	const wah = new Tone.AutoWah(50, 6, -30).toDestination();
	let arr = [synth, dist, wah];
	wah.Q.value = 6;

	const note = (note) => {
		let pressed = false;

		if (props.distortion === true) {
			pressed = true;
			synth.connect(dist);
		} else if (props.distortion === false && pressed === true) {
			synth.disconnect(dist);
		}

		synth.triggerAttack(note);
	};

	const stopNote = () => {
		synth.triggerRelease();
	};

	const onkeydown = (event) => {
		const codeToNote = {
			65: "A",
			87: "A#",
			83: "B",
			68: "C",
			82: "C#",
			70: "D",
			84: "D#",
			71: "E",
			72: "F",
			85: "F#",
			74: "G",
			73: "G#",
			75: "A",
			79: "A#",
			76: "B",
		};

		if (codeToNote[event.keyCode]) {
			note(`${codeToNote[event.keyCode]}3`);
		}
	};

	const onkeyup = () => {
		stopNote();
	};

	React.useEffect(() => {
		window.addEventListener("keydown", onkeydown);
		window.addEventListener("keyup", onkeyup);

		return () => {
			window.removeEventListener("keydown", onkeydown);
			window.removeEventListener("keyup", onkeyup);
		};
	}, [arr]);

	return (
		<div>
			<Piano play={note} stopNote={stopNote} />
		</div>
	);
};

export default Synth;
