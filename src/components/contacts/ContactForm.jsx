import React, { useRef } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { motion } from 'motion/react';
import emailjs from '@emailjs/browser';
import { slideInVariants } from '../../utils/animation';

const ContactForm = () => {
	const formRef = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_5umiptu', // 👉 встав свій
				'template_xix03ke', // 👉 встав свій
				formRef.current,
				'71CaK_Zqv-dc9YUlA' // 👉 встав свій
			)
			.then(
				() => {
					alert('Message sent successfully!');
					formRef.current.reset();
				},
				(error) => {
					alert('Failed to send. Try again later.');
				}
			);
	};

	return (
		<form ref={formRef} onSubmit={sendEmail} className='form contact-form'>
			{/* NAME */}
			<motion.div
				className='first-row'
				custom={1}
				variants={slideInVariants('top', 0.6, 150, true)}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: false, amount: 0.5 }}
			>
				<input
					type='text'
					name='name'
					placeholder='Your Name'
					required
				/>
			</motion.div>

			{/* EMAIL + SUBJECT */}
			<motion.div
				className='second-row'
				custom={2}
				variants={slideInVariants('top', 0.6, 150, true)}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: false, amount: 0.5 }}
			>
				{/* <input type='email' name='email' placeholder='Email' required /> */}
				<input
					type='email'
					name='email'
					placeholder='Your Email'
					required
				/>
			</motion.div>

			{/* MESSAGE */}
			<motion.div
				className='third-row'
				custom={3}
				variants={slideInVariants('top', 0.6, 150, true)}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: false, amount: 0.5 }}
			>
				<textarea
					name='message'
					placeholder='Message'
					required
				></textarea>
			</motion.div>

			{/* BUTTON */}
			<motion.button
				className='contact-btn inner-info-link'
				type='submit'
				custom={4}
				variants={slideInVariants('top', 0.6, 150, true)}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: false, amount: 0.5 }}
			>
				Send to Email
				<MdOutlineEmail />
			</motion.button>
		</form>
	);
};

export default ContactForm;
