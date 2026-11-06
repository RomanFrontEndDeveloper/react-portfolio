import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa6';
import { motion as Motion } from 'motion/react';
import { slideInVariants } from '../../utils/animation';

export default function ContactFormR() {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Відправляю...');

        try {
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
        } catch (error) {
            console.error('Telegram request failed:', error);
            setStatus('Не вдалося надіслати повідомлення. ❌');
        }
    };

    return (
        <form onSubmit={handleSubmit} className='form contact-form'>
            {/* NAME */}
            <Motion.div
                className='first-row'
                custom={1}
                variants={slideInVariants('top', 0.6, 150, true)}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: false, amount: 0.5 }}
            >
                <input
                    type='text'
                    placeholder='Your phone numb Telegram'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </Motion.div>

            {/* MESSAGE */}
            <Motion.div
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
            </Motion.div>

            {/* BUTTON */}
            <Motion.button
                className='contact-btn topA inner-info-link'
                type='submit'
                custom={3}
                variants={slideInVariants('top', 0.6, 150, true)}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: false, amount: 0.5 }}
            >
                Send To Telegram
                <FaPaperPlane />
            </Motion.button>

            <p>{status}</p>
        </form>
    );
}