import React from "react";
import { Knob, Pointer, Value, Arc } from "rc-knob";

const Controls = (props) => {
	return (
		<div className='controls'>
			<div className='distortion'>
				<button
					className={`lit ${props.distortion ? "pressed" : ""}`}
					onClick={() => props.addDistortion()}
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
					defaultValue={props.distoLvl}
					onChange={(value) => props.changeDisto(value)}
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
