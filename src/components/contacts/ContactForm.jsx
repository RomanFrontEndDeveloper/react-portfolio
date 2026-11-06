import React, { useRef } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { motion as Motion } from 'motion/react';
import emailjs from '@emailjs/browser';
import { slideInVariants } from '../../utils/animation';

const ContactForm = () => {
    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_5umiptu',
                'template_xix03ke',
                formRef.current,
                '71CaK_Zqv-dc9YUlA'
            )
            .then(() => {
                alert('Message sent successfully!');
                formRef.current.reset();
            })
            .catch((error) => {
                console.error('EmailJS error:', error);
                alert('Failed to send. Try again later.');
            });
    };

    return (
        <form
            ref={formRef}
            onSubmit={sendEmail}
            className='form contact-form'
        >
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
                    name='name'
                    placeholder='Your Name'
                    required
                />
            </Motion.div>

            {/* EMAIL */}
            <Motion.div
                className='second-row'
                custom={2}
                variants={slideInVariants('top', 0.6, 150, true)}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: false, amount: 0.5 }}
            >
                <input
                    type='email'
                    name='email'
                    placeholder='Your Email'
                    required
                />
            </Motion.div>

            {/* MESSAGE */}
            <Motion.div
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
            </Motion.div>

            {/* BUTTON */}
            <Motion.button
                className='contact-btn topA inner-info-link'
                type='submit'
                custom={4}
                variants={slideInVariants('top', 0.6, 150, true)}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: false, amount: 0.5 }}
            >
                Send to Email
                <MdOutlineEmail />
            </Motion.button>
        </form>
    );
};

export default ContactForm;