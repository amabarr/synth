import React, { useState } from "react";
import Synth from "./synth";
import * as Tone from "tone";
import { Knob, Pointer, Value, Arc } from "rc-knob";
import Controls from "./controls";

const SoundBoard = () => {
	const [synthType, setSynthType] = useState("synth");
	const [distortion, setDistortion] = useState(false);
	const [autoWah, setAutoWah] = useState(false);
	const [distoLvl, setDistoLvl] = useState(0.0);

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

	const changeDisto = (level) => {
		setDistoLvl(level.toFixed(2));
	};

	const addWah = () => {
		setAutoWah((current) => !current);
	};

	const changeSynth = (e) => {
		const prev = synthSwitch[synthType];
		setSynthType(e.target.value);
		const current = synthSwitch[e.target.value];

		//canceling a note just in case
		prev.triggerRelease();
		//switching the type
		prev.unsync();
		current.sync();
	};

	return (
		<div className='soundboard'>
			<h2>AMB synth</h2>

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

			<div className='controls'>
				{/* this gives me a fader of sorts */}
				<div className='knob'>
					<input
						id='peak'
						type='range'
						min='0'
						max='100'
						data-width='40'
						data-height='40'
						data-angleOffset='220'
						data-angleRange='280'
					/>
					<label>Peak</label>
				</div>
				<div className='knob'>
					<input
						id='peak'
						type='range'
						min='0'
						max='100'
						data-width='40'
						data-height='40'
						data-angleOffset='220'
						data-angleRange='280'
					/>
					<label>Amplitude</label>
				</div>

				<Controls
					addDistortion={addDistortion}
					distortion={distortion}
					changeDisto={changeDisto}
					distoLvl={distoLvl}
				/>
			</div>
			<Synth
				synth={synthSwitch[synthType]}
				distortion={distortion}
				distoLvl={distoLvl}
				wah={autoWah}
			/>
		</div>
	);
};

export default SoundBoard;
