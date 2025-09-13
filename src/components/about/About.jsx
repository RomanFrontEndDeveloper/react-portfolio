import React from 'react';
import './About.css';
import { aboutImg } from '../../assets/images';
const About = () => {
	return (
		<div>
			<h1>About</h1>
			<img src={aboutImg} alt='about img' />
		</div>
	);
};

export default About;
