import React, { useState } from "react";
import * as Tone from "tone";
import Piano from "./piano";

const Synth = ({
	synth,
	distortion,
	distoLvl,
	dist,
	vol,
	reverb,
	reverberate,
	reverbLvl,
	octaves,
}) => {
	let arr = [synth, dist];

	synth.volume.value = vol;
	synth.chain(dist, reverberate, Tone.Destination);

	const distoManager = () => {
		if (distortion) {
			dist.wet.value = distoLvl;
		} else if (!distortion) {
			dist.wet.value = 0;
		}

		if (reverb) {
			reverberate.wet.value = reverbLvl;
		} else if (!reverb) {
			reverberate.wet.value = 0;
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
			65: `C${octaves[0]}`,
			87: `C#${octaves[0]}`,
			83: `D${octaves[0]}`,
			69: `D#${octaves[0]}`,
			68: `E${octaves[0]}`,
			70: `F${octaves[0]}`,
			84: `F#${octaves[0]}`,
			71: `G${octaves[0]}`,
			89: `G#${octaves[0]}`,
			72: `A${octaves[0]}`,
			85: `A#${octaves[0]}`,
			74: `B${octaves[0]}`,
			75: `C${octaves[1]}`,
			79: `C#${octaves[1]}`,
			76: `D${octaves[1]}`,
			80: `D#${octaves[1]}`,
			186: `E${octaves[1]}`,
			222: `F${octaves[1]}`,
			221: `F#${octaves[1]}`,
			13: `G${octaves[1]}`,
		};

		if (codeToNote[event.keyCode]) {
			note(`${codeToNote[event.keyCode]}`);
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
			<Piano play={note} stopNote={stopNote} octaves={octaves} />
		</div>
	);
};

export default Synth;
