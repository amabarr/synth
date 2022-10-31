import React from "react";
import {
	Synth,
	MetalSynth,
	AMSynth,
	FMSynth,
	PluckSynth,
	Distortion,
	Reverb,
} from "tone";
import Footer from "./footer";
import SoundBoard from "./soundboard";

const Sound = () => {
	const synth = new Synth();
	const metalSynth = new MetalSynth();
	const amSynth = new AMSynth();
	const fmSynth = new FMSynth();
	const pluck = new PluckSynth();
	const dist = new Distortion(1);
	const reverb = new Reverb(2.0);

	return (
		<>
			<SoundBoard
				dist={dist}
				synth={synth}
				MetalSynth={metalSynth}
				AMSynth={amSynth}
				FMSynth={fmSynth}
				PluckSynth={pluck}
				reverb={reverb}
			/>
			<Footer />
		</>
	);
};

export default Sound;
