import React from "react";
import * as Tone from "tone";
import SoundBoard from "./soundboard";

const Sound = () => {
	const synth = new Tone.Synth();
	const MetalSynth = new Tone.MetalSynth();
	const AMSynth = new Tone.AMSynth();
	const FMSynth = new Tone.FMSynth();
	const pluck = new Tone.PluckSynth();
	const dist = new Tone.Distortion(1);

	return (
		<SoundBoard
			dist={dist}
			synth={synth}
			MetalSynth={MetalSynth}
			AMSynth={AMSynth}
			FMSynth={FMSynth}
			PluckSynth={pluck}
		/>
	);
};

export default Sound;
