import React, { useState } from "react";
import * as Tone from "tone";
import Piano from "./piano";

const Synth = ({ synth, distortion, distoLvl, dist }) => {
	let arr = [synth, dist];
	//need a way to say, if distoLvl changed, disconnect and reconnect new one.

	synth.chain(dist, Tone.Destination);

	const distoManager = () => {
		if (distortion) {
			dist.wet.value = distoLvl;
		} else if (!distortion) {
			dist.wet.value = 0;
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
			{console.log("synth rerendered")}
			<Piano play={note} stopNote={stopNote} />
		</div>
	);
};

export default Synth;
