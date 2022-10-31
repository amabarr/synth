import React from "react";
import Key from "./key";

const Piano = ({ play, stopNote, octaves }) => {
	return (
		<div>
			<ul
				id='piano'
				onMouseDown={(e) => play(e.target.dataset.note)}
				onMouseUp={() => stopNote()}
			>
				<Key note='C' octave={octaves[0]} keyColor='white' keyBinding='Q' />
				<Key note='C#' octave={octaves[0]} keyColor='black' keyBinding='2' />
				<Key note='D' octave={octaves[0]} keyColor='white' keyBinding='W' />
				<Key note='D#' octave={octaves[0]} keyColor='black' keyBinding='3' />
				<Key note='E' octave={octaves[0]} keyColor='white' keyBinding='E' />
				<Key note='F' octave={octaves[0]} keyColor='white' keyBinding='R' />
				<Key note='F#' octave={octaves[0]} keyColor='black' keyBinding='5' />
				<Key note='G' octave={octaves[0]} keyColor='white' keyBinding='T' />
				<Key note='G#' octave={octaves[0]} keyColor='black' keyBinding='6' />
				<Key note='A' octave={octaves[0]} keyColor='white' keyBinding='Y' />
				<Key note='A#' octave={octaves[0]} keyColor='black' keyBinding='7' />
				<Key note='B' octave={octaves[0]} keyColor='white' keyBinding='U' />

				<Key note='C' octave={octaves[1]} keyColor='white' keyBinding='I' />
				<Key note='C#' octave={octaves[1]} keyColor='black' keyBinding='9' />
				<Key note='D' octave={octaves[1]} keyColor='white' keyBinding='O' />
				<Key note='D#' octave={octaves[1]} keyColor='black' keyBinding='0' />
				<Key note='E' octave={octaves[1]} keyColor='white' keyBinding='P' />
				<Key note='F' octave={octaves[1]} keyColor='white' keyBinding='[' />
				<Key note='F#' octave={octaves[1]} keyColor='black' keyBinding='=' />
				<Key note='G' octave={octaves[1]} keyColor='white' keyBinding='Z' />
				<Key note='G#' octave={octaves[1]} keyColor='black' keyBinding='S' />
				<Key note='A' octave={octaves[1]} keyColor='white' keyBinding='X' />
				<Key note='A#' octave={octaves[1]} keyColor='black' keyBinding='D' />
				<Key note='B' octave={octaves[1]} keyColor='white' keyBinding='C' />
			</ul>
		</div>
	);
};

export default Piano;
