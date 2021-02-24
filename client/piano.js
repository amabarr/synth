import React from "react";
import Key from "./key";

const Piano = ({ play, stopNote, octaves }) => {
	return (
		<div>
			<ul
				id='piano'
				onMouseDown={() => play(event.target.dataset.note)}
				onMouseUp={() => stopNote()}
			>
				<Key note='C' octave={octaves[0]} keyColor='white' keyBinding='A' />
				<Key note='C#' octave={octaves[0]} keyColor='black' keyBinding='W' />
				<Key note='D' octave={octaves[0]} keyColor='white' keyBinding='S' />
				<Key note='D#' octave={octaves[0]} keyColor='black' keyBinding='E' />
				<Key note='E' octave={octaves[0]} keyColor='white' keyBinding='D' />
				<Key note='F' octave={octaves[0]} keyColor='white' keyBinding='F' />
				<Key note='F#' octave={octaves[0]} keyColor='black' keyBinding='T' />
				<Key note='G' octave={octaves[0]} keyColor='white' keyBinding='G' />
				<Key note='G#' octave={octaves[0]} keyColor='black' keyBinding='Y' />
				<Key note='A' octave={octaves[0]} keyColor='white' keyBinding='H' />
				<Key note='A#' octave={octaves[0]} keyColor='black' keyBinding='U' />
				<Key note='B' octave={octaves[0]} keyColor='white' keyBinding='J' />

				<Key note='C' octave={octaves[1]} keyColor='white' keyBinding='K' />
				<Key note='C#' octave={octaves[1]} keyColor='black' keyBinding='O' />
				<Key note='D' octave={octaves[1]} keyColor='white' keyBinding='L' />
				<Key note='D#' octave={octaves[1]} keyColor='black' keyBinding='P' />
				<Key note='E' octave={octaves[1]} keyColor='white' keyBinding=';' />
				<Key note='F' octave={octaves[1]} keyColor='white' keyBinding="'" />
				<Key
					note='F#'
					octave={octaves[1]}
					keyColor='black'
					keyBinding='enter'
				/>
				<Key note='G' octave={octaves[1]} keyColor='white' keyBinding='' />
				<Key note='G#' octave={octaves[1]} keyColor='black' keyBinding='' />
				<Key note='A' octave={octaves[1]} keyColor='white' keyBinding='' />
				<Key note='A#' octave={octaves[1]} keyColor='black' keyBinding='' />
				<Key note='B' octave={octaves[1]} keyColor='white' keyBinding='' />
			</ul>
		</div>
	);
};

export default Piano;
