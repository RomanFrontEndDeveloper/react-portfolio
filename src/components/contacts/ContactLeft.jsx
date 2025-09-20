import React from 'react';
import { contactData } from '../../data/contactData';
import { motion } from 'motion/react';
import { slideInVariants } from '../../utils/animation';

const ContactLeft = () => {
	return (
		<div className='contact-left'>
			<motion.h2
				custom={2}
				variants={slideInVariants('top', 0.6, 100, false)}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: false, amount: 0.5 }}
			>
				Let's discuss your project
			</motion.h2>
			<ul>
				{contactData.map((item, index) => (
					<motion.li
						key={item.id}
						className='contact-list'
						custom={index}
						variants={slideInVariants('right', 0.6, 150, false)}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: false, amount: 0.5 }}
					>
						<h3>
							<item.icon /> {item.title}
						</h3>
						<span>
							<a href={item.link}>{item.value}</a>
						</span>
					</motion.li>
				))}
			</ul>
		</div>
	);
};

export default ContactLeft;
