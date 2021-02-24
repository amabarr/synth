import React from "react";

const Key = ({ note, octave, keyColor, keyBinding }) => {
	return (
		<li data-note={`${note}${octave}`} className={`${keyColor}-key ${note}`}>
			{keyBinding}
		</li>
	);
};

export default Key;
