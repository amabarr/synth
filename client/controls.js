import React from "react";
import { Knob, Pointer, Value, Arc } from "rc-knob";

const Controls = ({
	distortion,
	addDistortion,
	changeDisto,
	distoLvl,
	reverb,
	reverbLvl,
	addReverb,
	changeReverb,
	handleOctaves,
	octaves,
}) => {
	return (
		<div className='controls effects'>
			<div className='controls octaves'>
				<div>
					<button name='up' onClick={() => handleOctaves(1)} className='lit'>
						↑ Octave ↑
					</button>
					<button name='down' className='lit' onClick={() => handleOctaves(-1)}>
						↓ Octave ↓
					</button>
				</div>
				C {octaves[0]} - C {octaves[1]}
			</div>

			<div className='controls distortion'>
				<label> distortion</label>
				<button
					name='distortion'
					className={`lit ${distortion ? "pressed" : ""}`}
					onClick={() => addDistortion()}
				>
					ON/OFF
				</button>

				<Knob
					size={50}
					angleOffset={220}
					angleRange={280}
					min={0}
					max={1}
					className='styledKnob'
					value={distoLvl}
					onChange={(value) => changeDisto(value)}
				>
					<Arc arcWidth={4} background='grey' />
					<circle r='20' cx='25' cy='25' />
					<Pointer width={2} height={15} radius={5} type='rect' color='#fff' />
				</Knob>
			</div>

			<div className='controls reverb'>
				<label>reverb</label>
				<button
					name='reverb'
					className={`${reverb ? "pressed" : ""}`}
					onClick={() => addReverb()}
				>
					ON/OFF
				</button>

				<Knob
					size={50}
					angleOffset={220}
					angleRange={280}
					min={0}
					max={1}
					className='styledKnob'
					value={reverbLvl}
					onChange={(value) => changeReverb(value)}
				>
					<Arc arcWidth={4} background='grey' />
					<circle r='20' cx='25' cy='25' />
					<Pointer width={2} height={15} radius={5} type='rect' color='#fff' />
				</Knob>
			</div>
		</div>
	);
};

export default Controls;
