import React, { useState } from "react";
import * as Tone from "tone";
import Piano from "./piano";

const Synth = (props) => {
	const synth = props.synth;
	const dist = new Tone.Distortion(0.0).toDestination();
	const wah = new Tone.AutoWah(50, 6, -30).toDestination();
	let arr = [synth, dist, wah];
	wah.Q.value = 6;
	let prev = 0.0;

	//need a way to say, if distoLvl changed, disconnect and reconnect new one.
	const distoManager = () => {
		let connected = false;

		if (props.distortion) {
			connected = true;
			console.log("Distortion on", connected);
			synth.connect(dist);
		} else if (!props.distortion && connected) {
			synth.disconnect(dist);
		} else if (props.distoLvl !== prev && props.distortion) {
			console.log("changed distortion level");
			synth.disconnect(dist);
			dist = new Tone.Distortion(props.distoLvl).toDestination();
			prev = props.distoLvl;
			synth.connect(dist);
			connected = true;
		}
	};

	const note = (note) => {
		distoManager();
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
