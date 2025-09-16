import React from 'react';
import { education } from '../../data/education';

const Education = () => {
	return (
		<div className='education'>
			<h4 className='label'>Edukation</h4>
			<ul className='education-list'>
				{education.map((item, index) => (
					<li className='item' key={index}>
						<span className='year_'>{item.year}</span>
						<p>
							{item.degree} - {item.institution}
						</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Education;
