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
}) => {
	return (
		<div className='controls'>
			<div className='controls distortion'>
				<button
					name='distortion'
					className={`lit ${distortion ? "pressed" : ""}`}
					onClick={() => addDistortion()}
				>
					DISTORT!
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
				<button
					name='reverb'
					className={`${reverb ? "pressed" : ""}`}
					onClick={() => addReverb()}
				>
					REVERB
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
				<label>reverb</label>
			</div>
		</div>
	);
};

export default Controls;
