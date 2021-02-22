import React, { useState } from "react";
import * as Tone from "tone";
import Piano from "./piano";

const Synth = (props) => {
	const synth = props.synth;
	const dist = new Tone.Distortion(0.5).toDestination();

	const note = (e) => {
		let pressed = false;
		if (props.distortion === true) {
			pressed = true;
			synth.connect(dist);
		} else if (props.distortion === false && pressed === true) {
			synth.disconnect(dist);
		}

		let note = e.target.dataset.note;
		synth.triggerAttack(note);
	};

	const stopNote = () => {
		synth.triggerRelease();
	};

	return (
		<div>
			<Piano play={note} stopNote={stopNote} />
		</div>
	);
};

export default Synth;
