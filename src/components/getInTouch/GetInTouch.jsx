import React from 'react';
import './GetInTouch.css';
import { FaPaperPlane } from 'react-icons/fa';
const GetInTouch = () => {
	return (
		<section className='get-in-touch sub-section'>
			<div className='container flex-center'>
				<div className='contact-card'>
					<div className='title'>
						<h4>LET'S TALK</h4>
						<h3>ABOUT YOUR</h3>
						<h2>NEXT PROJECT</h2>
					</div>
					<a
						href='mailto:your-email@example.com'
						className='get-in-touch-link inner-info-link'
					>
						Contact me
						<FaPaperPlane />
					</a>
				</div>
			</div>
		</section>
	);
};

export default GetInTouch;
