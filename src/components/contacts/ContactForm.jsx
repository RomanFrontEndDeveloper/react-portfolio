import React from 'react';
import { FaPaperPlane } from 'react-icons/fa6';
import { motion } from 'motion/react';
import { slideInVariants } from '../../utils/animation';

const ContactForm = () => {
	return (
		<form action='' className='form contact-form'>
			<motion.div
				className='first-row'
				custom={1}
				variants={slideInVariants('top', 0.6, 150, true)}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: false, amount: 0.5 }}
			>
				<input type='text' placeholder='Name' type='text' />
			</motion.div>
			<motion.div
				className='second-row'
				custom={2}
				variants={slideInVariants('top', 0.6, 150, true)}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: false, amount: 0.5 }}
			>
				<input type='text' placeholder='Email' type='email' />
				<input type='text' placeholder='Subject' type='text' />
			</motion.div>
			<motion.div
				className='third-row'
				custom={3}
				variants={slideInVariants('top', 0.6, 150, true)}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: false, amount: 0.5 }}
			>
				<textarea placeholder='Message'></textarea>
			</motion.div>
			<motion.button
				className='contact-btn inner-info-link'
				type='submit'
				custom={4}
				variants={slideInVariants('top', 0.6, 150, true)}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: false, amount: 0.5 }}
			>
				Send Message
				<FaPaperPlane />
			</motion.button>
		</form>
	);
};

export default ContactForm;
