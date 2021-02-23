import React, { useState } from "react";
import Synth from "./synth";
import Controls from "./controls";

const SoundBoard = (props) => {
	const [synthType, setSynthType] = useState("synth");
	const [distortion, setDistortion] = useState(false);
	const [distoLvl, setDistoLvl] = useState(0.0);

	const addDistortion = () => {
		setDistortion((current) => !current);
	};

	const changeDisto = (level) => {
		setDistoLvl(level.toFixed(2));
	};

	const changeSynth = (e) => {
		const prev = props[synthType];
		console.log(prev);
		setSynthType(e.target.value);
		const current = props[e.target.value];
		console.log(current);

		// canceling a note just in case
		prev.triggerRelease();
		// switching the type
		prev.unsync();
		current.toDestination();
	};

	return (
		<div className='soundboard'>
			{console.log("I RERENDERED")}
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
				synth={props[synthType]}
				distortion={distortion}
				distoLvl={distoLvl}
				dist={props.dist}
			/>
		</div>
	);
};

export default SoundBoard;
