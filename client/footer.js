import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
	return (
		<div className='footer'>
			<a href='https://www.linkedin.com/in/amanda-barrafato/'>
				<FontAwesomeIcon icon={faLinkedin} />
			</a>
			<a href='https://github.com/amabarr/synth'>
				<FontAwesomeIcon icon={faGithub} />
			</a>
		</div>
	);
};

export default Footer;
