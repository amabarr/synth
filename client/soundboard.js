import React, { useState } from "react";
import Synth from "./synth";
import Controls from "./controls";

const SoundBoard = (props) => {
	const [synthType, setSynthType] = useState("synth");
	const [vol, setVol] = useState(0);
	const [octaves, setOctaves] = useState([3, 4]);
	const [distortion, setDistortion] = useState(false);
	const [distoLvl, setDistoLvl] = useState(0.0);
	const [reverb, setReverb] = useState(false);
	const [reverbLvl, setReverbLvl] = useState(0);

	const addDistortion = () => {
		setDistortion((current) => !current);
	};

	const addReverb = () => {
		setReverb((current) => !current);
	};

	const changeDisto = (level) => {
		setDistoLvl(level.toFixed(2));
	};

	const changeReverb = (level) => {
		setReverbLvl(level.toFixed(2));
	};

	const changeSynth = (e) => {
		const prev = props[synthType];
		setSynthType(e.target.value);
		const current = props[e.target.value];
		prev.triggerRelease();
		prev.unsync();
		current.toDestination();
	};

	const handleVol = (e) => {
		setVol(e.target.value);
	};

	const handleOctaves = (num) => {
		if ((octaves[0] > 0 && num < 0) || (octaves[1] < 8 && num > 0)) {
			const newOctaves = octaves.map((val) => val + num);
			setOctaves(newOctaves);
		}
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
				<div className='knob'>
					<input
						id='peak'
						type='range'
						min='-40'
						max='20'
						value={vol}
						onChange={handleVol}
					/>
					<label>Volume</label>
				</div>

				<Controls
					addDistortion={addDistortion}
					distortion={distortion}
					changeDisto={changeDisto}
					distoLvl={distoLvl}
					reverb={reverb}
					reverbLvl={reverbLvl}
					addReverb={addReverb}
					changeReverb={changeReverb}
					handleOctaves={handleOctaves}
				/>
			</div>

			<Synth
				synth={props[synthType]}
				distortion={distortion}
				distoLvl={distoLvl}
				dist={props.dist}
				vol={vol}
				reverb={reverb}
				reverberate={props.reverb}
				reverbLvl={reverbLvl}
				octaves={octaves}
			/>
		</div>
	);
};

export default SoundBoard;
