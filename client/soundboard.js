import React, { useState } from "react";
import Synth from "./synth";
import * as Tone from "tone";

const SoundBoard = () => {
	const [synthType, setSynthType] = useState("Synth");
	const [distortion, setDistortion] = useState(false);

	const addDistortion = () => {
		setDistortion((current) => !current);
	};

	const synth = new Tone.Synth().toDestination();

	return (
		<div className='soundboard'>
			<select name='synthType' id='synths'>
				<option value='Synth'>Synth</option>
				<option value='AMSynth'>Amplitude Modulation</option>
				<option value='FMSynth'>Frequency Modulation</option>
				<option value='NoiseSynth'>Noise</option>
				<option value='PluckSynth'>Pluck Synth</option>
				<option value='MetalSynth'>MetalSynth</option>
			</select>

			<button className='distortion' onClick={() => addDistortion()}>
				DISTORT?
			</button>

			<Synth synth={synth} distortion={distortion} />
		</div>
	);
};

export default SoundBoard;
