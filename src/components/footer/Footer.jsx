import React from 'react';
import './Footer.css';
import { followLinks, infoLinks } from '../../data/footerData';
import FooterLinkGroup from './FooterLinkGroup';

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className='footer'>
			<div className='containeer footer-wrapper'>
				<div className='about-group'>
					<h2>Roman</h2>
					<p>Frontend Developer</p>
					<a href='#about'>About Me</a>
				</div>
				<div className='hr'></div>
				<FooterLinkGroup
					title='More'
					links={infoLinks}
					isSocial={false}
				/>

				<div className='hr'></div>
				<FooterLinkGroup
					title='Follow'
					links={followLinks}
					isSocial={true}
				/>
			</div>
			<p className='footer-copiright'>
				© <span className='year'>{currentYear}</span> by Coding Snow.
				All rights reserved.
			</p>
		</footer>
	);
};

export default Footer;
