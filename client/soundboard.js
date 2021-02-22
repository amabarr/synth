import React, { useState } from "react";
import Synth from "./synth";
import * as Tone from "tone";

const SoundBoard = () => {
	const [synthType, setSynthType] = useState("synth");
	const [distortion, setDistortion] = useState(false);

	const synth = new Tone.Synth().toDestination();
	const MetalSynth = new Tone.MetalSynth().toDestination();
	const AMSynth = new Tone.AMSynth().toDestination();
	const FMSynth = new Tone.FMSynth().toDestination();
	const pluck = new Tone.PluckSynth().toDestination();

	const synthSwitch = {
		synth: synth,
		MetalSynth: MetalSynth,
		AMSynth: AMSynth,
		FMSynth: FMSynth,
		PluckSynth: pluck,
	};

	const addDistortion = () => {
		setDistortion((current) => !current);
	};

	const changeSynth = (e) => {
		const prev = synthSwitch[synthType];
		setSynthType(e.target.value);
		const current = synthSwitch[e.target.value];

		//switching the type
		prev.unsync();
		current.sync();
	};

	return (
		<div className='soundboard'>
			{synthType}
			<select
				name='synthType'
				id='synths'
				value={synthType}
				onChange={changeSynth}
			>
				<option value='synth'>Synth</option>
				<option value='AMSynth'>Amplitude Modulation</option>
				<option value='FMSynth'>Frequency Modulation</option>
				<option value='PluckSynth'>Pluck Synth</option>
				<option value='MetalSynth'>MetalSynth</option>
			</select>

			<button className='distortion' onClick={() => addDistortion()}>
				DISTORT?
			</button>

			<Synth synth={synthSwitch[synthType]} distortion={distortion} />
		</div>
	);
};

export default SoundBoard;
