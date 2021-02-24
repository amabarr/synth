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
	let arr = [synth, dist, reverberate];

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
			81: `C${octaves[0]}`,
			50: `C#${octaves[0]}`,
			87: `D${octaves[0]}`,
			51: `D#${octaves[0]}`,
			69: `E${octaves[0]}`,
			82: `F${octaves[0]}`,
			53: `F#${octaves[0]}`,
			84: `G${octaves[0]}`,
			54: `G#${octaves[0]}`,
			89: `A${octaves[0]}`,
			55: `A#${octaves[0]}`,
			85: `B${octaves[0]}`,
			73: `C${octaves[1]}`,
			57: `C#${octaves[1]}`,
			79: `D${octaves[1]}`,
			48: `D#${octaves[1]}`,
			80: `E${octaves[1]}`,
			219: `F${octaves[1]}`,
			187: `F#${octaves[1]}`,
			90: `G${octaves[1]}`,
			83: `G#${octaves[1]}`,
			88: `A${octaves[1]}`,
			68: `A#${octaves[1]}`,
			67: `B${octaves[1]}`,
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
