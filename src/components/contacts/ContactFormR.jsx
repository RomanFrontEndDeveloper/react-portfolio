import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa6';
import { motion } from 'motion/react';
import { slideInVariants } from '../../utils/animation';

export default function ContactFormR() {
	const [name, setName] = useState('');
	const [message, setMessage] = useState('');
	const [status, setStatus] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus('Відправляю...');

		const res = await fetch('/.netlify/functions/sendTelegram', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ name, message }),
		});

		if (res.ok) {
			setStatus('Повідомлення надіслано! ✔');
			setName('');
			setMessage('');
		} else {
			setStatus('Помилка! ❌');
		}
	};

	return (
		<form onSubmit={handleSubmit} className='form contact-form'>
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
					placeholder='Your Name'
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
				/>
			</motion.div>

			{/* MESSAGE */}
			<motion.div
				className='second-row'
				custom={2}
				variants={slideInVariants('top', 0.6, 150, true)}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: false, amount: 0.5 }}
			>
				<textarea
					placeholder='Your Message'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					required
				/>
			</motion.div>

			{/* BUTTON */}
			<motion.button
				className='contact-btn inner-info-link'
				type='submit'
				custom={3}
				variants={slideInVariants('top', 0.6, 150, true)}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: false, amount: 0.5 }}
			>
				Send To Telegram
				<FaPaperPlane />
			</motion.button>

			<p>{status}</p>
		</form>
	);
}
